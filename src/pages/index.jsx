"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { Footers } from "@/components/Footer";
import Countups from "@/components/countup";
import { FaUserPlus, FaUpload, FaBrain, FaChartPie } from "react-icons/fa";
import { motion } from "framer-motion";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import AboutMe from "@/components/about-me";

export default function Home() {
  const Tutorial = [
    {
      id: 1,
      title: "Ajukan Akun",
      description: "Tenaga medis atau institusi kesehatan mendaftarkan akun melalui form verifikasi.",
      icon: <FaUserPlus className="text-2xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Unggah Gambar",
      description: "Unggah gambar MRI pasien yang ingin diprediksi.",
      icon: <FaUpload className="text-2xl text-green-600" />,
    },
    {
      id: 3,
      title: "Analisis",
      description: "Sistem akan menganalisis gambar dan memberikan hasil prediksi.",
      icon: <FaBrain className="text-2xl text-red-600" />,
    },
    {
      id: 4,
      title: "Lihat Hasil",
      description: "Lihat hasil prediksi dan rekomendasi tindakan selanjutnya.",
      icon: <FaChartPie className="text-2xl text-purple-600" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col h-full space-y-20 px-8 sm:px-8 md:px-20 py-12 md:py-6 bg-white">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex flex-col justify-center gap-6 max-w-xl w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold bg-white">
              AI-Based Stroke Detection and Classification from MRI Images
            </h1>
            <p className="text-base sm:text-lg text-gray-600 bg-white">
              Analisis MRI otak instan dengan kecerdasan buatan, untuk prediksi stroke yang akurat dan tindakan cepat.
            </p>
            <Link href="/users/prediksi">
              <Button className="p-5 rounded font-bold">Prediksi Sekarang</Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end  bg-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/images/Hero_1.png" alt="Gambar globe" className="w-64 md:w-auto max-w-md h-auto" />
          </motion.div>
        </div>

        {/* Countup */}
        <Countups />

        {/* Tutorial Penggunaan */}
        <div className="flex flex-col md:flex-row gap-8 items-center  bg-white">
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
            <img src="/images/Tutorial.png" alt="Gambar globe" className="w-60 md:w-auto max-w-md h-auto" />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-gray-800 text-2xl sm:text-3xl md:text-3xl font-bold text-start mb-4  bg-white">
              Tutorial Penggunaan
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {Tutorial.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.2 }}
                  className="flex flex-col items-start p-4"
                >
                  <div className="flex items-center mb-2">
                    {item.icon}
                    <h2 className="text-gray-800 text-lg font-semibold ml-2  bg-white">{item.title}</h2>
                  </div>
                  <p className="text-gray-600  bg-white">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tentang Kami */}
      <AboutMe />

      {/* Testimoni */}
      <div className="px-8 sm:px-8 md:px-20 py-12 md:py-16 bg-white">
        <h2 className="text-gray-800 text-center text-3xl font-bold mb-4">
          Apa Kata <span className="text-[#3f9a82]">Mereka?</span>
        </h2>

        <TestimonialMarquee />
      </div>

      <Footers />
    </>
  );
}
