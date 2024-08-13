import Image from "next/image";
import React from "react";
import logo from "@/app/_assets/logo.svg";

const Loader: React.FC = () => {
  return (
    <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 animate-fadeOut">
      <Image src={logo} alt="logo" className="size-24" />
    </div>
  );
};

export default Loader;
