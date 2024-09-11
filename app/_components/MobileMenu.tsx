"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { NavItem } from "./Header";

interface MobileMenuProps {
  open: boolean;
  handleMobileDrawerClose: () => void;
  navItems: NavItem[];
}

interface MenuItemProps {
  item: NavItem;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    }
    onClick();
  };

  return (
    <div
      className="w-full min-w-48 h-16 flex items-center justify-center text-lg font-semibold hover:bg-gray-100 cursor-pointer"
      onClick={handleClick}
    >
      <span className="truncate px-4">{item.label}</span>
    </div>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  handleMobileDrawerClose,
  navItems,
}) => {
  return (
    <Sheet open={open} onOpenChange={handleMobileDrawerClose}>
      <SheetTrigger />
      <SheetContent side="top" className="bg-background w-full">
        <nav className="flex flex-col items-center w-full text-center">
          {navItems.map((item) => (
            <MenuItem
              key={item.href}
              item={item}
              onClick={handleMobileDrawerClose}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
