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

const row1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const row2 = [
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img28,
];
const row3 = [img19, img20, img21, img22, img23, img24, img25, img26, img27];

export default function Clientele() {
  return (
    <>
      <div className="flex flex-col overflow-hidden" id="clientele">
        <div className="w-full sm:w-4/5 mx-auto flex flex-col justify-center items-center p-3">
          <h3 className="flex items-center gap-3 text-lg md:text-2xl text-secondary">
            <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
            Clientele
            <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
          </h3>
        </div>
        <div className="flex items-center animate-slide-left-fast md:animate-slide-left space-x-6">
          {[...row1, ...row1].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={src} alt={`Slide ${index + 1}`} placeholder="blur" />
            </div>
          ))}
        </div>
        <div className="flex items-center animate-slide-right-fast md:animate-slide-right space-x-6 mt-4">
          {[...row2, ...row2].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={src} alt={`Slide ${index + 10}`} placeholder="blur" />
            </div>
          ))}
        </div>
        <div className="flex items-center animate-slide-left-fast md:animate-slide-left space-x-6 mt-4">
          {[...row3, ...row3].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={src} alt={`Slide ${index + 1}`} placeholder="blur" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
