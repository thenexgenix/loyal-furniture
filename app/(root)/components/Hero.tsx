"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Armchair, Bed, Lamp, Sofa, Table } from "lucide-react";
import React from "react";

const categories = [
  { name: "Chair", icon: Armchair, count: 200, active: true },
  { name: "Sofa", icon: Sofa, count: 240, active: false },
  { name: "Table", icon: Table, count: 140, active: false },
  { name: "Bed", icon: Bed, count: 340, active: false },
  { name: "Decor", icon: Lamp, count: 440, active: false },
];

const Hero = () => {
  const [activeCategory, setActiveCategory] = React.useState("Chair");

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full px-4">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <Card
            key={category.name}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              category.name === activeCategory
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center">
                <IconComponent className="w-12 h-12" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p
                  className={`text-sm ${
                    category.name === activeCategory
                      ? "text-purple-100"
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
  );
};

export default Hero;
