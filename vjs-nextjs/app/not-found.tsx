import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="relative min-h-[70vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-signal-500/10 blur-[140px] rounded-full" />
      <div className="relative text-center max-w-xl px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Error 404</p>
        <h1 className="font-display text-7xl lg:text-9xl font-semibold tracking-tighter mt-4">404</h1>
        <p className="text-lg text-ink-300 mt-6">
          The page you&apos;re looking for has gone offline. Let&apos;s reroute you.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 mt-10 bg-signal-500 hover:bg-signal-600 text-white px-7 py-4 text-xs font-mono uppercase tracking-[0.2em]"
        >
          Back to homepage{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
