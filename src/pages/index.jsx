"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-[125px] py-6">
        <div className="flex flex-col justify-center gap-6 max-w-xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            AI-Based Stroke Detection and Classification from MRI Images
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/users/prediksi">
            <Button>Ke Dashboard</Button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="images/hero.png" alt="Gambar globe" className="w-56 md:w-auto max-w-md h-auto" />
        </div>
      </div>
    </div>
  );
}
