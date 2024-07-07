"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  handleMobileDrawerClose: () => void;
}

interface MenuItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, onClick }) => (
  <Link href={href} onClick={onClick}>
    <div className="w-full min-w-48 h-16 flex items-center justify-center text-lg font-semibold hover:bg-gray-100">
      <span className="truncate px-4">{label}</span>
    </div>
  </Link>
);

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  handleMobileDrawerClose,
}) => {
  const menuItems = [
    { href: "/product", label: "Product" },
    { href: "/news", label: "News" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/access", label: "Access" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={handleMobileDrawerClose}>
      <SheetTrigger />
      <SheetContent side="top" className="bg-background w-full">
        <nav className="flex flex-col items-center w-full text-center">
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={handleMobileDrawerClose}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
