import { faqContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow={faqContent.eyebrow}
            title={faqContent.title}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqContent.items.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border border-brand-border bg-brand-surface-elevated p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-brand-text">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
