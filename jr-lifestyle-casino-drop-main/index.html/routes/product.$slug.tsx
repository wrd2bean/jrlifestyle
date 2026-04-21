import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-6xl uppercase tracking-wider text-foreground">Not Found</h1>
        <p className="mt-4 text-muted-foreground">This piece doesn't exist or has sold out.</p>
        <Link to="/shop" className="mt-8 inline-block bg-bone px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-background">
          Back to Shop
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p>{error.message}</p>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.product.name} — JR Lifestyle` : "Product" },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      ...(loaderData ? [{ property: "og:image", content: loaderData.product.image }] : []),
    ],
  }),
});

const SIZES = ["S", "M", "L", "XL", "XXL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);
  const [activeImage, setActiveImage] = useState(product.image);
  const views = [
    { label: "Back", src: product.image },
    { label: "Front", src: product.backImage },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="relative bg-card">
              <img src={activeImage} alt={product.name} className="h-full w-full object-cover" />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-bone px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-background">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {views.map((v) => (
                <button
                  key={v.label}
                  onClick={() => setActiveImage(v.src)}
                  className={`relative aspect-square overflow-hidden border ${activeImage === v.src ? "border-bone" : "border-border"}`}
                >
                  <img src={v.src} alt={v.label} className="h-full w-full object-cover" />
                  <span className="absolute bottom-1 left-1 bg-background/80 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-foreground">
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-blood">Born To Win Drop</p>
            <h1 className="mt-2 font-display text-5xl uppercase tracking-wider text-foreground md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-3 text-muted-foreground">{product.tagline}</p>
            <p className="mt-6 font-display text-3xl text-bone">${product.price}</p>

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground">Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    className="border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bone hover:text-bone"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-8 bg-bone px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-background hover:bg-foreground transition-colors">
              Add to Bag
            </button>

            <div className="mt-10 space-y-3 border-t border-border/60 pt-6 text-sm text-muted-foreground">
              <p>· 100% heavyweight cotton, 240gsm</p>
              <p>· Oversized boxy fit, drop shoulder</p>
              <p>· Screen printed in small batches</p>
              <p>· Garment-dyed for vintage hand-feel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-3xl uppercase tracking-wider text-foreground">More From The Drop</h2>
          <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}