"use client";

import React from "react";

export default function DataPasien({ collapsed }) {
    return (
        <>
            <div className={`container p-6 transition-all duration-300 ${collapsed ? 'max-w-[calc(100vw-4rem)]' : 'max-w-[calc(100vw-16rem)]'}`}>
                <h1 className="font-bold text-2xl mb-6">Data Pasien</h1>

            </div>
        </>
    )
}