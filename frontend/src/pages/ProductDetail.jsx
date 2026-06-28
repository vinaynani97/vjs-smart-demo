import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Check, ShoppingCart, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { submitInquiry } from "@/lib/api";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(slug);
  const [form, setForm] = useState({
    full_name: "", company_name: "", phone: "", email: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-40 text-center">
        <p className="font-mono text-signal-500 text-xs uppercase tracking-widest">404</p>
        <h1 className="font-display text-5xl mt-4">Product not found</h1>
        <Link to="/products" className="inline-flex items-center gap-2 mt-8 text-signal-500 font-mono text-xs uppercase tracking-widest">
          Back to products <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitInquiry({
        ...form,
        product_interest: product.name,
        project_requirement: `Quote request for ${product.name}`,
        source: "product_quote",
        product_slug: product.slug,
      });
      toast.success("Quote request received. Our team will reach out shortly.");
      setForm({ full_name: "", company_name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="product-detail-page">
      {/* Breadcrumb */}
      <div className="border-b border-ink-800/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-400">
          <Link to="/" className="hover:text-signal-500">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-signal-500">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink-200 truncate">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-ink-800/80">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border border-ink-800 bg-ink-900">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-ink-950/80 backdrop-blur px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase text-ink-200">
                {product.categoryLabel}
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">{product.categoryLabel}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter mt-4 leading-[1.02] text-balance">{product.name}</h1>
            <p className="text-base text-ink-300 mt-6 leading-relaxed">{product.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={product.amazon} target="_blank" rel="noopener noreferrer" data-testid="amazon-buy" className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white px-7 py-4 text-xs font-mono uppercase tracking-[0.2em]">
                <ShoppingCart className="w-4 h-4" /> Buy on Amazon
              </a>
              <a href="#quote" data-testid="scroll-to-quote" className="inline-flex items-center gap-2 border border-ink-700 hover:border-signal-500 hover:text-signal-500 text-ink-100 px-7 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors">
                Request a Quote
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-ink-800 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Industries</p>
                <p className="text-ink-100 mt-2">{product.industries.slice(0,2).join(", ")}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Deliverables</p>
                <p className="text-ink-100 mt-2">{product.deliverables.length} items included</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left content */}
          <div className="lg:col-span-8 space-y-20">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-4">◢ Overview</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Product Overview</h2>
              <p className="text-base text-ink-300 mt-6 leading-relaxed">{product.overview}</p>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-4">◢ Key Features</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">What it does</h2>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-800/80 border border-ink-800/80">
                {product.features.map((f) => (
                  <li key={f} className="bg-ink-950 p-5 flex items-start gap-3">
                    <span className="w-5 h-5 grid place-items-center bg-signal-500 mt-0.5 shrink-0"><Check className="w-3 h-3 text-white" /></span>
                    <span className="text-sm text-ink-100 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-4">◢ Technical Specifications</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Specifications</h2>
              <table className="mt-8 w-full border border-ink-800/80 font-mono text-sm">
                <tbody>
                  {product.specs.map(([k, v], i) => (
                    <tr key={k} className={i % 2 === 0 ? "bg-ink-950" : "bg-ink-900/40"}>
                      <td className="py-4 px-5 text-ink-400 uppercase text-[11px] tracking-wider w-1/3 border-r border-ink-800/80">{k}</td>
                      <td className="py-4 px-5 text-ink-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-3">◢ Applications</p>
                  <h3 className="font-display text-2xl font-medium tracking-tight">Where it's deployed</h3>
                  <ul className="mt-6 space-y-3">
                    {product.applications.map((a) => (
                      <li key={a} className="flex items-center gap-3 text-sm text-ink-200"><span className="w-1.5 h-1.5 bg-signal-500" /> {a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-3">◢ Industries Served</p>
                  <h3 className="font-display text-2xl font-medium tracking-tight">Designed for</h3>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.industries.map((i) => (
                      <span key={i} className="px-3 py-1.5 border border-ink-800 font-mono text-[11px] tracking-wider text-ink-200">{i}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-4">◢ Benefits</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Why it matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                {product.benefits.map((b, i) => (
                  <div key={b} className="border border-ink-800 p-6">
                    <p className="font-mono text-xs text-signal-500">{String(i+1).padStart(2,"0")}</p>
                    <p className="text-base text-ink-100 mt-3 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500 mb-4">◢ Deliverables</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">What's included</h2>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 border border-ink-800 px-5 py-4 text-sm text-ink-100"><Check className="w-4 h-4 text-signal-500" /> {d}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sticky quote form */}
          <aside id="quote" className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 border border-ink-800 bg-ink-900/40">
              <div className="p-6 border-b border-ink-800">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Request a Quote</p>
                <h3 className="font-display text-2xl font-medium tracking-tight mt-3">{product.name}</h3>
              </div>
              <form onSubmit={onSubmit} data-testid="quote-form" className="p-6 space-y-4">
                <Field name="full_name" label="Full Name" value={form.full_name} onChange={onChange} required />
                <Field name="company_name" label="Company" value={form.company_name} onChange={onChange} />
                <Field name="phone" label="Phone" value={form.phone} onChange={onChange} required />
                <Field name="email" label="Email" type="email" value={form.email} onChange={onChange} required />
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Project Requirement</label>
                  <textarea name="message" required value={form.message} onChange={onChange} rows={4}
                    className="mt-2 w-full bg-ink-950 border border-ink-800 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none focus:border-signal-500 resize-none"
                    placeholder="Tell us about your application, environment and timelines..." />
                </div>
                <button data-testid="quote-submit" type="submit" disabled={submitting} className="group w-full inline-flex items-center justify-center gap-2 bg-signal-500 hover:bg-signal-600 disabled:opacity-60 text-white px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-colors">
                  {submitting ? "Sending..." : <>Submit Request <Send className="w-4 h-4" /></>}
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-ink-800/80 bg-ink-900/30">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-signal-500">◢ Related Products</p>
            <h2 className="font-display text-3xl lg:text-5xl font-medium tracking-tight mt-4 mb-12">In the same category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group block border border-ink-800 hover:border-signal-500 transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-medium tracking-tight group-hover:text-signal-500 transition-colors">{p.name}</h3>
                    <p className="text-sm text-ink-300 mt-2 line-clamp-2">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

const Field = ({ name, label, value, onChange, type = "text", required = false }) => (
  <div>
    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">{label}{required && " *"}</label>
    <input
      name={name} type={type} required={required} value={value} onChange={onChange}
      className="mt-2 w-full bg-ink-950 border border-ink-800 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-500 focus:outline-none focus:border-signal-500"
    />
  </div>
);
