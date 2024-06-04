"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const navItems = [
    { label: "Product", href: "/product" },
    { label: "News", href: "/news" },
    { label: "About", href: "/about" },
    { label: "Access", href: "/access" },
    { label: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="h-16 flex items-center top-0 container bg-background">
      <div className="flex justify-between w-full">
        <Link href="/">
          <h1 className="text-2xl  tracking-wide">Patisserie mille.mille</h1>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <div>{item.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800 outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu
        open={isOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
    </header>
  );
};

export default Header;
