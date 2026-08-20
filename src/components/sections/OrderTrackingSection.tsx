import { trackingFeatures, trackingSteps } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function OrderTrackingSection() {
  return (
    <section id="tracking" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Live tracking"
              title="Know exactly where your food is"
              description="From the moment you tap order to the knock on your door — follow every step in real time."
              align="left"
              id="tracking-heading"
            />

            <ul className="mt-10 space-y-6">
              {trackingFeatures.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                    <svg
                      className="h-3.5 w-3.5 text-brand-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text">{feature.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup animate>
              <TrackingScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackingScreen() {
  const activeStepIndex = 2;

  return (
    <div className="flex min-h-[420px] flex-col bg-brand-surface-warm p-4 pt-10">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-sm font-bold text-brand-text">Order #TG-4821</p>
        <span className="flex items-center gap-1.5 rounded-full bg-brand-accent/15 px-2.5 py-1 text-xs font-semibold text-brand-accent">
          <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse-live" />
          Live
        </span>
      </div>
      <p className="mb-6 text-xs text-brand-text-muted">Hyderabadi Biryani · 2 items</p>

      <div className="mb-4 rounded-2xl border border-brand-border bg-brand-surface-elevated p-4">
        <p className="text-xs font-medium text-brand-text-muted">Estimated arrival</p>
        <p className="text-2xl font-extrabold text-brand-primary">12:55 PM</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-brand-border">
          <div className="h-full rounded-full gradient-flame animate-progress-fill" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-0">
        {trackingSteps.map((step, index) => {
          const isComplete = index < activeStepIndex;
          const isActive = index === activeStepIndex;

          return (
            <div key={step.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                    isComplete
                      ? "bg-brand-accent text-white"
                      : isActive
                        ? "gradient-flame text-white"
                        : "border-2 border-brand-border bg-brand-surface-elevated text-brand-text-muted"
                  }`}
                >
                  {isComplete ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                {index < trackingSteps.length - 1 && (
                  <div
                    className={`my-1 w-0.5 flex-1 min-h-[24px] ${
                      isComplete ? "bg-brand-accent" : "bg-brand-border"
                    }`}
                  />
                )}
              </div>
              <div className="pb-6">
                <p
                  className={`text-sm font-semibold ${
                    isActive || isComplete ? "text-brand-text" : "text-brand-text-muted"
                  }`}
                >
                  {step.label}
                  {isActive && (
                    <span className="ml-2 text-xs font-normal text-brand-accent">
                      In progress
                    </span>
                  )}
                </p>
                <p className="text-xs text-brand-text-muted">{step.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
