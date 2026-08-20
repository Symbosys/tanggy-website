import { promiseContent } from "@/lib/content";

export function PromiseSection() {
  return (
    <section className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl">
          {promiseContent.eyebrow}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
          {promiseContent.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-brand-text-muted">
          {promiseContent.description}
        </p>
      </div>
    </section>
  );
}
