"use client";
import React from "react";
import { redirect } from "next/navigation";
import { practices } from "@/lib/practices";
import Image from "next/image";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import team from "@/app/_assets/header/1.jpg";
import ToTop from "@/app/_components/ToTop";

export default function BlogPractice({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const practice = practices().find((p) => p.id.toString() === slug);

  if (!practice) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <Header photo={team} title={"Practices"} header={practice.header} />
      <div className="flex flex-col gap-5 p-5 text-lg w-full md:w-4/5 mx-auto">
        <h2 className="mx-auto text-lg md:text-3xl font-bold underline text-secondary">
          {practice.header}
        </h2>
        {practice.text.map((passage, index) => (
          <p key={index}>{passage}</p>
        ))}
        <Image
          src={practice.figure}
          alt={practice.header}
          placeholder="blur"
          className="w-4/5 mx-auto"
        />
        {practice.subHeader && (
          <h2 className="text-2xl font-bold underline decoration-secondary">
            {practice.subHeader}
          </h2>
        )}
        <ul className="flex flex-col gap-8">
          {practice.subTopics.map((topic, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold">{topic?.header}</h3>
              <p>{topic?.passage}</p>
            </li>
          ))}
        </ul>
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
