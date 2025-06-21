import CategoryCards from "@/components/category-cards";
import HeroImage from "@/components/hero-image";
import ProductSection from "@/components/ProductSection";
import FurnitureHero from "../../components/furniture-hero";
import { redirect } from "next/navigation";
import { allProducts } from "@/lib/mock-data";

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
            products={allProducts.filter(
              (product) =>
                product.category.toLocaleLowerCase() ===
                category_name.toLocaleLowerCase()
            )}
            seeAllHref="/shop?category=featured"
            maxProducts={
              allProducts.filter(
                (product) =>
                  product.category.toLocaleLowerCase() ===
                  category_name.toLocaleLowerCase()
              ).length
            }
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
