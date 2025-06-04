import CategoryCards from "@/components/category-cards";
import HeroImage from "@/components/hero-image";
import ProductSection from "@/components/ProductSection";
import FurnitureHero from "../../components/furniture-hero";
import { redirect } from "next/navigation";

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

const ProductByCategory = async ({
  params,
}: {
  params: Promise<{ category_name: string }>;
}) => {
  try {
    const { category_name } = await params;

    if (!category_name) {
      redirect("/shop");
    }

    const Title =
      "All " +
      category_name.charAt(0).toUpperCase() +
      category_name.slice(1) +
      "s";

    return (
      <div className="relative w-full">
        <HeroImage />
        <CategoryCards category_params={category_name} />

        {category_name.toLocaleLowerCase() === "sofa" && <FurnitureHero />}

        <div className="px-4">
          <ProductSection
            title={Title}
            products={featuredProducts}
            seeAllHref="/shop?category=featured"
            maxProducts={4}
            className="py-8 px-4"
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProductByCategory:", error);
    redirect("/shop");
  }
};

export default ProductByCategory;
