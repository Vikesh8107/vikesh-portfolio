"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnclickPhoto = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Optional: ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
        {/* Navbar Container */}
        <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
          {/* Logo + Name */}
          <Link href="#about-me" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={27}
              height={40}
              draggable={false}
              className="cursor-pointer rounded-lg"
              onClick={handleOnclickPhoto}
            />
            <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">
              Vikesh Laharpure
            </div>
          </Link>

          {/* Web Navbar */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Icons (Web) */}
          <div className="hidden md:flex flex-row gap-5">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-6 w-6 text-white" />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white focus:outline-none text-4xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
            {/* Links */}
            <div className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href={LINKS.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Source Code
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-6">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                >
                  <Icon className="h-8 w-8 text-white" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Modal Image Preview */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white rounded-lg shadow-xl"
          >
            <Image
              src="/logo.png"
              alt="Large Logo"
              width={300}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};
