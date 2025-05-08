"use client";

import React from "react";
import { AdminLayout } from "../admin-layout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <>
            <AdminLayout>
                <div className="max-w-screen-xl mx-auto">
                    <header className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded-lg">
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        <div className="flex items-center gap-3">
                            <span className="font-semibold">Welcome, {user?.username}</span>
                            <Button
                                variant="destructive"
                                className="flex items-center gap-2"
                                onClick={handleLogout}
                            >
                                <LogOut size={16} />
                                Logout
                            </Button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Add your dashboard content here */}
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}