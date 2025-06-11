import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Footers } from "@/components/Footer";
import { register } from "@/services/authService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { Loader, CheckCircle } from "lucide-react";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Validate required fields
    if (!formData.namaLengkap || !formData.nip || !formData.instansi || !formData.jabatan || !formData.email) {
      setError("Semua field harus diisi");
      setLoading(false);
      toast.error("Semua field harus diisi");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid");
      setLoading(false);
      toast.error("Format email tidak valid");
      return;
    }

    // Check if foto is provided
    if (!formData.foto) {
      setError("Foto profil diperlukan");
      setLoading(false);
      toast.error("Foto profil diperlukan");
      return;
    }

    try {
      console.log("Submitting registration form...");
      // Map to backend field names
      const apiFormData = {
        nama_lengkap: formData.namaLengkap,
        NIP: formData.nip,
        instansi: formData.instansi,
        jabatan: formData.jabatan,
        email: formData.email,
        foto: formData.foto,
      };

      console.log("API form data:", apiFormData);

      const response = await register(apiFormData);
      console.log("Registration response:", response);
      setSuccess(true);
      toast.success(response.message || "Pendaftaran berhasil!");
      setError(null);

      // Redirect to login page after successful registration
      setTimeout(() => {
        router.push("/pendaftaran");
      }, 2000);
    } catch (err) {
      console.error("Registration error in component:", err);
      setSuccess(false);
      setError(err.message || "Terjadi kesalahan saat mendaftar");
      toast.error(err.message || "Terjadi kesalahan saat mendaftar");
    } finally {
      setLoading(false);
    }
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

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <div>
                <p className="font-bold">Pendaftaran Berhasil!</p>
                <p>Akun Anda telah berhasil didaftarkan. Anda akan diarahkan ke halaman login dalam beberapa detik.</p>
              </div>
            </div>
          )}

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
                  <Button
                    type="submit"
                    className="px-10 py-3 text-white rounded-lg transition-all flex items-center"
                    disabled={loading || success}
                  >
                    {loading ? (
                      <>
                        <Loader size={18} className="animate-spin mr-2" />
                        Memproses...
                      </>
                    ) : success ? (
                      <>
                        <CheckCircle size={18} className="mr-2" />
                        Berhasil!
                      </>
                    ) : (
                      'Daftar Sekarang'
                    )}
                  </Button>
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