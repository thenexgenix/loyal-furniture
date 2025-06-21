"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import Image from "next/image";
import React, { useState } from "react";
import ProductCard from "@/components/product-card";
import { allProducts } from "@/lib/mock-data";

const shopData = {
  categories: [
    { name: "Chairs", count: 12 },
    { name: "Beds", count: 8 },
    { name: "Cabinets", count: 15 },
    { name: "Tables", count: 10 },
    { name: "Decor", count: 25 },
    { name: "Sale", count: 6 },
  ],
  colors: [
    { name: "White", count: 18 },
    { name: "Black", count: 12 },
    { name: "Red", count: 8 },
    { name: "Brown", count: 15 },
    { name: "Blue", count: 10 },
    { name: "Green", count: 7 },
  ],
  materials: [
    { name: "Leather", count: 8 },
    { name: "Marble", count: 6 },
    { name: "Metal", count: 12 },
    { name: "Wood", count: 20 },
    { name: "Leatherette", count: 9 },
  ],
  brands: [
    { name: "Rosewood", image: "/brands/rosewood.svg" },
    { name: "Ikea", image: "/brands/ikea.svg" },
    { name: "Sit", image: "/brands/sit.svg" },
    { name: "Romance", image: "/brands/romance.svg" },
  ],
  bestSellers: [
    { name: "Classic chair", brand: "Romance", price: 1250 },
    { name: "Apartment Bed", brand: "Sit", price: 850 },
    { name: "Modern chair", brand: "Romance", price: 2000 },
  ],
  products: allProducts,
  pagination: [1, 2, 3, 4, 5, 6, "...", 15],
};

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-4 rounded-lg border">
    <h3 className="font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const CheckboxFilter = ({
  items,
}: {
  items: Array<{ name: string; count: number }>;
}) => (
  <div className="space-y-2">
    {items.map((item) => (
      <div key={item.name} className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id={item.name} />
          <label htmlFor={item.name} className="text-sm cursor-pointer">
            {item.name}
          </label>
        </div>
        <Badge variant="default" className="text-xs">
          {item.count}
        </Badge>
      </div>
    ))}
  </div>
);

const BrandFilter = ({
  brands,
}: {
  brands: Array<{ name: string; image: string }>;
}) => (
  <div className="flex flex-wrap gap-3">
    {brands.map((brand) => (
      <a
        key={brand.name}
        href="#"
        className="w-12 h-12 relative flex-shrink-0 hover:opacity-80 transition-opacity"
        title={brand.name}
      >
        <Image
          src={brand.image}
          alt={`${brand.name} logo`}
          fill
          className="object-contain"
        />
      </a>
    ))}
  </div>
);

const BestSellerItem = ({
  item,
}: {
  item: { name: string; brand: string; price: number };
}) => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-gray-200 rounded"></div>
    <div>
      <div className="text-sm font-medium">{item.name}</div>
      <div className="text-xs text-gray-500">{item.brand}</div>
      <div className="text-sm font-semibold">${item.price}</div>
    </div>
  </div>
);

const PaginationItemComponent = ({
  page,
  isActive = false,
}: {
  page: string | number;
  isActive?: boolean;
}) => {
  if (page === "...") {
    return (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  return (
    <PaginationItem>
      <PaginationLink href="#" isActive={isActive}>
        {page}
      </PaginationLink>
    </PaginationItem>
  );
};

const Shop = () => {
  const [priceRange, setPriceRange] = useState([50, 5000]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 space-y-6">
          {/* Price Filter */}
          <FilterSection title="Filter by Price">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={5000}
              min={50}
              step={50}
              className="mb-4"
            />
            <div className="text-sm text-gray-600">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </div>
          </FilterSection>

          {/* Categories Filter */}
          <FilterSection title="Filter by Categories">
            <CheckboxFilter items={shopData.categories} />
          </FilterSection>

          {/* Color Filter */}
          <FilterSection title="Filter by Color">
            <CheckboxFilter items={shopData.colors} />
          </FilterSection>

          {/* Material Filter */}
          <FilterSection title="Filter by Material">
            <CheckboxFilter items={shopData.materials} />
          </FilterSection>

          {/* Brand Filter */}
          <FilterSection title="Filter by Brand">
            <BrandFilter brands={shopData.brands} />
          </FilterSection>

          {/* Best Sellers */}
          <FilterSection title="Best Sellers">
            <div className="space-y-3">
              {shopData.bestSellers.map((item, index) => (
                <BestSellerItem key={index} item={item} />
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                {shopData.pagination.map((page, index) => (
                  <PaginationItemComponent
                    key={index}
                    page={page}
                    isActive={page === 1}
                  />
                ))}
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
