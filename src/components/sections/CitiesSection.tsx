import { citiesContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CitiesSection() {
  return (
    <section id="cities" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow={citiesContent.eyebrow}
            title={citiesContent.title}
            description={citiesContent.description}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {citiesContent.cities.map((city) => (
            <div
              key={city.name}
              className="rounded-3xl border border-brand-border bg-brand-surface-elevated p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-brand-text">
                {city.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                {city.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
