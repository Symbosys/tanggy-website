import Image from "next/image";
import { storyContent } from "@/lib/content";

export function StorySection() {
  return (
    <section id="story" className="section-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[450px] w-full overflow-hidden rounded-3xl border border-brand-border bg-brand-surface-elevated shadow-xl lg:h-[500px]">
            <Image
              src={storyContent.image}
              alt="The Tanggy Story - Traditional Indian food"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-2 font-script text-2xl text-brand-primary sm:text-3xl">
              {storyContent.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl lg:text-5xl">
              {storyContent.title}{" "}
              <span className="gradient-text-flame">{storyContent.titleAccent}</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-text-muted lg:text-lg">
              {storyContent.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 font-script text-3xl text-brand-primary">
              {storyContent.signature}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
