import Image from "next/image";
import { occasions } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OccasionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow={occasions.eyebrow}
            title={occasions.title}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.items.map((item) => (
            <div
              key={item.title}
              className="group relative h-72 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
