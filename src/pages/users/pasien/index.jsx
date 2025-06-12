"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Pagination } from "flowbite-react";
import { Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Pasient } from "@/services/predictionService";
import Image from "next/image";

export default function DataPasien({ collapsed }) {
    const [allData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(allData);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch pasien data with examination details
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Pasient();
                setAllData(data);
            } catch (error) {
                console.error("Error fetching pasien data:", error);
            }
        };

        fetchData();
    }, []);

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    // Filter data based on search term
    useEffect(() => {
        const result = allData.filter((item) =>
            item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.tanggal_lahir && item.tanggal_lahir.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.tempat_lahir && item.tempat_lahir.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.pemeriksaans && item.pemeriksaans.length > 0 && item.pemeriksaans[0].jenis_kelamin &&
                item.pemeriksaans[0].jenis_kelamin.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.no_hp && item.no_hp.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (item.pemeriksaans && item.pemeriksaans.length > 0 && item.pemeriksaans[0].kategori &&
                item.pemeriksaans[0].kategori.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(result);
    }, [searchTerm, allData]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Current page data
    const [dataTable, setDataTable] = useState([]);

    // Update data when page changes or filtered data changes
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

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return "-";
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID');
    };

    // Format boolean values
    const formatBoolean = (value) => {
        return value ? "Ya" : "Tidak";
    };

    // Format text with newlines for display
    const formatText = (text) => {
        if (!text) return "-";
        return text.split('\n').map((item, key) => {
            return (
                <span key={key}>
                    {item}
                    <br />
                </span>
            );
        });
    };

    return (
        <>
            <div className={`container p-4 md:p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <h1 className="font-bold text-xl md:text-2xl mb-4 md:mb-6">Riwayat Pemeriksaan Pasien</h1>

                <div className="relative w-full max-w-[345px] mb-2.5">
                    <Input id="search" type="input" placeholder="Cari riwayat pasien..." value={searchTerm} onChange={handleSearchChange} className="border-gray-300 pr-10" />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search size={18} className="text-gray-500" />
                    </div>
                </div>

                <div className="w-full border border-black rounded-lg overflow-x-auto">
                    <Table striped className="w-[800px]">
                        <TableHead>
                            <TableRow className="bg-gray-100 border-b">
                                <TableHeadCell className="border-r whitespace-nowrap">No</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap" colSpan={4}>Data Pasien</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap" colSpan={11}>Data Pemeriksaan</TableHeadCell>
                            </TableRow>
                            <TableRow className="bg-gray-50 border-b">
                                <TableHeadCell className="border-r whitespace-nowrap"></TableHeadCell>
                                {/* Data Pasien */}
                                <TableHeadCell className="border-r whitespace-nowrap">Nama</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Tempat/Tgl Lahir</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Jenis Kelamin</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">No HP</TableHeadCell>
                                {/* Data Pemeriksaan */}
                                <TableHeadCell className="border-r whitespace-nowrap">Tanggal Pemeriksaan</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Umur</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">BB/TB</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Hipertensi</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Penyakit Jantung</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Glukosa</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap">Hasil Prediksi</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap w-64">Deskripsi</TableHeadCell>
                                <TableHeadCell className="border-r whitespace-nowrap w-64">Solusi</TableHeadCell>
                                <TableHeadCell className="whitespace-nowrap">Gambar MRI</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            {dataTable.map((item, index) => {
                                const examination = item.pemeriksaans && item.pemeriksaans.length > 0 ? item.pemeriksaans[0] : null;
                                return (
                                    <TableRow key={item.id} className="hover:bg-gray-50">
                                        <TableCell className="border-r whitespace-nowrap">{startIndex + index}</TableCell>
                                        {/* Data Pasien */}
                                        <TableCell className="border-r whitespace-nowrap">{item.nama || "-"}</TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {item.tempat_lahir || "-"}/{formatDate(item.tanggal_lahir) || "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination?.jenis_kelamin || "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">{item.no_hp || "-"}</TableCell>
                                        {/* Data Pemeriksaan */}
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination ? formatDate(examination.createdAt) : "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination?.umur || "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination ? `${examination.berat_badan} kg / ${examination.tinggi_badan} cm` : "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination ? formatBoolean(examination.hipertensi) : "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination ? formatBoolean(examination.penyakit_jantung) : "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap">
                                            {examination?.glukosa || "-"}
                                        </TableCell>
                                        <TableCell className="border-r whitespace-nowrap font-semibold">
                                            {examination?.kategori || "-"}
                                        </TableCell>
                                        <TableCell className="border-r min-w-[300px] p-2">
                                            <div className="text-sm">
                                                {examination?.deskripsi ? formatText(examination.deskripsi) : "-"}
                                            </div>
                                        </TableCell>
                                        <TableCell className="border-r min-w-[500px] p-2">
                                            <div className="text-sm">
                                                {examination?.solusi ? formatText(examination.solusi) : "-"}
                                            </div>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">
                                            {examination?.gambar_MRI ? (
                                                <div className="flex justify-center">
                                                    <img
                                                        src={examination.gambar_MRI_url || `${process.env.NEXT_PUBLIC_API_URL}/uploads/${examination.gambar_MRI}`}
                                                        alt="MRI Scan"
                                                        className="h-12 w-12 object-cover cursor-pointer rounded"
                                                        onClick={() => window.open(examination.gambar_MRI_url || `${process.env.NEXT_PUBLIC_API_URL}/uploads/${examination.gambar_MRI}`, '_blank')}
                                                    />
                                                </div>
                                            ) : "-"
                                            }
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{filteredData.length === 0 ? 0 : startIndex}</span> to{" "}
                        <span className="font-medium">{endIndex}</span> of{" "}
                        <span className="font-medium">{filteredData.length}</span> results
                    </div>
                    <div className="flex justify-center my-4">
                        {totalPages > 0 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                                showIcons={true}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}