import React from "react";
import { FileImage, FileText, Check, Clipboard, AlertCircle } from "lucide-react";

export default function PredictionResults({
    activeTab,
    setActiveTab,
    imagePreview,
    formData,
    isLoading,
    predictionResult
}) {
    // Mengubah string persentase menjadi angka
    const formatConfidence = (confidence) => {
        if (typeof confidence === 'string') {
            return confidence.replace('%', '');
        }
        return confidence;
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
            {/* Tab Konten */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    className={`pb-3 px-4 -mb-px font-medium text-sm flex items-center gap-2 ${activeTab === "imagePreview"
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveTab("imagePreview")}
                >
                    <FileImage className="h-4 w-4" />
                    <span>Gambar</span>
                </button>
                <button
                    className={`pb-3 px-4 -mb-px font-medium text-sm flex items-center gap-2 ${activeTab === "results"
                        ? "border-b-2 border-primary text-primary"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    onClick={() => setActiveTab("results")}
                >
                    <FileText className="h-4 w-4" />
                    <span>Hasil Prediksi</span>
                </button>
            </div>

            {/* Tab Konten */}
            <div className="h-[calc(100%-3rem)]">
                {/* Menampilkan gambar */}
                {activeTab === "imagePreview" && (
                    <div className="h-full flex flex-col">
                        <div className="text-center mb-4">
                            <h3 className="font-medium text-gray-700">Gambar MRI</h3>
                            <p className="text-sm text-gray-500">Gambar yang diunggah akan ditampilkan di sini</p>
                        </div>

                        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="max-w-full max-h-full object-contain"
                                />
                            ) : (
                                <div className="text-center p-6">
                                    <FileImage className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                                    <p className="text-gray-500">Belum ada gambar yang diunggah</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-500">
                                Pastikan gambar terlihat jelas untuk hasil prediksi yang lebih akurat
                            </p>
                        </div>
                    </div>
                )}

                {/* Tab Hasil */}
                {activeTab === "results" && (
                    <div className="h-full flex flex-col">
                        {isLoading ? (
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
                                <h3 className="font-medium text-gray-700">Memproses Data</h3>
                                <p className="text-sm text-gray-500 mt-2">Mohon tunggu, sedang melakukan prediksi...</p>
                            </div>
                        ) : predictionResult ? (
                            <div className="flex-1 flex flex-col">
                                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-green-100 p-1.5 rounded-full">
                                            <Check className="h-4 w-4 text-green-600" />
                                        </div>
                                        <h3 className="font-semibold text-green-800">Prediksi Berhasil</h3>
                                    </div>
                                    <p className="text-sm text-green-700 pl-9">
                                        Hasil prediksi telah berhasil dibuat berdasarkan data yang dimasukkan
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Hasil Diagnosis</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500 mb-1">Kategori Terdeteksi</p>
                                            <p className="font-semibold text-primary">{predictionResult.disease}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-500 mb-1">Tingkat Keyakinan</p>
                                            <p className="font-semibold text-primary">{formatConfidence(predictionResult.confidence)}%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-800 mb-3">Tingkat Risiko</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="font-medium">Level: <span className={`${predictionResult.riskLevel === "High" ? "text-red-500" :
                                                predictionResult.riskLevel === "Medium" ? "text-yellow-500" :
                                                    "text-green-500"
                                                }`}>{predictionResult.riskLevel}</span></p>
                                            <AlertCircle className={`h-5 w-5 ${predictionResult.riskLevel === "High" ? "text-red-500" :
                                                predictionResult.riskLevel === "Medium" ? "text-yellow-500" :
                                                    "text-green-500"
                                                }`} />
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className={`h-2.5 rounded-full ${predictionResult.riskLevel === "High" ? "bg-red-500" :
                                                    predictionResult.riskLevel === "Medium" ? "bg-yellow-500" :
                                                        "bg-green-500"
                                                    }`}
                                                style={{ width: `${formatConfidence(predictionResult.confidence)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {predictionResult.description && (
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-800 mb-3">Deskripsi</h3>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-gray-700">{predictionResult.description}</p>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Rekomendasi</h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="space-y-2">
                                            {predictionResult.recommendations.map((rec, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <Clipboard className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{rec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6">
                                    <button
                                        type="button"
                                        className="w-full bg-primary/10 text-primary font-medium py-2.5 rounded-lg"
                                        onClick={() => window.print()}
                                    >
                                        Cetak Hasil Prediksi
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center">
                                <FileText className="h-12 w-12 text-gray-300 mb-4" />
                                <h3 className="font-medium text-gray-700">Belum Ada Hasil</h3>
                                <p className="text-sm text-gray-500 mt-2 max-w-md">
                                    Silakan lengkapi data pasien dan klik tombol "Prediksi Sekarang" untuk mendapatkan hasil prediksi
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}