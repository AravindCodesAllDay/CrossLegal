"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { practices } from "@/lib/practices";

export default function Practice() {
  return (
    <div className="relative mx-auto w-full md:w-4/5 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {practices().map((data) => (
          <a key={data.id} href={`/practices/${data.id}`}>
            <motion.div
              className="flex-shrink-0 w-full p-3 flex flex-col items-center gap-4 group transition-transform duration-500 ease-in-out transform"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex justify-between w-full">
                <Image src={data.photo} alt="photo" className="w-1/4 h-20" />
                <div className="h-20 w-8 rounded-bl-full ml-auto opacity-25 group-hover:opacity-55 bg-gradient-to-l from-secondary"></div>
              </div>
              <div className="flex flex-col gap-3 p-3">
                <h3 className="text-xl md:text-2xl line-clamp-1">
                  {data.header}
                </h3>
                <p className="text-secondary line-clamp-2">{data.text}</p>
              </div>
              <Image src={data.figure} alt="card" className="w-full" />
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
