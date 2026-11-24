"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function VendorCommunitySection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8ee] via-[#fffbf6] to-[#fff8ee] border-y border-[#fed7aa]/35 py-12 sm:py-16 lg:py-20"
    >
      {/* ============================================================ */}
      {/* SECTION CONTENT CONTAINER                                     */}
      {/* ============================================================ */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0 xl:gap-2">
          {/* ========================================================== */}
          {/* LEFT COLUMN: VENDOR COMMUNITY CONTENT                     */}
          {/* ========================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fdeee0] border border-[#fcdbbd] px-3.5 py-1.5 shadow-2xs w-fit">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white">
                {/* Partnership / Handshake SVG icon */}
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 17l-1.5-1.5a3.5 3.5 0 0 1 0-5l2-2a3.5 3.5 0 0 1 5 0l.5.5" />
                  <path d="M13 7l1.5 1.5a3.5 3.5 0 0 1 0 5l-2 2a3.5 3.5 0 0 1-5 0l-.5-.5" />
                </svg>
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-[#0c1b33] tracking-wide">
                Our Vendor Community
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-3.5 text-2xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-[1.15] sm:leading-[1.12]">
              <span className="text-[#0c1b33]">The Heart of</span>{" "}
              <br className="hidden lg:inline" />
              <span className="text-[#ea580c]">Tanggy</span>
            </h2>

            {/* Short Preview Description */}
            <div className="mt-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-xl">
              <p className="whitespace-normal">
                Behind every great meal, there is someone who makes it possible.
                <br className="hidden sm:inline" /> At Tanggy, we believe local
                food vendors are our true partners.
              </p>
            </div>

            {/* Read Full Story Button */}
            <div className="mt-4 sm:mt-5">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-[#ea7120] hover:bg-[#d86110] text-white px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Read Full Story</span>
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Relationship Card (3 Columns with Clear Dividers) */}
            <div className="mt-5 rounded-2xl bg-[#fff8f2] border border-[#fddfc4] p-4 sm:p-5 shadow-2xs max-w-xl">
              <p className="text-xs sm:text-[13px] font-bold text-[#0c1b33] mb-3">
                We believe in building a relationship where:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-0 items-start sm:divide-x sm:divide-[#fddfc4]">
                {/* Column 1 */}
                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 sm:pr-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#ea580c]">
                    {/* Chef Hat Icon */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                      <line x1="6" y1="17" x2="18" y2="17" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                    <strong className="text-slate-900 font-bold">
                      Vendors
                    </strong>{" "}
                    bring their culinary expertise and authentic food.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 sm:px-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#ea580c]">
                    {/* Location Pin Icon */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                    <strong className="text-slate-900 font-bold">
                      Customers
                    </strong>{" "}
                    discover more local and regional food choices.
                  </p>
                </div>

                {/* Column 3 */}
                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 sm:pl-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#ea580c]">
                    {/* Growth Bar Chart Icon */}
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
                  </div>
                  <p className="text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                    <strong className="text-slate-900 font-bold">Tanggy</strong>{" "}
                    provides the digital platform and customer connection.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Pill Banner */}
            <div className="mt-3.5 inline-flex items-center gap-3 rounded-full bg-[#fff8f2] border border-[#fddfc4] px-4 py-2 sm:py-2.5 shadow-2xs max-w-xl">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white shadow-xs">
                {/* Lightbulb Icon */}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <p className="text-xs sm:text-[12.5px] text-slate-700 leading-snug">
                Our philosophy is simple: Local vendors deserve a{" "}
                <strong className="text-[#ea580c] font-bold">
                  bigger platform
                </strong>
                , and customers deserve more{" "}
                <strong className="text-[#ea580c] font-bold">
                  authentic food choices
                </strong>
                .
              </p>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: CHEF GRAPHIC & CIRCLE                       */}
          {/* ========================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-start items-center lg:ml-3 xl:ml-5">
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px]">
              {/* Soft Pale Peach Glow Behind Backdrop */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[38%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full bg-[#ffedd5]/60 z-0"
              />

              {/* Vibrant Orange Circular Backdrop Centered Behind Chef */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[38%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[390px] lg:h-[390px] rounded-full bg-gradient-to-br from-[#ffa12c] via-[#f97316] to-[#ea580c] shadow-2xl shadow-orange-500/25 z-0"
              />

              {/* 3 Decorative Spark Rays (Top-Left of Circle) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[14%] left-[26%] sm:top-[15%] sm:left-[28%] lg:left-[30%] z-10 text-[#ea580c]"
              >
                <svg
                  viewBox="0 0 44 44"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                  fill="none"
                >
                  <line
                    x1="28"
                    y1="14"
                    x2="20"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18"
                    y1="24"
                    x2="6"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="36"
                    x2="4"
                    y2="34"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Chef, Biryani Platter & Vendor Stall Graphic (Cleanly Cropped, No Transparent Dead Margin) */}
              <div className="relative z-10 w-full">
                <Image
                  src="/assets/vendor-community-chef.png"
                  alt="Our Vendor Community - The Heart of Tanggy"
                  width={705}
                  height={682}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* READ FULL STORY MODAL                                          */}
      {/* ============================================================ */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="vendor-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Blur */}
          <div
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Content Dialog */}
          <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-orange-100">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
              aria-label="Close story modal"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fdeedf] px-3.5 py-1 text-xs font-bold text-[#ea580c]">
              <span>🤝 OUR VENDOR COMMUNITY</span>
            </div>

            {/* Modal Heading */}
            <h3
              id="vendor-modal-title"
              className="mt-3 text-2xl sm:text-3xl font-black text-slate-900 leading-tight"
            >
              The Heart of <span className="text-[#ea580c]">Tanggy</span>
            </h3>

            {/* Full Story Paragraphs */}
            <div className="mt-5 space-y-3.5 text-justify text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Behind every great meal, there is someone who makes it possible.
                At Tanggy, we believe local food vendors are our true partners.
                They are an essential part of India&apos;s food culture.
              </p>
              <p>
                Many local vendors have years of experience preparing
                traditional dishes. Some follow family recipes. Others have
                developed their own signature cooking styles through years of
                practice.
              </p>
              <p>
                Their food has built loyal customer communities, but their
                business opportunities can be limited by location, visibility
                and access to a larger customer base. We want to help bridge
                that gap.
              </p>
              <p>
                Through Tanggy, local food vendors can showcase their
                specialties, connect with more customers and grow their business
                through a digital platform.
              </p>

              {/* Relationship Points in Modal */}
              <div className="my-5 rounded-2xl bg-[#fff7ef] border border-[#fddfc4] p-4 sm:p-5">
                <p className="text-sm font-bold text-slate-900 mb-3">
                  We believe in building a relationship where:
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white text-xs font-bold">
                      1
                    </span>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Vendors</strong> bring
                      their culinary expertise and authentic food.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white text-xs font-bold">
                      2
                    </span>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Customers</strong>{" "}
                      discover more local and regional food choices.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-white text-xs font-bold">
                      3
                    </span>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Tanggy</strong>{" "}
                      provides the digital platform and customer connection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophy Banner in Modal */}
              <div className="rounded-2xl border-l-4 border-l-[#ea580c] bg-gradient-to-r from-[#ffeedb] to-[#fdfaf3] p-4 shadow-2xs text-center">
                <p className="text-sm sm:text-base font-bold text-slate-900 text-center">
                  Our philosophy is simple: Local vendors deserve a{" "}
                  <span className="text-[#ea580c]">bigger platform</span>, and
                  customers deserve more{" "}
                  <span className="text-[#ea580c]">authentic food choices</span>
                  .
                </p>
              </div>
            </div>

            {/* Modal Footer Close Button */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-[#ea7120] hover:bg-[#d86110] px-7 py-2.5 text-sm font-bold text-white shadow-md transition-all cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
