import type { FoodMode } from "@/lib/content";

type ModeScreenProps = {
  mode: FoodMode;
  variant?: "picker" | "menu";
};

export function ModeScreen({ mode, variant = "menu" }: ModeScreenProps) {
  if (variant === "picker") {
    return (
      <div className="flex min-h-[420px] flex-col bg-brand-surface-warm p-4 pt-10">
        <div className="mb-4 text-center">
          <p className="text-xs font-medium text-brand-text-muted">
            Choose your mode
          </p>
          <p className="mt-1 text-lg font-bold text-brand-text">What&apos;s cooking?</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {["Biryani", "Cooked", "South Indian"].map((name, i) => (
            <div
              key={name}
              className={`flex items-center gap-3 rounded-2xl border p-4 transition-colors ${
                mode.name.includes(name.split(" ")[0]) ||
                (name === "South Indian" && mode.id === "south-indian")
                  ? "border-brand-primary bg-brand-primary/10 shadow-sm"
                  : "border-brand-border bg-brand-surface-elevated"
              }`}
            >
              <span className="text-2xl">
                {i === 0 ? "🍚" : i === 1 ? "🍗" : "🥘"}
              </span>
              <div>
                <p className="font-semibold text-brand-text">{name}</p>
                <p className="text-xs text-brand-text-muted">
                  {i === 0
                    ? "All types of biryani"
                    : i === 1
                      ? "Chicken, mutton & more"
                      : "Idli, dosa & classics"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[420px] flex-col bg-brand-surface-warm">
      <div className="gradient-flame px-4 pb-4 pt-10">
        <p className="text-xs font-medium text-white/80">{mode.name}</p>
        <p className="text-lg font-bold text-white">Popular picks</p>
      </div>
      <div className="flex flex-1 flex-col gap-0 divide-y divide-brand-border p-2">
        {mode.screenItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-3 py-3.5"
          >
            <div>
              <p className="text-sm font-semibold text-brand-text">{item.name}</p>
              <p className="text-xs text-brand-text-muted">Tap to add</p>
            </div>
            <span className="rounded-lg bg-brand-primary/10 px-2.5 py-1 text-sm font-bold text-brand-primary">
              {item.price}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-brand-border p-4">
        <div className="gradient-flame rounded-xl py-3 text-center text-sm font-bold text-white">
          View cart · 2 items
        </div>
      </div>
    </div>
  );
}
