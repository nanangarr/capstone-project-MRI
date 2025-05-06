import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { AppSidebar } from "@/components/app-sidebar";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNavbar = !currentPath.includes("/login");
  const showSidebar = !currentPath.includes("/login") && currentPath !== "/";

  return (
    <>
      {showNavbar && <Navbar />}

      {showSidebar ? (
        <div className="flex min-h-screen pt-16">
          <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
            <Component {...pageProps} collapsed={collapsed} />
          </main>
        </div>
      ) : (
        // Layout tanpa sidebar untuk home dan login
        <main className={showNavbar ? "pt-16" : ""}>
          <Component {...pageProps} />
        </main>
      )}
    </>
  );
}