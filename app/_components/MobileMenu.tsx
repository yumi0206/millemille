"use client";
import React, { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  handleMobileDrawerClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  handleMobileDrawerClose,
}) => {
  return (
    <Sheet open={open} onOpenChange={handleMobileDrawerClose}>
      <SheetTrigger />
      <SheetContent side="top" className="bg-background w-full">
        <div className="flex justify-end p-4 bg-background"></div>
        <nav className="flex flex-col items-center w-full text-center">
          <Link href="/Product" onClick={handleMobileDrawerClose}>
            <div className="px-14 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100">
              Product
            </div>
          </Link>
          <Link href="/newslists" onClick={handleMobileDrawerClose}>
            <div className="px-14 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 w-full text-center">
              News
            </div>
          </Link>
          <Link href="/about" onClick={handleMobileDrawerClose}>
            <div className="px-14 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 w-full text-center">
              About
            </div>
          </Link>
          <Link href="/access" onClick={handleMobileDrawerClose}>
            <div className="px-14 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 w-full text-center">
              Access
            </div>
          </Link>
          <Link href="/contact" onClick={handleMobileDrawerClose}>
            <div className="px-14 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 w-full text-center">
              Contact
            </div>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
