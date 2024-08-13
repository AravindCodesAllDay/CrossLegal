"use client";
import React, { useState, useEffect } from "react";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Maps from "./Maps";
import Header from "./Header";
import Contact from "./Contact";
import ToTop from "../_components/ToTop";
import Loader from "../_components/Loader";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className="flex flex-col gap-5">
        <Header />
        <Contact />
        <Maps />
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
