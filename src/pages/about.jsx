import React from "react";
import { motion } from "framer-motion";
import { Footers } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaClock, FaExclamationTriangle, FaSatelliteDish } from "react-icons/fa";
import AboutMe from "@/components/about-me";

export default function About() {
  const Tujuan = [
    {
      id: 1,
      icon: <FaClock className="text-2xl text-blue-600" />,
      tittle: "Meningkatkan Efisiensi Diagnostik",
      description: "Mengurangi waktu yang dibutuhkan untuk mendiagnosis stroke dengan analisis otomatis.",
    },
    {
      id: 2,
      icon: <FaExclamationTriangle className="text-2xl text-green-600" />,
      tittle: "Mengurangi Risiko Human Error",
      description: "Membantu mendeteksi kasus stroke dengan tingkat akurasi yang tinggi, terutama di daerah dengan keterbatasan spesialis.",
    },
    {
      id: 3,
      icon: <FaSatelliteDish className="text-2xl text-red-600" />,
      tittle: "Meningkatkan Akses Diagnostik AI",
      description: "Memungkinkan klinik dan rumah sakit yang belum memiliki sistem canggih untuk mengakses teknologi analisis citra berbasis ML",
    },
  ]

  const Team = [
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: "/images/Avatar-1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "/images/Avatar-2.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Data Scientist",
      image: "/images/Avatar-1.png",
    },
    {
      id: 1,
      name: "John Doe",
      role: "Lead Developer",
      image: "/images/Avatar-1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "/images/Avatar-2.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Data Scientist",
      image: "/images/Avatar-1.png",
    },
  ]

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="relative flex-grow overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <div className="absolute inset-0 z-0 opacity-45">
            <img src="/images/About-2.png" alt="Background pattern" className="w-full h-full object-cover" />
          </div>

          <div className="mx-auto px-2 sm:px-4 pb-10 sm:pb-16 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              <motion.div
                className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/images/About-3.png" alt="Med.Brain technology illustration" className="bg-white w-full max-w-[280px] sm:max-w-sm md:max-w-lg " />
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 space-y-4 sm:space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="inline-block px-3 py-1 bg-[#ffff] text-[#3f9a82] rounded-full text-xs sm:text-sm font-medium mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Inovasi Kesehatan
                </motion.div>

                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffff] leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Tentang Kami
                </motion.h1>

                <motion.p
                  className="text-base sm:text-lg text-[#ffff] leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Med.Brain adalah platform berbasis{" "}
                  <span className="font-semibold text-[#3f9a82]">
                    AI (Artificial Intelligence)
                  </span>{" "}
                  yang dirancang untuk membantu dokter dan institusi kesehatan
                  menganalisis MRI otak dan memprediksi jenis stroke secara
                  otomatis menggunakan{" "}
                  <span className="font-semibold text-[#3f9a82]">
                    Convolutional Neural Network (CNN)
                  </span>
                  .
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/users/prediksi">
                    <Button className="p-5 rounded font-bold">Prediksi Sekarang</Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tujuan */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 gap-6">
          {Tujuan.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border-t-4 border-[#3f9a82]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + item * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center mb-2"> {item.icon} </div>
              <div className="text-center">
                <h2 className="text-lg font-semibold ml-2 text-gray-800">{item.tittle}</h2>
                <p className="text-gray-800">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AboutMe />

        {/* Team */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#ffff]">Tim Kami</h2>
            <p className="text-white-600 mt-2">Bertemu dengan para talenta di balik pengembangan Med.Brain</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Team.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-[#2d2d2d]">{item.name}</h3>
                  <p className="text-[#3f9a82] font-medium">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footers />
      </div>
    </>
  );
}