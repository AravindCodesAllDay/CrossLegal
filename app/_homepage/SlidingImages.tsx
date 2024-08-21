import Heading from "../_animations/Heading";
import Image from "next/image";
import img1 from "@/app/_assets/clients/img1.png";
import img2 from "@/app/_assets/clients/img2.png";
import img3 from "@/app/_assets/clients/img3.png";
import img4 from "@/app/_assets/clients/img4.png";
import img5 from "@/app/_assets/clients/img5.png";
import img6 from "@/app/_assets/clients/img6.png";
import img7 from "@/app/_assets/clients/img7.png";
import img8 from "@/app/_assets/clients/img8.png";
import img9 from "@/app/_assets/clients/img9.png";
import img10 from "@/app/_assets/clients/img10.png";
import img11 from "@/app/_assets/clients/img11.png";
import img12 from "@/app/_assets/clients/img12.png";
import img13 from "@/app/_assets/clients/img13.png";
import img14 from "@/app/_assets/clients/img14.png";
import img15 from "@/app/_assets/clients/img15.png";
import img16 from "@/app/_assets/clients/img16.png";
import img17 from "@/app/_assets/clients/img17.png";
import img18 from "@/app/_assets/clients/img18.png";
import img19 from "@/app/_assets/clients/img19.png";
import img20 from "@/app/_assets/clients/img20.png";
import img21 from "@/app/_assets/clients/img21.png";
import img22 from "@/app/_assets/clients/img22.png";
import img23 from "@/app/_assets/clients/img23.png";
import img24 from "@/app/_assets/clients/img24.png";
import img25 from "@/app/_assets/clients/img25.png";
import img26 from "@/app/_assets/clients/img26.png";
import img27 from "@/app/_assets/clients/img27.png";
import img28 from "@/app/_assets/clients/img28.png";

const leftImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];
const rightImages = [
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
];

const SlidingImages = () => {
  return (
    <>
      {/* <Heading
        title="Clinentele"
        line1=""
        line2=""
      />
       */}
      <div className="flex flex-col overflow-hidden">
        <div className="flex animate-slide-left space-x-4">
          {[...leftImages, ...leftImages].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex animate-slide-right space-x-4 mt-4">
          {[...rightImages, ...rightImages].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={src} alt={`Slide ${index + 15}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlidingImages;
