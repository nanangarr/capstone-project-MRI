"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "../admin-layout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LogOut, Users, UserCheck, UserX, Loader } from "lucide-react";
import { AllUsers, PendingUsers } from "@/services/userService";
import Link from "next/link";

export default function AdminDashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [allUsers, setAllUsers] = useState([]);
    const [pendingUsers, setPendingUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [users, pending] = await Promise.all([
                    AllUsers(),
                    PendingUsers()
                ]);

                setAllUsers(users);
                setPendingUsers(pending);
            } catch (err) {
                setError("Failed to load dashboard data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const approvedUsers = allUsers.filter(user => user.isApproved === 1);

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

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader className="animate-spin h-8 w-8 text-primary" />
                            <span className="ml-2 text-primary">Loading dashboard data...</span>
                        </div>
                    ) : error ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <Link href="/admin/users">
                                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500">Total Users</p>
                                            <h3 className="text-3xl font-bold">{allUsers.length}</h3>
                                        </div>
                                        <div className="p-3 bg-blue-100 rounded-full">
                                            <Users className="h-8 w-8 text-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">Approved Users</p>
                                        <h3 className="text-3xl font-bold">{approvedUsers.length}</h3>
                                    </div>
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <UserCheck className="h-8 w-8 text-green-500" />
                                    </div>
                                </div>
                            </div>

                            <Link href="/admin/users">
                                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-500">Pending Approval</p>
                                            <h3 className="text-3xl font-bold">{pendingUsers.length}</h3>
                                        </div>
                                        <div className="p-3 bg-yellow-100 rounded-full">
                                            <UserX className="h-8 w-8 text-yellow-500" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </AdminLayout>
        </>
    );
}