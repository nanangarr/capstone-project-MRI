"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { login as loginAPI, logout as logoutAPI } from '@/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // cek untuk melihat apakah pengguna sudah login
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (token && userData) {
            setIsLoggedIn(true);
            setUser(JSON.parse(userData));
        }

        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            setError(null);
            setLoading(true);

            const response = await loginAPI(credentials);

            // Simpan token dan data pengguna ke localStorage
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
            localStorage.setItem("isLoggedIn", "true");

            setIsLoggedIn(true);
            setUser(response.user);

            // Redirect berdasarkan peran pengguna
            if (response.user.role === "admin") {
                router.push("/admin/dashboard");
            } else {
                router.push("/users/prediksi");
            }
        } catch (err) {
            setError(err.message || "Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        logoutAPI();
        setIsLoggedIn(false);
        setUser(null);
        router.push("/login");
    };

    const requireAuth = (path) => {
        if (!isLoggedIn && (path.startsWith("/users") || path.startsWith("/admin"))) {
            router.push("/login");
            return false;
        }

        if (isLoggedIn) {
            if (user?.role === "admin" && path.startsWith("/users")) {
                router.push("/admin/dashboard");
                return false;
            } else if (user?.role === "user" && path.startsWith("/admin")) {
                router.push("/users/prediksi");
                return false;
            }
        }

        return true;
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            login,
            logout,
            user,
            requireAuth,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);