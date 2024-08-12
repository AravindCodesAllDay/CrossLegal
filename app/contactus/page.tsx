import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Maps from "./Maps";
import Header from "./Header";
import Contact from "./Contact";
import ToTop from "../_components/ToTop";

export default function ContactPage() {
  return (
    <>
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
