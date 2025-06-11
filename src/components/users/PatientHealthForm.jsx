import React from "react";
import { Input } from "@/components/ui/input";
import { Heart, Droplets, Upload } from "lucide-react";

const PatientHealthForm = ({ formData, handleChange }) => {
    // Menangani perubahan input untuk checkbox dan radio awalnya Tidak
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        const boolValue = value === "true";
        handleChange({
            target: {
                id: name,
                type: "checkbox",
                checked: boolValue
            }
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold text-lg text-primary">Data Kesehatan Pasien</h2>
            </div>

            <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="umur" className="block text-sm font-medium text-gray-700">Umur</label>
                        <Input
                            id="umur"
                            type="number"
                            placeholder="Masukkan umur"
                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors "
                            value={formData.umur}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="berat_badan" className="block text-sm font-medium text-gray-700">Berat Badan</label>

                        <Input
                            id="berat_badan"
                            type="number"
                            placeholder="Berat badan"
                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                            value={formData.berat_badan}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="space-y-2">
                        <label htmlFor="tinggi_badan" className="block text-sm font-medium text-gray-700">Tinggi Badan</label>

                        <Input
                            id="tinggi_badan"
                            type="number"
                            placeholder="Tinggi badan"
                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                            value={formData.tinggi_badan}
                            onChange={handleChange}
                            required
                        />

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Hipertensi</label>
                        <div className="flex items-center space-x-4 mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="hipertensi"
                                    value="true"
                                    checked={formData.hipertensi === true}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Ya</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="hipertensi"
                                    value="false"
                                    checked={formData.hipertensi === false}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Tidak</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Penyakit Jantung</label>
                        <div className="flex items-center space-x-4 mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="penyakit_jantung"
                                    value="true"
                                    checked={formData.penyakit_jantung === true}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Ya</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="penyakit_jantung"
                                    value="false"
                                    checked={formData.penyakit_jantung === false}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Tidak</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Riwayat Stroke</label>
                        <div className="flex items-center space-x-4 mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="stroke"
                                    value="true"
                                    checked={formData.stroke === true}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Ya</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="stroke"
                                    value="false"
                                    checked={formData.stroke === false}
                                    onChange={handleRadioChange}
                                    className="rounded-full border-gray-300 text-primary focus:ring-primary"
                                />
                                <span className="ml-2 text-sm text-gray-700">Tidak</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="glukosa" className="block text-sm font-medium text-gray-700">Kadar Glukosa</label>

                        <Input
                            id="glukosa"
                            type="number"
                            placeholder="Masukkan nilai glukosa"
                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                            value={formData.glukosa}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2 mb-2">
                    <label htmlFor="merokok" className="block text-sm font-medium text-gray-700">Status Merokok</label>
                    <select
                        id="merokok"
                        className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:bg-white transition-colors text-[14px]"
                        value={formData.merokok}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Pilih status</option>
                        <option value="Tidak Pernah Merokok">Tidak Pernah Merokok</option>
                        <option value="Dulu Merokok">Dulu Merokok</option>
                        <option value="Merokok">Merokok</option>
                        <option value="Tidak Diketahui">Tidak Diketahui</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="gambar_MRI" className="block text-sm font-medium text-gray-700">Gambar MRI</label>
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-all"
                    onClick={() => document.getElementById('gambar_MRI').click()}
                >
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="font-medium text-gray-700">Klik untuk unggah gambar MRI</p>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG, atau GIF (maks. 10MB)</p>
                    <Input id="gambar_MRI" type="file" accept="image/*" className="hidden" onChange={handleChange} />
                    {formData.gambar_MRI && <p className="text-xs text-primary mt-3 font-medium">{formData.gambar_MRI.name}</p>}
                </div>
            </div>
        </div>
    );
};

export default PatientHealthForm;
