import { ArrowUpRight } from "lucide-react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const productId = product.slug || product._id;

  return (
    <article className="group overflow-hidden border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 bg-ink/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-champagne">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={15} fill="currentColor" strokeWidth={0} />
          ))}
          <span className="ml-2 text-xs font-semibold text-ink/45">
            {Number(product.rating || 5).toFixed(1)}
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">{product.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-7 text-ink/65">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {(product.tags || []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-gold/35 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/products/${productId}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:text-gold"
        >
          View Description <ArrowRight size={17} />
        </Link>
      </div>
    </article>
    );
};

export default ProductCard;