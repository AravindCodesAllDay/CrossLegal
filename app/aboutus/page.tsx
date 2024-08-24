import React from "react";

import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import AboutFirm from "./AboutFirm";
import AboutUs from "./AboutUs";
import OurLawyers from "./OurLawyers";
import ToTop from "../_components/ToTop";
import Clientele from "../_components/Clientele";
import team from "@/public/assets/header/4.jpg";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Header header={"Aboutus"} title={"About Us"} photo={team} />
      <div className="flex flex-col gap-12 my-8">
        <AboutUs />
        <AboutFirm />
        <OurLawyers />
        <Clientele />
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
