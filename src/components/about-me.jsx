import React from "react";

export default function AboutMe() {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <img src="/images/bg-tutorial.png" alt="Background" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col items-center py-10 px-4">
                    <h2 className="text-white text-3xl font-bold mb-6">
                        Tentang <span className=" text-white">Kami</span>
                    </h2>

                    <div className="w-full max-w-3xl aspect-video bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                        <iframe
                            className="w-full h-full rounded-md"
                            src="https://www.youtube.com/embed/Y2bkBgQvO8U?si=HThan0CAFnvo9P4g"
                            title="MedBrain"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="max-w-3xl text-center mt-6">
                        <p className="text-sm md:text-base text-white">
                            Med.Brain adalah platform deteksi stroke berbasis AI yang menggunakan teknologi
                            CNN untuk menganalisis citra MRI dengan akurasi tinggi.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}