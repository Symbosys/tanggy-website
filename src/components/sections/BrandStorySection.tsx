"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { storeLinks } from "@/lib/content";

export function BrandStorySection() {
  const [storyOpen, setStoryOpen] = useState(false);

  useEffect(() => {
    if (!storyOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setStoryOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [storyOpen]);

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-linear-to-b from-[#fffdfb] via-[#ffffff] to-[#fff9f3] pt-14 sm:pt-18 lg:pt-20 pb-2 sm:pb-3 lg:pb-4"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* LEFT COLUMN: 3-Image Tilted Collage + Heritage Skyline */}
          <div className="relative flex flex-col items-center lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[500px]">
              {/* Soft Pale Peach Glow Behind Top-Left */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 left-0 h-56 w-56 rounded-full bg-[#ffe6d3]/65 blur-2xl sm:h-64 sm:w-64"
              />

              {/* Solid Vibrant Orange Circle Backdrop Behind Collage */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-[#ffa12c] via-[#f97316] to-[#ea580c] sm:h-[310px] sm:w-[310px] lg:h-[330px] lg:w-[330px]"
              />

              {/* 3 Orange Spark Accent Rays (Top-Left) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="pointer-events-none absolute top-2 left-2 z-20 h-9 w-9 text-[#f97316] sm:left-4 sm:h-11 sm:w-11"
                fill="none"
              >
                <path
                  d="M28 18 L22 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 26 L10 17"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17 36 L6 34"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Decorative Green Leaf Accent (Upper-Left) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 40 40"
                className="pointer-events-none absolute top-[30%] left-1 z-20 h-8 w-8 -rotate-12 drop-shadow-sm sm:left-2 sm:h-9 sm:w-9"
              >
                <path
                  d="M6 6 C22 6, 34 18, 34 34 C18 34, 6 22, 6 6 Z"
                  fill="#4ea822"
                />
                <path
                  d="M8 8 C16 16, 24 24, 32 32"
                  stroke="#86efac"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>

              {/* Decorative Green Leaf Accent (Lower-Left) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 44 44"
                className="pointer-events-none absolute bottom-4 left-[18%] z-20 h-9 w-9 rotate-[12deg] drop-shadow-sm sm:h-11 sm:w-11"
              >
                <path
                  d="M6 34 C12 16, 26 8, 40 6 C36 24, 24 36, 6 34 Z"
                  fill="#3f9619"
                />
                <path
                  d="M8 33 C18 24, 28 16, 38 8"
                  stroke="#a7f3d0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>

              {/* 3-Card Staggered Photo Collage */}
              <div className="relative z-10 h-[350px] w-full sm:h-[430px] lg:h-[455px]">
                {/* Top-Right Large Tilted Biryani Photo */}
                <div className="absolute top-0 right-[6%] z-20 h-[215px] w-[215px] rotate-[8deg] overflow-hidden rounded-[26px] border-[6px] border-white bg-amber-950 shadow-[0_22px_45px_-12px_rgba(24,24,27,0.28)] transition-transform duration-300 hover:scale-[1.03] sm:h-[268px] sm:w-[268px] sm:rounded-[30px] sm:border-[7px] lg:h-[285px] lg:w-[285px]">
                  <Image
                    src="/assets/story-biryani.jpg"
                    alt="Steaming Authentic Indian Biryani"
                    fill
                    sizes="(max-width: 640px) 215px, (max-width: 1024px) 268px, 285px"
                    className="object-cover"
                  />
                </div>

                {/* Middle-Left Tilted Masala Dosa Photo */}
                <div className="absolute top-[33%] left-[2%] z-10 h-[168px] w-[168px] -rotate-[8deg] overflow-hidden rounded-[22px] border-[5px] border-white bg-amber-950 shadow-[0_20px_40px_-12px_rgba(24,24,27,0.26)] transition-transform duration-300 hover:z-30 hover:scale-[1.03] sm:h-[210px] sm:w-[210px] sm:rounded-[26px] sm:border-[6px] lg:h-[222px] lg:w-[222px]">
                  <Image
                    src="/assets/story-dosa.jpg"
                    alt="Crispy Golden Masala Dosa with Sambar and Chutney"
                    fill
                    sizes="(max-width: 640px) 168px, (max-width: 1024px) 210px, 222px"
                    className="object-cover"
                  />
                </div>

                {/* Bottom-Right Tilted Soft Idli Photo */}
                <div className="absolute right-[4%] bottom-0 z-20 h-[152px] w-[152px] rotate-[10deg] overflow-hidden rounded-[22px] border-[5px] border-white bg-amber-950 shadow-[0_20px_40px_-12px_rgba(24,24,27,0.26)] transition-transform duration-300 hover:z-30 hover:scale-[1.03] sm:h-[188px] sm:w-[188px] sm:rounded-[26px] sm:border-[6px] lg:h-[200px] lg:w-[200px]">
                  <Image
                    src="/assets/story-idli.jpg"
                    alt="Soft Steamed Idli with Sambar and Chutney"
                    fill
                    sizes="(max-width: 640px) 152px, (max-width: 1024px) 188px, 200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Indian Heritage Skyline Illustration Under Collage */}
            <div className="relative z-10 mt-1 sm:mt-1.5 w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[490px]">
              <Image
                src="/assets/story-skyline.png"
                alt="Indian heritage skyline illustration"
                width={1024}
                height={348}
                sizes="(max-width: 640px) 360px, (max-width: 1024px) 450px, 490px"
                className="h-auto w-full object-contain opacity-90"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Brand Story Copy, CTAs & Store Badges */}
          <div className="text-center lg:col-span-6 lg:text-left">
            {/* Soft Peach BRAND STORY Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffe6d5] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#d95314] shadow-2xs">
              <svg
                className="h-4 w-4 shrink-0 text-[#ea580c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span>BRAND STORY</span>
            </div>

            {/* Heading with Hand-Drawn Orange Brush Underline */}
            <h2 className="mt-3 sm:mt-3.5 text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111827] sm:text-4xl xl:text-[2.5rem]">
              Our Brand Story – A Journey of{" "}
              <span className="inline-block">
                Authentic{" "}
                <span className="text-[#ea580c]">
                  Taste, Tradition &amp; Togetherness
                </span>
              </span>
            </h2>

            {/* Curved Orange Brush Accent Line */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <svg
                aria-hidden="true"
                viewBox="0 0 180 14"
                className="h-3 w-36 text-[#f97316] sm:w-44"
                fill="none"
              >
                <path
                  d="M3 10 C55 2, 120 2, 177 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Story Paragraph */}
            <p className="mx-auto mt-3 sm:mt-3.5 max-w-xl text-base leading-relaxed text-[#374151] sm:text-[17px] lg:mx-0">
              Food is more than just a meal. It&apos;s an emotion, a memory and
              a celebration of our rich and diverse Indian food culture.
            </p>
            <p>
              At{" "}
              <strong className="font-extrabold text-[#111827]">Tanggy,</strong>{" "}
              we bring together authentic flavours, traditional recipes and
              passionate food makers, so you can enjoy real food, anytime.
            </p>

            {/* Action Buttons Block — Read Full Story centered directly above Explore Food & Order on Tanggy App */}
            <div className="mt-4 sm:mt-5 inline-flex flex-col items-center">
              {/* Primary CTA: Opens Full Story Modal */}
              <button
                type="button"
                onClick={() => setStoryOpen(true)}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-linear-to-r from-[#ff981a] via-[#f97316] to-[#dc4c07] px-7 py-2.5 sm:py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40"
              >
                <span>Read Full Story</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>

              {/* Secondary Action Row: Explore Food + Order on Tanggy App */}
              <div className="mt-3 sm:mt-3.5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#food"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-linear-to-r from-[#ff981a] via-[#f97316] to-[#dc4c07] px-6 py-2.5 sm:py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 3v6a2 2 0 01-2 2H5m3-8v18M5 3v6a2 2 0 002 2m10-8v18m0-18c2 0 3 2.5 3 6s-1 4-3 4"
                    />
                  </svg>
                  <span>Explore Food</span>
                </a>

                <a
                  href="#app"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#f59e0b]/70 bg-white px-6 py-2.5 sm:py-3 text-sm font-bold text-[#111827] shadow-2xs transition-all duration-200 hover:border-[#ea580c] hover:bg-orange-50/50 hover:text-[#ea580c]"
                >
                  <span>Order on Tanggy App</span>
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Store Badges: Google Play & App Store */}
              <div className="mt-3 sm:mt-3.5 flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={storeLinks.googlePlay}
                  aria-label="Get Tanggy on Google Play"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#111827] px-5 py-2.5 text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-black"
                >
                  <svg
                    className="h-7 w-7 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.601-.92V2.734a1.004 1.004 0 01.601-.92z"
                      fill="#38bdf8"
                    />
                    <path
                      d="M14.5 12.707l2.302 2.302-10.937 6.333a1.004 1.004 0 01-.295-.295L14.5 12.707z"
                      fill="#f43f5e"
                    />
                    <path
                      d="M17.402 9.806l1.463 1.463a1 1 0 010 1.414l-1.463 1.463-2.601-2.601 2.601-2.339z"
                      fill="#facc15"
                    />
                    <path
                      d="M14.5 11.293L5.57 4.984a1.004 1.004 0 01.295-.295L16.802 10.954 14.5 11.293z"
                      fill="#22c55e"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/75">
                      GET IT ON
                    </div>
                    <div className="text-base font-bold leading-tight">
                      Google Play
                    </div>
                  </div>
                </a>

                <a
                  href={storeLinks.appStore}
                  aria-label="Download Tanggy on the App Store"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#111827] px-5 py-2.5 text-white shadow-md transition-transform duration-200 hover:scale-[1.02] hover:bg-black"
                >
                  <svg
                    className="h-7 w-7 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-white/75">
                      DOWNLOAD ON THE
                    </div>
                    <div className="text-base font-bold leading-tight">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Brand Story Modal */}
      {storyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brand-story-modal-title"
          onClick={() => setStoryOpen(false)}
        >
          <div
            className="relative max-h-[100vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-orange-100 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Decorative Strip with 3 Dish Thumbnails */}
            <div className="relative bg-linear-to-r from-[#fff6ed] via-[#fffaf5] to-[#ffeede] px-6 pt-6 pb-5 sm:px-8">
              <button
                type="button"
                onClick={() => setStoryOpen(false)}
                aria-label="Close brand story modal"
                className="absolute top-4 right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-orange-200/80 bg-white text-[#374151] shadow-2xs transition-colors hover:border-[#ea580c] hover:text-[#ea580c]"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#ffe6d5] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#d95314]">
                <span>OUR FULL STORY</span>
              </div>

              <h3
                id="brand-story-modal-title"
                className="mt-3 pr-8 text-2xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-3xl"
              >
                Our Brand Story – A Journey of Authentic{" "}
                <span className="text-[#ea580c]">
                  Taste, Tradition &amp; Togetherness
                </span>
              </h3>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-[#374151] sm:px-8 sm:text-base">
              <p>
                Food is more than just something we eat. It is an emotion, a
                memory, a celebration and an important part of who we are.
              </p>

              <p>
                Every city, every region and every community in India has its
                own unique food identity. From the rich aroma of traditional
                Biryani to the comforting taste of Meat Rice, from flavourful
                Chicken Rice and Fish Rice to the simplicity of Egg Rice and the
                timeless flavours of South Indian cuisine, Indian food culture
                is incredibly diverse.
              </p>
              <p>
                Behind every authentic dish, there is a story: traditional
                recipes passed down through generations, carefully selected
                ingredients, local cooking techniques and people who have
                dedicated their lives to preparing food with passion.
              </p>
              <p>
                Yet, in today&apos;s fast-moving world, discovering truly authentic
                local food is not always easy. Many traditional food makers,
                small restaurants and independent vendors prepare exceptional
                food every day, but their reach often remains limited to their
                neighbourhoods.
              </p>
              <p>
                At the same time, customers are searching for more than just
                another meal. They want authentic taste, familiar flavours,
                quality food and the comfort of eating something that feels
                real.
              </p>

              {/* Highlighted Closing Box */}
              <div className="rounded-2xl border border-orange-200/80 border-l-4 border-l-[#ea580c] bg-linear-to-r from-[#fff3e6] via-[#fff8f0] to-[#ffeedb] px-5 py-4 text-center shadow-2xs">
                <p className="text-base font-extrabold tracking-tight text-[#111827] sm:text-lg">
                  This is where{" "}
                  <span className="text-[#ea580c]">Tanggy</span> begins
                  its journey.
                </p>
              </div>

              {/* Footer Close Button */}
              <div className="flex justify-end border-t border-gray-100 pt-5">
                <button
                  type="button"
                  onClick={() => setStoryOpen(false)}
                  className="cursor-pointer rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#374151] transition-colors hover:border-orange-300 hover:text-[#ea580c] sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
