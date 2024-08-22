"use client";
import React from "react";

import Navbar from "@/app/_components/Navbar";
import OurResources from "./_homepage/OurResources";
import WhatWeDo from "./_homepage/WhatWeDo";
import Carousel from "./_homepage/Carousel";
import AboutFIrm from "./_homepage/AboutFirm";
import OurLawyers from "./_homepage/OurLawyers";
import Footer from "@/app/_components/Footer";
import AboutUs from "./_homepage/AboutUs";
import ToTop from "./_components/ToTop";
import Clientele from "./_components/Clientele";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Carousel />
        <div className="flex flex-col gap-12 mb-8">
          <div className="flex relative">
            <div className="w-full h-3/5 top-0 bg-[#f9f9f9] absolute -z-20"></div>
            <AboutUs />
          </div>
          <OurResources />
          <WhatWeDo />
          <AboutFIrm />
          <OurLawyers />
          <Clientele />
        </div>
        <ToTop />
        <Footer />
      </div>
    </>
  );
}
