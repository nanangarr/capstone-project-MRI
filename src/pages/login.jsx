import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/navbar";

export default function FormLogin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { login, isLoggedIn, user, error, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            if (user?.role === "admin") {
                router.push("/admin/dashboard");
            } else {
                router.push("/users/prediksi");
            }
        }
    }, [isLoggedIn, router, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="flex flex-col w-96 h-[520px] justify-center items-center rounded-md">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-[#3f9a82] font-bold text-4xl text-center"> Selamat Datang <br />
                            di MedBrain</p>
                        <p className="text-[#3f9a82] font-normal text-lg">Silahkan Login Terlebih Dahulu</p>
                    </div>

                    {error && (
                        <div className="bg-red-500 text-white p-2 rounded-md mt-4 w-80 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-12">
                        <div className="mb-4">
                            <label htmlFor="username" className="text-[#3f9a82] mb-1">Username</label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="Masukkan username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-80 bg-white shadow-2xl"
                                required
                            />
                        </div>
                        <div className="mb-7">
                            <label htmlFor="password" className="text-[#3f9a82] mb-1">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-80 bg-white shadow-2xl"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="flex items-center justify-center bg-secondary shadow-2xl text-primary w-80 text-lg font-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                    </form>

                    <p className="mt-4 text-gray-600 text-md flex items-center justify-center">
                        Belum punya akun?{" "}
                        <Link href="/pendaftaran" className="text-[#7cbfad] hover:text-[#3f9a82] font-semibold underline">
                            Daftar disini
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}