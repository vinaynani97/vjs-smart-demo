import { Link } from "react-router-dom";

export const Logo = ({ className = "" }) => (
  <Link to="/" data-testid="site-logo" className={`group inline-flex items-center gap-3 ${className}`}>
    <span className="relative grid place-items-center w-9 h-9 bg-signal-500 text-white shrink-0">
      <span className="font-display font-bold text-base leading-none">V</span>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-signal-300 animate-pulse-soft" />
    </span>
    <span className="flex flex-col leading-none">
      <span className="font-display text-base font-semibold tracking-tight text-ink-50">
        VJS <span className="text-signal-500">Smart</span>
      </span>
      <span className="font-mono text-[10px] tracking-[0.2em] text-ink-400 uppercase mt-0.5">Systems</span>
    </span>
  </Link>
);
