"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/pages/admin-layout";
import { getUserByNIP, updateUserByNIP } from "@/services/userService";
import { toast } from "react-hot-toast";
import { ArrowLeft, Loader, Save, AlertCircle, RefreshCw, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function EditUser() {
    const router = useRouter();
    const { nip } = router.query;

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        nama_lengkap: "",
        instansi: "",
        jabatan: "",
        email: "",
        isApproved: 0
    });

    useEffect(() => {
        if (!nip) {
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                setLoading(true);
                setError(null);

                const userData = await getUserByNIP(nip);

                if (userData) {
                    setUser(userData);

                    // Populate all form fields with user data
                    setFormData({
                        username: userData.username || "",
                        password: userData.password || "",
                        nama_lengkap: userData.nama_lengkap || "",
                        instansi: userData.instansi || "",
                        jabatan: userData.jabatan || "",
                        email: userData.email || "",
                        isApproved: userData.isApproved || 0
                    });
                } else {
                    throw new Error("User data not found");
                }
            } catch (err) {
                console.error("Error in fetchUserData:", err);
                setError(err.message || "Failed to load user data");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [nip]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("User data not available");
            return;
        }

        if (!nip) {
            toast.error("NIP is missing");
            return;
        }

        // Validate inputs
        if (!formData.username.trim()) {
            toast.error("Username is required");
            return;
        }

        try {
            setSaving(true);
            setError(null);

            const response = await updateUserByNIP(nip, {
                username: formData.username,
                password: formData.password.trim() ? formData.password : undefined,
                nama_lengkap: formData.nama_lengkap,
                instansi: formData.instansi,
                jabatan: formData.jabatan,
                email: formData.email,
                isApproved: 1
            });

            console.log("API Response:", response);

            toast.success("Data user berhasil diperbarui");

            setTimeout(() => {
                router.push("/admin/users");
            }, 1500);
        } catch (err) {
            console.error("Submit error:", err);
            const errorMsg = err.message || "Gagal mengubah data user";
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setSaving(false);
        }
    };

    const retryFetch = async () => {
        if (!nip) return;

        try {
            setLoading(true);
            setError(null);
            const userData = await UserByNIP(nip);
            setUser(userData);
            setFormData({
                username: userData.username || "",
                password: "",
                nama_lengkap: userData.nama_lengkap || "",
                instansi: userData.instansi || "",
                jabatan: userData.jabatan || "",
                email: userData.email || "",
                isApproved: userData.isApproved || 0
            });
            toast.success("Data berhasil dimuat ulang");
        } catch (err) {
            setError(err.message || "Failed to load user data");
            toast.error(err.message || "Gagal memuat data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/admin/users">
                        <Button variant="outline" className="gap-1">
                            <ArrowLeft size={16} />
                            Kembali
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold">Edit User</h1>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader className="animate-spin h-8 w-8 text-primary" />
                    <span className="ml-2 text-primary">Loading user data...</span>
                </div>
            ) : error ? (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            <p>{error}</p>
                        </div>
                        <div className="mt-4">
                            <Button
                                onClick={retryFetch}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <RefreshCw size={16} />
                                Coba Lagi
                            </Button>
                            <p className="mt-2 text-sm">
                                Jika masalah berlanjut, pastikan API server berjalan dan endpoint
                                <code className="mx-1 px-1 bg-red-50 rounded">/admin/users/{nip}</code>
                                sudah diimplementasikan.
                            </p>
                        </div>
                    </div>
                </div>
            ) : user ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold mb-4 text-gray-700">Informasi Dasar</h2>

                                <div className="space-y-2">
                                    <label htmlFor="nama_lengkap" className="block text-sm font-medium text-gray-700">
                                        Nama Lengkap
                                    </label>
                                    <Input
                                        type="text"
                                        id="nama_lengkap"
                                        name="nama_lengkap"
                                        value={formData.nama_lengkap}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="nip" className="block text-sm font-medium text-gray-700">
                                        NIP
                                    </label>
                                    <Input
                                        type="text"
                                        id="nip"
                                        value={nip}
                                        disabled
                                        className="w-full bg-gray-100"
                                    />
                                    <p className="text-xs text-gray-500">NIP tidak dapat diubah</p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="instansi" className="block text-sm font-medium text-gray-700">
                                        Instansi
                                    </label>
                                    <Input
                                        type="text"
                                        id="instansi"
                                        name="instansi"
                                        value={formData.instansi}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="jabatan" className="block text-sm font-medium text-gray-700">
                                        Jabatan
                                    </label>
                                    <Input
                                        type="text"
                                        id="jabatan"
                                        name="jabatan"
                                        value={formData.jabatan}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                                    Kredensial Login
                                </h2>

                                <div className="space-y-2">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <Input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Masukkan username"
                                        className="w-full"
                                    />
                                    <p className="text-xs text-gray-500">Username akan digunakan untuk login</p>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Masukkan password"
                                            className="w-full pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {formData.password ? "Edit password sesuai kebutuhan" : "Masukkan password baru"}
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Status Pengguna
                                    </label>
                                    <div className="mt-1">
                                        {formData.isApproved === 1 ? (
                                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                                Aktif
                                            </span>
                                        ) : (
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                                Pending
                                            </span>
                                        )}
                                        <p className="text-xs text-gray-500 mt-1">
                                            Status akan otomatis diubah menjadi Aktif setelah menyimpan
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="flex gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full"
                                        disabled={saving}
                                    >
                                        {saving ? (
                                            <>
                                                <Loader size={16} className="animate-spin" />
                                                <span>Menyimpan...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Save size={16} />
                                                <span>Simpan Perubahan</span>
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                    <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <p className="font-medium">User tidak ditemukan</p>
                    </div>
                    <p className="text-sm">NIP: {nip || 'tidak tersedia'}</p>
                    <div className="mt-4">
                        <Button
                            onClick={retryFetch}
                            variant="outline"
                            className="flex items-center gap-2 mr-2"
                        >
                            <RefreshCw size={16} />
                            Coba Lagi
                        </Button>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}