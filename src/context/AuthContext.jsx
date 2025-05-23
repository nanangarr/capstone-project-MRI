"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLoggedIn");
        if (loginStatus === "true") {
            setIsLoggedIn(true);
            const userData = localStorage.getItem("user");
            if (userData) {
                setUser(JSON.parse(userData));
            }
        }
    }, []);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.role === "admin") {
            router.push("/admin/dashboard");
        } else {
            router.push("/users/prediksi");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        router.push("/");
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
        <AuthContext.Provider value={{ isLoggedIn, login, logout, user, requireAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);