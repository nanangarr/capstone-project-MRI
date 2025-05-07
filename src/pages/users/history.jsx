"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Pagination } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function History({ collapsed }) {

    const allData = [
        { id: 1, name: "John Doe", tanggalPeriksa: "1990-01-01", gambar: "/images/hero.png", hasilPrediksi: "Terdapat gejala penyakit A dengan confidence 87.5, resiko tinggi untuk terkena penyakit A sehingga perlu dilakukan pemeriksaan lebih lanjut dengan beberapa rekomendasi berikut: 1. Rekomendasi 1, 2. Rekomendasi 2, 3. Rekomendasi 3", catatan: "Sistem sesuai dengan hasil pemeriksaan" },
        { id: 2, name: "Jane Smith", tanggalPeriksa: "1992-02-02", gambar: "/images/hero.png", hasilPrediksi: "Terdapat gejala penyakit B dengan confidence 75.0, resiko sedang untuk terkena penyakit B sehingga perlu dilakukan pemeriksaan lebih lanjut dengan beberapa rekomendasi berikut: 1. Rekomendasi 1, 2. Rekomendasi 2, 3. Rekomendasi 3", catatan: "Sistem sesuai dengan hasil pemeriksaan" },
        { id: 3, name: "Bob Johnson", tanggalPeriksa: "1985-03-15", gambar: "/images/hero.png", hasilPrediksi: "Terdapat gejala penyakit C dengan confidence 90.0, resiko tinggi untuk terkena penyakit C sehingga perlu dilakukan pemeriksaan lebih lanjut dengan beberapa rekomendasi berikut: 1. Rekomendasi 1, 2. Rekomendasi 2, 3. Rekomendasi 3", catatan: "Sistem sesuai dengan hasil pemeriksaan" },
    ]

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(allData);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        const result = allData.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tanggalPeriksa.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(result);
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setDataTable(filteredData.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, filteredData]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const startIndex = filteredData.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);

    return (
        <>
            <div className={`container p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <h1 className="font-bold text-2xl mb-6">Data Riwayat Prediksi</h1>

                <div className="relative w-full md:w-[345px] mb-2.5">
                    <Input id="search" type="input" placeholder="Enter search terms" value={searchTerm} onChange={handleSearchChange} className="border-gray-300 pr-10" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search size={18} className="text-gray-500" />
                    </div>
                </div>

                <div className="w-full border border-black rounded-lg overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <Table striped className="table-auto w-full min-w-[800px]">
                                <TableHead>
                                    <TableRow className="bg-gray-300 border-b">
                                        <TableHeadCell className="border-r w-12">No</TableHeadCell>
                                        <TableHeadCell className="border-r w-1/6">Nama Pasien</TableHeadCell>
                                        <TableHeadCell className="border-r w-1/6">Tanggal Periksa</TableHeadCell>
                                        <TableHeadCell className="border-r">Gambar</TableHeadCell>
                                        <TableHeadCell className="border-r w-1/3">Hasil Prediksi</TableHeadCell>
                                        <TableHeadCell className="border-r">Catatan</TableHeadCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="divide-y">
                                    {dataTable.map((item, index) => (
                                        <TableRow key={item.id} className="hover:bg-gray-50">
                                            <TableCell className="border-r">{startIndex + index}</TableCell>
                                            <TableCell className="border-r">{item.name}</TableCell>
                                            <TableCell className="border-r">{item.tanggalPeriksa}</TableCell>
                                            <TableCell className="border-r">
                                                <img src={item.gambar} alt="Gambar" className="h-16 w-auto" />
                                            </TableCell>
                                            <TableCell className="border-r max-h-20">
                                                <div className="overflow-y-auto break-words">
                                                    {item.hasilPrediksi}
                                                </div>
                                            </TableCell>
                                            <TableCell className="border-r">
                                                <div className="overflow-y-auto break-words">
                                                    {item.catatan}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
                    <Pagination
                        layout="navigation"
                        currentPage={currentPage}
                        totalPages={Math.max(1, totalPages)}
                        onPageChange={handlePageChange}
                        showIcons
                        disabled={filteredData.length <= itemsPerPage}
                        className={filteredData.length <= itemsPerPage ? "pointer-events-none opacity-50" : ""}
                    />
                    <div className="text-sm text-gray-700 text-center sm:text-right">
                        Showing <span className="font-medium">{filteredData.length > 0 ? startIndex : 0}</span> to <span className="font-medium">{endIndex}</span> of <span className="font-medium">{filteredData.length}</span> entries
                    </div>
                </div>
            </div>
        </>
    )
}