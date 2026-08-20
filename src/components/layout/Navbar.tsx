"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scrollSpy logic
      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      const currentSection = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-all duration-500 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-brand-border/80 bg-white/85 p-2.5 shadow-xl shadow-brand-primary/10 backdrop-blur-xl"
            : "border-brand-border/40 bg-white/60 p-3 shadow-md backdrop-blur-md"
        }`}
      >
        <nav className="flex items-center justify-between px-3 sm:px-5">
          {/* Logo with Glow Ring */}
          <Link
            href="#"
            className="group relative flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-brand-primary-light to-brand-primary opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75" />
              <Image
                src="/logo.png"
                alt="Tanggy logo"
                width={120}
                height={44}
                className="relative h-9 w-auto object-contain transition-all"
                priority
              />
            </div>
            <span className="hidden items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-[11px] font-extrabold text-brand-primary sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse-live" />
              Live
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 rounded-full border border-brand-border/40 bg-brand-surface-warm/80 p-1.5 md:flex">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                      : "text-brand-text-muted hover:bg-brand-surface-elevated hover:text-brand-primary"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTA Button */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#app"
              className="animate-shimmer relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-flame px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/50"
            >
              <span>Get App</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-text shadow-sm transition-transform duration-300 active:scale-95 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-5 w-5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-md overflow-hidden rounded-3xl border border-brand-border/80 bg-white/95 p-5 shadow-2xl shadow-brand-primary/20 backdrop-blur-2xl transition-all duration-300 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-brand-text hover:bg-brand-surface-warm"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg
                    className="h-4 w-4 text-brand-primary opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              );
            })}

            <div className="mt-2 border-t border-brand-border/60 pt-4">
              <a
                href="#app"
                className="animate-shimmer flex items-center justify-center gap-2 rounded-2xl gradient-flame py-3.5 text-center text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-brand-primary/30"
                onClick={() => setMenuOpen(false)}
              >
                <span>Download Tanggy App</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
