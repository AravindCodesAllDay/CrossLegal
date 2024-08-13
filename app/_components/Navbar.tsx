"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/app/_assets/logo.svg";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const pathname = usePathname();

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div
      className={`fixed z-30 w-full font-semibold transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 0 ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-center px-3">
        <p>Mon - Sun: 9.00 am - 5.00pm</p>
        <p className="ml-auto border-r-2 border-secondary p-3">halt-o.com</p>
        <p className="pl-3">Chennai, INDIA</p>
      </div>

      <ul className="w-full flex justify-around items-center border-y-2 border-secondary">
        <li className="py-4 pr-20 border-r-2 border-secondary">
          <a href="/">
            <Image src={logo} alt="logo" className="size-12" />
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.path}>
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
        <li>
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
      </ul>
    </div>
  );
}
