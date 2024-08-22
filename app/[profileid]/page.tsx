import React from "react";
import { redirect } from "next/navigation";
import { profile } from "@/lib/profile";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import team from "@/app/_assets/header/2.jpg";
import Image from "next/image";
import ToTop from "../_components/ToTop";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <p>{bio.mobile}</p>
              </div>
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

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
