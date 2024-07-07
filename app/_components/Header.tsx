"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Product", href: "/product" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Access", href: "/access" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileDrawerClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="h-16 md:h-20 flex items-center top-0 container bg-background">
      <div className="flex justify-between w-full">
        <Link href="/">
          <h1 className="text-2xl tracking-wide">Patisserie mille.mille</h1>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Link href={item.href} aria-label={item.label}>
                  <div>{item.label}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            tabIndex={0}
          >
            <svg
              className="h-6 w-6"
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
