import "@/styles/globals.css";
import Navbar from "@/components/Navbar"; // Perhatikan huruf besar di sini
import { useRouter } from "next/router";
import { AppSidebar } from "@/components/app-sidebar";
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { AnimatePresence, motion } from "framer-motion"; // <--- Import AnimatePresence dan motion

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

  const isErrorPage = pageProps.statusCode && (pageProps.statusCode === 404 || pageProps.statusCode === 500);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNavbar = !currentPath.includes("/admin") && !isErrorPage; 
  const showSidebar = !currentPath.includes("/login") &&
    !currentPath.includes("/admin") &&
    !currentPath.includes("/about") &&
    !currentPath.includes("/pendaftaran") &&
    !currentPath.includes("/register") && 
    !currentPath.includes("/contact") &&
    currentPath !== "/" && 
    !isErrorPage;

  return (
    <AuthProvider>
      {showNavbar && <Navbar />}

      <AnimatePresence mode='wait' initial={false}>
        {showSidebar ? (
          <div className="flex min-h-screen pt-16">
            <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-64'}`}>
              <AuthenticatedComponent Component={Component} pageProps={pageProps} collapsed={collapsed} />
            </main>
          </div>
        ) : (
    
          <motion.main
            key={router.pathname} 
            className={showNavbar ? "pt-16" : ""}
            initial={{ opacity: 0, x: currentPath.includes('/login') ? 30 : -30 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentPath.includes('/login') ? -30 : 30 }} 
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <AuthenticatedComponent Component={Component} pageProps={pageProps} collapsed={collapsed} />
          </motion.main>
        )}
      </AnimatePresence>
    </AuthProvider>
  );
}