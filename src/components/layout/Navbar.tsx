"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks } from "@/lib/content";

const allNavItems = [{ label: "Home", href: "#top" }, ...navLinks];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");

  const headerRef = useRef<HTMLElement>(null);
  const orderBtnRef = useRef<HTMLAnchorElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (window.scrollY < 260) {
        setActiveSection("top");
        return;
      }

      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection("top");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Subtle luxury GSAP magnetic hover on Order Now button (no cheap icon wiggles)
  useEffect(() => {
    const btn = orderBtnRef.current;
    if (!btn) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
      xTo(gsap.utils.clamp(-7, 7, dx));
      yTo(gsap.utils.clamp(-5, 5, dy));
    };

    const onLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.65,
        ease: "elastic.out(1, 0.45)",
      });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Smooth mobile drawer cascade when opened
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        drawerRef.current,
        { y: -12, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.28,
          ease: "power3.out",
          clearProps: "opacity,transform",
        }
      );
      gsap.fromTo(
        ".drawer-item",
        { x: -12, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.26,
          stagger: 0.035,
          ease: "power2.out",
          clearProps: "opacity,transform",
        }
      );
    }, drawerRef);

    return () => ctx.revert();
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-5 sm:pt-3 lg:px-6 xl:px-8"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full border bg-white/95 backdrop-blur-xl transition-[box-shadow,border-color,padding] duration-300 2xl:max-w-[1400px] ${
          scrolled
            ? "border-orange-100/90 py-1.5 shadow-[0_12px_36px_-10px_rgba(234,88,12,0.18)] sm:py-2"
            : "border-orange-100/70 py-2 shadow-[0_10px_30px_-10px_rgba(234,88,12,0.12)] sm:py-2.5"
        }`}
      >
        <nav className="flex items-center justify-between gap-2 px-3 sm:px-5 lg:px-4 xl:px-6">
          {/* Left: Horizontal Tanggy Brand Lockup + Subtle Divider */}
          <div className="flex shrink-0 items-center">
            <Link
              href="#top"
              className="group flex items-center gap-1 transition-transform duration-300 hover:scale-[1.02] sm:gap-1.5"
            >
              <div className="relative h-8 w-8 shrink-0 overflow-hidden sm:h-9 sm:w-9">
                <Image
                  src="/logo.png"
                  alt="Tanggy logo"
                  width={64}
                  height={64}
                  className="absolute left-1/2 -top-[2px] h-14 w-14 max-w-none -translate-x-1/2 object-contain mix-blend-multiply sm:-top-[3px] sm:h-16 sm:w-16"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[19px] font-bold leading-none tracking-tight text-[#111827] sm:text-[22px]">
                  <span className="text-[#ea580c]">t</span>anggy
                  <span className="text-[#ea580c]">.</span>
                </span>
                <span className="mt-0.5 whitespace-nowrap font-script text-[11px] leading-none text-[#374151] sm:text-[13px]">
                  Taste Beyond Ordinary
                </span>
              </div>
            </Link>

            <div className="ml-4 hidden h-7 w-px bg-gray-200/80 xl:ml-5 xl:block" />
          </div>

          {/* Center: Clean Navigation Links with Active Orange Pill */}
          <div className="hidden items-center gap-0.5 lg:flex xl:gap-1.5 2xl:gap-2">
            {allNavItems.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full py-1.5 text-[12.5px] font-semibold transition-colors duration-200 xl:py-2 xl:text-sm ${
                    isActive
                      ? "bg-linear-to-r from-[#f97316] to-[#dc4c07] px-3.5 text-white shadow-md shadow-orange-500/25 xl:px-4.5"
                      : "px-2 text-[#1f2937] hover:bg-orange-50/80 hover:text-[#ea580c] xl:px-3.5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right: Search Icon & Order Now CTA (Desktop) */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            <a
              href="#food"
              aria-label="Explore food"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1e6] text-[#9a3412] transition-colors duration-200 hover:bg-[#ffe2cc] hover:text-[#ea580c] xl:h-10 xl:w-10"
            >
              <svg
                className="h-4 w-4 xl:h-[18px] xl:w-[18px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>

            <a
              ref={orderBtnRef}
              href="#app"
              className="animate-shimmer inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-[#f97316] to-[#dc4c07] px-4 py-2 text-[13px] font-bold text-white shadow-lg shadow-orange-500/30 transition-shadow duration-200 hover:shadow-xl hover:shadow-orange-500/45 xl:gap-2 xl:px-5 xl:py-2.5 xl:text-sm"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span>Order Now</span>
            </a>
          </div>

          {/* Tablet & Mobile Right Controls */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="#food"
              aria-label="Explore food"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1e6] text-[#9a3412] transition-colors hover:bg-[#ffe2cc]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>

            <a
              href="#app"
              className="animate-shimmer hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-[#f97316] to-[#dc4c07] px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/25 sm:inline-flex"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span>Order Now</span>
            </a>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-100 bg-white text-[#1f2937] shadow-xs transition-transform active:scale-95 sm:h-10 sm:w-10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-5 w-5"
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
          </div>
        </nav>
      </div>

      {/* Mobile & Tablet Drawer Backdrop + Panel */}
      {menuOpen && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-black/15 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div
            ref={drawerRef}
            className="mx-auto mt-2.5 w-full max-w-lg overflow-hidden rounded-3xl border border-orange-100 bg-white/95 p-4 shadow-2xl shadow-orange-500/15 backdrop-blur-2xl sm:p-5 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {allNavItems.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`drawer-item flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-linear-to-r from-[#f97316] to-[#dc4c07] text-white shadow-sm shadow-orange-500/25"
                        : "text-[#1f2937] hover:bg-orange-50 hover:text-[#ea580c]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`h-4 w-4 ${isActive ? "text-white" : "text-[#ea580c] opacity-60"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                );
              })}

              <div className="drawer-item mt-3 border-t border-gray-100 pt-4">
                <a
                  href="#app"
                  className="animate-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#f97316] to-[#dc4c07] py-3 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-transform active:scale-[0.98]"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                    />
                  </svg>
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
