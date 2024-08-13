"use client";
import React from "react";

import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Looking4Lawyer from "./Looking4Lawyer";
import AboutUs from "./AboutUs";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        <Header />
        <AboutUs />
        <Looking4Lawyer />
      </div>
      <Footer />
    </>
  );
}
