import Image from "next/image";

import img from "@/assets/logo.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <Image src={img} alt="logo" className="w-96" />
      <h1 className="text-4xl text-white">Coming Soon!</h1>
    </div>
  );
}
