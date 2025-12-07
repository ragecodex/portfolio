"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    navItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-4">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollToSection(href)}
                className={`text-sm font-normal tracking-wide transition-all duration-300 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md cursor-pointer ${
                  activeSection === href.substring(1)
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 bg-black/90 rounded-lg p-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollToSection(href)}
                  className={`block w-full text-left px-4 py-2 text-sm font-normal tracking-wide transition-all duration-300 rounded ${
                    activeSection === href.substring(1)
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
