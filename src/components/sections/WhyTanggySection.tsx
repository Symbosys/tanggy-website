import { whyTanggyContent } from "@/lib/content";

export function WhyTanggySection() {
  return (
    <section id="experience" className="bg-brand-text py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-2 font-script text-2xl text-brand-primary-light sm:text-3xl">
            {whyTanggyContent.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {whyTanggyContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 lg:text-lg">
            {whyTanggyContent.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyTanggyContent.features.map((feature) => (
            <div
              key={feature.number}
              className="rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary-light/40 hover:bg-white/10"
            >
              <div className="font-script text-3xl font-bold text-brand-primary-light">
                {feature.number}
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
