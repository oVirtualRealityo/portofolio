import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for mobile
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <>
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 1001,
            background: "#1a202c",
            color: "#ffffff",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {/* Navigation Bar */}
      <nav
        style={{
          position: isMobile ? "fixed" : "fixed",
          top: 0,
          left: 0,
          height: isMobile ? (isMenuOpen ? "100vh" : "0") : "100vh",
          width: isMobile ? "100%" : "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: isMobile ? "60px 20px 20px 20px" : "40px 20px",
          backgroundColor: "#1a202c",
          color: "#ffffff",
          boxShadow: "4px 0 12px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <Link
          href={{ pathname: "/" }}
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "1.1rem",
            marginBottom: "20px",
            transition: "color 0.2s",
          }}
        >
          Home
        </Link>
        <Link
          href={{ pathname: "/blog" }}
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "1.1rem",
            marginBottom: "20px",
            transition: "color 0.2s",
          }}
        >
          Blogs
        </Link>
        <Link
          href={{ pathname: "/about" }}
          style={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "1.1rem",
            marginBottom: "20px",
            transition: "color 0.2s",
          }}
        >
          Over mij
        </Link>
      </nav>
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for mobile
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div
        style={{
          marginLeft: isMobile ? "0" : "200px", // Offset content for desktop
          transition: "margin-left 0.3s ease",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}