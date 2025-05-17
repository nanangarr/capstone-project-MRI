import React from "react";
import { motion } from "framer-motion";

export default function TestimonialMarquee() {
    const Testimoni = [
        {
            id: 1,
            name: "dr. Ratna Permata, Sp.S",
            position: "Dokter Spesialis Saraf, RSUD Surakarta",
            image: "/images/Avatar-1.png",
            testimonial:
                "Med.Brain memberikan kami keunggulan dalam penanganan stroke akut. Sistem ini mampu mengklasifikasikan jenis stroke dari MRI hanya dalam hitungan detik, dan hasilnya sangat akurat. Ini sangat membantu saat kondisi darurat di IGD.",
        },
        {
            id: 2,
            name: "dr. Budi Santoso, Sp.B",
            position: "Dokter Bedah Saraf, RSUP Dr. Sardjito",
            image: "/images/Avatar-2.png",
            testimonial:
                "Dengan Med.Brain, kami dapat memberikan diagnosis yang lebih cepat dan akurat kepada pasien stroke. Ini sangat membantu dalam pengambilan keputusan medis yang tepat.",
        },
        {
            id: 3,
            name: "dr. Siti Aminah, Sp.JP",
            position: "Dokter Jantung, RSUD Dr. Soetomo",
            image: "/images/Avatar-1.png",
            testimonial:
                "Med.Brain adalah alat yang sangat berguna dalam mendiagnosis stroke. Hasil analisisnya sangat membantu kami dalam menentukan langkah selanjutnya untuk pasien.",
        },
        {
            id: 4,
            name: "dr. Andi Wijaya, Sp.PD",
            position: "Dokter Penyakit Dalam, RSUP Persahabatan",
            image: "/images/Avatar-2.png",
            testimonial:
                "Saya sangat merekomendasikan Med.Brain kepada rekan-rekan sejawat. Ini adalah alat yang sangat membantu dalam mendiagnosis stroke dengan cepat dan akurat.",
        },
        {
            id: 5,
            name: "dr. Rina Lestari, Sp.KJ",
            position: "Dokter Spesialis Kedokteran Jiwa, RSJ Dr. Soeharto Heerdjan",
            image: "/images/Avatar-1.png",
            testimonial:
                "Med.Brain memberikan kami keunggulan dalam penanganan stroke akut. Sistem ini mampu mengklasifikasikan jenis stroke dari MRI hanya dalam hitungan detik, dan hasilnya sangat akurat. Ini sangat membantu saat kondisi darurat di IGD.",
        },
        {
            id: 6,
            name: "dr. Ahmad Zaki, Sp.BS",
            position: "Dokter Bedah Saraf, RSUP Dr. Hasan Sadikin",
            image: "/images/Avatar-2.png",
            testimonial:
                "Med.Brain adalah alat yang sangat berguna dalam mendiagnosis stroke. Hasil analisisnya sangat membantu kami dalam menentukan langkah selanjutnya untuk pasien.",
        }
    ];

    // Duplicate testimonials to create a seamless infinite scroll effect
    const scrollTestimonials = [...Testimoni, ...Testimoni];

    return (
        <>
            <div className="overflow-hidden py-4 my-8">
                <motion.div
                    className="flex"
                    animate={{ x: [0, -50 * Testimoni.length] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {scrollTestimonials.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative flex flex-col bg-white shadow-xl rounded-xl p-6 min-w-[300px] max-w-[300px] mx-3 h-[400px]"
                        >
                            <div className="absolute top-4 left-4 text-6xl text-[#3f9a82]/20 font-serif">"</div>
                            <div className="pt-6 pl-4 relative z-10 flex-grow">
                                <p className="text-gray-700 italic leading-relaxed">
                                    {item.testimonial}
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 mt-4 border-t pt-4 border-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-[#3f9a82]"
                                />
                                <div>
                                    <p className="font-semibold text-[#3f9a82]">{item.name}</p>
                                    <p className="text-gray-600 text-sm">{item.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}