import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-card">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-bone px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-background">
            {product.badge}
          </span>
        )}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            loading="lazy"
          />
          <img
            src={product.backImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg uppercase tracking-wider text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{product.tagline}</p>
        </div>
        <span className="font-display text-base text-bone">${product.price}</span>
      </div>
    </Link>
  );
}