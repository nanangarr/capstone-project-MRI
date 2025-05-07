"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Pagination } from "flowbite-react";
import { Search, Trash2, SquarePen } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function DataPasien({ collapsed }) {
    const allData = [
        { id: 1, name: "John Doe", tanggalLahir: "1990-01-01", jenisKelamin: "Laki-laki", alamat: "Jl. Kebon Jeruk No. 1" },
        { id: 2, name: "Jane Smith", tanggalLahir: "1992-02-02", jenisKelamin: "Perempuan", alamat: "Jl. Kebon Jeruk No. 2" },
        { id: 3, name: "Bob Johnson", tanggalLahir: "1985-03-15", jenisKelamin: "Laki-laki", alamat: "Jl. Sudirman No. 123" },
        { id: 4, name: "Alice Brown", tanggalLahir: "1988-07-22", jenisKelamin: "Perempuan", alamat: "Jl. Gatot Subroto No. 45" },
        { id: 5, name: "Mike Wilson", tanggalLahir: "1995-11-30", jenisKelamin: "Laki-laki", alamat: "Jl. Asia Afrika No. 67" },
        { id: 6, name: "Sarah Lee", tanggalLahir: "1991-04-18", jenisKelamin: "Perempuan", alamat: "Jl. Diponegoro No. 89" },
        { id: 7, name: "David Miller", tanggalLahir: "1987-09-12", jenisKelamin: "Laki-laki", alamat: "Jl. Cihampelas No. 210" },
        { id: 8, name: "Emma Davis", tanggalLahir: "1993-06-25", jenisKelamin: "Perempuan", alamat: "Jl. Braga No. 56" },
        { id: 9, name: "James Wilson", tanggalLahir: "1989-12-05", jenisKelamin: "Laki-laki", alamat: "Jl. Dago No. 78" },
        { id: 10, name: "Olivia Clark", tanggalLahir: "1994-08-14", jenisKelamin: "Perempuan", alamat: "Jl. Ir. H. Juanda No. 34" },
        { id: 11, name: "William Taylor", tanggalLahir: "1986-02-28", jenisKelamin: "Laki-laki", alamat: "Jl. Merdeka No. 12" },
        { id: 12, name: "Sophia White", tanggalLahir: "1992-10-09", jenisKelamin: "Perempuan", alamat: "Jl. Ahmad Yani No. 45" },
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
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tanggalLahir.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.alamat.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.jenisKelamin.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className={`container p-4 md:p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">Data Pasien</h1>

                <div className="relative w-full max-w-[345px] mb-2.5">
                    <Input id="search" type="input" placeholder="Enter search terms" value={searchTerm} onChange={handleSearchChange} className="border-gray-300 pr-10" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search size={18} className="text-gray-500" />
                    </div>
                </div>

                <div className="w-full border border-black rounded-lg overflow-x-auto">
                    <Table striped className="w-full">
                        <TableHead>
                            <TableRow className="bg-gray-100 border-b">
                                <TableHeadCell className="border-r whitespace-nowrap">No</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Nama Pasien</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Tanggal Lahir</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Jenis Kelamin</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Alamat</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Action</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            {dataTable.map((item, index) => (
                                <TableRow key={item.id} className="hover:bg-gray-50">
                                    <TableCell className="border-r whitespace-nowrap">{startIndex + index}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.name}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.tanggalLahir}</TableCell>
                                    <TableCell className="border-r whitespace-nowrap">{item.jenisKelamin}</TableCell>
                                    <TableCell className="border-r max-w-[200px] md:max-w-xs">
                                        <div className="overflow-y-auto break-words max-h-20">
                                            {item.alamat}
                                        </div>
                                    </TableCell>
                                    <TableCell className="border-r whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <button className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-200">
                                                <SquarePen size={18} />
                                            </button>
                                            <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-200">
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
            </div>
        </>
    );
}