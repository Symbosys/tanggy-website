"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BiryaniVariant {
  id: string;
  name: string;
  tag: string;
  description: string;
  fullDesc: string;
  image: string;
}

const biryaniVariants: BiryaniVariant[] = [
  {
    id: "egg-biryani",
    name: "Egg Biryani",
    tag: "Street & Comfort Classic",
    description: "Aromatic rice with perfectly spiced eggs.",
    fullDesc:
      "Egg Biryani is a celebrated comfort food loved for its delicate balance of fragrant long-grain basmati rice and golden, spiced boiled eggs.\n\nMarinated with turmeric, red chili and slow-roasted to achieve a crisp outer layer, the eggs infuse rich flavors into every grain of rice. Finished with caramelized onions (birista), fresh mint, coriander and saffron milk, it offers wholesome, hearty satisfaction.",
    image: "/assets/biryani-egg.jpg",
  },
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    tag: "Royal Dum Tradition",
    description: "Rich and flavourful mutton biryani.",
    fullDesc:
      "Mutton Biryani is the pinnacle of slow-cooked Indian royal cuisine. Succulent, tender mutton cuts are marinated overnight in hung curd, browned onions, green chilies, and a proprietary blend of aromatic whole spices including shahi jeera, star anise, cardamom, and mace.\n\nLayered with parboiled fragrant basmati rice and sealed with dough in a heavy handi (Dum Pukht method), the mutton cooks in its own juices until it falls tenderly off the bone, infusing the rice with deep, opulent richness.",
    image: "/assets/biryani-mutton.jpg",
  },
  {
    id: "local-chicken-biryani",
    name: "Local Chicken Biryani",
    tag: "Desi Bold Spices",
    description: "Desi-style chicken biryani with bold spices.",
    fullDesc:
      "Local Chicken Biryani brings the bold, unfiltered flavours of regional kitchens and local food stalls straight to your table.\n\nPrepared with fresh country chicken cuts, crushed black pepper, fiery green chilies, and freshly roasted whole spices, every grain of rice absorbs the spicy chicken gravy, creating a deeply satisfying, rustic meal that hits all the right spice notes.",
    image: "/assets/biryani-local-chicken.jpg",
  },
  {
    id: "hyderabadi-chicken-biryani",
    name: "Hyderabadi Chicken Biryani",
    tag: "Nizami Dum Specialty",
    description: "A royal dish with aromatic spices.",
    fullDesc:
      "Originating in the royal kitchens of the Nizams of Hyderabad, this legendary biryani is prepared using the authentic 'Kacchi Biryani' method — raw marinated chicken is layered with fragrant basmati rice and cooked on slow charcoal heat.\n\nGarnished with fried onions, saffron strands, rose water, and fresh mint leaves, it offers a harmonious explosion of flavours that represents the gold standard of Indian culinary heritage.",
    image: "/assets/biryani-hyderabadi.jpg",
  },
  {
    id: "kolkata-chicken-biryani",
    name: "Kolkata Chicken Biryani",
    tag: "Awadhi Heritage",
    description: "Traditional style chicken biryani.",
    fullDesc:
      "Kolkata Biryani carries a royal Awadhi legacy introduced by Nawab Wajid Ali Shah. Characterized by its light, fragrant, and mildly spiced profile, it is famously known for its large, melt-in-the-mouth slow-cooked spiced potato and boiled egg nestled alongside juicy chicken.\n\nCooked with meetha attar, kewra water, and pure ghee, Kolkata Biryani offers a delightfully subtle aroma that lingers long after your meal.",
    image: "/assets/biryani-kolkata.jpg",
  },
  {
    id: "veg-biryani",
    name: "Veg Biryani",
    tag: "Garden Fresh & Spiced",
    description: "Fragrant rice with fresh vegetables.",
    fullDesc:
      "Our Veg Biryani is a vibrant festival of textures and garden-fresh flavours. Crisp florets of cauliflower, tender green peas, carrots, French beans, and soft paneer cubes are gently sautéed in rich spices before being dum-cooked with aged basmati rice.\n\nTopped with roasted cashews, fried onions, and fresh coriander, it proves that a vegetarian biryani can be every bit as aromatic, grand, and satisfying.",
    image: "/assets/biryani-veg.jpg",
  },
];

interface BiryaniModalProps {
  onClose: () => void;
}

export function BiryaniModal({ onClose }: BiryaniModalProps) {
  const [activeVariant, setActiveVariant] = useState<BiryaniVariant | null>(null);

  // Close or go back on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeVariant) {
          setActiveVariant(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVariant, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="biryani-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* CONDITIONAL RENDER: INDIVIDUAL VARIANT DETAIL MODAL vs EXPLORE ALL BIRYANIS */}
      {activeVariant ? (
        /* INDIVIDUAL BIRYANI DETAIL MODAL */
        <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-orange-100 animate-fade-up">
          {/* Dish Image Banner */}
          <div className="relative h-60 sm:h-72 w-full bg-slate-900">
            <Image
              src={activeVariant.image}
              alt={activeVariant.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Back to all biryanis button */}
            <button
              type="button"
              onClick={() => setActiveVariant(null)}
              className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white hover:bg-black/75 transition-colors cursor-pointer border border-white/20"
              aria-label="Back to biryani list"
            >
              <span>←</span>
              <span>All Biryanis</span>
            </button>

            {/* Close Button Top-Right */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-xs text-white hover:bg-black/75 transition-colors cursor-pointer border border-white/20"
              aria-label="Close modal"
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

            {/* Dish Name & Info on Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-full bg-[#ea580c] px-3 py-1 text-xs font-bold text-white shadow-xs mb-2">
                {activeVariant.tag}
              </span>
              <h3
                id="biryani-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
              >
                {activeVariant.name}
              </h3>
              <p className="text-sm text-white/85 mt-1">
                {activeVariant.description}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7 max-h-[50vh] overflow-y-auto no-scrollbar [scrollbar-width:none]">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
              {activeVariant.fullDesc}
            </p>

            {/* Bottom Actions: ← View All Biryanis & Close Story */}
            <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-[#fed7aa]/50">
              {/* Left: View All Biryanis */}
              <button
                type="button"
                onClick={() => setActiveVariant(null)}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0f2444] hover:text-[#ea580c] transition-colors cursor-pointer group"
              >
                <span className="text-base sm:text-lg transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
                <span>View All Biryanis</span>
              </button>

              {/* Right: Close Story Button */}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#fcd34d] via-[#f5a722] to-[#d97706] px-6 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base font-bold text-[#0f2444] shadow-xs hover:brightness-105 active:scale-98 transition-all cursor-pointer border border-[#d97706]/30"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* EXPLORE ALL BIRYANIS GRID (Full Page Scroll, Hidden Scrollbar) */
        <div className="relative z-10 w-full max-w-xl sm:max-w-2xl lg:max-w-3xl max-h-[92vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#fffcf7] border border-orange-200/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]">
          {/* TOP HEADER */}
          <div className="relative pt-5 sm:pt-6 px-5 sm:px-8 pb-2">
            {/* Close Button Top-Right (scrolls with header) */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-6 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 hover:bg-slate-100 hover:text-black transition-colors cursor-pointer shadow-xs z-10"
              aria-label="Close modal"
            >
              <svg
                className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Eyebrow Pill */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#fed7aa]/50 border border-orange-200/80 px-3 py-1 text-xs sm:text-sm font-bold text-[#ea580c] shadow-2xs">
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#ea580c]"
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
                <span>Tanggy Specials</span>
              </div>
            </div>

            {/* Title */}
            <h2
              id="biryani-modal-title"
              className="mt-2 text-center text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#0f2444] leading-tight"
            >
              Explore Our <span className="text-[#ea580c]">Biryani&apos;s</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-0.5 text-center font-serif italic text-xs sm:text-sm text-slate-600">
              A flavour for every craving
            </p>
          </div>

          {/* GRID BODY - Flows with full modal scroll */}
          <div className="px-4 sm:px-7 py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {biryaniVariants.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVariant(item)}
                  className="group relative flex flex-col rounded-2xl bg-white border border-[#fed7aa]/60 p-2.5 sm:p-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(234,88,12,0.12)] hover:border-orange-300 transition-all duration-300 cursor-pointer"
                >
                  {/* Dish Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-orange-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-106"
                    />
                  </div>

                  {/* Card Bottom: Title, Description & Action Button */}
                  <div className="flex items-center justify-between gap-2 pt-2.5 px-1 pb-0.5">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#0f2444] leading-snug truncate group-hover:text-[#ea580c] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-tight truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    {/* Circular Golden-Orange Arrow Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVariant(item);
                      }}
                      className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white shadow-xs shadow-amber-500/30 hover:scale-110 hover:shadow-orange-500/40 transition-all cursor-pointer"
                      aria-label={`View details of ${item.name}`}
                    >
                      <svg
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MODAL FOOTER */}
          <div className="relative pt-3 pb-6 sm:pb-7 px-4 sm:px-6 bg-[#fffcf7]">
            {/* Heritage Architectural Monument Divider */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px flex-1 max-w-[60px] sm:max-w-[120px] bg-gradient-to-r from-transparent to-orange-300/60" />
              <div className="relative w-36 sm:w-48 h-8 sm:h-10 opacity-80">
                <Image
                  src="/assets/story-skyline.png"
                  alt="Heritage architectural sketch"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-px flex-1 max-w-[60px] sm:max-w-[120px] bg-gradient-to-l from-transparent to-orange-300/60" />
            </div>

            {/* Tagline */}
            <p className="text-center font-serif italic text-xs sm:text-sm text-slate-700 tracking-wide mt-1.5">
              Slow-cooked &bull; Freshly Prepared &bull; Full of flavour
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
