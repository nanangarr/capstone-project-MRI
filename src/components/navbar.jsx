import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Menu, X, House, LayoutDashboard, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { isLoggedIn, logout, user } = useAuth();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const hasSidebar = router.pathname.startsWith('/users') || 
                      (router.pathname.startsWith('/admin') && router.pathname !== '/admin');

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        logout();
        router.push("/");
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const fullNavLinks = [
        { name: "Home", path: "/"},
        { name: "About", path: "/about"},
        { name: "Account Submission", path: "/pendaftaran"},
        { name: "Contact", path: "/contact"},
    ];
    
    const simplifiedNavLinks = [
        { name: "Home", path: "/"},
    ];

    const navLinks = hasSidebar ? simplifiedNavLinks : fullNavLinks;

    return (
        <>
            <header className="flex h-16 items-center justify-between px-4 md:px-16 py-2.5 bg-primary w-full fixed top-0 z-50">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/images/Logo_1.png" alt="MedBrain logo" className="w-32" />
                    </Link>
                </div>

                <div className="flex items-center gap-5">
                    {/* Navigation Links - Desktop */}
                    <nav className="hidden md:flex items-center gap-4">
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
                                    <span className="font-normal text-custom text-lg mx-3">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* Profile/Login Section - Both Mobile & Desktop */}
                    <div className="ml-0 md:ml-4 relative">
                        {isLoggedIn ? (
                            <>
                                <button
                                    className="flex items-center space-x-2 text-white"
                                    onClick={toggleDropdown}
                                >
                                    <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center">
                                        <User size={20} className="text-primary" />
                                    </div>
                                    <span className="hidden md:block">{user?.name}</span>
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                                        <ul className="space-y-1">
                                            <li>
                                                <Link
                                                    href="/users/prediksi"
                                                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Dashboard
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    href="/users/profile"
                                                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    Profil
                                                </Link>
                                            </li>

                                            <li>
                                                <div
                                                    onClick={handleLogout}
                                                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
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
                                className={`flex items-center font-extralight text-lg transition-colors ${pathname === link.path
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
        </>
    );
}
