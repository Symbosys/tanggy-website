"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function VisionSection() {
  const [visionOpen, setVisionOpen] = useState(false);

  useEffect(() => {
    if (!visionOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisionOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visionOpen]);

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8f0] via-[#fffbf6] to-[#fff8f0] border-y border-[#fed7aa]/35 py-12 sm:py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP ROW: Vision Copy (Left) + Food Visual (Right) */}
        <div className="grid items-center gap-5 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* LEFT: Headline, Description & CTA */}
          <div className="text-center lg:col-span-6 lg:text-left">
            {/* Pill Badge: Our Vision */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffedd5] px-3.5 py-1 text-xs sm:text-sm font-bold text-[#ea580c] shadow-xs border border-[#fed7aa]">
              {/* Bullseye target SVG */}
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#ea580c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span>Our Vision</span>
            </div>

            {/* Main Title with Orange Highlight & Swoosh */}
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-[2.6rem] leading-[1.15]">
              Bringing Local Food to{" "}
              <span className="relative inline-block text-[#ea580c]">
                Every Table
                {/* Curved Orange Brush Swoosh Underline */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 20"
                  className="absolute -bottom-1.5 left-0 w-full h-3 sm:h-4 text-[#f97316]"
                  fill="none"
                >
                  <path
                    d="M4 14 C 40 4, 130 3, 214 11"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 17 C 80 11, 150 10, 200 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h2>

            {/* Paragraph Text */}
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-[1.05rem] text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              To bring authentic regional food and traditional local
              specialities closer to people, while creating opportunities for
              local food vendors to reach more customers.
            </p>

            {/* CTA Button */}
            <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => setVisionOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-orange-500/25 transition-all duration-200 hover:from-[#ea580c] hover:to-[#c2410c] hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Read Full Vision</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT: Food Platter Graphic with Decorative Accents */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-6">
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[460px] flex items-center justify-center">
              {/* Soft warm circular peach glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-br from-[#fed7aa]/60 via-[#ffedd5]/40 to-transparent blur-2xl"
              />

              {/* 3 Orange Accent Rays (Top-Left of dish) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-3 left-6 sm:left-10 z-20"
              >
                <svg
                  viewBox="0 0 50 40"
                  className="h-6 w-8 sm:h-7 sm:w-9 text-[#f97316]"
                  fill="none"
                >
                  <path
                    d="M10 28 L2 14"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 24 L24 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 28 L46 14"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Food Image Container */}
              <div className="relative z-10 w-full aspect-[3/2] max-w-[400px] sm:max-w-[440px] lg:max-w-[460px] drop-shadow-[0_16px_25px_rgba(234,88,12,0.18)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/assets/vision-dish.png"
                  alt="Traditional regional food platter featuring Dosa, Idli, Sambar and Dum Biryani"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 460px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: 3 Feature Cards */}
        <div className="mt-3.5 sm:mt-4 lg:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5">
          {/* Card 1: Local Kitchens, Big Flavours */}
          <div className="group flex items-center gap-3 rounded-2xl bg-white/85 p-2.5 sm:p-3 border border-orange-100/80 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.08)] hover:border-orange-200 transition-all duration-200">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl bg-[#fff3e5] p-1 flex items-center justify-center">
              <Image
                src="/assets/vision-icon-kitchen.png"
                alt="Local Kitchens icon"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm sm:text-[0.95rem] font-bold text-slate-900 leading-snug">
                Local Kitchens, Big Flavours
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                Discover authentic food from your neighbourhood experts.
              </p>
            </div>
          </div>

          {/* Card 2: Traditional & Regional Dishes */}
          <div className="group flex items-center gap-3 rounded-2xl bg-white/85 p-2.5 sm:p-3 border border-orange-100/80 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.08)] hover:border-orange-200 transition-all duration-200">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl bg-[#fff3e5] p-1 flex items-center justify-center">
              <Image
                src="/assets/vision-icon-dishes.png"
                alt="Traditional Dishes icon"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm sm:text-[0.95rem] font-bold text-slate-900 leading-snug">
                Traditional &amp; Regional Dishes
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                From Biryani and Meat Rice to Dosa, Idli, Vada and more.
              </p>
            </div>
          </div>

          {/* Card 3: Supporting Local Vendors */}
          <div className="group flex items-center gap-3 rounded-2xl bg-white/85 p-2.5 sm:p-3 border border-orange-100/80 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.08)] hover:border-orange-200 transition-all duration-200 sm:col-span-2 lg:col-span-1">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl bg-[#fff3e5] p-1 flex items-center justify-center">
              <Image
                src="/assets/vision-icon-vendors.png"
                alt="Supporting Local Vendors icon"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm sm:text-[0.95rem] font-bold text-slate-900 leading-snug">
                Supporting Local Vendors
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                Helping small food makers reach more customers.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Purpose Banner with 3D Food Cart */}
        <div className="mt-3 sm:mt-3.5 lg:mt-4 relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#fff7ed] via-[#ffedd5]/50 to-[#fff4e8] border border-[#fed7aa] px-3.5 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5 shadow-xs">
          <div className="grid items-center gap-3 sm:gap-4 lg:grid-cols-12">
            {/* Left side: Target icon + Purpose Statement */}
            <div className="flex items-center gap-3 sm:gap-3.5 lg:col-span-7">
              <div className="shrink-0 flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-[#ea580c]/10 text-[#ea580c] border border-orange-200">
                <svg
                  className="h-5 w-5 sm:h-5.5 sm:w-5.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <p className="text-sm sm:text-base lg:text-[1.05rem] font-semibold text-slate-800 leading-snug">
                Our purpose is to make{" "}
                <span className="font-extrabold text-[#ea580c]">
                  discovering and enjoying
                </span>{" "}
                traditional food easier for everyone.
              </p>
            </div>

            {/* Right side: 3D Food Cart Illustration */}
            <div className="relative flex justify-center lg:justify-end lg:col-span-5">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] h-[70px] sm:h-[82px] lg:h-[90px]">
                <Image
                  src="/assets/vision-cart.png"
                  alt="3D Traditional Food Cart Illustration"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* READ FULL VISION MODAL */}
      {visionOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vision-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop blur */}
          <div
            onClick={() => setVisionOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Content */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-orange-100">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setVisionOpen(false)}
              className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              aria-label="Close vision details"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffedd5] px-3.5 py-1 text-xs font-bold text-[#ea580c]">
              <span>🎯 OUR VISION &amp; MISSION</span>
            </div>

            {/* Modal Heading */}
            <h3
              id="vision-modal-title"
              className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight"
            >
              Bringing Local Food to{" "}
              <span className="text-[#ea580c]">Every Table</span>
            </h3>

            {/* Modal Body Copy */}
            <div className="mt-6 space-y-4 text-justify text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Tanggy was created with a simple but meaningful vision: to
                bring authentic regional food and traditional local specialities
                closer to people, while creating opportunities for local food
                vendors to reach more customers.
              </p>

              <p>
                We believe that great food does not always come from big
                restaurant chains or expensive dining establishments. Sometimes,
                the most memorable Biryani comes from a small neighbourhood
                kitchen. The most satisfying Meat Rice is prepared by a local
                food expert. A simple Chicken Rice or Fish Rice can become
                someone&apos;s favourite meal because of its distinctive regional
                flavour.
              </p>
              <p>
                And sometimes, the perfect meal is a plate of freshly prepared
                dosa, idli, vada or another South Indian speciality.
              </p>
              <p>
                We want to celebrate these food experiences. Tanggy
                connects customers with local food vendors who understand their
                cuisine, respect traditional cooking methods and bring their own
                identity to every dish.
              </p>
              <p>
                Our purpose is not to change the way traditional food is
                prepared. Our purpose is to make discovering and enjoying that
                food easier.
              </p>

              {/* OUR MISSION Card */}
              <div className="relative my-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#f97316] p-5 sm:p-6 text-white shadow-xl shadow-orange-500/20 border border-orange-400/30">
                {/* Decorative subtle background quote watermark */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -bottom-4 text-white/10 select-none font-serif text-8xl font-black leading-none"
                >
                  &rdquo;
                </div>

                <span className="relative z-10 inline-block text-xs sm:text-sm font-extrabold tracking-widest text-[#fef08a] uppercase">
                  OUR MISSION
                </span>
                <p className="relative z-10 mt-2.5 text-base sm:text-lg lg:text-[1.08rem] font-semibold text-white leading-snug sm:leading-relaxed">
                  &ldquo;To connect people with authentic local and regional
                  food by empowering food vendors, expanding culinary choices
                  and making traditional Indian flavours accessible through a
                  convenient digital platform.&rdquo;
                </p>
              </div>

              {/* Highlighted Closing Box */}
              <div className="mt-8 rounded-2xl border-l-4 border-l-[#ea580c] bg-gradient-to-r from-[#fff3e5] to-[#fff8f0] p-5 sm:p-6 text-center shadow-xs">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">
                  To become a recognised Indian food discovery and ordering
                  platform that celebrates regional cuisines, supports local
                  food entrepreneurs and connects diverse food cultures across
                  cities.
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisionOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] px-8 py-2.5 text-sm font-semibold text-white shadow-md hover:from-[#ea580c] hover:to-[#c2410c] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
