"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import contact from "@/app/_assets/phone.gif";
import logo from "@/app/_assets/logo.svg";

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
      if (scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(scrollY);

      setScrolled(scrollY > 0);

      if (menuOpen) {
        setMenuOpen(false);
      }
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
  ];

  return (
    <div
      className={`fixed z-30 w-screen transition-transform duration-300 bg-white text-black ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "" : "md:bg-transparent md:text-white"}`}
    >
      <ul className="w-full flex justify-around items-center border-y border-secondary">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </li>
        <li className="py-2 md:py-4 md:pr-20 md:border-r border-secondary">
          <a href="/">
            <Image src={logo} alt="logo" className="size-12" />
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.path} className="hidden md:block">
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
        <li className="text-secondary hidden md:block">+91 9003232007</li>
        <li className="hidden md:block">
          <a href="/contactus">
            <button className="flex justify-center items-center group">
              <div className="p-2 bg-white transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-primary"
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
        <li className="md:hidden">
          <a href="/contactus">
            <Image src={contact} alt="contact" className="size-8" />
          </a>
        </li>
      </ul>
      <div
        className={`${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 md:hidden`}
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
          <li className="text-secondary">+91 XXXXX XXXXX</li>
        </ul>
      </div>
    </div>
  );
}
