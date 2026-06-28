import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { COMPANY, STATS, SERVICES, WHY_CHOOSE_US, INDUSTRIES, IMAGES } from "@/data/site";
import { getFeaturedProducts } from "@/data/products";

const PageHero = () => (
  <section data-testid="home-hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    <div className="absolute inset-0 noise pointer-events-none" />
    <div className="absolute top-1/3 -left-32 w-[520px] h-[520px] bg-signal-500/20 blur-[120px] rounded-full" />

    <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-24 lg:py-0">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 border border-ink-800 bg-ink-900/40 backdrop-blur px-4 py-2"
        >
          <span className="w-1.5 h-1.5 bg-signal-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-200">
            Industrial Automation · IoT · Industry 4.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter leading-[0.98] mt-8 text-balance"
        >
          Engineering<br />
          <span className="text-signal-500">Smart Automation</span><br />
          for Modern Industries.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-lg text-ink-300 leading-relaxed max-w-2xl"
        >
          {COMPANY.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/products"
            data-testid="hero-cta-products"
            className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white px-7 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors"
          >
            Explore Products
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/contact"
            data-testid="hero-cta-consult"
            className="inline-flex items-center gap-2 border border-ink-700 hover:border-signal-500 hover:text-signal-500 text-ink-100 px-7 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors"
          >
            Request Consultation
          </Link>
        </motion.div>
      </div>

      <div className="lg:col-span-5 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-[4/5] overflow-hidden border border-ink-800"
        >
          <img src={IMAGES.heroPrimary} alt="Industrial robotic automation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-signal-400 uppercase">Live Telemetry</p>
              <p className="font-display text-2xl font-medium text-ink-50 mt-1">Plant 04 / Line A</p>
            </div>
            <div className="font-mono text-xs text-ink-200 text-right">
              <p className="text-signal-500">98.6%</p>
              <p className="text-ink-400">OEE</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute -left-6 lg:-left-12 bottom-12 bg-ink-900/90 backdrop-blur-xl border border-ink-800 p-5 w-56 hidden md:block"
        >
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400">PLC Uptime</p>
          <p className="font-display text-3xl text-ink-50 mt-2">99.98%</p>
          <div className="h-1 bg-ink-800 mt-3"><div className="h-full bg-signal-500 w-[99%]" /></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <section data-testid="home-trust" className="border-y border-ink-800/80 bg-ink-900/30">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-2 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className={`py-10 lg:py-14 ${i !== 0 ? "lg:border-l border-ink-800/80" : ""} ${i % 2 !== 0 ? "border-l lg:border-l border-ink-800/80" : ""}`}>
            <p className="font-display text-5xl lg:text-6xl font-semibold tracking-tighter text-ink-50">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink-400 mt-3">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const About = () => (
  <section data-testid="home-about" className="py-28 lg:py-40">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
      <Reveal className="lg:col-span-5">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ About VJS Smart Systems</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 text-balance">
          A technology-driven engineering company.
        </h2>
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.15}>
        <p className="text-lg text-ink-300 leading-relaxed">
          {COMPANY.name} is a technology-driven engineering company specializing in Industrial Automation, Control Panels, IoT Solutions, Robotics, Mechatronics, and Remote Monitoring Systems. We help industries improve operational efficiency, reduce downtime, optimize energy consumption, and gain real-time visibility into critical processes through innovative automation technologies.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-800 pt-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400">Headquartered</p>
            <p className="font-display text-xl text-ink-50 mt-2">Hyderabad, IN</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-400">Specialization</p>
            <p className="font-display text-xl text-ink-50 mt-2">Industry 4.0</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Services = () => (
  <section data-testid="home-services" className="py-28 lg:py-40 bg-ink-900/30 border-y border-ink-800/80">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-6">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Our Services</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 text-balance">
            Full-stack engineering, from PLC to cloud.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-base text-ink-300 leading-relaxed">
            Seven core service lines covering the entire automation lifecycle — designed for resilience, scalability and long-term partnership.
          </p>
        </div>
      </div>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-ink-800/80">
        {SERVICES.map((s) => {
          const Icon = Icons[s.icon] || Icons.Cpu;
          return (
            <StaggerItem key={s.id}>
              <div data-testid={`service-${s.id}`} className="group relative p-8 lg:p-10 border-r border-b border-ink-800/80 hover:bg-ink-900/60 transition-colors">
                <div className="w-12 h-12 grid place-items-center border border-ink-800 text-signal-500 group-hover:bg-signal-500 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight mt-8 text-ink-50">{s.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed mt-3">{s.desc}</p>
                <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-signal-500 transition-colors mt-8" />
              </div>
            </StaggerItem>
          );
        })}
        <StaggerItem>
          <div className="relative p-8 lg:p-10 border-r border-b border-ink-800/80 bg-signal-500 text-white flex flex-col justify-between min-h-[220px]">
            <p className="font-display text-2xl font-medium tracking-tight">Need a custom solution?</p>
            <Link to="/contact" data-testid="services-cta" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] mt-6">
              Talk to engineering <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </StaggerItem>
      </Stagger>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section data-testid="home-why" className="py-28 lg:py-40">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
      <Reveal>
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Why Choose Us</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 max-w-3xl text-balance">
          Built for plants that can't afford to fail.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-800/80 mt-16 border border-ink-800/80">
        {WHY_CHOOSE_US.map((reason, i) => (
          <Reveal key={reason} delay={i * 0.05}>
            <div className="bg-ink-950 p-8 lg:p-10 h-full flex flex-col justify-between min-h-[220px]">
              <p className="font-mono text-xs text-signal-500">{String(i + 1).padStart(2, "0")} /</p>
              <p className="font-display text-xl lg:text-2xl font-medium tracking-tight text-ink-50 mt-8">{reason}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section data-testid="home-industries" className="py-28 lg:py-40 bg-ink-900/30 border-y border-ink-800/80">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Industries We Serve</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 max-w-2xl text-balance">
            Trusted across ten high-stakes industries.
          </h2>
        </div>
      </div>
      <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        {INDUSTRIES.map((ind, i) => (
          <StaggerItem key={ind.name}>
            <div data-testid={`industry-${ind.name.toLowerCase().replace(/\s|&/g, "-")}`} className="group relative aspect-[4/5] overflow-hidden border border-ink-800 cursor-pointer">
              <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-[10px] text-signal-400 uppercase tracking-wider">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-base lg:text-lg font-medium tracking-tight text-ink-50 mt-1">{ind.name}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

const Featured = () => {
  const items = getFeaturedProducts();
  return (
    <section data-testid="home-featured" className="py-28 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Featured Products</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 text-balance">
              Engineered hardware. Smart software. Field-proven.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 flex lg:justify-end">
            <Link to="/products" className="inline-flex items-center gap-2 border border-ink-700 hover:border-signal-500 hover:text-signal-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p) => (
            <StaggerItem key={p.slug}>
              <Link to={`/products/${p.slug}`} data-testid={`featured-${p.slug}`} className="group block border border-ink-800 hover:border-signal-500 transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-ink-950/80 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase text-ink-200">{p.categoryLabel}</div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl lg:text-2xl font-medium tracking-tight text-ink-50 group-hover:text-signal-500 transition-colors">{p.name}</h3>
                  <p className="text-sm text-ink-300 mt-3 leading-relaxed line-clamp-2">{p.tagline}</p>
                  <span className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-200 group-hover:text-signal-500 transition-colors">
                    View details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

const CTA = () => (
  <section data-testid="home-cta" className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={IMAGES.ctaBanner} alt="" className="w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/70" />
    </div>
    <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 lg:py-40">
      <div className="max-w-3xl">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Need an Automation Solution?</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tighter mt-6 text-balance">
          Let's engineer your <span className="text-signal-500">next plant</span>, together.
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/contact" data-testid="cta-contact" className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white px-8 py-5 text-xs font-mono uppercase tracking-[0.2em]">
            Contact Us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link to="/contact" data-testid="cta-quote" className="inline-flex items-center gap-2 border border-ink-700 hover:border-signal-500 hover:text-signal-500 text-ink-100 px-8 py-5 text-xs font-mono uppercase tracking-[0.2em] transition-colors">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <PageHero />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Featured />
      <CTA />
    </div>
  );
}
