"use client";
import React from "react";

import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Looking4Lawyer from "./Looking4Lawyer";
import AboutUs from "./AboutUs";
import team from "@/app/_assets/abtHeader.jpg";
import Carousel from "./Carousel";
import GetInTouch from "./GetInTouch";
import OurLawyers from "./OurLawyers";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        <Header header={"Aboutus"} title={"About Us"} photo={team} />
        <AboutUs />
      </div>
      <div className="relative">
        <div className="w-full h-5/6 -z-20 bg-primary bottom-0 absolute"></div>
        <Looking4Lawyer />
        <Carousel />
      </div>
      <OurLawyers />
      <GetInTouch />
      <Footer />
    </>
  );
}
