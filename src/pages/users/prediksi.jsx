"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PredictionResults from "@/components/users/PredictionResults";
import PatientPersonalForm from "@/components/users/PatientPersonalForm";
import PatientHealthForm from "@/components/users/PatientHealthForm";
import { submitPrediction } from "@/services/predictionService";
import { toast } from "react-hot-toast";

export default function Prediksi({ collapsed }) {
    // Status untuk nilai input formulir - diperbarui agar sesuai dengan skema basis data
    const [formData, setFormData] = useState({
        nama: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        no_hp: "",
        jenis_kelamin: "",
        berat_badan: "",
        tinggi_badan: "",
        umur: "",
        hipertensi: false,
        penyakit_jantung: false,
        status_nikah: "",
        pekerjaan: "",
        tempat_tinggal: "",
        glukosa: "",
        merokok: "",
        stroke: false,
        gambar_MRI: null
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [activeTab, setActiveTab] = useState("imagePreview");
    const [predictionResult, setPredictionResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const handleChange = (e) => {
        const { id, name, value, files, type, checked } = e.target;

        if (type === "file" && files.length > 0) {
            setFormData({
                ...formData,
                [id]: files[0]
            });

            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(files[0]);
        } else if (type === "checkbox") {
            setFormData({
                ...formData,
                [id || name]: checked
            });
        } else {
            setFormData({
                ...formData,
                [id || name]: value
            });
        }
    };

    // Validasi data formulir sebelum pengiriman
    const validateForm = () => {
        const requiredFields = [
            'nama', 'tempat_lahir', 'tanggal_lahir', 'no_hp',
            'jenis_kelamin', 'berat_badan', 'tinggi_badan', 'umur',
            'status_nikah', 'pekerjaan', 'tempat_tinggal', 'glukosa', 'merokok'
        ];

        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            const fieldNames = missingFields.map(field =>
                field.replace('_', ' ')).join(', ');
            toast.error(`Mohon lengkapi data berikut: ${fieldNames}`);
            return false;
        }

        if (!formData.gambar_MRI) {
            toast.error("Mohon unggah gambar MRI pasien");
            return false;
        }

        return true;
    };

    // Mengatasi pengiriman formulir
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setApiError(null);

        try {
            // Log data yang akan dikirim untuk debugging
            console.log("Submitting prediction with form data:", {
                ...formData,
                gambar_MRI: formData.gambar_MRI ? formData.gambar_MRI.name : null
            });

            const response = await submitPrediction(formData);

            if (response.success && !response.warning) {
                console.log("Prediction successful:", response);
                const { patient, examination, prediction } = response.data;

                // Set hasil prediksi ke state
                setPredictionResult({
                    patientId: patient.id,
                    examinationId: examination.id,
                    disease: examination.kategori,
                    confidence: prediction.confidence.replace('%', ''),
                    riskLevel: getRiskLevel(prediction.confidence),
                    description: examination.deskripsi,
                    recommendations: examination.solusi.split("\n").map(item =>
                        item.trim().startsWith("1.") || item.trim().startsWith("2.") ?
                            item.trim().substring(3) : item.trim()
                    )
                });

                setActiveTab("results");
                toast.success("Prediksi berhasil dilakukan!");
            } else if (response.warning) {
                // Handle warning about invalid MRI image
                setApiError(response.message || "Gambar MRI tidak valid atau tidak memenuhi ketentuan model");
                toast.error(response.message || "Gambar MRI tidak valid atau tidak memenuhi ketentuan model");
                console.warn("MRI validation warning:", response);
            } else {
                setApiError("Terjadi kesalahan saat memproses prediksi.");
                toast.error("Prediksi gagal dilakukan.");
            }
        } catch (error) {
            console.error("Error during prediction:", error);
            const errorMessage = error.message || "Terjadi kesalahan saat memproses prediksi.";
            setApiError(errorMessage);
            toast.error("Prediksi gagal: " + errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Fungsi untuk menentukan tingkat risiko berdasarkan nilai kepercayaan
    const getRiskLevel = (confidence) => {
        let confidenceValue;
        if (typeof confidence === 'string') {
            confidenceValue = parseFloat(confidence.replace('%', ''));
        } else {
            confidenceValue = parseFloat(confidence);
        }

        if (confidenceValue >= 75) return "High";
        if (confidenceValue >= 50) return "Medium";
        return "Low";
    };

    return (
        <>
            <div className={`transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'} p-6 bg-gray-50`}>
                <h1 className="font-bold text-3xl mb-2 text-primary">Prediksi Penyakit</h1>
                <p className="text-gray-600 mb-8">Masukkan data pasien untuk mendapatkan hasil prediksi penyakit</p>

                {apiError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                        <p className="font-medium">Error: {apiError}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                        {/* Section A: Data Diri Pasien - now using modular component */}
                        <PatientPersonalForm formData={formData} handleChange={handleChange} />

                        {/* Section B: Data Kesehatan Pasien - now using modular component */}
                        <PatientHealthForm
                            formData={formData}
                            handleChange={handleChange}
                            setFormData={setFormData}
                            imagePreview={imagePreview}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 mt-4 rounded-lg flex items-center justify-center gap-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                                    <span>Memproses...</span>
                                </>
                            ) : (
                                <>
                                    <span>Prediksi Sekarang</span>
                                    <ChevronRight className="h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Section C: Hasil Prediksi with Tabs */}
                    <PredictionResults
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        imagePreview={imagePreview}
                        formData={formData}
                        isLoading={isLoading}
                        predictionResult={predictionResult}
                    />
                </form>
            </div>
        </>
    );
}