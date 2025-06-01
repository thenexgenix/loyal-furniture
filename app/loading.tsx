"use client";

import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 max-w-lg text-center">
        <div className="relative animate-pulse">
          <div className="transform scale-75 transition-transform duration-1000 hover:scale-80">
            <Logo />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[80px] w-[100px] rounded-full border-2 border-primary/20 animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[80px] w-[110px] rounded-full border border-primary/30 animate-pulse"></div>
          </div>
        </div>


        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground animate-fade-in">
            Loyal Furniture
          </h2>
          <div className="flex items-center justify-center gap-1">
            <p className="text-muted-foreground text-sm">Loading</p>
            <div className="flex gap-1">
              <div
                className="w-1 h-1 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-1 h-1 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
          <p className="text-muted-foreground text-xs opacity-75">
            Preparing your premium furniture experience...
          </p>
        </div>
      </div>
    </div>
  );
}
