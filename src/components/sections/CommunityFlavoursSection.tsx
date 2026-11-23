"use client";

import Image from "next/image";

export function CommunityFlavoursSection() {
  return (
    <section
      id="community-flavours"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8f0] via-[#fffbf6] to-[#fff8f0] border-y border-[#fed7aa]/35 py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f97316]/10 blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#ffedd5]/60 blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-orange-950/5 border border-orange-100/70">
          {/* Top Row: Dish Graphic (Left) & Narrative Content (Right) */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left Column: Dish Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]">
                {/* Soft Warm Glow Behind Plate */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full bg-gradient-to-br from-[#ffa12c]/20 to-[#ea580c]/15 blur-2xl z-0"
                />
                <Image
                  src="/assets/meat-rice-platter.png"
                  alt="Tanggy - Meat Rice and Regional Flavours"
                  width={960}
                  height={640}
                  className="relative z-10 w-full h-auto drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Heading & Paragraphs */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl font-extrabold tracking-tight text-[#0c1b33] leading-tight">
                More Than a Food Platform – <br />
                <span className="text-[#ea580c]">A Community of Flavours</span>
              </h2>

              {/* Accent Line */}
              <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316]" />

              {/* Description Paragraphs */}
              <div className="mt-5 space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Tanggy is being built around the idea that food brings people
                  together. We want to create an ecosystem where a customer can
                  discover a traditional Biryani, enjoy a delicious Meat Rice
                  meal, explore a regional Fish Rice speciality or order their
                  favourite South Indian breakfast from local food partners.
                </p>
                <p>
                  We want customers to discover something new while enjoying the
                  dishes they already love. Our platform aims to make local food
                  discovery convenient, accessible and enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Banner: Preservation of Traditional Food Businesses */}
          <div className="mt-8 sm:mt-10 rounded-2xl bg-[#fff8f2] border border-[#fddfc4] p-4 sm:p-5 shadow-2xs">
            <div className="flex items-center sm:items-start gap-3.5">
              {/* Storefront Icon */}
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#fddfc4] text-[#ea580c] shadow-xs">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3h18v4a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V3z" />
                  <path d="M4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10" />
                  <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
                </svg>
              </div>

              {/* Banner Text */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                We also want to help preserve the identity of traditional food
                businesses by bringing their offerings into the digital world.
                Because when a local vendor grows, the entire food community
                benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
