"use client";

import Image from "next/image";

interface TrackingFeature {
  title: string;
  description: string;
  icon: "clock" | "chart" | "handshake" | "bell";
}

const trackingFeatures: TrackingFeature[] = [
  {
    title: "Real-time status updates",
    description: "Watch your order move from kitchen to doorstep, live.",
    icon: "clock",
  },
  {
    title: "Accurate ETA",
    description: "Know exactly when your food arrives – no guessing.",
    icon: "chart",
  },
  {
    title: "Delivery partner tracking",
    description: "See who's bringing your meal and where they are.",
    icon: "handshake",
  },
  {
    title: "Push notifications",
    description: "Get notified at every step so you never miss a beat.",
    icon: "bell",
  },
];

export function OrderTrackingSection() {
  return (
    <section
      id="tracking"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* BACKGROUND DECORATIONS */}
      {/* Top Left Warm Ambient Glow & Wave Curve */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#fed7aa]/40 via-[#ffedd5]/30 to-transparent blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-72 sm:w-96 h-24 sm:h-32 z-0 opacity-60 overflow-hidden"
      >
        <svg viewBox="0 0 400 140" fill="none" className="w-full h-full">
          <path
            d="M0 0 L400 0 C320 60 220 120 0 140 Z"
            fill="url(#topWaveGrad)"
          />
          <defs>
            <linearGradient id="topWaveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* SECTION CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* LEFT COLUMN: HEADINGS & FEATURE CARDS */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-xl mx-auto lg:mx-0 w-full">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffedd5]/90 border border-orange-200/80 px-4 py-1 text-xs sm:text-sm font-bold text-[#ea580c] shadow-2xs w-fit">
              {/* Scooter Icon */}
              <svg
                className="h-4 w-4 shrink-0 text-[#ea580c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6.5" cy="17.5" r="3.5" />
                <circle cx="17.5" cy="17.5" r="3.5" />
                <path d="M5 14h5l3-6h4" />
                <path d="M18 8h2" />
                <path d="M9 14l3-6" />
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#ea580c"
                  stroke="none"
                />
              </svg>
              <span>Live Tracking</span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#0f2444] leading-[1.15]">
              Know exactly where your <br className="hidden sm:inline" />
              <span className="text-[#ea580c]">food</span> is
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed max-w-lg">
              From the moment you tap order to the knock on your door – follow
              every step in real time.
            </p>

            {/* 4 Feature Pill Cards (Compact Stack) */}
            <div className="mt-5 space-y-2.5 max-w-xl">
              {trackingFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between gap-3 sm:gap-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 sm:py-2.5 border border-[#fed7aa]/50 shadow-[0_3px_14px_rgba(234,88,12,0.04)] transition-all duration-300 hover:border-orange-300 hover:shadow-[0_6px_20px_rgba(234,88,12,0.1)] hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Feature Icon Container */}
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffedd5] to-[#fed7aa]/40 text-[#ea580c] shadow-2xs group-hover:scale-105 transition-transform">
                      {feature.icon === "clock" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                      {feature.icon === "chart" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      )}
                      {feature.icon === "handshake" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 11l2 2 4-4" />
                          <path d="M8 11l-2 2-4-4" />
                          <circle cx="12" cy="7" r="4" />
                          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      )}
                      {feature.icon === "bell" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-extrabold text-[#0f2444] leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5 truncate sm:whitespace-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Circular Orange Arrow Button */}
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-sm shadow-orange-500/25 group-hover:scale-110 group-hover:shadow-orange-500/40 transition-all">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: TWO PHONE MOCKUPS & DECORATIVE ROUTE */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-2 sm:py-4 w-full">
            {/* Top-Right Map Pin Marker */}
            <div className="pointer-events-none absolute -top-3 right-1 sm:right-3 lg:right-5 z-20 flex flex-col items-center">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-lg border border-orange-200/80">
                <svg
                  className="h-5 w-5 text-[#ea580c]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </div>
            </div>

            {/* Curved Dotted Route SVG */}
            <svg
              className="pointer-events-none absolute -top-1 right-6 sm:right-10 lg:right-12 w-52 sm:w-60 h-32 z-0 text-orange-400/60"
              viewBox="0 0 200 130"
              fill="none"
            >
              <path
                d="M 15 120 C 55 90, 95 130, 140 60 C 160 30, 175 25, 190 15"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                strokeLinecap="round"
              />
            </svg>

            {/* DUAL PHONES WRAPPER */}
            <div className="relative flex items-center justify-center max-w-full">
              {/* PHONE 1: ORDER STEPPER SCREEN (Tilted slightly counter-clockwise) */}
              <div className="relative z-20 w-[210px] xs:w-[230px] sm:w-[245px] lg:w-[260px] aspect-[506/985] shrink-0 -rotate-3 transition-transform duration-500 hover:rotate-0 drop-shadow-[0_20px_50px_rgba(15,36,68,0.22)]">
                {/* iPhone Frame */}
                <div className="relative h-full w-full rounded-[42px] sm:rounded-[46px] bg-[#181d24] p-2 sm:p-2.5 border-[2px] border-[#2c333f] shadow-inner ring-1 ring-white/10 flex flex-col">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-18 sm:w-20 h-4.5 sm:h-5 bg-black rounded-full z-30 flex items-center justify-between px-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900 border border-slate-700/60" />
                    <span className="h-2 w-2 rounded-full bg-blue-950/80 border border-blue-900/60" />
                  </div>

                  {/* Screen Content - Compact spacing without huge bottom gaps */}
                  <div className="h-full w-full rounded-[34px] sm:rounded-[38px] overflow-hidden bg-[#faf8f5] p-3 sm:p-3.5 pt-2 sm:pt-2.5 text-slate-800 flex flex-col justify-start space-y-1.5 sm:space-y-2">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-slate-900 px-1 pt-1 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5 text-slate-700">
                          {/* Signal */}
                          <svg
                            className="h-3 w-3 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
                          </svg>
                          {/* Battery */}
                          <div className="w-4.5 h-2.5 rounded-sm border border-slate-700 p-0.5 flex items-center">
                            <div className="w-full h-full bg-slate-800 rounded-2xs" />
                          </div>
                        </div>
                      </div>

                      {/* Order Title & Live Indicator */}
                      <div className="flex items-center justify-between pt-0.5">
                        <p className="text-xs sm:text-sm font-extrabold text-[#0f2444]">
                          Order #TG-4821
                        </p>
                        <span className="flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 mb-1.5">
                        Hyderabadi Biryani • 2 Items
                      </p>

                      {/* Estimated Arrival Card */}
                      <div className="rounded-2xl bg-white p-2.5 border border-slate-100 shadow-2xs mb-1">
                        <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400">
                          Estimated arrival
                        </p>
                        <p className="text-lg sm:text-xl font-black text-[#ea580c] leading-tight mt-0.5">
                          12:55 PM
                        </p>
                        <div className="mt-1.5 h-1.5 w-full rounded-full bg-orange-100/70 overflow-hidden">
                          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                        </div>
                      </div>
                    </div>

                    {/* Stepper Steps - Compact spacing */}
                    <div className="space-y-0 text-left pt-0.5">
                      {/* Step 1: Placed */}
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div className="w-0.5 h-3.5 sm:h-4 bg-emerald-500 my-0.5" />
                        </div>
                        <div className="pt-0.5">
                          <p className="text-xs font-bold text-[#0f2444] leading-tight">
                            Order Placed
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-slate-400">
                            12:04 PM
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Preparing */}
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                            <svg
                              className="h-3 w-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div className="w-0.5 h-3.5 sm:h-4 bg-orange-400 my-0.5" />
                        </div>
                        <div className="pt-0.5">
                          <p className="text-xs font-bold text-[#0f2444] leading-tight">
                            Preparing
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-slate-400">
                            12:18 PM
                          </p>
                        </div>
                      </div>

                      {/* Step 3: Out for Delivery (Active) */}
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-white text-[10px] font-black shadow-xs">
                            3
                          </div>
                          <div className="w-0.5 h-3.5 sm:h-4 bg-slate-200 my-0.5" />
                        </div>
                        <div className="pt-0.5">
                          <div className="flex items-center gap-1 flex-wrap">
                            <p className="text-xs font-bold text-[#0f2444] leading-tight">
                              Out for Delivery
                            </p>
                            <span className="text-[8px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 rounded-full px-1.5 py-0.2">
                              In progress
                            </span>
                          </div>
                          <p className="text-[9px] sm:text-[10px] text-slate-400">
                            12:42 PM
                          </p>
                        </div>
                      </div>

                      {/* Step 4: Delivered */}
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-400 text-[10px] font-bold">
                            4
                          </div>
                        </div>
                        <div className="pt-0.5">
                          <p className="text-xs font-medium text-slate-400 leading-tight">
                            Delivered
                          </p>
                          <p className="text-[9px] sm:text-[10px] text-slate-400">
                            —
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PHONE 2: LIVE MAP SCREENSHOT (Shifted right for unblocked view) */}
              <div className="relative z-10 w-[210px] xs:w-[230px] sm:w-[245px] lg:w-[260px] aspect-[506/985] shrink-0 ml-1 sm:ml-2 lg:ml-2.5 rotate-3 transition-transform duration-500 hover:rotate-1 drop-shadow-[0_25px_60px_rgba(15,36,68,0.22)]">
                <Image
                  src="/assets/live-tracking-map-phone.png"
                  alt="Tanggy Live Map Tracking"
                  width={506}
                  height={985}
                  className="w-full h-full object-contain select-none pointer-events-none"
                  priority
                />
              </div>

              {/* BOTTOM RIGHT: DELIVERY SCOOTER RIDER ILLUSTRATION */}
              <div className="pointer-events-none absolute -bottom-5 -right-2 sm:-right-3 lg:-right-4 z-30 w-22 sm:w-26 lg:w-28 select-none drop-shadow-xl transition-transform duration-300 hover:scale-105">
                <Image
                  src="/assets/delivery-rider.png"
                  alt="Delivery Partner on Scooter"
                  width={110}
                  height={125}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
