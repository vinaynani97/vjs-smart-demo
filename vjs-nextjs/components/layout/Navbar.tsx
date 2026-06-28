"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/data/site";
import { Logo } from "@/components/site/Logo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink-950/85 backdrop-blur-xl border-b border-ink-800/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="h-20 flex items-center justify-between gap-8">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-signal-500" : "text-ink-200 hover:text-ink-50"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-px h-px bg-signal-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              data-testid="nav-cta-quote"
              className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white px-5 py-3 text-xs font-mono uppercase tracking-[0.18em] transition-colors"
            >
              Request a Quote
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-11 h-11 border border-ink-700 text-ink-100"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-1 border-t border-ink-800">
          {NAV.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                className={`py-4 text-2xl font-display tracking-tight border-b border-ink-800/60 ${
                  active ? "text-signal-500" : "text-ink-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            data-testid="mobile-cta-quote"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-signal-500 text-white px-5 py-4 text-xs font-mono uppercase tracking-[0.2em]"
          >
            Request a Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};
