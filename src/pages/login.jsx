"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function FormLogin() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");

    const { login, isLoggedIn, user } = useAuth();
    const router = useRouter();
    const { redirect } = router.query;

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check credentials
        if (formData.username === "admin" && formData.password === "admin123") {
            login({ username: formData.username, role: "admin" });
            // Redirect is handled in the login function
        }
        else if (formData.username === "user" && formData.password === "user123") {
            login({ username: formData.username, role: "user" });
            // Redirect is handled in the login function
        }
        else {
            setErrorMsg("Username atau Password Salah");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col bg-primary w-96 h-[520px] justify-center items-center rounded-md">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-white font-bold text-4xl">Welcome to Sistem</p>
                        <p className="text-white font-normal text-lg">Silahkan Login Terlebih Dahulu</p>
                    </div>

                    {errorMsg && (
                        <div className="bg-red-500 text-white p-2 rounded-md mt-4 w-80 text-center">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-12">
                        <div className="mb-4">
                            <label htmlFor="username" className="text-white mb-1">Username</label>
                            <Input
                                type="text"
                                name="username"
                                placeholder="masukkan username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-80 bg-white"
                                required
                            />
                        </div>
                        <div className="mb-7">
                            <label htmlFor="password" className="text-white mb-1">Password</label>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-80 bg-white"
                                required
                            />
                        </div>
                        <Button type="submit" className="bg-secondary text-primary w-80 text-lg font-semibold">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
