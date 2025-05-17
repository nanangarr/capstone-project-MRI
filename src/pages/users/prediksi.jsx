"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Image as ImageIcon, Upload, User, MapPin, Heart, Droplets, Activity, ChevronRight } from "lucide-react";
import { Textarea } from "flowbite-react";
import PredictionResults from "@/components/users/PredictionResults";

export default function Prediksi({ collapsed }) {
    // State for form input values
    const [formData, setFormData] = useState({
        nama: "",
        tanggalLahir: "",
        alamat: "",
        jenisKelamin: "",
        tanggalPeriksa: "",
        umur: "",
        hipertensi: "",
        diabetes: "",
        kolesterol: "",
        detakJantung: "",
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
            <div className={`transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'} p-6 bg-gray-50`}>
                <h1 className="font-bold text-3xl mb-2 text-primary">Prediksi Penyakit</h1>
                <p className="text-gray-600 mb-8">Masukkan data pasien untuk mendapatkan hasil prediksi penyakit</p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-8">
                        {/* Section A: Data Diri Pasien */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <User className="h-5 w-5 text-primary" />
                                </div>
                                <h2 className="font-semibold text-lg text-primary">Data Diri Pasien</h2>
                            </div>

                            <div className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Pasien</label>
                                        <Input
                                            id="nama"
                                            placeholder="Masukkan nama lengkap"
                                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                        <div className="relative">
                                            <Input
                                                id="tanggalLahir"
                                                type="date"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pr-10"
                                                value={formData.tanggalLahir}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
                                        <div className="relative">
                                            <Textarea
                                                id="alamat"
                                                placeholder="Masukkan alamat lengkap"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors min-h-[80px] w-full pl-9"
                                                value={formData.alamat}
                                                onChange={handleChange}
                                                required
                                                autocomplete="street-address"
                                            />
                                            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div
                                                className={`p-3 border rounded-lg flex items-center justify-center cursor-pointer transition-all ${formData.jenisKelamin === "Laki-laki"
                                                    ? "bg-primary/10 border-primary text-primary font-medium"
                                                    : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                                                    }`}
                                                onClick={() => setFormData({ ...formData, jenisKelamin: "Laki-laki" })}
                                            >
                                                Laki-laki
                                            </div>
                                            <div
                                                className={`p-3 border rounded-lg flex items-center justify-center cursor-pointer transition-all ${formData.jenisKelamin === "Perempuan"
                                                    ? "bg-primary/10 border-primary text-primary font-medium"
                                                    : "bg-gray-50 border-gray-300 hover:bg-gray-100"
                                                    }`}
                                                onClick={() => setFormData({ ...formData, jenisKelamin: "Perempuan" })}
                                            >
                                                Perempuan
                                            </div>
                                        </div>
                                        <input
                                            type="hidden"
                                            id="jenisKelamin"
                                            value={formData.jenisKelamin}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section B: Data Penyakit Pasien */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <Heart className="h-5 w-5 text-primary" />
                                </div>
                                <h2 className="font-semibold text-lg text-primary">Data Kesehatan Pasien</h2>
                            </div>

                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="tanggalPeriksa" className="block text-sm font-medium text-gray-700">Tanggal Periksa</label>
                                    <div className="relative">
                                        <Input
                                            id="tanggalPeriksa"
                                            type="date"
                                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pr-10"
                                            value={formData.tanggalPeriksa}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="umur" className="block text-sm font-medium text-gray-700">Umur</label>
                                        <div className="relative">
                                            <Input
                                                id="umur"
                                                type="number"
                                                placeholder="Masukkan umur"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pl-10"
                                                value={formData.umur}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center text-gray-500 border-r border-gray-300">
                                                <span className="text-xs font-medium">Thn</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="detakJantung" className="block text-sm font-medium text-gray-700">Detak Jantung</label>
                                        <div className="relative">
                                            <Input
                                                id="detakJantung"
                                                type="number"
                                                placeholder="Masukkan detak jantung"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pl-10"
                                                value={formData.detakJantung}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Activity className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <span className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center text-gray-500 border-l border-gray-300">
                                                <span className="text-xs font-medium">BPM</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="diabetes" className="block text-sm font-medium text-gray-700">Diabetes</label>
                                        <div className="relative">
                                            <Input
                                                id="diabetes"
                                                placeholder="Masukkan nilai diabetes"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pl-10"
                                                value={formData.diabetes}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Droplets className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="kolesterol" className="block text-sm font-medium text-gray-700">Kolesterol</label>
                                        <div className="relative">
                                            <Input
                                                id="kolesterol"
                                                placeholder="Masukkan nilai kolesterol"
                                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                                                value={formData.kolesterol}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Foto Penyakit</label>
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-all"
                                        onClick={() => document.getElementById('foto').click()}
                                    >
                                        <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                                        <p className="font-medium text-gray-700">Klik untuk unggah foto</p>
                                        <p className="text-xs text-gray-500 mt-1">JPG, PNG, atau GIF (maks. 10MB)</p>
                                        <Input id="foto" type="file" accept="image/*" className="hidden" onChange={handleChange} />
                                        {formData.foto && <p className="text-xs text-primary mt-3 font-medium">{formData.foto.name}</p>}
                                    </div>
                                </div>

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
                        </div>
                    </div>

                    {/* Section C: Hasil Prediksi with Tabs - Now using the PredictionResults component */}
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