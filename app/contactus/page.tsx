"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Maps from "./Maps";
import Contact from "./Contact";
import ToTop from "../_components/ToTop";
import Loader from "../_components/Loader";
import Header from "../_components/Header";
import team from "@/app/_assets/abtHeader.jpg";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className="flex flex-col gap-5">
        <Header title={"Contact"} photo={team} />
        <Contact />
        <Maps />
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
