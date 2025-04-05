"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
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
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
