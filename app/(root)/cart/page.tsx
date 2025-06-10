"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemComponentProps {
  item: CartItem;
  onQuantityChange?: (id: number, quantity: number) => void;
  onRemove?: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  const handleQuantityDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange?.(item.id, item.quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    onQuantityChange?.(item.id, item.quantity + 1);
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-[#dee2e6]">
      <div className="flex items-center gap-4 w-full">
        <div className="w-16 h-16 bg-[#f2f2f2] rounded-lg flex items-center justify-center flex-shrink-0">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-black truncate">{item.name}</h3>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleQuantityDecrease}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleQuantityIncrease}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="w-20 text-right">
          <span className="font-medium text-black">Tk {item.price}</span>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-gray-500 hover:text-red-500 flex-shrink-0"
          onClick={() => onRemove?.(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto">
      <ShoppingCart />
    </div>
  );
};

export default Cart;

function ShoppingCart() {
  const cartItems: CartItem[] = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: "Sofa",
    price: 320,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  }));

  const handleQuantityChange = (id: number, quantity: number) => {
    console.log(`Update item ${id} quantity to ${quantity}`);
    // TODO: Implement quantity update logic
  };

  const handleRemoveItem = (id: number) => {
    console.log(`Remove item ${id}`);
    // TODO: Implement item removal logic
  };

  const orderTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 60;
  const grandTotal = orderTotal + deliveryFee;

  return (
    <>
      <div className="flex items-center gap-3 pt-4 pb-2">
        <Button variant="default" size="icon" className="h-8 w-8" asChild>
          <Link href="/shop">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <Link href="/shop" className="text-sm text-[#666666]">
          Shopping Continue
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 py-5">
        <div className="w-full border-t-2 border-t-[#D0CFCF] pt-4">
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-black mb-1">
              Shopping cart
            </h1>
            <p className="text-sm text-gray-500">
              You have {cartItems.length} item in your cart
            </p>
          </div>
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <CartItemComponent
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-96">
          <div className="bg-white rounded-lg p-6 border border-[#dee2e6] sticky top-4">
            <h2 className="text-lg font-semibold text-black mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-black">
                <span>Order</span>
                <span>Tk {orderTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Delivery</span>
                <span>Tk {deliveryFee}</span>
              </div>
              <hr className="border-[#dee2e6]" />
              <div className="flex justify-between font-semibold text-black">
                <span>Total</span>
                <span>Tk {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <Button className="w-full bg-primary text-white py-3">
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
