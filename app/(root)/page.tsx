import { allProducts, latestProducts, popularProducts } from "@/lib/mock-data";
import FurnitureHero from "./components/furniture-hero";
import Hero from "./components/Hero";
import ProductSection from "@/components/ProductSection";

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="w-full">
      <Hero />
      <div className="px-4">
        <ProductSection
          title="Popular Products"
          products={popularProducts}
          seeAllHref="/shop?category=featured"
          maxProducts={4}
          className="py-8 px-4"
        />

        <ProductSection
          title="Latest Products"
          products={latestProducts}
          seeAllHref="/shop?category=latestProducts"
          maxProducts={4}
          className="py-8 px-4"
        />
        <FurnitureHero />

        <ProductSection
          title="All Products"
          products={allProducts}
          seeAllHref="/shop"
          maxProducts={8}
          className="py-8 px-4"
        />
      </div>
    </section>
  );
};

export default Home;
