"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/app/_assets/logo.svg";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const pathname = usePathname();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Features", path: "/features" },
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
            <button className="flex justify-center items-center">
              <div className="p-2 bg-white rounded-tl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus size-6"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#b9967e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="bg-secondary rounded-br-lg p-2 text-white font-semibold">
                Contact Us
              </div>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}
