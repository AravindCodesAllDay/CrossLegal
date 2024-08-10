import Navbar from "@/app/_components/Navbar";
import OurResources from "./_homepage/OurResources";
import WhatWeDo from "./_homepage/WhatWeDo";
import Carousel from "./_homepage/Carousel";
import OurTestimonials from "./_homepage/OurTestimonials";
import OurLawyers from "./_homepage/OurLawyers";
import RecentArticles from "./_homepage/RecentArticles";
import Footer from "@/app/_components/Footer";
import AboutUs from "./_homepage/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8">
        <Carousel />
        <AboutUs />
        <OurResources />
        <WhatWeDo />
        <OurTestimonials />
        <OurLawyers />
        <RecentArticles />
      </div>
      <Footer />
    </>
  );
}
