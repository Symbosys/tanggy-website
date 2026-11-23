"use client";

import Image from "next/image";

function ChefHatIcon({
  className = "w-10 h-10 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

function ClocheIcon({
  className = "w-5 h-5 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        fill="currentColor"
      />
      <path d="M3 17c0-5 4-9 9-9s9 4 9 9" />
      <line x1="2" y1="19" x2="22" y2="19" strokeWidth="2.5" />
    </svg>
  );
}

function StoreIcon({
  className = "w-5 h-5 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
      <path d="M2 9h20" />
    </svg>
  );
}

function RibbonIcon({
  className = "w-5 h-5 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

export function PromiseSection() {
  return (
    <section
      id="promise"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8f0] via-[#fffbf6] to-[#fff5ea] border-t border-[#fed7aa]/35 py-12 sm:py-16 lg:py-20 text-center"
    >
      {/* ======================================================== */}
      {/* FULL-BLEED CORNER WAVE ACCENTS (ANCHORED TO SECTION)    */}
      {/* ======================================================== */}
      {/* Top-Left Organic Wave Swoop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-36 sm:w-56 md:w-72 lg:w-[380px] h-auto z-0 select-none"
      >
        <svg
          viewBox="0 0 440 240"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 L 440 0 C 350 25 260 55 180 115 C 105 170 50 205 0 240 Z"
            fill="url(#promise-orange-tl)"
          />
          <path
            d="M 0 65 C 80 65 160 95 230 150 C 275 185 300 220 310 240"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="promise-orange-tl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="60%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Right Organic Wave Swoop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 lg:w-[420px] h-auto z-0 select-none"
      >
        <svg
          viewBox="0 0 480 260"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M 480 260 L 40 260 C 120 225 210 190 290 135 C 360 80 420 35 480 0 Z"
            fill="url(#promise-orange-br)"
          />
          <path
            d="M 480 185 C 395 185 315 155 250 95 C 210 60 185 20 175 0"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="promise-orange-br" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top-Right Chef Hat Outline Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-4 sm:top-4 sm:right-12 md:right-20 lg:right-32 w-24 sm:w-36 md:w-48 lg:w-56 text-[#ea580c]/12 z-0 select-none"
      >
        <ChefHatIcon className="w-full h-auto stroke-[1.2]" />
      </div>

      {/* Floating Fresh Green Basil Leaves with gentle float animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-16 md:right-28 z-10 animate-float"
        style={{ animationDuration: "5s" }}
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 text-[#84cc16] rotate-45 drop-shadow-xs"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.5 9 8 9.9V13H8v-2h2V9c0-2 1.2-3 3-3 1 0 1.8.1 2 .1v2.3h-1.4c-1 0-1.2.5-1.2 1.2V11h2.5l-.4 2h-2.1v8.9c4.5-.9 8-4.9 8-9.9 0-5.5-4.5-10-10-10z" />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-18 right-8 sm:top-24 sm:right-24 md:right-40 z-10 animate-float"
        style={{ animationDuration: "6s", animationDelay: "1.2s" }}
      >
        <svg
          className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#65a30d] -rotate-12 drop-shadow-xs"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 .5-2.5-.5-3-1-1z" />
        </svg>
      </div>

      {/* Bottom-Left Golden Cloche Platter (Levitating Animation) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 left-2 sm:bottom-0 sm:left-4 md:left-8 lg:left-14 xl:left-20 z-20 select-none"
      >
        <div
          className="relative animate-float"
          style={{ animationDuration: "4.5s" }}
        >
          {/* Golden Cloche Image */}
          <div className="relative w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 drop-shadow-[0_14px_28px_rgba(234,88,12,0.22)]">
            <Image
              src="/assets/special-cloche.png"
              alt="Golden Cloche Platter"
              width={500}
              height={333}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
        {/* Synced Breathing Shadow under Cloche */}
        <div className="mx-auto -mt-2 h-3 w-20 sm:w-32 md:w-44 lg:w-52 rounded-full bg-orange-950/20 blur-md animate-pulse" />
      </div>

      {/* ======================================================== */}
      {/* CENTER CONTENT CONTAINER (COMPACT & BALANCED)            */}
      {/* ======================================================== */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Top Hat Icon Flanked by Gradient Lines */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-1 sm:mb-1.5">
            <span className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-gradient-to-r from-transparent via-[#ea580c]/60 to-[#ea580c] rounded-full" />
            <div className="text-[#ea580c] transition-transform duration-300 hover:scale-110">
              <ChefHatIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#ea580c]" />
            </div>
            <span className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-gradient-to-l from-transparent via-[#ea580c]/60 to-[#ea580c] rounded-full" />
          </div>

          {/* Title: Tanggy with Flanking Spark Rays */}
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 md:gap-4.5">
            {/* Left Spark Rays */}
            <div
              aria-hidden="true"
              className="flex items-center gap-0.5 sm:gap-1 shrink-0"
            >
              <span className="block w-1 sm:w-1.5 h-3 sm:h-4 bg-[#ea580c] rounded-full -rotate-45" />
              <span className="block w-1 sm:w-1.5 h-4 sm:h-5.5 bg-[#ea580c] rounded-full" />
              <span className="block w-1 sm:w-1.5 h-3 sm:h-4 bg-[#ea580c] rounded-full rotate-45" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-black tracking-wider text-[#0c1b33] uppercase leading-none font-sans select-none">
              TANGGY
            </h2>

            {/* Right Spark Rays */}
            <div
              aria-hidden="true"
              className="flex items-center gap-0.5 sm:gap-1 shrink-0"
            >
              <span className="block w-1 sm:w-1.5 h-3 sm:h-4 bg-[#ea580c] rounded-full -rotate-45" />
              <span className="block w-1 sm:w-1.5 h-4 sm:h-5.5 bg-[#ea580c] rounded-full" />
              <span className="block w-1 sm:w-1.5 h-3 sm:h-4 bg-[#ea580c] rounded-full rotate-45" />
            </div>
          </div>

          {/* Tagline Pill: THE TASTE OF TRADITION. */}
          <div className="mt-1.5 sm:mt-2 flex items-center justify-center gap-2.5 sm:gap-3.5">
            <span className="hidden sm:block h-[1.5px] w-6 sm:w-12 bg-[#ea580c]/40 rounded-full" />
            <div className="inline-block rounded-full bg-[#fde9d2] border border-[#fcd5b2] px-5 sm:px-8 py-0.5 sm:py-1 shadow-2xs transition-transform duration-300 hover:scale-105">
              <span className="text-[11px] sm:text-xs md:text-sm font-black tracking-widest text-[#ea580c] uppercase">
                THE TASTE OF TRADITION.
              </span>
            </div>
            <span className="hidden sm:block h-[1.5px] w-6 sm:w-12 bg-[#ea580c]/40 rounded-full" />
          </div>

          {/* Narrative Subtitle */}
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base lg:text-[16px] text-[#0c1b33] italic font-medium leading-normal max-w-2xl sm:max-w-3xl px-2">
            Every Dish Has a Story. Every Flavor Has a Tradition.{" "}
            <strong className="font-bold not-italic text-[#0c1b33]">
              Discover. Taste. Celebrate.
            </strong>
          </p>

          {/* 3-Item Feature Pill Bar */}
          <div className="mt-3.5 sm:mt-4.5 inline-block max-w-full">
            <div className="rounded-xl sm:rounded-full bg-white/95 border border-[#fcdcc0] px-4 sm:px-7 py-1.5 sm:py-2 shadow-sm shadow-orange-950/5 backdrop-blur-xs transition-shadow duration-300 hover:shadow-md hover:border-orange-300">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-5">
                {/* Item 1 */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c] transition-transform duration-200 group-hover:scale-110">
                    <ClocheIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ea580c]" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs md:text-[13px] text-[#0c1b33] tracking-wider uppercase whitespace-nowrap">
                    AUTHENTIC FOOD
                  </span>
                </div>

                {/* Divider 1 */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block h-4 sm:h-5 w-[1.5px] bg-[#fcdcc0] rounded-full shrink-0"
                />

                {/* Item 2 */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c] transition-transform duration-200 group-hover:scale-110">
                    <StoreIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ea580c]" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs md:text-[13px] text-[#0c1b33] tracking-wider uppercase whitespace-nowrap">
                    LOCAL VENDORS
                  </span>
                </div>

                {/* Divider 2 */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block h-4 sm:h-5 w-[1.5px] bg-[#fcdcc0] rounded-full shrink-0"
                />

                {/* Item 3 */}
                <div className="flex items-center gap-2 group cursor-default">
                  <div className="flex h-6.5 w-6.5 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c] transition-transform duration-200 group-hover:scale-110">
                    <RibbonIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ea580c]" />
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs md:text-[13px] text-[#0c1b33] tracking-wider uppercase whitespace-nowrap">
                    REGIONAL FLAVOURS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
