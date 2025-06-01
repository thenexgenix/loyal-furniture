import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

const ProductCard = ({
  product,
}: {
  product: { id: number; name: string; price: number; image: string };
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow">
      <div className="w-full">
        <AspectRatio ratio={1} className="bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2">{product.name}</h3>
        <div className="text-lg font-semibold mb-3">
          Price: ${product.price.toLocaleString()}
        </div>
        <Button className="w-full rounded-none" variant={"default"}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
