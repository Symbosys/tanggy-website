import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tanggy — Order Biryani, Cooked Meals & South Indian Food",
  description:
    "Tanggy brings three food modes in one app — Biryani, Cooked meals, and South Indian classics. Order in seconds with live tracking.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-surface text-brand-text">
        {children}
      </body>
    </html>
  );
}
