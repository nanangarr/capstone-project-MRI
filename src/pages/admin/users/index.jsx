"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Pagination } from "flowbite-react";
import { Search, Trash2, SquarePen, UserPlus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { AdminLayout } from "@/pages/admin-layout";
import { Button } from "@/components/ui/button";

export default function DataUser({ collapsed }) {
    const allData = [
        {
            id: 1,
            username: "user",
            password: "user123",
            namaLengkap: "Dr. John Smith",
            nip: "198201012010011001",
            instansi: "RSUD Harapan Bunda",
            jabatan: "Dokter Spesialis Jantung",
            email: "john.smith@mail.com",
            foto: "/images/Avatar-1.png"
        },
        {
            id: 2,
            username: "user2",
            password: "user1234",
            namaLengkap: "Dr. Sarah Johnson",
            nip: "199105202012012002",
            instansi: "RS Sejahtera",
            jabatan: "Dokter Umum",
            email: "sarah.johnson@mail.com",
            foto: "/images/Avatar-2.png"
        },
    ];

    // Search state
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(allData);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    // Filter data based on search term
    useEffect(() => {
        const result = allData.filter((item) =>
            item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.instansi.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.jabatan.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(result);
    }, [searchTerm]);

    const totalPages = Math.ceil(allData.length / itemsPerPage);

    // Current page data
    const [dataTable, setDataTable] = useState([]);

    // Update data when page changes
    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setDataTable(filteredData.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, filteredData]);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate showing range
    const startIndex = filteredData.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);

    return (
        <>
            <AdminLayout className={`container p-4 md:p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h1 className="font-bold text-xl md:text-2xl">Data Tenaga Medis</h1>
                    <Button className="bg-primary hover:bg-primary/90 gap-2 text-white">
                        <UserPlus size={18} />
                        <span>Tambah User</span>
                    </Button>
                </div>

                <div className="relative w-full max-w-[345px] mb-2.5">
                    <Input id="search" type="input" placeholder="Enter search terms" value={searchTerm} onChange={handleSearchChange} className="border-gray-300 pr-10" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search size={18} className="text-gray-500" />
                    </div>
                </div>

                <div className="w-full border border-black rounded-lg overflow-x-auto">
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
                                <TableHeadCell className="border-r whitespace-nowrap">Password</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap w-1">Action</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            {dataTable.map((item, index) => (
                                <TableRow key={item.id} className="hover:bg-gray-50">
                                    <TableCell className="border-r whitespace-nowrap">{startIndex + index}</TableCell>
                                    <TableCell className="border-r">
                                        {item.foto ? (
                                            <img
                                                src={item.foto}
                                                alt={`Foto ${item.namaLengkap}`}
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-gray-500 font-medium">
                                                    {item.namaLengkap?.charAt(0) || '?'}
                                                </span>
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell className="border-r whitespace-nowrap font-medium">{item.namaLengkap}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.nip}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.instansi}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.jabatan}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.email}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.username}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">
                                        <span className="text-gray-500">••••••••</span>
                                    </TableCell>
                                    <TableCell className="border-r whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <button className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200" title="Edit user">
                                                <SquarePen size={18} />
                                            </button>
                                            <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-200" title="Delete user">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                    <Pagination
                        layout="navigation"
                        currentPage={currentPage}
                        totalPages={Math.max(1, totalPages)}
                        onPageChange={handlePageChange}
                        showIcons
                        disabled={allData.length <= itemsPerPage}
                        className={allData.length <= itemsPerPage ? "pointer-events-none opacity-50" : ""}
                    />
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{allData.length > 0 ? startIndex : 0}</span> to <span className="font-medium">{endIndex}</span> of <span className="font-medium">{allData.length}</span> entries
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}