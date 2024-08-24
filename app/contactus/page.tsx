"use client";
import React from "react";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Maps from "./Maps";
import Contact from "./Contact";
import ToTop from "../_components/ToTop";
import Header from "../_components/Header";
import team from "@/public/assets/header/3.jpg";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        <Header header={"Contact"} title={"Contact"} photo={team} />
        <Contact />
        <Maps />
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
