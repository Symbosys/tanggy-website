"use client";

import { useEffect, useState } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  // Preference switches
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Small delay so it slides in smoothly after initial render without blocking
    const timer = setTimeout(() => {
      try {
        const consent = localStorage.getItem("tanggy_cookie_consent");
        if (!consent) {
          setVisible(true);
        }
      } catch {
        setVisible(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (status: "accepted" | "declined" | "custom", prefs?: CookiePreferences) => {
    try {
      localStorage.setItem("tanggy_cookie_consent", status);
      if (prefs) {
        localStorage.setItem("tanggy_cookie_preferences", JSON.stringify(prefs));
      }
    } catch (e) {
      console.error(e);
    }
    setVisible(false);
    setShowCustomize(false);
  };

  const handleAcceptAll = () => {
    saveConsent("accepted", {
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleDecline = () => {
    saveConsent("declined", {
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    saveConsent("custom", preferences);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 flex justify-center sm:justify-end"
    >
      <div className="pointer-events-auto w-full max-w-md sm:max-w-lg rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-orange-200/90 shadow-[0_12px_40px_rgba(15,36,68,0.18)] ring-1 ring-black/5 transition-all max-h-[85vh] overflow-y-auto">
        {!showCustomize ? (
          /* ========================================================== */
          /* MAIN BANNER VIEW                                            */
          /* ========================================================== */
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Cookie Icon Badge */}
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffedd5] to-[#fed7aa]/50 text-[#ea580c] shadow-2xs border border-orange-200/60">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M7 13v.01" />
                <path d="M12 16v.01" />
                <path d="M16 13v.01" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-[#0c1b33]">
                We Value Your Privacy 🍪
              </h3>
              <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                We use cookies to enhance your food discovery experience, analyze site traffic, and deliver personalized recommendations.
              </p>

              {/* Action Buttons: Accept All, Customize, Decline */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomize(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full border border-orange-200 bg-orange-50/70 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#ea580c] transition-colors hover:bg-orange-100 cursor-pointer"
                >
                  Customize
                </button>
                <button
                  type="button"
                  onClick={handleDecline}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================== */
          /* CUSTOMIZE COOKIE PREFERENCES VIEW                          */
          /* ========================================================== */
          <div className="space-y-3.5">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowCustomize(false)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Back to banner"
                >
                  ←
                </button>
                <h3 className="text-sm sm:text-base font-bold text-[#0c1b33]">
                  Customize Preferences
                </h3>
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                Tanggy Privacy
              </span>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-2.5 text-left">
              {/* 1. Necessary Cookies */}
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Strictly Necessary
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                    Always Active
                  </span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Essential for core website features, ordering flow, and security. Cannot be disabled.
                </p>
              </div>

              {/* 2. Analytics Cookies */}
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Analytics & Performance
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        analytics: !prev.analytics,
                      }))
                    }
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.analytics ? "bg-[#ea580c]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        preferences.analytics ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Helps us measure site traffic and optimize page speed to serve you better.
                </p>
              </div>

              {/* 3. Marketing Cookies */}
              <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#0c1b33]">
                    Marketing & Offers
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() =>
                      setPreferences((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.marketing ? "bg-[#ea580c]" : "bg-slate-300"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        preferences.marketing ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">
                  Used to deliver personalized dish recommendations and exclusive restaurant offers.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
