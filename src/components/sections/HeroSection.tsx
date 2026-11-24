"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const HERO_DISHES = [
  {
    id: "chicken-biryani",
    label: "Chicken Dum Biryani",
    subtitle: "Fragrant basmati & royal spices",
    alt: "Authentic Chicken Dum Biryani in copper handi",
    image: "/assets/hero-chicken-biryani.png",
  },
  {
    id: "mutton-biryani",
    label: "Mutton Dum Biryani",
    subtitle: "Slow-cooked tender mutton & saffron rice",
    alt: "Authentic Mutton Dum Biryani in copper handi",
    image: "/assets/hero-mutton-biryani.png",
  },
  {
    id: "egg-curry-roti",
    label: "Desi Egg Curry & Roti",
    subtitle: "Spiced egg masala, soft rotis & onion salad",
    alt: "Desi Egg Curry with soft rotis and pickled onions",
    image: "/assets/hero-egg-curry-roti.png",
  },
  {
    id: "masala-dosa",
    label: "Crispy Masala Dosa",
    subtitle: "Golden roast with sambar & chutneys",
    alt: "Crispy Golden Masala Dosa with sambar and chutneys",
    image: "/assets/hero-masala-dosa.png",
  },
  {
    id: "idli-sambar",
    label: "Soft Idli Sambar",
    subtitle: "Fluffy steamed idlis & hot sambar",
    alt: "South Indian Idli Sambar with chutneys",
    image: "/assets/hero-idli-sambar.png",
  },
  {
    id: "handi-meat-rice",
    label: "Handi Meat Rice Platter",
    subtitle: "Slow-cooked mutton in clay pot & aromatic rice",
    alt: "Traditional Handi Meat Curry with basmati rice, onions and chilies",
    image: "/assets/hero-handi-meat-rice.png",
  },
  {
    id: "fish-curry-thali",
    label: "Traditional Fish Curry Thali",
    subtitle: "Tender fish steaks, fragrant rice & aloo bhaja",
    alt: "Authentic Fish Curry Thali with steamed rice, salad and aloo bhaja",
    image: "/assets/hero-fish-curry-thali.png",
  },
  {
    id: "gourmet-burger",
    label: "Loaded Cheese Burger",
    subtitle: "Flame-grilled patty, crispy fries & dips",
    alt: "Classic Gourmet Cheese Burger with fries and dips",
    image: "/assets/hero-burger.png",
  },
  {
    id: "loaded-pizza",
    label: "Cheesy Loaded Pizza",
    subtitle: "Fresh oven-baked crust & cheese pull",
    alt: "Cheesy Loaded Pizza with dips",
    image: "/assets/hero-pizza.png",
  },
  {
    id: "chocolate-cake",
    label: "Chocolate Truffle Cake",
    subtitle: "Rich ganache, cream & fresh berries",
    alt: "Chocolate Truffle Drip Cake with strawberries",
    image: "/assets/hero-chocolate-cake.png",
  },
] as const;

const SLIDE_DURATION_SEC = 2.6;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const sectionRef = useRef<HTMLElement>(null);
  const stageTiltRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const dishLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressTweenRef = useRef<gsap.core.Tween | null>(null);
  const progressBarRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const badgeTagRef = useRef<HTMLSpanElement>(null);
  const cardTagRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((nextIdx: number) => {
    const currentIdx = activeIndexRef.current;
    if (nextIdx === currentIdx) return;

    const currentEl = dishLayerRefs.current[currentIdx];
    const nextEl = dishLayerRefs.current[nextIdx];
    if (!currentEl || !nextEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    activeIndexRef.current = nextIdx;
    setActiveIndex(nextIdx);

    if (prefersReduced) {
      dishLayerRefs.current.forEach((el, idx) => {
        if (!el) return;
        gsap.set(el, {
          opacity: idx === nextIdx ? 1 : 0,
          x: 0,
          y: 0,
          scale: 1,
          zIndex: idx === nextIdx ? 15 : 1,
        });
      });
      return;
    }

    // Kill any in-flight dish tweens so rapid dot clicks stay buttery smooth
    dishLayerRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.killTweensOf(el);
      if (idx !== currentIdx && idx !== nextIdx) {
        gsap.set(el, { opacity: 0, zIndex: 1 });
      }
    });

    // Fast, silky cross-glide with tight overlap
    const tl = gsap.timeline();

    gsap.set(nextEl, {
      zIndex: 15,
      opacity: 0,
      x: 28,
      y: 18,
      scale: 1.04,
      force3D: true,
    });
    gsap.set(currentEl, { zIndex: 10 });

    tl.to(
      currentEl,
      {
        opacity: 0,
        x: -26,
        y: -16,
        scale: 0.95,
        duration: 0.45,
        ease: "power2.inOut",
        force3D: true,
      },
      0
    ).to(
      nextEl,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
        force3D: true,
      },
      0.08
    );

    if (auraRef.current) {
      gsap.fromTo(
        auraRef.current,
        { scale: 0.92, opacity: 0.72 },
        {
          scale: 1.08,
          opacity: 0.5,
          duration: 0.7,
          ease: "sine.out",
          force3D: true,
          overwrite: "auto",
        }
      );
    }

    if (badgeTagRef.current) {
      gsap.fromTo(
        badgeTagRef.current,
        { y: 8, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.38,
          ease: "power3.out",
          force3D: true,
          overwrite: "auto",
        }
      );
    }

    if (cardTagRef.current) {
      gsap.fromTo(
        cardTagRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.42,
          delay: 0.08,
          ease: "power3.out",
          force3D: true,
          overwrite: "auto",
        }
      );
    }
  }, []);

  // Initialize dish layer states once on mount
  useEffect(() => {
    dishLayerRefs.current.forEach((el, idx) => {
      if (!el) return;
      gsap.set(el, {
        opacity: idx === 0 ? 1 : 0,
        x: 0,
        y: 0,
        scale: 1,
        zIndex: idx === 0 ? 15 : 1,
        force3D: true,
      });
    });
  }, []);

  // Drive live GSAP progress pill & auto-advance smoothly
  useEffect(() => {
    progressTweenRef.current?.kill();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const barEl = progressBarRefs.current[activeIndex];
    if (!barEl) return;

    gsap.set(barEl, { scaleX: 0, transformOrigin: "left center", force3D: true });

    progressTweenRef.current = gsap.to(barEl, {
      scaleX: 1,
      duration: SLIDE_DURATION_SEC,
      ease: "none",
      force3D: true,
      onComplete: () => {
        const nextIdx = (activeIndexRef.current + 1) % HERO_DISHES.length;
        goToSlide(nextIdx);
      },
    });

    return () => {
      progressTweenRef.current?.kill();
    };
  }, [activeIndex, goToSlide]);

  // Continuous Silky Ambient Float + 3D Mouse Tilt + ScrollTrigger + Magnetic CTAs
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // Gentle, liquid weightless levitation
      gsap.to(".hero-dish-levitate", {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });

      // Synced breathing shadow under dish
      gsap.to(".hero-dish-shadow", {
        scaleX: 0.87,
        scaleY: 0.9,
        opacity: 0.48,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        force3D: true,
      });

      // ScrollTrigger silky upward glide when scrolling down
      gsap.to(".hero-dish-scroll", {
        y: -38,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Interactive 3D Mouse Perspective Tilt + Magnetic CTAs (Desktop)
      if (window.matchMedia("(pointer: fine)").matches) {
        const stageEl = stageTiltRef.current;
        const auraEl = auraRef.current;

        if (stageEl) {
          gsap.set(stageEl, { transformPerspective: 1100, force3D: true });
          const stageX = gsap.quickTo(stageEl, "x", { duration: 0.55, ease: "power2.out" });
          const stageY = gsap.quickTo(stageEl, "y", { duration: 0.55, ease: "power2.out" });
          const stageRotY = gsap.quickTo(stageEl, "rotationY", { duration: 0.55, ease: "power2.out" });
          const stageRotX = gsap.quickTo(stageEl, "rotationX", { duration: 0.55, ease: "power2.out" });

          const auraX = auraEl
            ? gsap.quickTo(auraEl, "x", { duration: 0.7, ease: "power2.out" })
            : null;
          const auraY = auraEl
            ? gsap.quickTo(auraEl, "y", { duration: 0.7, ease: "power2.out" })
            : null;

          const onHeroMove = (e: MouseEvent) => {
            const rect = sectionEl.getBoundingClientRect();
            const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

            stageX(nx * 14);
            stageY(ny * 10);
            stageRotY(nx * 5.5);
            stageRotX(-ny * 4);

            auraX?.(-nx * 16);
            auraY?.(-ny * 12);
          };

          const onHeroLeave = () => {
            gsap.to(stageEl, {
              x: 0,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              duration: 1.0,
              ease: "power3.out",
              force3D: true,
            });
            if (auraEl) {
              gsap.to(auraEl, {
                x: 0,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                force3D: true,
              });
            }
          };

          sectionEl.addEventListener("mousemove", onHeroMove);
          sectionEl.addEventListener("mouseleave", onHeroLeave);
          cleanups.push(() => {
            sectionEl.removeEventListener("mousemove", onHeroMove);
            sectionEl.removeEventListener("mouseleave", onHeroLeave);
          });
        }

        // Subtle magnetic pull on Hero CTAs
        const magneticEls = sectionEl.querySelectorAll<HTMLElement>(".hero-magnetic");
        magneticEls.forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });

          const onBtnMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.22;
            const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
            xTo(gsap.utils.clamp(-7, 7, dx));
            yTo(gsap.utils.clamp(-5, 5, dy));
          };

          const onBtnLeave = () => {
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "elastic.out(1, 0.45)",
            });
          };

          btn.addEventListener("mousemove", onBtnMove);
          btn.addEventListener("mouseleave", onBtnLeave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", onBtnMove);
            btn.removeEventListener("mouseleave", onBtnLeave);
          });
        });
      }
    }, sectionEl);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  const currentDish = HERO_DISHES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-br from-[#fffaf5] via-[#fffdfb] to-[#fff5eb] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Sweeping Right-Side & Bottom Orange Wave Backdrop */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="heroOrangeWave" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9b26" />
            <stop offset="55%" stopColor="#f96910" />
            <stop offset="100%" stopColor="#dc4907" />
          </linearGradient>
          <linearGradient id="heroSoftPeach" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde6d2" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#fff3e6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fde6d2" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Soft warm glow behind dish */}
        <circle cx="1050" cy="405" r="310" fill="#ffedd5" opacity="0.55" />

        {/* Right sweeping vibrant orange organic shape */}
        <path
          d="M1440,80 C1270,115 1135,235 1085,370 C1030,520 1190,635 1440,590 L1440,80 Z"
          fill="url(#heroOrangeWave)"
          className="hidden lg:block"
        />

        {/* Bottom soft peach wave */}
        <path
          d="M0,655 C230,615 415,725 720,715 C1015,705 1235,610 1440,665 L1440,760 L0,760 Z"
          fill="url(#heroSoftPeach)"
        />

        {/* Bottom-left vibrant orange wave */}
        <path
          d="M0,685 C195,650 365,735 585,760 L0,760 Z"
          fill="url(#heroOrangeWave)"
        />

        {/* Bottom-right vibrant orange wave */}
        <path
          d="M960,760 C1155,735 1300,670 1440,685 L1440,760 Z"
          fill="url(#heroOrangeWave)"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Copy Column */}
          <div className="text-center lg:col-span-6 lg:text-left">
            {/* Warm Peach Pill Badge with Live Active Dish Sync */}
            <div className="inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#fce7d6] px-4 py-1.5 text-xs font-semibold text-[#9a4414] shadow-xs sm:text-sm">
              <svg
                className="h-4 w-4 shrink-0 text-[#c2591a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a8 8 0 00-8 8h16a8 8 0 00-8-8zm-9 11h18"
                />
              </svg>
              <span>{hero.kicker}</span>
              <span className="text-[#ea580c]/50">•</span>
              <span ref={badgeTagRef} className="font-bold text-[#c2410c]">
                {currentDish.label}
              </span>
            </div>

            {/* Bold Editorial Heading with Orange Spark Lines & Brush Underline */}
            <div className="relative mt-3 sm:mt-4 inline-block max-w-full">
              {/* 3 Orange Accent Spark Rays */}
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="pointer-events-none absolute -top-5 -right-7 hidden h-10 w-10 text-[#f97316] sm:block"
                fill="none"
              >
                <path
                  d="M10 22 L15 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 28 L33 17"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M25 38 L40 35"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>

              <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
                <span className="block">{hero.headline}</span>
                <span className="relative mt-1 inline-block bg-linear-to-r from-[#f97316] via-[#ea580c] to-[#dc4c07] bg-clip-text text-transparent">
                  {hero.headlineAccent}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 18"
                    className="pointer-events-none absolute -bottom-2.5 left-1/2 h-3.5 w-40 -translate-x-1/2 text-[#f97316] sm:w-56 lg:left-0 lg:translate-x-0"
                    fill="none"
                  >
                    <path
                      d="M4 13 C65 2, 165 2, 254 11"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Italic Subtitle */}
            <p className="mt-2.5 sm:mt-3 text-base font-medium italic text-[#374151] sm:text-xl lg:text-2xl">
              {hero.caption}
            </p>

            {/* Body Description */}
            <p className="mx-auto mt-2 sm:mt-2.5 max-w-lg text-sm leading-relaxed text-[#4b5563] sm:text-base lg:text-lg lg:mx-0">
              {hero.description}
            </p>

            {/* Primary & Secondary Magnetic Pill CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#food"
                className="hero-magnetic animate-shimmer group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-linear-to-r from-[#f97316] to-[#dc4c07] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/45 sm:px-7 sm:py-3.5"
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
                <span>{hero.primaryAction}</span>
                <svg
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
              </a>

              <a
                href="#cities"
                className="hero-magnetic inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#f59e0b]/70 bg-white px-6 py-3 text-sm font-bold text-[#1f2937] shadow-xs transition-colors duration-300 hover:border-[#ea580c] hover:bg-orange-50/50 hover:text-[#ea580c] hover:shadow-md sm:py-3.5"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-[#ea580c]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Our Cities</span>
              </a>
            </div>
          </div>

          {/* Right Single-Stage Editorial Dish Showcase (Clean, Zero Clutter, Silky Cross-Glide) */}
          <div
            className="hero-dish-scroll relative flex flex-col items-center justify-center lg:col-span-6"
            onMouseEnter={() => progressTweenRef.current?.pause()}
            onMouseLeave={() => progressTweenRef.current?.resume()}
          >
            {/* Warm Golden Aura Behind Active Dish */}
            <div
              ref={auraRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-[#fbbf24]/45 via-[#f97316]/25 to-transparent blur-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />

            {/* Single Focal Dish Stage */}
            <div
              ref={stageTiltRef}
              className="relative aspect-[3/2] w-full max-w-[340px] will-change-transform sm:max-w-[470px] lg:max-w-[540px] xl:max-w-[600px]"
            >
              <div className="hero-dish-levitate relative h-full w-full will-change-transform">
                {HERO_DISHES.map((dish, idx) => (
                  <div
                    key={dish.id}
                    ref={(el) => {
                      dishLayerRefs.current[idx] = el;
                    }}
                    className="pointer-events-none absolute inset-0 will-change-transform"
                  >
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes="(max-width: 640px) 340px, (max-width: 1024px) 470px, (max-width: 1280px) 540px, 600px"
                      draggable={false}
                      className="select-none object-contain"
                      priority={idx < 2}
                      loading="eager"
                    />
                  </div>
                ))}
              </div>

              {/* Minimal Floating Glass Dish Caption Pill */}
              <div
                ref={cardTagRef}
                className="pointer-events-none absolute right-2 bottom-2 z-20 hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-2 shadow-lg shadow-orange-900/10 backdrop-blur-md sm:block"
              >
                <p className="text-xs font-extrabold tracking-tight text-[#111827]">
                  {currentDish.label}
                </p>
                <p className="text-[11px] font-medium text-[#6b7280]">
                  {currentDish.subtitle}
                </p>
              </div>
            </div>

            {/* Synced Breathing Shadow Under Dish */}
            <div
              aria-hidden="true"
              className="hero-dish-shadow -mt-4 h-5 w-48 rounded-full bg-[#7c2d12]/22 blur-lg sm:w-64 lg:w-72"
            />
          </div>
        </div>

        {/* Bottom Live GSAP Progress Indicator Dots + Scroll-Down Pill */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center gap-2 sm:gap-2.5 lg:mt-2">
          <div className="flex items-center gap-1.5 sm:gap-2" role="tablist" aria-label="Featured dishes">
            {HERO_DISHES.map((dish, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={dish.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={dish.label}
                  onClick={() => goToSlide(idx)}
                  className={`relative h-2 cursor-pointer overflow-hidden rounded-full transition-[width,background-color] duration-300 sm:h-2.5 ${
                    isActive
                      ? "w-8 bg-[#fed7aa] sm:w-10"
                      : "w-2 bg-[#fdba74] hover:bg-[#fb923c] sm:w-2.5"
                  }`}
                >
                  {isActive && (
                    <span
                      ref={(el) => {
                        progressBarRefs.current[idx] = el;
                      }}
                      className="absolute inset-0 block rounded-full bg-[#ea580c] will-change-transform"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <a
            href="#food"
            aria-label="Scroll to food menu"
            className="hidden sm:flex h-11 w-7 items-center justify-center rounded-full border border-[#ea580c]/55 bg-white/95 text-[#ea580c] shadow-xs transition-all duration-200 hover:translate-y-0.5 hover:border-[#ea580c] hover:bg-orange-50 hover:shadow-md"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
