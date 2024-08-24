import Navbar from "@/app/_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Practice from "./Practice";

import team from "@/public/assets/header/1.jpg";
import ToTop from "../_components/ToTop";

export default function PracticePage() {
  return (
    <>
      <Navbar />
      <Header title={"Practices"} photo={team} header={"Practices"} />
      <Practice />
      <ToTop />
      <Footer />
    </>
  );
}
