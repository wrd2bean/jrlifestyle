import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop — JR Lifestyle" },
      { name: "description", content: "Shop all pieces from JR Lifestyle Clothing. Premium streetwear, limited drops." },
    ],
  }),
});

function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blood">All Pieces</p>
          <h1 className="mt-2 font-display text-6xl uppercase tracking-wider text-foreground md:text-8xl">
            The <span className="text-bone font-script text-5xl md:text-7xl">archive</span>
          </h1>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}