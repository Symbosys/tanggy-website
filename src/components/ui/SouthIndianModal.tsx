"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SouthIndianVariant {
  id: string;
  name: string;
  tag: string;
  description: string;
  fullDesc: string;
  image: string;
}

const southIndianVariants: SouthIndianVariant[] = [
  {
    id: "masala-dosa",
    name: "Classic Masala Dosa",
    tag: "The Timeless Icon",
    description:
      "Signature golden-brown crepe rolled with fragrant mustard-tempered potato masala.",
    fullDesc:
      "The undisputed king of South Indian cuisine. A fermented batter of aged rice and lentils is spread paper-thin and roasted on a seasoned cast-iron skillet until deep golden brown.\n\nFilled with our signature aloo masala — boiled potatoes tempered with mustard seeds, curry leaves, turmeric, onions, and cashew nuts — served alongside two fresh chutneys and piping hot sambar.",
    image: "/assets/south-indian-masala-dosa.jpg",
  },
  {
    id: "golden-butter-rava-dosa",
    name: "Golden Butter Rava Dosa",
    tag: "Lacy Golden Crepe",
    description:
      "Lacy, golden semolina crepe topped with fresh butter, served with coconut chutney & sambar.",
    fullDesc:
      "Golden Butter Rava Dosa is famous for its signature netted lace texture and irresistible buttery crunch. Crafted from a tempered batter of semolina, rice flour, crushed black peppercorns, cumin seeds, ginger, and green chilies.\n\nPoured onto a scorching hot tawa and roasted with pure golden butter until beautifully golden-brown, it is paired with steaming vegetable sambar and freshly ground coconut chutney.",
    image: "/assets/south-indian-golden-butter-rava-dosa.jpg",
  },
  {
    id: "south-indian-uttapam",
    name: "South Indian Uttapam",
    tag: "Savory Pancake Feast",
    description:
      "Thick, soft savory pancake topped with juicy tomatoes, onions & fresh coriander.",
    fullDesc:
      "Unlike the thin crepe of a dosa, South Indian Uttapam is a thick, fluffy savory pancake made from fermented rice and urad dal batter.\n\nGenerously studded with finely diced red onions, ripe tomatoes, green chilies, and fresh coriander, it is cooked until golden crisp on the bottom while staying pillow-soft and juicy inside.",
    image: "/assets/south-indian-uttapam.jpg",
  },
  {
    id: "butter-paneer-masala-dosa",
    name: "Butter Paneer Masala Dosa",
    tag: "Fusion Royal Dosa",
    description:
      "Crispy golden dosa stuffed with rich, spiced butter paneer bhurji & melting butter.",
    fullDesc:
      "A luxurious indulgence that unites the best of North and South culinary traditions. A paper-crisp dosa is generously filled with a rich, aromatic paneer masala sautéed with onions, capsicum, and traditional coastal spices.\n\nFinished with a dollop of creamy melting white butter, it offers an opulent melt-in-mouth experience.",
    image: "/assets/south-indian-butter-paneer-masala-dosa.jpg",
  },
  {
    id: "butter-plain-dosa-feast",
    name: "Butter Plain Dosa Feast",
    tag: "Pure Golden Crunch",
    description:
      "Thin, paper-crisp golden dosa roasted with aromatic butter, letting the pure fermented rice flavor shine.",
    fullDesc:
      "Simple, pure, and utterly satisfying. Butter Plain Dosa highlights the culinary mastery of fermented batter and skilled skillet technique.\n\nPaper-thin and roasted with butter until delicately brittle, it is the purest way to enjoy the tangy notes of the dosa, savoured by dipping into piping hot sambar and fresh chutneys.",
    image: "/assets/south-indian-masala-dosa.jpg",
  },
  {
    id: "crispy-rava-dosa",
    name: "Crispy Rava Dosa",
    tag: "Crisp Heritage Specialty",
    description:
      "Traditional thin, net-textured rava crepe roasted to golden crisp perfection.",
    fullDesc:
      "A timeless South Indian breakfast favourite, Crispy Rava Dosa is prepared without fermentation, relying on freshly blended semolina batter infused with curry leaves and mustard seeds.\n\nIts ultra-crispy, delicate honeycomb crust crackles with every bite, perfectly complemented by tangy tomato chutney, coconut chutney, and lentil sambar.",
    image: "/assets/south-indian-crispy-rava-dosa.jpg",
  },

  {
    id: "south-indian-sambar-vada",
    name: "South Indian Sambar Vada Feast",
    tag: "Crispy Lentil Fritters",
    description:
      "Crispy golden lentil fritters immersed in steaming, aromatic spiced drumstick sambar.",
    fullDesc:
      "Sambar Vada is the quintessential South Indian soul food. Crisp, golden-fried doughnut-shaped fritters made from spiced black gram batter (Medu Vada) with whole black pepper and ginger.\n\nImmersed in a piping hot bowl of aromatic drumstick and tomato sambar, the vadas soak up the rich, tangy broth while maintaining their delightful texture.",
    image: "/assets/south-indian-sambar-vada.jpg",
  },
  {
    id: "cheese-butter-masala-dosa-feast",
    name: "Cheese Butter Masala Dosa Feast",
    tag: "Decadent Modern Feast",
    description:
      "Decadent crispy dosa stuffed with spiced aloo masala, melted butter & generous cheese.",
    fullDesc:
      "An irresistible modern classic for food lovers. Crispy golden dosa roasted with dollops of creamy butter and filled with spiced potato masala, crowned with a generous blanket of melted cheese that stretches with every bite.\n\nServed with traditional piping hot sambar and refreshing coconut chutney for the ultimate comfort meal.",
    image: "/assets/south-indian-cheese-butter-masala-dosa.jpg",
  },
  {
    id: "butter-masala-dosa-feast",
    name: "Butter Masala Dosa Feast",
    tag: "Rich & Golden",
    description:
      "Crispy golden dosa roasted with generous dollops of butter and spiced potato filling.",
    fullDesc:
      "For those who appreciate the richer side of tradition. Our Butter Masala Dosa Feast is roasted exclusively in golden dairy butter, creating a deeper crunch and an intoxicating aroma.\n\nEncasing seasoned spiced potatoes and served with a generous bowl of slow-cooked drumstick sambar and fresh coconut dip.",
    image: "/assets/south-indian-masala-dosa.jpg",
  },
  {
    id: "south-indian-idli-sambar",
    name: "South Indian Idli With Sambar Chutney",
    tag: "Steamed Classic",
    description:
      "Pillowy-soft steamed rice cakes paired with rich vegetable sambar & fresh chutneys.",
    fullDesc:
      "Revered as one of the world's healthiest and most comforting breakfasts, our South Indian Idlis are naturally fermented and steamed to feather-light, cloud-like perfection.\n\nServed piping hot on a fresh banana leaf accompanied by slow-simmered vegetable sambar, creamy coconut chutney, and spicy roasted gram chutney.",
    image: "/assets/south-indian-idli-sambar.jpg",
  },
];

interface SouthIndianModalProps {
  onClose: () => void;
}

export function SouthIndianModal({ onClose }: SouthIndianModalProps) {
  const [activeVariant, setActiveVariant] = useState<SouthIndianVariant | null>(
    null,
  );

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
      aria-labelledby="south-indian-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* CONDITIONAL RENDER: INDIVIDUAL VARIANT DETAIL MODAL vs EXPLORE ALL DISHES */}
      {activeVariant ? (
        /* INDIVIDUAL SOUTH INDIAN DETAIL MODAL */
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

            {/* Back to all dishes button */}
            <button
              type="button"
              onClick={() => setActiveVariant(null)}
              className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-xs px-3 py-1.5 text-xs font-semibold text-white hover:bg-black/75 transition-colors cursor-pointer border border-white/20"
              aria-label="Back to south indian list"
            >
              <span>←</span>
              <span>All Dishes</span>
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
                id="south-indian-modal-title"
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

            {/* Bottom Actions: ← View All South Indian Dishes & Close Story */}
            <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-[#fed7aa]/50">
              {/* Left: View All Dishes */}
              <button
                type="button"
                onClick={() => setActiveVariant(null)}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0f2444] hover:text-[#ea580c] transition-colors cursor-pointer group"
              >
                <span className="text-base sm:text-lg transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
                <span>View All South Indian Dishes</span>
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
        /* EXPLORE ALL SOUTH INDIAN DISHES GRID (Full Page Scroll, Hidden Scrollbar) */
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
              id="south-indian-modal-title"
              className="mt-2 text-center text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#0f2444] leading-tight"
            >
              Explore Our{" "}
              <span className="text-[#ea580c]">South Indian Classics</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-0.5 text-center font-serif italic text-xs sm:text-sm text-slate-600">
              A celebration of timeless flavours & crispy perfection
            </p>
          </div>

          {/* GRID BODY - Flows with full modal scroll */}
          <div className="px-4 sm:px-7 py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {southIndianVariants.map((item) => (
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
              Crisp &bull; Freshly Prepared &bull; Full of authentic flavour
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
