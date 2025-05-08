import React from "react";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavbarAdmin() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-50 px-4 flex items-center justify-between">
            {/* Left side - Logo/Brand */}
            <div className="flex items-center">
                <Link href="/admin/dashboard" className="flex items-center space-x-2">
                    <span className="font-bold text-2xl text-primary ml-3">MediPredict</span>
                </Link>
            </div>

            {/* Right side - User profile, notifications, etc */}
            <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
                    <Bell size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
                    <Settings size={20} />
                </Button>
                <div className="flex items-center ml-4 pl-4 border-l">
                    <Link href="/admin/profile" className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                            <User size={20} className="text-primary" />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-medium">Admin User</p>
                            <p className="text-xs text-gray-500">admin@medipredict.com</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}