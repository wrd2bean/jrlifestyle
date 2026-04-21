import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { DecorBg } from "@/components/decor-bg";
import hero from "@/assets/tee-get-rich.jpeg";

export const Route = createFileRoute("/drop")({
  component: DropPage,
  head: () => ({
    meta: [
      { title: "Born To Win Drop — JR Lifestyle" },
      { name: "description", content: "Drop 001 — Born To Win. Cards, dice, and the gamble of the come-up. Shop the inaugural JR Lifestyle collection." },
      { property: "og:image", content: "" },
    ],
  }),
});

function DropPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="relative overflow-hidden border-b border-border/60">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <DecorBg />
        <div className="relative mx-auto max-w-7xl px-5 py-28 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-blood">Drop 001</p>
          <h1 className="mt-4 font-display text-7xl uppercase leading-[0.9] tracking-tight text-foreground md:text-[10rem]">
            BORN <span className="text-blood">TO</span> WIN
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Three pieces. 300 per style. Heavy cotton, oversized cut, screen printed in small batches.
            When they're gone, they're gone.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-5 text-center">
          <Link to="/about" className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
            Read The Manifesto →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}