import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Eye, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { COMPANY, CORE_EXPERTISE, COMMITMENT, IMAGES } from "@/data/site";

const ICONS = [ShieldCheck, Users, Target, Sparkles, Eye];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Hero banner */}
      <section className="relative border-b border-ink-800/80 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-signal-500/10 blur-[140px] rounded-full" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-28 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ About Us</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter mt-6 leading-[0.98] text-balance">
                Powering plants with <span className="text-signal-500">precision automation</span>.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-ink-300 leading-relaxed">
                {COMPANY.name} is a leading provider of Industrial Automation, IoT Monitoring, Wireless Communication Systems, Control Panels, Robotics, and Industry 4.0 Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink-800/80 border border-ink-800/80">
          <Reveal className="bg-ink-950 p-10 lg:p-16">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-signal-500" />
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">Mission</p>
            </div>
            <p className="font-display text-3xl lg:text-4xl font-medium tracking-tight mt-8 leading-tight text-balance">
              To empower industries with innovative, reliable, and scalable automation technologies that drive efficiency and sustainable growth.
            </p>
          </Reveal>
          <Reveal className="bg-ink-950 p-10 lg:p-16" delay={0.15}>
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-signal-500" />
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-400">Vision</p>
            </div>
            <p className="font-display text-3xl lg:text-4xl font-medium tracking-tight mt-8 leading-tight text-balance">
              To become a trusted technology partner for industrial digital transformation and smart manufacturing initiatives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-28 lg:py-40 bg-ink-900/30 border-y border-ink-800/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
            <div className="lg:col-span-6">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Core Expertise</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 text-balance">
                Deep specialization across eight domains.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <img src={IMAGES.aboutMission} alt="" className="w-full aspect-[16/9] object-cover border border-ink-800" />
            </div>
          </div>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-ink-800/80">
            {CORE_EXPERTISE.map((item, i) => (
              <StaggerItem key={item}>
                <div className="p-8 border-r border-b border-ink-800/80 hover:bg-ink-900/60 transition-colors min-h-[180px] flex flex-col justify-between">
                  <p className="font-mono text-xs text-signal-500">{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-display text-xl font-medium tracking-tight text-ink-50">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Our Commitment</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-6 max-w-3xl text-balance">
              The promises we engineer into every project.
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {COMMITMENT.map((c, i) => {
              const Icon = ICONS[i] || ShieldCheck;
              return (
                <StaggerItem key={c.title}>
                  <div className="group h-full border border-ink-800 hover:border-signal-500 p-8 transition-colors">
                    <Icon className="w-6 h-6 text-signal-500" />
                    <h3 className="font-display text-2xl font-medium tracking-tight mt-8 text-ink-50">{c.title}</h3>
                    <p className="text-sm text-ink-300 mt-3 leading-relaxed">{c.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-800/80 bg-ink-900/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <h3 className="font-display text-3xl lg:text-4xl font-medium tracking-tight max-w-2xl text-balance">
            Ready to partner with an engineering team that obsesses over uptime?
          </h3>
          <Link to="/contact" data-testid="about-cta" className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white px-8 py-5 text-xs font-mono uppercase tracking-[0.2em] shrink-0">
            Get in touch <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
