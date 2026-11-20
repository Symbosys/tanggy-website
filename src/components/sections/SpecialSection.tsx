"use client";

import Image from "next/image";

const comparisonRows = [
  {
    culture: "Local food specialities",
    approach: "Discover regional dishes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    culture: "Independent vendors",
    approach: "Empower local food businesses",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
      >
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
        <path d="m7 13 4 4" />
        <path d="M17 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      </svg>
    ),
  },
  {
    culture: "Family and traditional recipes",
    approach: "Celebrate culinary identity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
      >
        <path d="M6 13.8a4.5 4.5 0 1 1 2-8.5 4.5 4.5 0 0 1 8 0 4.5 4.5 0 1 1 2 8.5" />
        <path d="M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    ),
  },
  {
    culture: "Limited local visibility",
    approach: "Digital customer reach",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    culture: "Multiple food categories",
    approach: "One food discovery platform",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.3}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export function SpecialSection() {
  return (
    <section
      id="special"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffbf8] via-[#fff8f2] to-[#fef5ea] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* 1. LEFT SCREEN-EDGE WARM PEACH CIRCLE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 sm:-left-24 lg:-left-32 top-[46%] sm:top-[48%] -translate-y-1/2 h-36 w-36 sm:h-48 sm:w-48 lg:h-60 lg:w-60 rounded-full bg-gradient-to-r from-[#fed7aa] via-[#fde5d2] to-[#ffedd5]/35 border border-[#fbcba6]/50 shadow-[0_4px_20px_rgba(254,215,170,0.3)] z-0"
      />

      {/* 2. RIGHT SCREEN-EDGE WARM PEACH CIRCLE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 sm:-right-18 lg:-right-24 top-[54%] sm:top-[56%] -translate-y-1/2 h-44 w-44 sm:h-56 sm:w-56 lg:h-72 lg:w-72 rounded-full bg-gradient-to-l from-[#fed7aa] via-[#fde5d2] to-[#ffedd5]/35 border border-[#fbcba6]/50 shadow-[0_4px_20px_rgba(254,215,170,0.3)] z-0"
      />

      {/* MAIN CONTENT CONTAINER (Aligned with above section: max-w-7xl px-4 sm:px-6 lg:px-8) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP ROW: Title & Subtitle (Left) + 3D Orange Cloche with Sun Circle (Right) */}
        <div className="relative z-0 grid items-center gap-3 sm:gap-4 lg:grid-cols-12">
          {/* Left Column: Eyebrow, Heading & Subtitle */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ffedd5] px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-bold text-[#ea580c] shadow-2xs border border-[#fed7aa]">
              {/* Chef Hat SVG */}
              <svg
                className="h-3.5 w-3.5 shrink-0 text-[#ea580c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 13.8a4.5 4.5 0 1 1 2-8.5 4.5 4.5 0 0 1 8 0 4.5 4.5 0 1 1 2 8.5" />
                <path d="M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4z" />
                <line x1="6" y1="17" x2="18" y2="17" />
              </svg>
              <span>What Makes Tanggy Special?</span>
            </div>

            {/* Main Title */}
            <h2 className="mt-1.5 sm:mt-2 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl lg:text-[2.35rem] leading-[1.15]">
              What Makes Tanggy{" "}
              <span className="relative inline-block text-[#ea580c]">
                Different?
                {/* Curved Orange Brush Swoosh Underline */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 20"
                  className="absolute -bottom-1 left-0 w-full h-2.5 sm:h-3 text-[#f97316]"
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

            {/* Subtitle */}
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover what sets Tanggy apart from the rest.
            </p>
          </div>

          {/* Right Column: 3D Cloche Visual with Warm Peach Sun Circle DIRECTLY BEHIND IT */}
          <div className="relative flex items-center justify-center lg:justify-end lg:col-span-5 lg:pr-2">
            <div className="relative flex items-center justify-center w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px] translate-y-2 sm:translate-y-3 lg:translate-y-5">
              {/* 
                Sun Circle is positioned behind the cloche:
                - shifted slightly right (left-[56%]) so it is clearly visible to the right of the chef hat
                - positioned down so its bottom half tucks naturally behind the comparison table card
              */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[54%] sm:left-[55%] lg:left-[56%] -translate-x-1/2 -top-1 sm:-top-2 lg:-top-3 h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[410px] lg:w-[410px] rounded-full bg-gradient-to-br from-[#fed7aa] via-[#fde5d2] to-[#ffedd5] border border-[#fbcba6]/70 shadow-[0_4px_30px_rgba(254,215,170,0.55)] z-0"
              />

              {/* Cloche Image */}
              <div className="relative z-10 w-full aspect-[3/2] drop-shadow-[0_12px_24px_rgba(234,88,12,0.18)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/assets/special-cloche.png"
                  alt="3D Orange Cloche Platter with Chef Hat and Steam"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 340px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: COMPARISON TABLE CONTAINER */}
        <div className="relative z-10 mt-3 sm:mt-4">
          {/* Comparison Table Card (has z-10 and opaque bg, floats cleanly above background shades) */}
          <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#fed7aa] bg-white/95 shadow-[0_4px_16px_rgba(234,88,12,0.06)] backdrop-blur-xs">
            {/* Header Row: Always 2 Columns for side-by-side comparison on all devices */}
            <div className="grid grid-cols-2 border-b border-[#fed7aa] bg-gradient-to-r from-[#fff7ed] via-[#ffedd5]/60 to-[#fff4e8]">
              {/* Column 1 Header */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 border-r border-[#fed7aa]">
                {/* Star Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f97316] shrink-0"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                  Traditional Food Culture
                </h3>
              </div>

              {/* Column 2 Header */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5">
                {/* Rocket Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c] shrink-0"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
                  <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
                </svg>
                <h3 className="text-[11px] sm:text-xs md:text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                  Our Approach
                </h3>
              </div>
            </div>

            {/* Table Body: 5 Rows, responsive side-by-side grid */}
            <div className="divide-y divide-orange-100/70">
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 hover:bg-orange-50/40 transition-colors duration-150"
                >
                  {/* Column 1 */}
                  <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2 border-r border-orange-100/70">
                    <div className="flex h-5.5 w-5.5 sm:h-6.5 sm:w-6.5 lg:h-7 lg:w-7 shrink-0 items-center justify-center rounded-md sm:rounded-lg bg-[#ffedd5] shadow-2xs border border-[#fed7aa]/60">
                      {row.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-700 leading-tight">
                      {row.culture}
                    </span>
                  </div>

                  {/* Column 2 */}
                  <div className="flex items-center px-3 py-1.5 sm:px-5 sm:py-2">
                    <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-900 leading-tight">
                      {row.approach}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Goal Banner (Left) + Indian Heritage Monument (Right) */}
        <div className="relative z-10 mt-3 sm:mt-3.5 grid items-end gap-3 sm:gap-4 lg:grid-cols-12">
          {/* Left: Mission Goal Banner Card */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-gradient-to-r from-[#fff7ed] via-[#ffedd5]/80 to-[#fff4e8] border border-[#fed7aa] p-2 sm:p-2.5 px-3 sm:px-4 shadow-xs backdrop-blur-xs">
              {/* Bullseye target SVG */}
              <div className="shrink-0 flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-xl bg-[#ea580c]/10 text-[#ea580c] border border-orange-200">
                <svg
                  className="h-4 w-4 sm:h-4.5 sm:w-4.5"
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

              <p className="text-[11px] sm:text-[0.88rem] lg:text-[0.92rem] font-medium text-slate-800 leading-snug">
                Our goal is to bridge the gap between{" "}
                <span className="font-extrabold text-[#ea580c]">tradition</span>{" "}
                and{" "}
                <span className="font-extrabold text-[#ea580c]">
                  technology
                </span>
                , bringing authentic food closer to you.
              </p>
            </div>
          </div>

          {/* Right: Indian Heritage Monument Illustration */}
          <div className="relative flex justify-center lg:justify-end lg:col-span-5">
            <div className="relative w-44 sm:w-56 lg:w-68 drop-shadow-xs transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/assets/story-skyline.png"
                alt="Indian heritage architectural monument sketch"
                width={360}
                height={120}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
