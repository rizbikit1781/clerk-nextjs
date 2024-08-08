import React from "react";
import Link from "next/link";
import { SignedIn, SignInButton, SignedOut, UserButton, } from "@clerk/nextjs";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-950 py-4 px-6 flex item-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">
              Clerk App
            </div>
          </Link>
        </div>
        <div className="text-white">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Header;
