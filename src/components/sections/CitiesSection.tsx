"use client";

import Image from "next/image";

interface CityItem {
  id: string;
  name: string;
  description: string;
  image: string;
  popular?: boolean;
}

const citiesData: CityItem[] = [
  {
    id: "ranchi",
    name: "Ranchi",
    description: "Biryani • Meat Rice • Chicken Rice • South Indian",
    image: "/assets/city-ranchi.webp",
  },
  {
    id: "jamshedpur",
    name: "Jamshedpur",
    description: "Local food stories and Tanggy discovery pages.",
    image: "/assets/city-jamshedpur.webp",
    popular: true,
  },
  {
    id: "dhanbad",
    name: "Dhanbad",
    description: "City-specific food guides and partner discovery.",
    image: "/assets/city-dhanbad.webp",
  },
];

export function CitiesSection() {
  return (
    <section
      id="cities"
      className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative Warm Ambient Blobs on Sides */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-80 w-80 rounded-full bg-gradient-to-br from-[#fed7aa]/35 via-[#ffedd5]/25 to-transparent blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-80 w-80 rounded-full bg-gradient-to-bl from-[#fed7aa]/35 via-[#ffedd5]/25 to-transparent blur-3xl z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-20 -translate-y-1/2 h-72 w-72 rounded-full bg-gradient-to-l from-[#fed7aa]/30 to-transparent blur-2xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fed7aa]/45 border border-orange-200/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#ea580c] shadow-2xs">
            {/* Location Pin Icon */}
            <svg
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span>Local discovery</span>
          </div>

          {/* Heading with Smile Underline */}
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f2444] leading-tight text-center">
            Discover food in your{" "}
            <span className="relative inline-block text-[#ea580c]">
              city.
              {/* Hand-drawn smile curve underline */}
              <svg
                className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3 text-[#ea580c]"
                viewBox="0 0 100 15"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 11 C 30 2, 70 2, 98 11"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
            The final dynamic site can generate city-specific pages, food guides,
            restaurants and local SEO content.
          </p>
        </div>

        {/* 3 CITY CARDS GRID */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {citiesData.map((city) => (
            <div
              key={city.id}
              className={`group relative flex flex-col rounded-[2rem] bg-white p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1.5 ${
                city.popular
                  ? "border-2 border-orange-400 shadow-[0_12px_36px_rgba(234,88,12,0.18)] hover:shadow-[0_18px_48px_rgba(234,88,12,0.25)] ring-4 ring-orange-400/10"
                  : "border border-[#fed7aa]/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-orange-300 hover:shadow-[0_12px_32px_rgba(234,88,12,0.12)]"
              }`}
            >
              {/* City Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.4rem] bg-orange-50">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-106"
                />
              </div>

              {/* City Info - Centered */}
              <div className="pt-4 px-2 pb-2 text-center">
                <h3 className="text-xl font-extrabold text-[#0f2444] leading-snug">
                  {city.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-snug">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
