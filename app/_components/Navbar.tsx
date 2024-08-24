"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/assets/logo.png";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY && scrollY > 100 && !menuOpen) {
        setNavbarVisible(false);
      } else if (scrollY < lastScrollY || scrollY <= 100) {
        setNavbarVisible(true);
      }
      if (menuOpen) {
        setMenuOpen(false);
      }

      setLastScrollY(scrollY);
      setScrolled(scrollY > 0);
    }
  }, [lastScrollY, menuOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [controlNavbar, handleClickOutside]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Practices", path: "/practices" },
    { name: "Clientele", path: "/#clientele" },
  ];

  return (
    <div
      className={`fixed z-30 w-screen transition-transform duration-300 bg-primary text-white ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "" : "md:bg-transparent md:text-white"}`}
    >
      <ul className="w-full flex justify-around items-center border-y border-secondary">
        <li className=" md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </li>
        <li className="py-1 md:py-0 border-secondary">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="h-16 w-44 md:h-20 md:w-52"
              placeholder="blur"
            />
          </Link>
        </li>
        {navItems.map((item) => (
          <li key={item.path} className="hidden md:block">
            <Link
              href={item.path}
              className={`relative flex items-center py-2 px-4 transition-all duration-300 ${
                pathname === item.path
                  ? "text-secondary"
                  : "hover:text-secondary"
              }`}
            >
              {pathname === item.path && (
                <div className="absolute w-6 h-4 -translate-x-4 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-secondary"></div>
              )}
              {item.name}
            </Link>
          </li>
        ))}
        <li className="hidden md:block">
          <Link href="/contactus">
            <button className="flex justify-center items-center group">
              <div className="p-2 bg-white transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-primary wiggle"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
                Contact Us
              </div>
            </button>
          </Link>
        </li>
        <li className="md:hidden">
          <a href="/contactus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 wiggle"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div
        className={`${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-500 md:hidden`}
        ref={menuRef}
      >
        <ul className="w-full bg-white text-black flex flex-col items-center p-3">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="border-b border-secondary w-full flex justify-center"
            >
              <a
                href={item.path}
                className={`relative flex items-center py-2 px-4 transition-all duration-300 ${
                  pathname === item.path
                    ? "text-secondary"
                    : "hover:text-secondary"
                }`}
              >
                {pathname === item.path && (
                  <div className="absolute w-6 h-4 -translate-x-4 rounded-tl-lg rounded-br-lg bg-gradient-to-r from-secondary"></div>
                )}
                {item.name}
              </a>
            </li>
          ))}
          <li className="p-3 w-full flex justify-center">
            <a href="/contactus">
              <button className="flex justify-center items-center group">
                <div className="p-2 bg-primary transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-white wiggle"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </div>
                <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
                  Contact Us
                </div>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
