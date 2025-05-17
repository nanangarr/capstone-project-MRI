import React, { useState, useEffect, useRef } from "react";
import CountUp from 'react-countup';
import { FaHospitalUser, FaUserFriends, FaUserMd, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Countups() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    const statsData = [
        { id: 1, label: 'Mitra', value: 23, icon: <FaUserFriends className="text-blue-500 text-3xl sm:text-4xl md:text-5xl" /> },
        { id: 2, label: 'Pengguna', value: 200, icon: <FaUserMd className="text-green-500 text-3xl sm:text-4xl md:text-5xl" /> },
        { id: 3, label: 'Pasien', value: 529, icon: <FaHospitalUser className="text-red-500 text-3xl sm:text-4xl md:text-5xl" /> },
        { id: 4, label: 'Prediksi', value: 765, icon: <FaBrain className="text-purple-500 text-3xl sm:text-4xl md:text-5xl" /> },
    ];

    return (
        <>
            <div ref={ref} className="py-6 sm:py-8 md:py-10 px-4 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {statsData.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0.6 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.6 }}
                                transition={{ duration: 1.5, delay: stat.id * 0.5 }}
                                className="mb-2 sm:mb-4"
                            >
                                {stat.icon}
                            </motion.div>
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                                {isInView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2}
                                        separator="."
                                        delay={0.2}
                                    />
                                ) : (
                                    0
                                )}+
                            </div>
                            <div className="text-gray-600 text-sm sm:text-base md:text-xl mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}