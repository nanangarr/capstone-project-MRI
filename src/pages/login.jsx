"use client";

import React from "react";

export default function FormLogin() {
    return (
        <div>
            <div className="container mx-auto flex flex-col justify-center items-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <input type="email" placeholder="Email" className="p-2 border rounded" required />
                    <input type="password" placeholder="Password" className="p-2 border rounded" required />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}
