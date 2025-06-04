"use client";
import CategoryCards from "@/components/category-cards";
import HeroImage from "@/components/hero-image";

const Hero = () => {
  return (
    <div className="relative w-full">
      <HeroImage />
      <CategoryCards />
    </div>
  );
};

export default Hero;