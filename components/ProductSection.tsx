import React from "react";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import { ProductSectionProps } from "@/types";

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  seeAllHref = "/shop",
  seeAllText = "See All",
  className = "",
  productGridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  maxProducts,
}) => {
  const displayProducts = maxProducts
    ? products.slice(0, maxProducts)
    : products;

  return (
    <section className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl text-oklch(0.15 0.02 279)">
          {title}
        </h2>

        <Link href={seeAllHref}>{seeAllText}</Link>
      </div>

      <div className={productGridClassName}>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
