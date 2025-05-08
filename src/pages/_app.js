import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { AppSidebar } from "@/components/app-sidebar";
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";

// Auth check component wrapper
function AuthenticatedComponent({ Component, pageProps, collapsed }) {
  const { isLoggedIn, requireAuth, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    requireAuth(path);
  }, [router, isLoggedIn, requireAuth]);

  return <Component {...pageProps} collapsed={collapsed} />;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const [collapsed, setCollapsed] = useState(false);

  // Check if current page is an error page
  const isErrorPage = pageProps.statusCode && (pageProps.statusCode === 404 || pageProps.statusCode === 500);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update conditions for showing navbar and sidebar
  const showNavbar = !currentPath.includes("/login") && !currentPath.includes("/admin") && !isErrorPage;
  const showSidebar = !currentPath.includes("/login") && !currentPath.includes("/admin") && currentPath !== "/" && !isErrorPage;

  return (
    <>
      <AuthProvider>
        {showNavbar && <Navbar />}

        {showSidebar ? (
          <div className="flex min-h-screen pt-16">
            <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
              <AuthenticatedComponent Component={Component} pageProps={pageProps} collapsed={collapsed} />
            </main>
          </div>
        ) : (
          // Layout without sidebar for home, login, admin, and error pages
          <main className={showNavbar ? "pt-16" : ""}>
            <AuthenticatedComponent Component={Component} pageProps={pageProps} collapsed={collapsed} />
          </main>
        )}
      </AuthProvider>
    </>
  );
}