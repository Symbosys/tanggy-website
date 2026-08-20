import { appContent } from "@/lib/content";
import { StoreBadge } from "@/components/ui/StoreBadge";

export function DownloadSection() {
  return (
    <section id="app" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-primary-dark px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary-light/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-primary/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-2 font-script text-2xl text-brand-primary-light sm:text-3xl">
              {appContent.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {appContent.title}{" "}
              <span className="text-brand-primary-light">{appContent.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {appContent.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-white px-8 py-4 text-sm font-extrabold text-brand-primary-dark shadow-lg transition-transform hover:scale-105"
              >
                {appContent.buttonText}
              </a>
              <StoreBadge variant="light" />
            </div>

            <p className="mt-6 text-xs text-white/60">
              {appContent.storeNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
