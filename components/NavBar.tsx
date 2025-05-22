"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { CiDark, CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Background image */}
      <div id="/" className="fixed top-0 right-0 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 flex justify-between items-center px-10 py-3 bg-white shadow-md z-50">
        <Link href="/">
          <p className="text-2xl font-bold animate-bounce transition-all duration-500 cursor-pointer">
            Pratham
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href="#contact"
          >
            Contact <MdArrowOutward size={20} />
          </a>
          {/* <CiDark size={30} className='ml-4 cursor-pointer' /> */}
          <button
            onClick={handleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="block md:hidden ml-3"
          >
            <CiMenuFries size={30} className="cursor-pointer" />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          id="mobile-menu"
          className={`md:hidden fixed top-0 bottom-0 right-0 w-64 bg-rose-50 py-20 px-10 space-y-4 z-50
            transform transition-transform duration-500
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            onClick={handleMenu}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <IoIosClose size={30} />
          </div>
          <li>
            <a href="#" onClick={handleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenu}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
