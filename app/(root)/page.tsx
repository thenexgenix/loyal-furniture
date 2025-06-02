import FurnitureHero from "./components/furniture-hero";
import Hero from "./components/Hero";
import ProductSection from "@/components/ProductSection";

const featuredProducts = [
  {
    id: 1,
    name: "Elle Decor Accent Arm Chair",
    price: 1250,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Modern Furniture Set",
    price: 850,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Luxury Gold Accent Table",
    price: 2000,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Classic Table Collection",
    price: 1750,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const bestSellers = [
  {
    id: 5,
    name: "Romance Classic Chair",
    price: 1250,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Sit Apartment Bed",
    price: 850,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "IKEA Modern Sofa",
    price: 1500,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Rosewood Dining Table",
    price: 2200,
    image: "/placeholder.svg?height=200&width=200",
  },
];

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="w-full">
      <Hero />
      <div className="px-4">
        <ProductSection
          title="Featured Products"
          products={featuredProducts}
          seeAllHref="/shop?category=featured"
          maxProducts={4}
          className="py-8 px-4"
        />

        <FurnitureHero />

        <ProductSection
          title="Best Sellers"
          products={bestSellers}
          seeAllHref="/shop?category=bestsellers"
          maxProducts={4}
          className="py-8 px-4"
        />

        <ProductSection
          title="All Products"
          products={featuredProducts.concat(bestSellers)}
          seeAllHref="/shop"
          maxProducts={10}
          className="py-8 px-4"
        />
      </div>
    </section>
  );
};

export default Home;
