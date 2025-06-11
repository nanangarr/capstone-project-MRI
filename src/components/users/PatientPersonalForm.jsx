import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "flowbite-react";
import { User, MapPin, Phone, Briefcase } from "lucide-react";
import { Calendar } from "lucide-react";

const PatientPersonalForm = ({ formData, handleChange }) => {
    return (
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
                        <label htmlFor="no_hp" className="block text-sm font-medium text-gray-700">No. HP</label>
                        <div className="relative">
                            <Input
                                id="no_hp"
                                type="tel"
                                placeholder="Masukkan nomor HP"
                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pl-10"
                                value={formData.no_hp}
                                onChange={handleChange}
                                required
                            />
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="tempat_lahir" className="block text-sm font-medium text-gray-700">Tempat Lahir</label>
                        <Input
                            id="tempat_lahir"
                            placeholder="Masukkan tempat lahir"
                            className="border-gray-300 bg-gray-50 focus:bg-white transition-colors"
                            value={formData.tempat_lahir}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                        <div className="relative">
                            <Input
                                id="tanggal_lahir"
                                type="date"
                                className="border-gray-300 bg-gray-50 focus:bg-white transition-colors pr-10"
                                value={formData.tanggal_lahir}
                                onChange={handleChange}
                                required
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="tempat_tinggal" className="block text-sm font-medium text-gray-700">Tempat Tinggal</label>
                        <select
                            id="tempat_tinggal"
                            className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:bg-white transition-colors text-[14px]"
                            value={formData.tempat_tinggal}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Pilih lokasi</option>
                            <option value="Perkotaan">Perkotaan</option>
                            <option value="Pedesaan">Pedesaan</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div
                                className={`p-2 border rounded-lg flex items-center justify-center cursor-pointer transition-all ${formData.jenis_kelamin === "Laki-laki"
                                    ? "bg-primary/10 border-primary font-medium text-[14px]"
                                    : "bg-gray-50 border-gray-300 hover:bg-gray-100 text-[14px]"
                                    }`}
                                onClick={() => handleChange({ target: { id: "jenis_kelamin", value: "Laki-laki" } })}
                            >
                                Laki-laki
                            </div>
                            <div
                                className={`p-2 border rounded-lg flex items-center justify-center cursor-pointer transition-all ${formData.jenis_kelamin === "Perempuan"
                                    ? "bg-primary/10 border-primary font-medium text-[14px]"
                                    : "bg-gray-50 border-gray-300 hover:bg-gray-100 text-[14px]"
                                    }`}
                                onClick={() => handleChange({ target: { id: "jenis_kelamin", value: "Perempuan" } })}
                            >
                                Perempuan
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label htmlFor="status_nikah" className="block text-sm font-medium text-gray-700">Status Pernikahan</label>
                        <select
                            id="status_nikah"
                            className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:bg-white transition-colors text-[14px]"
                            value={formData.status_nikah}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Pilih status</option>
                            <option value="Ya">Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="pekerjaan" className="block text-sm font-medium text-gray-700">Pekerjaan</label>
                        <select
                            id="pekerjaan"
                            className="border border-gray-300 rounded-md w-full p-2 bg-gray-50 focus:bg-white transition-colors text-[14px]"
                            value={formData.pekerjaan}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Pilih pekerjaan</option>
                            <option value="Anak-anak">Anak-anak</option>
                            <option value="PNS">PNS</option>
                            <option value="Swasta">Swasta</option>
                            <option value="Wiraswasta">Wiraswasta</option>
                            <option value="Belum Bekerja">Belum Bekerja</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientPersonalForm;
