/**
 * Three Pillars. Global layout: fixed navbar (transparent → frosted on scroll),
 * full-screen mobile menu, footer, comet cursor, intro overlay.
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight, ArrowUp, Sparkles } from "lucide-react";
import { APP_URL } from "@/lib/modules";
import { usePageTitle } from "@/hooks/usePageTitle";
import CometCursor from "./effects/CometCursor";
import IntroOverlay from "./effects/IntroOverlay";

// User-approved logo (Round 29): the column mark rebuilt as clean geometry —
// solid black, fully transparent background, no chip/box. 2048px master.
const LOGO_URL = "/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/modules", label: "Modules" },
  { href: "/personal", label: "For Individuals" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center overflow-hidden shrink-0"
      style={{ width: size, height: size }}
    >
      <img src={LOGO_URL} alt="Three Pillars logo, Roman numeral III" className="w-full h-full object-contain" />
    </span>
  );
}

function AnnouncementBar({ onDismiss, visible }: { onDismiss: () => void; visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="relative z-[60] bg-white/[0.04] border-b border-white/[0.07] backdrop-blur-xl">
      <div className="container flex items-center justify-center gap-2 h-9 text-xs">
        <Sparkles className="w-3.5 h-3.5 text-zinc-200 shrink-0" />
        <span className="text-zinc-300 truncate">
          The Three Pillars roadmap is live, see what ships next.
        </span>
        <Link href="/roadmap" className="text-white font-medium underline underline-offset-4 hover:text-zinc-300 transition-colors shrink-0">
          View roadmap
        </Link>
        <button
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function Navbar({ bannerVisible, onBannerDismiss }: { bannerVisible: boolean; onBannerDismiss: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar stays full-width above the floating pill */}
      <div className="fixed top-0 inset-x-0 z-50">
        <AnnouncementBar visible={bannerVisible && !scrolled} onDismiss={onBannerDismiss} />
      </div>
      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          bannerVisible && !scrolled ? "top-12" : "top-3"
        }`}
      >
        <div
          className={`mx-auto max-w-5xl px-3 sm:px-5 flex items-center justify-between h-14 rounded-full border transition-all duration-300 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] ${
            scrolled
              ? "navbar-translucent-scrolled backdrop-blur-xl border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "navbar-translucent backdrop-blur-lg border-white/[0.14]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo size={32} />
            <span className="font-display font-semibold text-white tracking-tight text-[15px] group-hover:opacity-90 transition-opacity">
              Three Pillars
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 text-sm rounded-full transition-colors duration-200 ${
                  location === l.href
                    ? "text-white bg-white/[0.06]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="press hidden md:inline-flex items-center gap-1.5 rounded-full bg-white text-black text-sm font-medium px-4.5 py-1.5 hover:bg-zinc-200"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="press md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-white"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 px-8">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-3xl font-semibold py-3 transition-all duration-300 ${
                location === l.href ? "text-white" : "text-zinc-500 hover:text-white"
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            className="press mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-7 py-3.5"
            style={{
              transitionDelay: open ? "260ms" : "0ms",
              transform: open ? "translateY(0)" : "translateY(12px)",
              opacity: open ? 1 : 0,
              transition: "all 300ms cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`press fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-black/70 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-4.5 h-4.5" />
    </button>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.18] mt-4">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo size={40} />
              <span className="font-display font-semibold text-white text-lg tracking-tight">
                Three Pillars
              </span>
            </div>
            <p className="text-sm text-zinc-200 leading-relaxed">
              The only app you will ever need, for your business or yourself.
              153+ modules covering everything from billing and compliance to
              personal workspace tools.
            </p>
            <p className="text-xs text-white mt-6">
              © 2026 buildingit. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/modules" className="text-zinc-200 hover:text-white transition-colors">
                  All Modules
                </Link>
              </li>
              <li>
                <Link href="/personal" className="text-zinc-200 hover:text-white transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-zinc-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-zinc-200 hover:text-white transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/migrate" className="text-zinc-200 hover:text-white transition-colors">
                  Migrate to Three Pillars
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-zinc-200 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-zinc-200 hover:text-white transition-colors">
                  What's New
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-zinc-200 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Launch App
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-zinc-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-zinc-200 hover:text-white transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-200 hover:text-white transition-colors">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-zinc-200 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@usethreepillars.com"
                  className="text-zinc-200 hover:text-white transition-colors"
                >
                  hello@usethreepillars.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-medium text-white">
              Three Pillars, a product of
            </span>
            <img
              src="/buildingit.png"
              alt="buildingit"
              className="h-10 w-auto"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-5 text-xs">
            <Link href="/privacy" className="text-zinc-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  usePageTitle();
  const [bannerVisible, setBannerVisible] = useState(() => {
    try {
      return sessionStorage.getItem("tp-banner-dismissed") !== "1";
    } catch {
      return true;
    }
  });

  const dismissBanner = () => {
    setBannerVisible(false);
    try {
      sessionStorage.setItem("tp-banner-dismissed", "1");
    } catch {
      // storage unavailable
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <IntroOverlay />
      <CometCursor />
      <Navbar bannerVisible={bannerVisible} onBannerDismiss={dismissBanner} />
      <main className="flex-1">{children}</main>
      <ScrollTopButton />
      <Footer />
    </div>
  );
}