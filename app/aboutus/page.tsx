"use client";
import React from "react";

import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Looking4Lawyer from "./Looking4Lawyer";
import AboutUs from "./AboutUs";
import team from "@/app/_assets/abtHeader.jpg";
import OurTestimonials from "../_components/OurTestimonials";
import GetInTouch from "./GetInTouch";
import OurLawyers from "../_components/OurLawyers";
import ToTop from "../_components/ToTop";
import Clientele from "../_components/Clientele";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Header header={"Aboutus"} title={"About Us"} photo={team} />
      <div className="flex flex-col gap-12 my-8">
        <AboutUs />
        <Looking4Lawyer />
        <OurTestimonials />
        <OurLawyers />
        <GetInTouch />
        <Clientele />
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
