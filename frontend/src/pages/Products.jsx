import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { Stagger, StaggerItem, Reveal } from "@/components/site/Reveal";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export default function ProductsPage() {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat = cat === "all" || p.category === cat;
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [cat, query]);

  return (
    <div data-testid="products-page">
      {/* Hero */}
      <section className="relative border-b border-ink-800/80 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-24 lg:py-32">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Products</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter mt-6 max-w-4xl text-balance">
            An engineered catalog for <span className="text-signal-500">modern industry</span>.
          </h1>
          <p className="text-lg text-ink-300 max-w-2xl mt-6 leading-relaxed">
            Wireless monitoring, level systems, PLC panels, IoT gateways and robotics — engineered, tested and field-proven.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="sticky top-20 z-30 bg-ink-950/85 backdrop-blur-xl border-b border-ink-800/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                data-testid={`category-${c.id}`}
                className={`px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] border transition-colors ${
                  cat === c.id
                    ? "bg-signal-500 border-signal-500 text-white"
                    : "border-ink-800 text-ink-200 hover:border-signal-500 hover:text-signal-500"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-ink-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              data-testid="product-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full bg-ink-900 border border-ink-800 pl-11 pr-4 py-3 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none focus:border-signal-500"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          {filtered.length === 0 ? (
            <Reveal>
              <div className="border border-ink-800 p-16 text-center">
                <p className="font-display text-2xl text-ink-100">No products match your search.</p>
                <p className="text-ink-400 mt-2">Try a different category or clear the search.</p>
              </div>
            </Reveal>
          ) : (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link to={`/products/${p.slug}`} data-testid={`product-card-${p.slug}`} className="group block border border-ink-800 hover:border-signal-500 transition-colors h-full">
                    <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                      <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-3 left-3 bg-ink-950/80 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase text-ink-200">
                        {p.categoryLabel}
                      </div>
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
          )}
        </div>
      </section>
    </div>
  );
}
