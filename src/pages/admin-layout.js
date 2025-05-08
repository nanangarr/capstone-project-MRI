import React from "react";
import { NavbarAdmin } from "@/components/navbar-admin";
import { SidebarAdmin } from "@/components/sidebar-admin";

export function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavbarAdmin />
            <SidebarAdmin />
            <main className="pt-16 pl-64">
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}