"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Image as ImageIcon, FileImage, FileText, Upload } from "lucide-react";

export default function Prediksi({ collapsed }) {
    // State for form input values
    const [formData, setFormData] = useState({
        nama: "",
        tanggalLahir: "",
        alamat: "",
        jenisKelamin: "",
        tanggalPeriksa: "",
        foto: null
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [activeTab, setActiveTab] = useState("imagePreview");
    const [predictionResult, setPredictionResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { id, name, value, files, type } = e.target;

        if (type === "file" && files.length > 0) {
            setFormData({
                ...formData,
                [id]: files[0]
            });

            // Create image preview
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({
                ...formData,
                [id || name]: value
            });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setPredictionResult({
                disease: "Diabetes Mellitus Type 2",
                confidence: 87.5,
                riskLevel: "High",
                recommendations: [
                    "Routine blood sugar monitoring",
                    "Dietary modifications",
                    "Regular exercise",
                    "Follow-up appointment in 1 month"
                ]
            });
            setIsLoading(false);

            setActiveTab("results");
        }, 2000);
    };

    return (
        <>
            <div className={`container p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <h1 className="font-bold text-2xl mb-6">Prediksi Penyakit</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Section A: Data Diri Pasien */}
                    <div className="">
                        <h2 className="font-medium text-lg mb-4 text-primary border-b pb-2">A. Data Diri Pasien</h2>

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium mb-1">Nama Pasien</label>
                                    <Input id="nama" placeholder="Masukkan nama pasien" className="border-gray-300" value={formData.nama} onChange={handleChange} required />
                                </div>

                                <div>
                                    <label htmlFor="tanggalLahir" className="block text-sm font-medium mb-1">Tanggal Lahir</label>
                                    <div className="relative">
                                        <Input id="tanggalLahir" type="date" className="border-gray-300 pr-10" value={formData.tanggalLahir} onChange={handleChange} required />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <Calendar size={18} className="text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="alamat" className="block text-sm font-medium mb-1">Alamat</label>
                                <Input id="alamat" placeholder="Masukkan alamat pasien" className="border-gray-300" value={formData.alamat} onChange={handleChange} required />
                            </div>

                            <div>
                                <label htmlFor="jenisKelamin" className="block text-sm font-medium mb-1">Jenis Kelamin</label>
                                <select id="jenisKelamin" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" value={formData.jenisKelamin} onChange={handleChange} required>
                                    <option value="">Pilih</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="tanggalPeriksa" className="block text-sm font-medium mb-1">Tanggal Periksa</label>
                                <div className="relative">
                                    <Input id="tanggalPeriksa" type="date" className="border-gray-300 pr-10" value={formData.tanggalPeriksa} onChange={handleChange} required />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <Calendar size={18} className="text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="foto" className="block text-sm font-medium mb-1">Foto Pasien</label>
                                <div className="border border-gray-300 rounded-md p-3 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => document.getElementById('foto').click()}>
                                    <Upload size={24} className="mx-auto text-gray-500" />
                                    <p className="text-sm text-gray-500 mt-1">Klik untuk unggah foto</p>
                                    <Input id="foto" type="file" accept="image/*" className="hidden" onChange={handleChange} />
                                    {formData.foto && <p className="text-xs text-gray-500 mt-1 truncate max-w-xs mx-auto">{formData.foto.name}</p>}
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2" disabled={isLoading}>
                                {isLoading ? "Memproses..." : "Prediksi Sekarang"}
                            </Button>
                        </div>
                    </div>

                    {/* Section B: Hasil Prediksi with Tabs */}
                    <div className="">
                        <h2 className="font-medium text-lg mb-4 text-primary border-b pb-2">B. Hasil Prediksi</h2>

                        {/* Tab navigation */}
                        <div className="flex border-b mb-4 bg-primary w-full">
                            <button
                                type="button"
                                className={`py-2 px-4 font-medium flex-1 flex items-center justify-center gap-2 ${activeTab === 'imagePreview'
                                    ? 'text-white border-b-2 border-primary'
                                    : 'text-primary'}`}
                                onClick={() => setActiveTab('imagePreview')}
                            >
                                <FileImage size={18} />
                                Preview Gambar
                            </button>
                            <button
                                type="button"
                                className={`py-2 px-4 font-medium flex-1 flex items-center justify-center gap-2 ${activeTab === 'results'
                                    ? 'text-white border-b-2 border-primary'
                                    : ' text-primary'}`}
                                onClick={() => setActiveTab('results')}
                            >
                                <FileText size={18} />
                                Hasil Prediksi
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className="h-[400px] overflow-auto">
                            {/* Image Preview Tab */}
                            {activeTab === 'imagePreview' && (
                                <div className="flex flex-col items-center justify-center h-full">
                                    {imagePreview ? (
                                        <div className="w-full">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="max-h-[350px] object-contain mx-auto border rounded-lg shadow-sm"
                                            />
                                            <p className="text-center text-sm text-gray-500 mt-2">
                                                {formData.foto?.name || "Gambar yang di-upload"}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500">
                                            <FileImage size={64} className="mx-auto mb-4 opacity-30" />
                                            <p>Silahkan unggah foto pasien untuk ditampilkan di sini</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Results Tab */}
                            {activeTab === 'results' && (
                                <div className="h-full flex flex-col items-center justify-center">
                                    {isLoading ? (
                                        <div className="text-center">
                                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-r-transparent mx-auto mb-4"></div>
                                            <p className="text-gray-600">Sedang memproses prediksi...</p>
                                        </div>
                                    ) : predictionResult ? (
                                        <div className="w-full space-y-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-500">Diagnosis</h3>
                                                        <p className="font-bold text-lg">{predictionResult.disease}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm font-medium text-gray-500">Tingkat Kepercayaan</h3>
                                                        <p className="font-bold text-lg">{predictionResult.confidence}%</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <h3 className="text-sm font-medium text-gray-500">Tingkat Risiko</h3>
                                                    <div className={`inline-block px-3 py-1 rounded-full text-white font-medium mt-1 ${predictionResult.riskLevel === "High"
                                                        ? "bg-red-500"
                                                        : predictionResult.riskLevel === "Medium"
                                                            ? "bg-yellow-500"
                                                            : "bg-green-500"
                                                        }`}>
                                                        {predictionResult.riskLevel === "High"
                                                            ? "Tinggi"
                                                            : predictionResult.riskLevel === "Medium"
                                                                ? "Sedang"
                                                                : "Rendah"
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-medium text-primary mb-2">Rekomendasi</h3>
                                                <ul className="list-disc pl-5 space-y-1">
                                                    {predictionResult.recommendations.map((rec, idx) => (
                                                        <li key={idx} className="text-gray-700">{rec}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800 border border-blue-100">
                                                <p className="font-medium">Catatan:</p>
                                                <p>Hasil prediksi ini bersifat indikatif dan bukan diagnosis final. Konsultasikan dengan dokter untuk evaluasi lebih lanjut.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500">
                                            <FileText size={64} className="mx-auto mb-4 opacity-30" />
                                            <p>Hasil prediksi akan ditampilkan di sini</p>
                                            <p className="text-sm mt-2">Isi data pasien dan klik "Prediksi Sekarang"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}