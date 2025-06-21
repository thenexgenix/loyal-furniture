"use client";
import { Card, CardContent } from "@/components/ui/card";
import { allProducts } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Armchair, Bed, Lamp, Sofa, Table } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const categories = [
  {
    name: "Chair",
    icon: Armchair,
    count: allProducts.filter((product) => product.category === "chair").length,
    active: true,
  },
  {
    name: "Sofa",
    icon: Sofa,
    count: allProducts.filter((product) => product.category === "sofa").length,
    active: false,
  },
  {
    name: "Table",
    icon: Table,
    count: allProducts.filter((product) => product.category === "table").length,
    active: false,
  },
  {
    name: "Bed",
    icon: Bed,
    count: allProducts.filter((product) => product.category === "bed").length,
    active: false,
  },
  {
    name: "Decor",
    icon: Lamp,
    count: allProducts.filter((product) => product.category === "decor").length,
    active: false,
  },
];

interface CategoryCardsProps {
  category_params?: string;
}

const CategoryCards: FC<CategoryCardsProps> = ({ category_params }) => {
  return (
    <div className="relative z-20 -mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
              >
                <Card
                  className={cn(
                    "cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 shadow-lg bg-white text-black hover:bg-gray-50",
                    category_params &&
                      category_params === category.name.toLowerCase() &&
                      "bg-primary text-white shadow-primary/20 hover:bg-primary/90"
                  )}
                >
                  <CardContent className="p-4 md:p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <IconComponent
                        className="w-10 h-10 md:w-12 md:h-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {category.name}
                      </h3>
                      <p className={`text-xs md:text-sm text-gray-500`}>
                        {category.count} Item Available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
