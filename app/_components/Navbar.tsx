import Image from "next/image";

import logo from "@/app/_assets/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="absolute z-30 w-full text-white font-semibold">
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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="aboutus">About Us</a>
          </li>
          <li>
            <a href="features">Features</a>
          </li>
          <li>
            <a href="blog">Blog</a>
          </li>
          <li>+91 XXXXX XXXXX</li>
          <li>
            <a href="contactus">
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
    </>
  );
}
