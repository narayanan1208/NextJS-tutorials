"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
        href="/"
      >
        Home
      </Link>
      <Link
        className={
          pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
        href="/about"
      >
        About
      </Link>
      <Link
        className={
          pathname.startsWith("/products/1")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }
        href="/products/1"
      >
        Product 1
      </Link>
    </nav>
  );
};
