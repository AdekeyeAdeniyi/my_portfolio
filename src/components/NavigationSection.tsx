"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "@/images/logo_black.svg";
import NavLink from "./NavLink";
import { NavLinkProps } from "@/interfaces";

const navItems: NavLinkProps[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const NavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-[999] px-8">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center h-24 relative">
        {/* Logo */}
        <Link href="/" className="w-20 -ml-5">
          <Image src={Logo} alt="logo" className="w-full h-full object-cover" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink path={item.path} name={item.name} />
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button className="sm:hidden p-2 z-[1004]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-black" />}
        </button>

        {/* Expanding Circle */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 35 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="sm:hidden fixed top-6 right-6 w-10 h-10 bg-black rounded-full z-[1001]"
            />
          )}
        </AnimatePresence>

        {/* Fullscreen Nav Items */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="sm:hidden fixed inset-0 flex flex-col gap-4 mt-50 items-center justify-start z-[1002]">
              {navItems.map((item, index) => (
                <motion.div
                  onClick={() => setMenuOpen(false)}
                  key={item.name}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}>
                  <NavLink path={item.path} name={item.name} variant="light" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavigationSection;
