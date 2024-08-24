import Image from "next/image";
import React from "react";
import loader from "@/public/assets/pre-loader.gif";

const Loading: React.FC = () => {
  return (
    <div className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-white z-50">
      <Image src={loader} alt="logo" className="size-24" />
    </div>
  );
};

export default Loading;
