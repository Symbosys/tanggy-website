"use client";

import Image from "next/image";

export function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative Warm Ambient Elements (Matching Reference Design) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-24 sm:right-36 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#ffedd5]/80 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 right-10 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ffedd5]/60 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-4 sm:right-10 w-28 h-28 rounded-tl-full bg-[#f97316]/15 z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#fed7aa]/30 blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
        {/* ============================================================ */}
        {/* CARD 1: OUR MISSION                                          */}
        {/* ============================================================ */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#fffdfa] border border-[#fddfc4] shadow-md shadow-orange-950/5 transition-all duration-300 hover:shadow-xl hover:border-orange-300">
          {/* Bottom-left corner decorative arc */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -left-8 w-28 h-28 rounded-full border-2 border-orange-200/50"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            {/* Left: Target Graphic */}
            <div className="relative flex items-center justify-center py-2 sm:py-3 px-4 sm:px-5 md:w-[220px] lg:w-[240px] shrink-0">
              {/* Soft Peach Circular Glow Backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ffedd5]/80 z-0"
              />

              {/* 3 Spark Rays at top-left of target */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-2 left-4 sm:top-2.5 sm:left-5 z-10 text-[#ea580c]"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <line
                    x1="8"
                    y1="20"
                    x2="2"
                    y2="14"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="15"
                    y1="14"
                    x2="9"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="22"
                    y1="18"
                    x2="24"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 3D Target Graphic */}
              <Image
                src="/assets/mission-target.png"
                alt="Our Mission"
                width={742}
                height={682}
                className="relative z-10 w-24 sm:w-28 md:w-32 lg:w-36 max-h-[110px] sm:max-h-[120px] md:max-h-[125px] w-auto h-auto drop-shadow-md transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            {/* Vertical Divider */}
            <div
              aria-hidden="true"
              className="hidden md:block w-[1.5px] self-stretch my-4 bg-[#f0dfd0]"
            />

            {/* Right: Mission Content */}
            <div className="py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center md:text-left flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight leading-tight">
                <span className="text-[#0c1b33]">Our</span>{" "}
                <span className="text-[#ea580c]">Mission</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                To connect people with authentic local and regional food by
                empowering food vendors, expanding culinary choices and making
                traditional Indian flavours accessible through a convenient
                digital platform.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 2: OUR VISION                                           */}
        {/* ============================================================ */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#fffdfa] border border-[#fddfc4] shadow-md shadow-orange-950/5 transition-all duration-300 hover:shadow-xl hover:border-orange-300">
          {/* Bottom-right corner orange petal / wedge shape */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-tl-[50px] bg-gradient-to-tr from-[#ea580c] to-[#f97316] z-0"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            {/* Left: Vision Content */}
            <div className="order-2 md:order-1 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-center md:text-left flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight leading-tight">
                <span className="text-[#0c1b33]">Our</span>{" "}
                <span className="text-[#ea580c]">Vision</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                To become a recognised Indian food discovery and ordering platform
                that celebrates regional cuisines, supports local food
                entrepreneurs and connects diverse food cultures across cities.
              </p>
            </div>

            {/* Vertical Divider */}
            <div
              aria-hidden="true"
              className="hidden md:block order-2 w-[1.5px] self-stretch my-4 bg-[#f0dfd0]"
            />

            {/* Right: Lightbulb Graphic */}
            <div className="order-1 md:order-3 relative flex items-center justify-center py-2 sm:py-3 px-4 sm:px-5 md:w-[220px] lg:w-[240px] shrink-0">
              {/* Soft Peach Circular Glow Backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ffedd5]/80 z-0"
              />

              {/* 3D Lightbulb with Chef Hat Graphic */}
              <Image
                src="/assets/vision-bulb.png"
                alt="Our Vision"
                width={825}
                height={935}
                className="relative z-10 w-24 sm:w-28 md:w-32 lg:w-36 max-h-[110px] sm:max-h-[120px] md:max-h-[125px] w-auto h-auto drop-shadow-md transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
