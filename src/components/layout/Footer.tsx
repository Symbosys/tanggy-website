import Image from "next/image";
import Link from "next/link";
import { brand, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-text text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="Tanggy logo"
              width={140}
              height={56}
              className="mb-4 h-14 w-auto brightness-0 invert"
            />
            <p className="font-script text-2xl text-brand-primary-light">
              {brand.tagline}
            </p>
            <p className="mt-3 text-sm text-white/60">
              Made with love for food lovers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Legal & Support
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">{brand.copyright}</p>
          <p className="text-sm text-white/50">
            Privacy • Terms • Contact
          </p>
        </div>
      </div>
    </footer>
  );
}
