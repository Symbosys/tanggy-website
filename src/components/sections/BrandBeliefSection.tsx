"use client";

import Image from "next/image";

function GlobeIcon({
  className = "w-4 h-4 text-[#ea580c]",
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
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HeartIcon({
  className = "w-4 h-4 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function StarIcon({
  className = "w-4 h-4 text-[#ea580c]",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ChefHatIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function BrandBeliefSection() {
  return (
    <section
      id="brand-belief"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#fed7aa]/35 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#ffedd5]/70 blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* SINGLE UNIFIED MAIN BOX (COMPACT & SNUG LAYOUT)              */}
        {/* ============================================================ */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-[#fffdfa] border border-[#fddfc4] shadow-lg shadow-orange-950/5">
          {/* Top-left corner decorative organic sweep */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-28 h-16 sm:w-40 sm:h-24 bg-gradient-to-br from-[#ea580c]/15 to-transparent rounded-br-[40px] z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#f97316]/10 blur-xl z-0"
          />

          {/* Left middle organic curve accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-12 sm:w-16 h-36 bg-gradient-to-r from-[#ea580c]/10 to-transparent rounded-r-full z-0"
          />

          {/* Bottom-right orange wave sweep */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-3.5 sm:h-4 lg:h-5 w-48 sm:w-72 lg:w-96 bg-gradient-to-l from-[#ea580c] via-[#f97316] to-transparent rounded-tl-full z-10"
          />

          {/* ------------------------------------------------------------ */}
          {/* TOP HALF: OUR BRAND BELIEF                                   */}
          {/* ------------------------------------------------------------ */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 sm:gap-6 lg:gap-8 px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:pt-8 lg:pb-4">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#fcdbbd] bg-[#fdeee0] px-3 py-1 text-xs font-semibold text-[#ea580c]">
                <span className="text-sm">🤝</span>
                <span>Our Brand Belief</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-[#0c1b33] leading-tight">
                Our Brand <span className="text-[#ea580c]">Belief</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed text-[#4a5568] max-w-xl font-normal">
                We believe that authentic food should not be limited by
                geography. A small food vendor should have the opportunity to
                become a recognised local favourite.
              </p>

              {/* 3-Column Pill Card */}
              <div className="rounded-xl sm:rounded-full bg-[#fff6ec] border border-[#fcdcc0] p-2 sm:px-4 sm:py-2.5 shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#fedec2] gap-2 sm:gap-0">
                  {/* Item 1: Global Access */}
                  <div className="flex items-center gap-2.5 sm:pr-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c]">
                      <GlobeIcon className="w-4 h-4 text-[#ea580c]" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-[13px] text-[#0c1b33]">
                        Global Access
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#64748b]">
                        Discover food everywhere
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Support Local */}
                  <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c]">
                      <HeartIcon className="w-4 h-4 text-[#ea580c]" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-[13px] text-[#0c1b33]">
                        Support Local
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#64748b]">
                        Empower local vendors
                      </div>
                    </div>
                  </div>

                  {/* Item 3: Celebrate Flavours */}
                  <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-3">
                    <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#fee5cf] text-[#ea580c]">
                      <StarIcon className="w-4 h-4 text-[#ea580c]" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-[13px] text-[#0c1b33]">
                        Celebrate Flavours
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#64748b]">
                        Explore beyond limits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Column: Steaming Biryani (Image 2) */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-1 sm:py-2">
              {/* Soft Peach Circular Glow Backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#ffa12c]/20 to-[#ea580c]/15 blur-xl z-0"
              />

              {/* Chef Hat Circular Badge on top right */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-1 sm:top-1 sm:right-2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#ea580c] to-[#f97316] text-white shadow-md shadow-orange-500/30 border-2 border-white"
              >
                <ChefHatIcon className="w-5 h-5" />
              </div>

              {/* Image 2: Biryani Platter */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] flex items-center justify-center">
                <Image
                  src="/assets/brand-belief-biryani.png"
                  alt="Tanggy - Our Brand Belief Authentic Biryani"
                  width={640}
                  height={426}
                  className="w-full max-h-[190px] sm:max-h-[220px] lg:max-h-[230px] h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* ELEGANT COMPACT MIDDLE DIVIDER LINE                          */}
          {/* ------------------------------------------------------------ */}
          <div className="relative w-full px-5 sm:px-8 lg:px-10 my-1 sm:my-2">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#fcdcc0] to-transparent" />
          </div>

          {/* ------------------------------------------------------------ */}
          {/* BOTTOM HALF: THE ROAD AHEAD                                  */}
          {/* ------------------------------------------------------------ */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-5 sm:gap-6 lg:gap-8 px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:pt-4 lg:pb-8">
            {/* Left Graphic Column: Image 3 (3D Delivery Rider on Winding Road to City) */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-1 sm:py-2 order-2 lg:order-1">
              {/* Soft warm glow backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#ffa12c]/15 to-[#ea580c]/10 blur-xl z-0"
              />

              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] flex items-center justify-center">
                <Image
                  src="/assets/road-ahead-delivery.png"
                  alt="Tanggy - The Road Ahead Food Delivery Network"
                  width={1024}
                  height={682}
                  className="w-full max-h-[200px] sm:max-h-[230px] lg:max-h-[240px] h-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  priority={false}
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3 relative z-10 order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#fcdbbd] bg-[#fdeee0] px-3 py-1 text-xs font-semibold text-[#ea580c]">
                <span className="text-sm">🚩</span>
                <span>The Road Ahead</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-[#0c1b33] leading-tight">
                The Road <span className="text-[#ea580c]">Ahead</span>
              </h2>

              {/* 3 Paragraphs */}
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm lg:text-[14.5px] text-[#4a5568] leading-relaxed">
                <p>
                  Our journey is only beginning. We envision Tanggy growing into
                  a trusted platform that brings together different food
                  categories, regional cuisines and local food communities
                  across cities.
                </p>
                <p>
                  As we expand, our focus will remain on discovering great local
                  food partners, building strong vendor relationships and
                  delivering meaningful customer experiences.
                </p>
                <p>
                  Every new vendor adds a new food story. Every new dish
                  introduces another flavour. And every customer becomes part of
                  our growing community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
