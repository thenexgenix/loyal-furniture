"use client";

import { Heart, Phone, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-[#efefef] px-4 py-4">
      <div className="flex items-center justify-around max-w-7xl gap-4">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <div className="font-bold text-[#000000] text-lg">
            Loyal Furniture
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="flex items-center bg-white rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-[#380e4f]/20 focus-within:border-[#380e4f] transition-all">
            <Select defaultValue="all">
              <SelectTrigger className="w-36 border-none bg-transparent rounded-l-full px-4 focus:ring-0">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="chairs">Chairs</SelectItem>
                <SelectItem value="tables">Tables</SelectItem>
                <SelectItem value="sofas">Sofas</SelectItem>
                <SelectItem value="beds">Beds</SelectItem>
                <SelectItem value="cabinets">Cabinets</SelectItem>
              </SelectContent>
            </Select>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="relative flex-1">
              <Input
                placeholder="Search furniture..."
                className="border-none bg-transparent pl-4 pr-12 py-3 rounded-r-full focus:ring-0 focus:border-none"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#380e4f] hover:bg-[#380e4f]/90 transition-colors"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <nav className="max-w-7xl mx-auto mt-4">
            <div className="flex items-center justify-center gap-8">
              <a
                href="#"
                className="text-[#000000] hover:text-[#380e4f] font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[#000000] hover:text-[#380e4f] font-medium"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-[#000000] hover:text-[#380e4f] font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-[#000000] hover:text-[#380e4f] font-medium"
              >
                Help Center
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[#000000]">
            <Phone className="h-4 w-4" />
            <span className="font-medium">01973227349</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-[#000000]">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#000000] relative"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#89d22c] text-[#000000] text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#000000]">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
    </header>
  );
};

export default Header;
