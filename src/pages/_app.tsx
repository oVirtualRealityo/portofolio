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

  // When a link is clicked on mobile, close the menu.
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            width:"100%",
            zIndex: 1001,
            background: "#1a202c",
            color: "#ffffff",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "2rem", // Increased font size for a larger burger icon
          }}
        >
          ☰
        </button>
      )}

      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: isMobile ? (isMenuOpen ? "100vh" : "0") : "100vh",
          width: isMobile ? "100%" : "200px",
          backgroundColor: "#1a202c",
          color: "#ffffff",
          boxShadow: "4px 0 12px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          overflow: "hidden",
          transition: "height 0.3s ease, padding 0.3s ease",
          padding: isMobile ? (isMenuOpen ? "60px 20px 20px 20px" : "0 20px") : "40px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {/* Only render links if we're not on mobile or if the menu is open */}
        {(!isMobile || isMenuOpen) && (
          <>
            <Link href="/" passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}
              >
                Home
              </a>
            </Link>
            <Link href={{pathname:"/blog"}} passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}
              >
                Blogs
              </a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}
              >
                Over mij
              </a>
            </Link>
            <Link href="/company" passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}
              >
                Over het bedrijf
              </a>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <a
                onClick={handleLinkClick}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}
              >
                Mijn projecten
              </a>
            </Link>
            
          </>
        )}
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