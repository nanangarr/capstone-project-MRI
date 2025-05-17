import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogOut, Users, History, Brain, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function SidebarAdmin() {
    const router = useRouter();
    const currentPath = router.pathname;
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    const sidebarLinks = [
        { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Data Users", path: "/admin/users", icon: Users }
    ];

    return (
        <>
            <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r z-40 overflow-y-auto flex flex-col justify-between">
                {/* Main menu links */}
                <div className="flex flex-col p-2 gap-1 flex-grow">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${currentPath.startsWith(link.path)
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            {link.icon && <link.icon size={20} />}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>

                {/* logout at the bottom as footer */}
                <div className="p-2 border-t0">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors "
                    >
                        <LogOut size={20} />
                        <span className="font-semibold">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}