import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Footers } from "@/components/Footer";

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nip: "",
    instansi: "",
    jabatan: "",
    email: "",
    foto: null,
  });

  const [previewFoto, setPreviewFoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, foto: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreviewFoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Data berhasil dikirim!");
  };

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Formulir Pendaftaran</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Silakan lengkapi formulir pendaftaran berikut untuk memulai perjalanan Anda bersama kami.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary px-8 py-6 text-white">
              <h2 className="text-2xl font-bold">Informasi Personal</h2>
              <p className="text-green-100">Lengkapi data diri Anda dengan informasi yang valid</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="namaLengkap" className="flex items-center gap-2 text-m font-bold text-gray-700">Nama Lengkap</label>
                      <Input 
                        type="text" 
                        id="namaLengkap" 
                        name="namaLengkap" 
                        value={formData.namaLengkap} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Masukkan nama lengkap" 
                        className="text-gray-800 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                      />
                      <p className="text-xs text-gray-500">*Berikan nama lengkap beserta gelar jika memiliki</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="nip" className="flex items-center gap-2 text-m font-bold text-gray-700">NIP</label>
                      <Input 
                        type="text" 
                        id="nip" 
                        name="nip" 
                        value={formData.nip} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Masukkan NIP" 
                        className="text-gray-800 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-m font-bold text-gray-700">Email</label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="nama@example.com" 
                        className="text-gray-800 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="instansi" className="flex items-center gap-2 text-m font-bold text-gray-700">Instansi</label>
                      <Input 
                        type="text" 
                        id="instansi" 
                        name="instansi" 
                        value={formData.instansi} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Masukkan nama instansi" 
                        className="text-gray-800 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="jabatan" className="flex items-center gap-2 text-m font-bold text-gray-700">Jabatan</label>
                      <Input 
                        type="text" 
                        id="jabatan" 
                        name="jabatan" 
                        value={formData.jabatan} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Masukkan jabatan Anda" 
                        className="text-gray-800 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                      />
                    </div>

                    <div>
                      <label htmlFor="foto" className="block text-m font-bold text-gray-700 mb-1">Foto</label>
                      <Input 
                        type="file" 
                        id="foto" 
                        name="foto" 
                        accept="image/*" 
                        onChange={handleFotoChange} 
                        required 
                        className="text-gray-800 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500" 
                      />
                      {previewFoto && (
                        <div className="mt-2">
                          <img src={previewFoto} alt="Preview" className="h-32 w-32 object-cover border border-gray-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <Button type="submit" className="px-10 py-3  text-white rounded-lg  transition-all">Daftar Sekarang</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}
