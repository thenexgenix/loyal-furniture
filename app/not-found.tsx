"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-h-screen flex items-center justify-center p-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-9xl md:text-[10rem] font-bold text-slate-200 leading-none select-none">
            404
          </h1>
          <div className="relative -mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Oops! Page not found
            </h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to
              another location.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-8">
          <div className="relative">
            <div className="w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-slate-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">!</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              placeholder="Search for what you need..."
              className="flex-1"
            />
            <Button size="icon" variant="outline">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
