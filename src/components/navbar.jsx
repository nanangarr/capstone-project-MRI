"use client"

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Menu, X, House, LayoutDashboard, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useRouter } from "next/router";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { isLoggedIn, logout, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const navLinks = [
        { name: "Home", path: "/", icon: House },
        { name: "Dashboard", path: "/users/prediksi", icon: LayoutDashboard },
    ];

    return (
        <header className="flex h-16 items-center justify-between px-4 md:px-5 py-2.5 bg-primary w-full fixed top-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold text-2xl text-white ml-3">MediPredict</span>
                </Link>
            </div>

            <div className="flex items-center">
                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex items-center">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <Link
                                href={link.path}
                                className={`flex items-center font-extralight text-lg transition-colors ${
                                    pathname === link.path
                                        ? "text-white font-semibold"
                                        : "text-white hover:text-[#d1f3e7]"
                                }`}
                            >
                                {link.icon && <link.icon className="mr-2" size={20} />}
                                {link.name}
                            </Link>
                            {index < navLinks.length - 1 && (
                                <span className="font-normal text-custom text-lg mx-3">
                                    |
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Profile/Login Section - Both Mobile & Desktop */}
                <div className="ml-0 md:ml-4">
                    {isLoggedIn ? (
                        <Dropdown
                            label={
                                <div className="flex items-center gap-2 text-white">
                                    <User size={28} className="bg-white text-black rounded-full p-1" />
                                    <span className="hidden md:inline">{user?.username || "User"}</span>
                                </div>
                            }
                            arrowIcon={false}
                            className="bg-primary text-white"
                        >
                            <DropdownItem icon={User} className="flex items-center gap-2">
                                <Link href="/users/profile">Profile</Link>
                            </DropdownItem>
                            <DropdownItem
                                icon={LogOut}
                                className="flex items-center gap-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </DropdownItem>
                        </Dropdown>
                    ) : (
                        <Button className="h-9 px-4 py-3 bg-secondary hover:bg-primary rounded-md w-full md:w-auto">
                            <Link href="/login" className="text-custom whitespace-nowrap text-lg font-semibold">
                                Login
                            </Link>
                        </Button>
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white ml-3"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu (Only Links) */}
            <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col absolute top-16 left-0 right-0 bg-primary py-4 px-4 gap-4 shadow-md z-10`}>
                <nav className="flex flex-col gap-3 items-start">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`flex items-center font-extralight text-lg transition-colors ${
                                pathname === link.path
                                    ? "text-white font-semibold"
                                    : "text-white hover:text-[#d1f3e7]"
                            }`}
                        >
                            {link.icon && <link.icon className="mr-2" size={20} />}
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}