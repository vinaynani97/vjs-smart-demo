import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import { Logo } from "@/components/site/Logo";

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative bg-ink-950 border-t border-ink-800/80">
      <div className="absolute inset-x-0 top-0 h-px tick-divider" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20">
        {/* Top: oversize wordmark + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-ink-800/80">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-6">
              ◢ Build with us
            </p>
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-50 leading-[1.02] text-balance">
              Engineering the next generation of <span className="text-signal-500">industrial intelligence</span>.
            </h3>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end lg:items-end">
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="group inline-flex items-center gap-3 bg-signal-500 hover:bg-signal-600 text-white px-8 py-5 text-xs font-mono uppercase tracking-[0.2em]"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Middle: columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 py-16">
          <div className="col-span-2 md:col-span-4">
            <Logo />
            <p className="mt-6 text-sm text-ink-300 leading-relaxed max-w-xs">
              {COMPANY.name} engineers Industrial Automation, IoT and Industry 4.0 solutions for manufacturing and process industries.
            </p>
            <div className="flex items-center gap-2 mt-6">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 grid place-items-center border border-ink-800 hover:border-signal-500 hover:text-signal-500 text-ink-300 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400 mb-5">Quick Links</p>
            <ul className="space-y-3 text-sm">
              {[
                { l: "Home", to: "/" },
                { l: "About Us", to: "/about" },
                { l: "Products", to: "/products" },
                { l: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.l}><Link to={l.to} className="text-ink-200 hover:text-signal-500 transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400 mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}><Link to="/products" className="text-ink-200 hover:text-signal-500 transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400 mb-5">Contact</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-ink-200">
                <Phone className="w-4 h-4 mt-0.5 text-signal-500 shrink-0" />
                <span>{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-ink-200">
                <Mail className="w-4 h-4 mt-0.5 text-signal-500 shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-3 text-ink-200">
                <MapPin className="w-4 h-4 mt-0.5 text-signal-500 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-ink-800/80">
          <p className="font-mono text-[11px] tracking-wider text-ink-400">© {new Date().getFullYear()} VJS Smart Systems — All rights reserved.</p>
          <p className="font-mono text-[11px] tracking-wider text-ink-500">Crafted for industrial excellence</p>
        </div>
      </div>
    </footer>
  );
};
