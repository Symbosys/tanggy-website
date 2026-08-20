import type { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
  animate?: boolean;
};

export function PhoneMockup({
  children,
  className = "",
  animate = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[280px] sm:w-[300px] ${animate ? "animate-float" : ""} ${className}`}
    >
      <div className="relative rounded-[2.5rem] border-[6px] border-brand-text bg-brand-text p-2 shadow-2xl shadow-brand-primary/20">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-text" />
        <div className="overflow-hidden rounded-[2rem] bg-brand-surface-warm">
          {children}
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand-primary/10 blur-2xl" />
    </div>
  );
}
