"use client";

import Image from "next/image";
import { useState } from "react";

interface DishItem {
  id: string;
  name: string;
  description: string;
  image: string;
  fullDesc: string;
  tag: string;
}

const dishes: DishItem[] = [
  {
    id: "biryani",
    name: "The Art of Authentic Biryani",
    description: "A royal dish with aromatic spices and rich flavors.",
    image: "/assets/dish-biryani.jpg",
    fullDesc:
      "Biryani is not simply a rice dish. It is an experience built around aroma, spices, cooking techniques and tradition. From flavourful Chicken Biryani and rich Mutton Biryani to regional variations inspired by Kolkata, Hyderabad and other culinary traditions, every Biryani has its own character.\n\nAt Tanggy, we celebrate the diversity of Biryani prepared by local food specialists, each bringing their own cooking style and distinctive flavours.",
    tag: "Royal Heritage",
  },
  {
    id: "meat-rice",
    name: "Traditional Meat Rice",
    description: "A perfect blend of spices and tender meat.",
    image: "/assets/dish-meat-rice.jpg",
    fullDesc:
      "Some dishes do not need an introduction. Meat Rice is one of those comforting meals that brings together perfectly cooked rice, flavourful meat, aromatic spices and traditional preparation. \n\nWhether it is a regional Mutton Rice speciality or another traditional meat-based rice preparation, we believe these dishes deserve recognition beyond their local neighbourhoods.",
    tag: "Regional Classic",
  },
  {
    id: "chicken-rice",
    name: "Chicken Rice",
    description: "Simple, delicious and satisfying.",
    image: "/assets/dish-chicken-rice.jpg",
    fullDesc:
      "Chicken Rice represents the perfect combination of convenience and flavour. From traditional spicy preparations to regional chicken-and-rice combinations, it is a favourite for customers looking for a wholesome and satisfying meal. \n\nWe want to bring different local interpretations of Chicken Rice to customers through our vendor network.",
    tag: "Everyday Soul Food",
  },
  {
    id: "fish-rice",
    name: "Fish Rice",
    description: "A coastal favourite across India.",
    image: "/assets/dish-fish-rice.jpg",
    fullDesc:
      "Fish has a special place in India's regional food traditions, especially across eastern and coastal regions. From traditional fish curry and rice combinations to local fish specialities, every preparation reflects the culinary identity of its region. \n\nTanggy aims to bring these familiar and loved flavours closer to customers. ",
    tag: "Coastal Specialty",
  },
  {
    id: "egg-rice",
    name: "Egg Rice",
    description: "Simple ingredients, great flavour.",
    image: "/assets/dish-egg-rice.jpg",
    fullDesc:
      "Sometimes, the simplest meals create the strongest food memories. Egg Rice is an everyday favourite that combines affordability, flavour and satisfaction. \n\nPrepared in different regional styles, it offers customers a delicious meal option for different occasions. ",
    tag: "Street Classic",
  },
  {
    id: "south-indian",
    name: "South Indian Cuisine",
    description: "Dosa, idli and more, a timeless classic.",
    image: "/assets/dish-south-indian.jpg",
    fullDesc:
      "South Indian cuisine is one of India's most loved culinary traditions. From crispy Dosa and soft Idli to Medu Vada, Uttapam, Sambar and traditional chutneys, these dishes reflect generations of culinary knowledge. \n\nTanggy brings these familiar South Indian favourites into its food ecosystem, giving customers more variety and opportunities to explore authentic regional cuisine. ",
    tag: "Timeless Tradition",
  },
];

export function FoodCultureSection() {
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);

  return (
    <section
      id="food"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffdfa] via-[#ffffff] to-[#fff8f2] pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16"
    >
      {/* Top-Right Decorative Amber Swoosh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-bl from-[#f97316]/20 via-[#fed7aa]/35 to-transparent blur-3xl z-0"
      />

      {/* Bottom-Right Decorative Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-tl from-[#ea580c]/15 via-[#ffedd5]/40 to-transparent blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN: Section Header & Big Hero Biryani Dish */}
          <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
            {/* Badge: Our Food Culture */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffedd5] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#ea580c] shadow-xs border border-[#fed7aa]">
              {/* Fork & Spoon SVG icon */}
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#ea580c]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2" />
                <path d="M15 2v18" />
                <path d="M6 2v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2" />
                <path d="M9 2v18" />
              </svg>
              <span>Our Food Culture</span>
            </div>

            {/* Title: Celebrating India's Authentic Food Culture */}
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-[2.65rem] leading-[1.16]">
              Celebrating India&apos;s{" "}
              <span className="text-[#ea580c]">Authentic</span> Food Culture
            </h2>

            {/* Subtitle */}
            <div className="mt-3 space-y-1.5 text-sm sm:text-base lg:text-[1.05rem] text-slate-600 leading-relaxed max-w-lg">
              <p>
                From biryani to dosa, explore the rich flavours and diversity of
                Indian cuisine.
              </p>
              <p>
                At Tanggy, we celebrate the diversity of Biryani prepared
                by local food specialists, each bringing their own cooking style
                and distinctive flavours.
              </p>
            </div>

            {/* Left Big Food Platter Graphic with Decorative Elements */}
            <div className="relative -mt-2 sm:-mt-4 lg:-mt-6 w-full max-w-[480px] sm:max-w-[520px] flex items-center justify-center">
              {/* Soft circular warm glow behind hero dish */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-br from-[#fed7aa]/60 via-[#ffedd5]/40 to-transparent blur-2xl"
              />


              {/* Main Cutout Image */}
              <div className="relative z-10 w-full aspect-[3/2] drop-shadow-[0_20px_35px_rgba(234,88,12,0.18)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/assets/culture-hero-biryani.png"
                  alt="Authentic Dum Biryani with salan and raita in copper handi"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 520px"
                  className="object-contain"
                />
              </div>

              {/* Indian Heritage Line Illustration Directly Under the Dish (Foreground z-20) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 sm:-bottom-18 lg:-bottom-20 -left-1 sm:left-2 z-20 w-40 sm:w-48 lg:w-52 opacity-85 drop-shadow-xs"
              >
                <Image
                  src="/assets/story-skyline.png"
                  alt="Heritage architectural sketch"
                  width={300}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 Dish Cards Stack */}
          <div className="flex flex-col gap-3 sm:gap-3.5 lg:col-span-6">
            {dishes.map((dish) => (
              <button
                key={dish.id}
                type="button"
                onClick={() => setSelectedDish(dish)}
                className="group relative flex w-full items-center justify-between gap-3 sm:gap-4 rounded-full bg-white/90 p-2 sm:p-2.5 pl-3 sm:pl-3.5 pr-3 sm:pr-4 border border-orange-100/80 shadow-[0_3px_12px_rgba(0,0,0,0.025)] hover:shadow-[0_8px_24px_rgba(234,88,12,0.1)] hover:border-orange-200 transition-all duration-200 cursor-pointer text-left"
              >
                {/* Left: Round Dish Thumbnail */}
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full border-2 border-orange-100/90 shadow-2xs group-hover:border-orange-300 transition-colors">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 48px, 56px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Center: Dish Name & Description */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#ea580c] transition-colors truncate">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-tight truncate mt-0.5">
                    {dish.description}
                  </p>
                </div>

                {/* Right: Orange Circular Arrow Action */}
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white shadow-sm shadow-orange-500/25 group-hover:scale-108 group-hover:shadow-orange-500/35 transition-all">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DISH DETAIL MODAL */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dish-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedDish(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-orange-100">
            {/* Dish Image Banner */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-900">
              <Image
                src={selectedDish.image}
                alt={selectedDish.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close dish preview"
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

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-xs px-3 py-1 text-xs font-semibold text-orange-300 border border-white/20">
                {selectedDish.tag}
              </div>

              {/* Dish Name on Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3
                  id="dish-modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
                >
                  {selectedDish.name}
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  {selectedDish.description}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {selectedDish.fullDesc}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <a
                  href="#app"
                  onClick={() => setSelectedDish(null)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] py-2.5 px-6 text-sm font-bold text-white shadow-md shadow-orange-500/25 hover:from-[#ea580c] hover:to-[#c2410c] transition-all cursor-pointer"
                >
                  <span>Order Authentic {selectedDish.name}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
