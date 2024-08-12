// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import team from "@/app/_assets/abtHeader.jpg";
// import lawyer from "@/app/_assets/lawyerAbt.jpg";
// import justice from "@/app/_assets/justice.svg";
// import quote from "@/app/_assets/leftQuote.png";
// import lookingFor from "@/app/_assets/lookingFor.jpg";
// import Navbar from "@/app/_components/Navbar";
// import world from "@/app/_assets/map.png";

// export default function page() {
//   const [currentNumber, setCurrentNumber] = useState(0);
//   const [isInView, setIsInView] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.disconnect(); // Stop observing after the first intersection
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is in view
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNumber((prevNumber) => {
//         if (prevNumber < 3200) {
//           return prevNumber + 32;
//         } else {
//           clearInterval(interval);
//           return prevNumber;
//         }
//       });
//     }, 35);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="flex flex-col gap-5">
//         <Navbar />

//         <div className="relative h-[400px] overflow-clip bg-[#15171f]">
//           <Image
//             src={team}
//             alt="Team Image"
//             className="w-full h-[60vh] opacity-10"
//           />
//           <div className="absolute z-10 top-2/4 left-[45%]">
//             <div className="flex flex-col items-center">
//               <h1 className="text-5xl font-marcellus text-zinc-100">
//                 About Us
//               </h1>
//               <div className="flex text-zinc-50 text-sm py-5 items-center list-none">
//                 <li className="px-2 hover:text-secondary">
//                   <a href="/">Home</a>
//                 </li>
//                 <span>
//                   <div className="h-3 w-3 bg-[#65554d] mt-0.5 rounded-tl-md rounded-br-md"></div>
//                 </span>
//                 <li className="px-2">
//                   <a href="">About Us</a>
//                 </li>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           ref={elementRef}
//           className={`relative h-[700px] p-24 w-full flex justify-around`}
//         >
//           <div
//             className={`flex transform duration-500 ease-in ${
//               isInView ? "translate-y-0" : "translate-y-full opacity-0"
//             }`}
//           >
//             <div className="relative w-2/4">
//               <Image
//                 src={lawyer}
//                 alt="Lawyer"
//                 className="w-full rounded-tr-[50px] rounded-bl-[50px] ml-0 md:ml-20"
//               />
//               <div className="absolute top-[510px] flex items-center justify-center">
//                 <div className="w-[320px] bg-secondary p-8 text-center text-zinc-50 rounded-bl-[50px]">
//                   <p className="text-[56px] font-marcellus">{currentNumber}+</p>
//                   <p className="text-[14.5px] font-semibold">
//                     LAWYERS ACROSS OUR GLOBAL PLATFORM
//                   </p>
//                 </div>
//                 <div className="absolute z-10 w-[30%] h-[30%] opacity-25 top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
//                   <Image src={justice} alt="Justice Icon" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-5 w-2/3 ml-24 p-10 h-0">
//               <div className="flex">
//                 <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
//                 <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
//                   ABOUT US
//                 </p>
//                 <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
//               </div>
//               <div className="w-[95%] flex flex-wrap">
//                 <p className="font-marcellus font-light leading-[55px] text-[2.8em] text-[#1e1e1e] ">
//                   We’re Advocates for People Justice and Right
//                 </p>
//                 <div className="w-[18%] mt-4 h-0.5  bg-gradient-to-r from-secondary to-white"></div>
//                 <p className="text-[16px] py-6 leading-loose text-gray-500">
//                   All the Lorem Ipsum generators on the Internet tend to
//                   predefined chunks as necessary, making this the first true
//                   generator on net utperspiciatis unde omniste natus error sit
//                   volupta accusantium doloremquelatin words.
//                 </p>
//                 <div className="relative flex gap-5">
//                   <Image
//                     className="w-[55px] h-[55px]"
//                     src={quote}
//                     alt="leftQuote"
//                   />
//                   <p className="w-[80%] leading-loose italic font-[500] text-lg text-[#1e1e1e]">
//                     We believe everyone deserves affordable and simple access to
//                     legal services and helping people.
//                   </p>
//                 </div>
//                 <p className="text-[16px] py-8 leading-loose text-gray-500">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//                   elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
//                   leo.
//                 </p>
//                 <a href="contactus" className="group">
//                   <button className="flex justify-center items-center">
//                     <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="#ffffff"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <path d="M12 5l0 14" />
//                         <path d="M5 12l14 0" />
//                       </svg>
//                     </div>
//                     <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
//                       Learn More
//                     </div>
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#09172e] flex flex-col mt-72">
//           <div className="absolute flex w-full justify-center p-2">
//             <div className=" h-4/6 flex bg-white p-5 -mt-40 shadow-xl dro">
//               <Image
//                 src={lookingFor}
//                 className="w-1/2 h-1/2 "
//                 alt="lookingFor"
//               />
//               <div className="flex flex-col items-center justify-center gap-5">
//                 <div className="flex">
//                   <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-white rounded-tr-md rounded-bl-md"></div>
//                   <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
//                     ARE YOU LOOKING FOR HELP FROM A LAWYER?
//                   </p>
//                   <div className="h-3.5 w-6 bg-gradient-to-r from-white to-secondary rounded-tr-md rounded-bl-md"></div>
//                 </div>
//                 <div className="w-[70%] flex flex-wrap">
//                   <p className="font-marcellus font-light text-center text-[2.5em] text-[#1e1e1e] ">
//                     Are You Looking for Help From a Lawyer?
//                   </p>
//                 </div>
//                 <a href="contactus" className="group">
//                   <button className="flex justify-center items-center">
//                     <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="#ffffff"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <path d="M12 5l0 14" />
//                         <path d="M5 12l14 0" />
//                       </svg>
//                     </div>
//                     <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
//                       Contact Us
//                     </div>
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col items-center justify-center gap-5 mt-56 p-12">
//             <div className="flex">
//               <div className="h-3.5 w-6 bg-gradient-to-r from-secondary to-[#09172e] rounded-tr-md rounded-bl-md"></div>
//               <p className="text-secondary text-sm px-2 font-[550] -mt-0.5">
//                 OUR TESTIMONALS
//               </p>
//               <div className="h-3.5 w-6 bg-gradient-to-r from-[#09172e] to-secondary rounded-tr-md rounded-bl-md"></div>
//             </div>
//             <div className="w-1/3 flex flex-wrap items-center gap-5 justify-center">
//               <p className="font-marcellus font-light text-center text-[2.5em] leading-10 text-[#ffffff] ">
//                 What They Are Talking About Igual
//               </p>
//               <div className="w-[15%] h-0.5  bg-gradient-to-r from-secondary to-[#09172e]"></div>
//             </div>
//           </div>

//           <div className="flex">
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
