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
        <header className="flex h-16 items-center justify-between px-4 md:px-5 py-2.5 bg-primary w-full fixed top-0 z-50 ">
            {/* Logo */}
            <Link href="/">
                <img className="w-[62px] h-7 md:w-[92px] md:h-10" alt="Logo" src="/vercel.svg" />
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-primary md:bg-transparent py-4 md:py-0 px-4 md:px-0 gap-4 md:gap-6 md:items-center shadow-md md:shadow-none z-10`}>
                <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            <Link
                                href={link.path}
                                className={`flex items-center font-extralight text-lg transition-colors ${pathname === link.path
                                    ? "text-white font-semibold"
                                    : "text-white hover:text-[#d1f3e7]"
                                    }`}
                            >
                                {link.icon && <link.icon className="mr-2" size={20} />}
                                {link.name}
                            </Link>
                            {index < navLinks.length - 1 && (
                                <span className="hidden md:block font-normal text-custom text-lg">
                                    |
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                {/* Login Button or Profile Dropdown */}
                {isLoggedIn ? (
                    <div className="ml-0 md:ml-4">
                        <Dropdown
                            label={
                                <div className="flex items-center gap-2 text-white">
                                    <User size={24} className="text-white" />
                                    <span className="hidden md:inline">{user?.username || "User"}</span>
                                </div>
                            }
                            arrowIcon={false}
                            className="bg-primary text-white"
                        >
                            <DropdownItem icon={User} className="flex items-center gap-2">
                                <Link href="/profile">Profile</Link>
                            </DropdownItem>
                            <DropdownItem
                                icon={LogOut}
                                className="flex items-center gap-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </DropdownItem>
                        </Dropdown>
                    </div>
                ) : (
                    <Button className="h-9 px-4 py-3 bg-secondary hover:bg-primary rounded-md w-full md:w-auto ml-0 md:ml-4">
                        <Link href="/login" className="text-custom whitespace-nowrap text-lg font-semibold">
                            Login
                        </Link>
                    </Button>
                )}
            </div>
        </header>
    );
}