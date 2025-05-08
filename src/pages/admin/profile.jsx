"use client";

import React from 'react';
import { AdminLayout } from "@/pages/admin-layout";
import { Avatar } from 'flowbite-react';
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
    const { user } = useAuth();

    return (
        <>
            <AdminLayout>
                <div className="mx-auto px-4 py-6">
                    <div className="bg-white ">
                        {/* Header with avatar */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-200 pb-6 rounded-lg shadow-md p-6">
                            <Avatar
                                img="/images/Avatar1.png"
                                alt={`avatar of ${user?.username || 'Admin'}`}
                                rounded
                                size="lg"
                            />

                            <div className="flex flex-col text-center sm:text-left">
                                <p className="text-sm text-gray-500">Selamat datang, </p>
                                <h1 className="text-2xl font-bold uppercase">{user?.username || 'Admin'}</h1>
                                <span className="mt-1 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                    {user?.role || 'Admin'}
                                </span>
                            </div>
                        </div>

                        {/* User Information */}
                        <div className="mt-8 rounded-lg shadow-md p-6">
                            <h2 className="font-bold text-xl mb-6 text-gray-800 border-b pb-2">Informasi Pengguna</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Nama Lengkap</p>
                                        <span className="text-gray-800 block mt-1">{user?.username || 'Admin'}</span>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Email</p>
                                        <span className="text-gray-800 block mt-1">{user?.email || 'admin@example.com'}</span>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">NIP</p>
                                        <span className="text-gray-800 block mt-1">{user?.nip || '123456789'}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Peran</p>
                                        <span className="text-gray-800 block mt-1">{user?.role || 'Admin'}</span>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Instansi</p>
                                        <span className="text-gray-800 block mt-1">{user?.instansi || 'RSU Medika'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="mt-8 rounded-lg shadow-md p-6">
                            <h2 className="font-bold text-xl mb-6 text-gray-800 border-b pb-2">Pengaturan Akun</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Username</p>
                                        <span className="text-gray-800 block mt-1">{user?.username || 'admin'}</span>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="font-semibold text-gray-700">Password</p>
                                        <span className="text-gray-800 block mt-1">********</span>
                                    </div>

                                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                                        Ubah Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
