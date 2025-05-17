import React, { useState } from "react";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export function NavbarAdmin() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { logout} = useAuth();
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        logout();
        router.push("/login"); // Redirect to the homepage after logout
        setDropdownOpen(false); // Close dropdown
    };

    return (
        <>
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

                    {/* Profile Section */}
                    <div className="flex items-center ml-4 pl-4 border-l">
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-600 hover:text-primary"
                                onClick={toggleDropdown}
                            >
                                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User size={20} className="text-primary" />
                                </div>
                            </Button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                href="/admin/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setDropdownOpen(false)}
                                            >
                                                Profil
                                            </Link>
                                        </li>
                                        <li>
                                            <div
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
