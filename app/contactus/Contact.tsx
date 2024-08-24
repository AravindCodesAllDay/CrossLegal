"use client";
import React, { useState } from "react";
import StarRating from "../_animations/StarRating";
import { address, phoneNo, emailId } from "@/lib/contacts";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:${emailId()}?subject=Contact%20from%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0APhone:%20${phone}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-5 gap-5">
      <div className="flex flex-col gap-5 p-5 md:w-1/2 rounded-lg">
        <h3 className="flex items-center gap-3 text-2xl text-secondary">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Get In Touch
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex text-4xl">Contact Information</p>
        <div className="flex flex-col sm:flex-row gap-5 justify-around w-full">
          <div className="flex flex-col items-center gap-5 group w-full sm:w-1/2 border p-4 cursor-pointer rounded-tl-3xl rounded-br-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 p-3 border-2 text-secondary group-hover:bg-primary group-hover:text-white border-secondary rounded-full transition-colors duration-150 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <h2 className="text-3xl">Location</h2>
            <p className="flex flex-col items-center text-center text-secondary">
              {address()}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 group w-full sm:w-1/2 border p-4 cursor-pointer rounded-tl-3xl rounded-br-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 p-3 border-2 text-secondary border-secondary group-hover:bg-primary group-hover:text-white rounded-full  transition-colors duration-150 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            <h2 className="text-3xl">24/7 Support</h2>
            <p className="flex flex-col items-center text-secondary">
              <span>+(91) {phoneNo()}</span>
              <span>{emailId()}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row bg-secondary text-white text-lg p-3 rounded items-center justify-center gap-3">
          <p>Our Best Skilled Attorneys, Trust Score 4.6</p>
          <StarRating rating={4.6} />
        </div>
      </div>

      <div className="flex flex-col gap-5 md:w-1/2 p-5 bg-white rounded-lg shadow-md">
        <h3 className="flex items-center gap-3 text-2xl text-secondary">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Have Any Questions?
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex flex-col text-4xl">Drop Us a Line</p>
        <form
          className="flex flex-col gap-3 items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md"
            />
          </div>
          <div className="flex w-full gap-3">
            <div className="w-full">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border-b-2 border-gray-300 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="p-3 bg-secondary text-white rounded-tl-3xl rounded-br-3xl cursor-pointer text-lg"
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
