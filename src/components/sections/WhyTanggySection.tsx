"use client";

interface CommitmentItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const commitments: CommitmentItem[] = [
  {
    number: "01",
    title: "Authentic Food Choices",
    description:
      "Bringing together regional specialities and familiar everyday meals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <circle cx="12" cy="8" r="6" />
        <path
          d="M12 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"
          fill="currentColor"
        />
        <path d="m8.5 13.5-3 8.5 6.5-2 6.5 2-3-8.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Local Food Partners",
    description:
      "Working with local vendors who bring their own food identity and expertise.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Food Variety",
    description:
      "Offering Biryani, Meat Rice, Chicken Rice, Fish Rice, Egg Rice and South Indian dishes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <path d="M12 2v4M8 3v3M16 3v3" />
        <path
          d="M3 11h18c0 5-4 9-9 9s-9-4-9-9z"
          fill="currentColor"
          fillOpacity={0.25}
        />
        <path d="M3 11h18c0 5-4 9-9 9s-9-4-9-9z" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Convenience",
    description:
      "Making it easier for customers to discover and access local food.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
        <path d="m7 13 4 4" />
        <path d="M17 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
        <circle cx="10" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Customer Experience",
    description:
      "Building a dependable platform with a focus on service and satisfaction.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={3} />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={3} />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description:
      "Listening to customers and vendors to improve the overall experience.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6 text-white"
      >
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
];

export function WhyTanggySection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-brand-text py-16 sm:py-20 lg:py-24 text-white"
    >
      {/* Decorative Warm Ambient Glow (Top Center) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-gradient-to-b from-[#ea580c]/15 via-transparent to-transparent blur-3xl z-0"
      />

      {/* Decorative Bottom Corner Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-[#f97316] shadow-xs">
            {/* Handshake Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f97316]"
            >
              <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2" />
              <path d="m7 13 4 4" />
              <path d="M17 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
            </svg>
            <span>Our Commitment</span>
          </div>

          {/* Main Title */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Our Commitment to{" "}
            <span className="text-[#f97316]">Customers</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">
            At Tanggy, we believe a good food experience starts with trust. Our
            commitment is to build a platform focused on:
          </p>

          {/* Decorative Divider: Line with 3 orange dots in center */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-10 sm:mb-12">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-orange-500/60 rounded-full" />
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
              <span className="h-2 w-2 rounded-full bg-[#ea580c]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
            </div>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-orange-500/60 rounded-full" />
          </div>
        </div>

        {/* 6 COMMITMENT CARDS GRID: 2 ROWS OF 3 CARDS */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item) => (
            <div
              key={item.number}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4.5 sm:px-6 sm:py-5 backdrop-blur-sm transition-all duration-300 hover:border-[#f97316]/50 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(249,115,22,0.15)]"
            >
              {/* Circular Icon on top */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white shadow-md shadow-orange-500/25 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>

              {/* Number Badge */}
              <span className="mt-2 text-xs sm:text-sm font-black tracking-wider text-[#f97316]">
                {item.number}
              </span>

              {/* Card Title */}
              <h3 className="mt-0.5 text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
