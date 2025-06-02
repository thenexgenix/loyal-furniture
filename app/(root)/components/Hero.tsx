"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Armchair, Bed, Lamp, Sofa, Table } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Chair", icon: Armchair, count: 200, active: true },
  { name: "Sofa", icon: Sofa, count: 240, active: false },
  { name: "Table", icon: Table, count: 140, active: false },
  { name: "Bed", icon: Bed, count: 340, active: false },
  { name: "Decor", icon: Lamp, count: 440, active: false },
];

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("Chair");

  return (
    <div className="relative w-full">
      <div className="relative h-[100vh] min-h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-lg">
            Luxury Furniture
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl opacity-90 drop-shadow-md">
            Transform your space with our premium furniture collections
          </p>
        </div>
      </div>

      <div className="relative z-20 -mt-28 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.name}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-1 shadow-lg ${
                    category.name === activeCategory
                      ? "bg-primary text-white shadow-primary/20"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveCategory(category.name)}
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
                      <p
                        className={`text-xs md:text-sm ${
                          category.name === activeCategory
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {category.count} Item Available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
