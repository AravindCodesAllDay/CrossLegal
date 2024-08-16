"use client";
import React, { useState, useEffect } from "react";

import Navbar from "@/app/_components/Navbar";
import OurResources from "./_homepage/OurResources";
import WhatWeDo from "./_homepage/WhatWeDo";
import Carousel from "./_homepage/Carousel";
import OurTestimonials from "./_homepage/OurTestimonials";
import OurLawyers from "./_homepage/OurLawyers";
import RecentArticles from "./_homepage/RecentArticles";
import Footer from "@/app/_components/Footer";
import AboutUs from "./_homepage/AboutUs";
import ToTop from "./_components/ToTop";
import Poster01 from "./_homepage/Poster01";
import Poster02 from "./_homepage/Poster02";
import Loader from "./_components/Loader";

export default function Home() {
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
      <div className="relative">
        <Navbar />
        <div className="flex flex-col gap-8">
          <Carousel />
          <AboutUs />
          <OurResources />
          <WhatWeDo />
          <div className="w-full relative">
            <div
              className={`bg-[url("/statue.jpg")] bg-no-repeat bg-center bg-fixed bg-cover h-2/3 -z-20 w-full absolute`}
            ></div>
            <OurTestimonials />
            <Poster01 />
          </div>
          <OurLawyers />
          <Poster02 />
          <RecentArticles />
        </div>
        <ToTop />
        <Footer />
      </div>
    </>
  );
}
