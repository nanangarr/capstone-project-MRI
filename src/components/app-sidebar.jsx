import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutDashboard, LogOut, Users, History, Brain, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export function AppSidebar({ collapsed, setCollapsed }) {
    const router = useRouter();
    const currentPath = router.pathname;
    const { logout } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setCollapsed]);

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    const sidebarLinks = [
        { name: "Prediksi", path: "/users/prediksi", icon: Brain },
        { name: "Pasien", path: "/users/pasien", icon: Users },
        { name: "History", path: "/users/history", icon: History },
    ];

    const logoutLink = { name: "LogOut", path: "/login", icon: LogOut };

    return (
        <>
            <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] ${collapsed ? 'w-16' : 'w-64'} bg-primary border-r z-40 overflow-y-auto flex flex-col justify-between transition-all duration-300`}>
                {/* Main menu links */}
                <div className="flex flex-col p-2 gap-1">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${currentPath === link.path
                                ? "bg-secondary"
                                : "text-white hover:bg-[#9fdabf] hover:text-primary"
                                } ${collapsed ? 'justify-center' : ''}`}
                            title={collapsed ? link.name : ""}
                        >
                            {link.icon && <link.icon size={20} />}
                            {!collapsed && <span>{link.name}</span>}
                        </Link>
                    ))}
                </div>

                {/* Collapsible toggle button */}
                <div className={`fixed top-19 z-50 transition-all duration-300`} style={{ left: collapsed ? '4.5rem' : '16.5rem', }}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary text-white shadow-md hover:bg-[#9fdabf] hover:text-primary" onClick={() => setCollapsed(!collapsed)} >
                        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </Button>
                </div>

                {/* logout at the bottom as footer */}
                <div className="p-2 border-t border-[#9fdabf]/30">
                    <button
                        onClick={handleLogout}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-white hover:bg-[#9fdabf] hover:text-primary ${collapsed ? 'justify-center' : ''}`}
                        title={collapsed ? "Logout" : ""}
                    >
                        <LogOut size={20} />
                        {!collapsed && <span className="font-semibold">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Invisible overlay to close sidebar on mobile when clicked outside */}
            {collapsed && <div
                className="fixed inset-0 bg-black/20 z-30 lg:hidden"
                onClick={() => setCollapsed(true)}
                style={{ display: 'none' }} 
            />}
        </>
    );
}
