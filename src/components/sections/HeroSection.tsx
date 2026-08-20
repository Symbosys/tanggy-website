import Image from "next/image";
import { hero, brand } from "@/lib/content";
import { StoreBadge } from "@/components/ui/StoreBadge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-primary-light/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="mb-4 font-script text-2xl text-brand-primary sm:text-3xl">
            {brand.tagline}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-text sm:text-5xl lg:text-6xl">
            {hero.headline}{" "}
            <span className="gradient-text-flame">{hero.headlineAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brand-text-muted lg:mx-0">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#food"
              className="gradient-flame rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-transform hover:scale-105"
            >
              {hero.primaryAction}
            </a>
            <a
              href="#app"
              className="rounded-full border border-brand-border bg-brand-surface-elevated px-6 py-3.5 text-sm font-bold text-brand-text shadow-sm transition-all hover:border-brand-primary hover:text-brand-primary"
            >
              {hero.secondaryAction}
            </a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreBadge variant="dark" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-105 w-full max-w-lg overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-2xl shadow-brand-primary/10 sm:h-125">
            <Image
              src={hero.image}
              alt="Indian biryani food story"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5 rounded-full border border-white/40 bg-black/40 px-3.5 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
              {hero.badge}
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-script text-3xl text-white">
                {hero.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
