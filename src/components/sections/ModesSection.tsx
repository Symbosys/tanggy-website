"use client";

import { useState } from "react";
import Image from "next/image";
import { foodModes } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExampleChip } from "@/components/ui/ExampleChip";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ModeScreen } from "@/components/ui/ModeScreen";

const cardImages = [
  "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/32825916/pexels-photo-32825916.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/36870974/pexels-photo-36870974.jpeg?auto=compress&cs=tinysrgb&w=1000",
  "https://images.pexels.com/photos/35351659/pexels-photo-35351659.jpeg?auto=compress&cs=tinysrgb&w=1000",
];

export function ModesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMode = foodModes[activeIndex];

  return (
    <section id="food" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow="What are you craving?"
            title="Start with your mood."
            description="Quick discovery for the kind of food you feel like eating today."
            id="food-heading"
          />
        </div>

        {/* Craving Filter Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {foodModes.map((mode, index) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition-all ${
                activeIndex === index
                  ? "gradient-flame text-white shadow-md shadow-brand-primary/25 scale-105"
                  : "border border-brand-border bg-brand-surface-elevated text-brand-text hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              <span>{mode.emoji}</span>
              <span>{mode.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Mode Explorer */}
        <div
          className={`mb-16 grid items-center gap-10 rounded-3xl border border-brand-border bg-brand-surface-elevated p-6 shadow-xl shadow-brand-primary/5 lg:grid-cols-2 lg:gap-12 lg:p-10 border-t-4 ${activeMode.accentClass}`}
          role="tabpanel"
          aria-labelledby="food-heading"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{activeMode.emoji}</span>
              <h3 className="text-2xl font-bold text-brand-text sm:text-3xl">
                {activeMode.name}
              </h3>
            </div>
            <p className="mb-8 text-lg leading-relaxed text-brand-text-muted">
              {activeMode.description}
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-text-muted">
              What you can order
            </p>
            <div className="flex flex-wrap gap-2.5">
              {activeMode.examples.map((example) => (
                <ExampleChip key={example} label={example} />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneMockup>
              <ModeScreen mode={activeMode} variant="menu" />
            </PhoneMockup>
          </div>
        </div>

        {/* 4 Category Cards from index.html */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foodModes.map((mode, index) => (
            <article
              key={mode.id}
              id={mode.id}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-surface-elevated shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/10"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={cardImages[index]}
                  alt={mode.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-brand-text">
                  {mode.name}
                </h3>
                <p className="text-sm leading-relaxed text-brand-text-muted">
                  {mode.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
