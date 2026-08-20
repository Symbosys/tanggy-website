import Image from "next/image";
import { journalContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow={journalContent.eyebrow}
            title={journalContent.title}
            description={journalContent.description}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="group relative h-96 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-lg lg:col-span-7 lg:h-[480px]">
            <Image
              src={journalContent.main.image}
              alt={journalContent.main.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-script text-3xl text-white">
                {journalContent.main.title}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-5 lg:grid-rows-2">
            {journalContent.side.map((item) => (
              <div
                key={item.title}
                className="group relative h-56 overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-md transition-all duration-300 hover:shadow-lg lg:h-auto"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-script text-2xl text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
