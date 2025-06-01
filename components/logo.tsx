"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Loyal Furniture Logo"
        width={80}
        height={80}
        priority
      />
    </Link>
  );
}
