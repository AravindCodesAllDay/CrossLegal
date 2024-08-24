import React from "react";
import { redirect } from "next/navigation";
import { profile } from "@/lib/profile";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import team from "@/public/assets/header/2.jpg";
import Image from "next/image";
import ToTop from "../_components/ToTop";

export async function generateStaticParams() {
  // Assuming `profile` returns an array of profile objects
  const profiles = profile();

  // Generate an array of objects containing each `profileid` as a string
  return profiles.map((p) => ({
    profileid: p.id.toString(),
  }));
}

export default function ProfilePage({
  params,
}: {
  params: { profileid: string };
}) {
  const { profileid } = params;

  const bio = profile().find((p) => p.id.toString() === profileid);

  if (!bio) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <Header header={bio.name} title={"Profile"} photo={team} />
      <div className="flex flex-col gap-5 w-full md:w-4/5 mx-auto my-12">
        <div className="flex flex-col md:flex-row items-center gap-5 w-4/5 bg-secondary bg-opacity-15 p-3 mx-auto">
          <Image src={bio.photo} alt={bio.name} placeholder="blur" />
          <div className="flex flex-col gap-8 mx-auto">
            <div>
              <h2 className="font-bold text-2xl">{bio.name}</h2>
              <p className="text-sm">{bio.position}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {/* SVG icons and other content */}
                <p>{bio.mobile}</p>
              </div>
              <div className="flex gap-3">
                {/* SVG icons and other content */}
                <p>{bio.mail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 p-3">
          {bio.content && bio.content.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl text-center">Profile</h3>
              {bio.content.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          )}
          {bio.education && bio.education.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl text-center">Education</h3>
              {bio.education.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          )}
          {bio.qualification && bio.qualification.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl text-center">
                Bar Qualifications and Language Proficiency
              </h3>
              {bio.qualification.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          )}
          {bio.experience && bio.experience.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl text-center">
                Work Experience
              </h3>
              {bio.experience.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          )}
          {bio.background && bio.background.length > 0 && (
            <div className="flex flex-col gap-5">
              <h3 className="font-semibold text-3xl text-center">Background</h3>
              {bio.background.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <ToTop />
      <Footer />
    </>
  );
}
