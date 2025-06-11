"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Pagination } from "flowbite-react";
import { Search, Trash2, SquarePen, UserCheck, Loader, AlertCircle, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AdminLayout } from "@/pages/admin-layout";
import { Button } from "@/components/ui/button";
import { getAllUsers, getPendingUsers, removeUser } from "@/services/userService";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function DataUser({ collapsed }) {
    const [allData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pendingUsers, setPendingUsers] = useState([]);
    const [showPendingOnly, setShowPendingOnly] = useState(false);

    const itemsPerPage = 10;

    // Fetch users data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [users, pending] = await Promise.all([
                    getAllUsers(),
                    getPendingUsers()
                ]);

                setAllData(users);
                setPendingUsers(pending);
            } catch (err) {
                setError("Failed to load user data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle search and filtering
    useEffect(() => {
        const nonAdminUsers = allData.filter(item => item.role !== 'admin');

        let dataToFilter = showPendingOnly
            ? nonAdminUsers.filter(item => item.isApproved === 0)
            : nonAdminUsers;

        const result = dataToFilter.filter((item) =>
            item.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.nama_lengkap?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.instansi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.jabatan?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredData(result);
        setCurrentPage(1);
    }, [searchTerm, allData, showPendingOnly]);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Toggle view between all users and pending only
    const togglePendingView = () => {
        setShowPendingOnly(!showPendingOnly);
    };

    // Calculate pagination values
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const dataTable = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const startIndex = indexOfFirstItem + 1;
    const endIndex = Math.min(indexOfLastItem, filteredData.length);

    // Remove modal states and just keep a loading state for deletion
    const [deletingNIP, setDeletingNIP] = useState(null);

    // Function to handle delete confirmation and execution
    const handleDeleteUser = async (user) => {
        // Simple confirmation with browser's built-in alert
        const isConfirmed = window.confirm(
            `Apakah Anda yakin ingin menghapus user berikut?\n\nNama: ${user.nama_lengkap}\nNIP: ${user.NIP}\nEmail: ${user.email}\n\nPerhatian: Tindakan ini tidak dapat dibatalkan!`
        );

        if (!isConfirmed) return;

        try {
            setDeletingNIP(user.NIP);
            await removeUser(user.NIP);

            // Update the data after successful deletion
            setAllData(allData.filter(u => u.NIP !== user.NIP));

            toast.success(`User ${user.nama_lengkap} berhasil dihapus`);
        } catch (err) {
            console.error("Delete error:", err);
            toast.error(err.message || "Gagal menghapus user");
        } finally {
            setDeletingNIP(null);
        }
    };

    return (
        <>
            <AdminLayout>
                <h1 className="text-2xl font-bold mb-6">Data Pengguna</h1>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <Button
                        className={`gap-2 ${showPendingOnly ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-primary hover:bg-primary/90'} text-white`}
                        onClick={togglePendingView}
                    >
                        {showPendingOnly ? (
                            <>
                                <Users size={18} />
                                <span>Tampilkan Semua User</span>
                            </>
                        ) : (
                            <>
                                <UserCheck size={18} />
                                <span>Tampilkan User Pending</span>
                            </>
                        )}
                    </Button>

                    <div className="relative w-full max-w-[345px]">
                        <Input
                            id="search"
                            type="input"
                            placeholder="Cari pengguna..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="border-gray-300 pr-10"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search size={18} className="text-gray-500" />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader className="animate-spin h-8 w-8 text-primary" />
                        <span className="ml-2 text-primary">Loading user data...</span>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            <p>{error}</p>
                        </div>
                    </div>
                ) : filteredData.length === 0 ? (
                    <div className="bg-gray-100 p-8 text-center rounded-lg">
                        <p className="text-gray-600">No users found matching your criteria.</p>
                    </div>
                ) : (
                    <div className="w-full border border-gray-300 rounded-lg overflow-x-auto">
                        <Table striped className="w-full min-w-[1000px]">
                            <TableHead>
                                <TableRow className="bg-gray-100 border-b">
                                    <TableHeadCell className="border-r whitespace-nowrap w-1">No</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Foto</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Nama Lengkap</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">NIP</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Instansi</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Jabatan</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Email</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Username</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap">Status</TableHeadCell>
                                    <TableHeadCell className="border-r whitespace-nowrap w-1">Action</TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="divide-y">
                                {dataTable.map((item, index) => (
                                    <TableRow key={item.NIP} className="hover:bg-gray-50">
                                        <TableCell className="border-r whitespace-nowrap">{startIndex + index}</TableCell>
                                        <TableCell className="border-r">
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-gray-500 font-medium">
                                                    {item.nama_lengkap?.charAt(0) || '?'}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap font-medium">{item.nama_lengkap}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.NIP}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.instansi}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.jabatan}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.email}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.username || '-'}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {item.isApproved === 1 ? (
                                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                                                    Pending
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            <div className="flex gap-2">
                                                {item.isApproved === 0 ? (
                                                    <Link href={`/admin/users/edit/${item.NIP}`}>
                                                        <button className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200" title="Set username and password">
                                                            <SquarePen size={18} />
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <Link href={`/admin/users/edit/${item.NIP}`}>
                                                            <button className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200" title="Edit user">
                                                                <SquarePen size={18} />
                                                            </button>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDeleteUser(item)}
                                                            className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-200"
                                                            title="Delete user"
                                                            disabled={deletingNIP === item.NIP}
                                                        >
                                                            {deletingNIP === item.NIP ? (
                                                                <Loader size={18} className="animate-spin" />
                                                            ) : (
                                                                <Trash2 size={18} />
                                                            )}
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}

                {filteredData.length > 0 && (
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                        <Pagination
                            layout="navigation"
                            currentPage={currentPage}
                            totalPages={Math.max(1, totalPages)}
                            onPageChange={handlePageChange}
                            showIcons
                            disabled={filteredData.length <= itemsPerPage}
                            className={filteredData.length <= itemsPerPage ? "pointer-events-none opacity-50" : ""}
                        />
                        <div className="text-sm text-gray-700">
                            Showing <span className="font-medium">{filteredData.length > 0 ? startIndex : 0}</span> to <span className="font-medium">{endIndex}</span> of <span className="font-medium">{filteredData.length}</span> entries
                        </div>
                    </div>
                )}
            </AdminLayout>
        </>
    );
}