"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/logo.svg"
        alt="Loyal Furniture Logo"
        width={384}
        height={384}
        priority
      />
    </Link>
  );
}
