"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../Providers/themeContext";

export default function Home() {
  return (
    <section className="flex flex-col-reverse px-4 md:px-5 py-16 md:flex-row lg:px-20 gap-12 dark:bg-slate-950">
      {/* Left side — Text + Info */}
      <div className="flex flex-col gap-12">
        {/* Intro Text */}
        <div>
          <h1 className="font-bold text-4xl lg:text-6xl mb-2 lg:mb-4 dark:text-white">
            Hi, I’m Sagat 👋
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            I'm a full stack developer (React.js &amp; Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>

        {/* Location + Availability */}
        <div className="flex flex-col gap-4">
          {/* Location */}
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="dark:text-gray-300 text-gray-700">
              Ulaanbaatar, Mongolia
            </p>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6">
              <div className="rounded-full w-2 h-2 bg-green-500"></div>
            </div>
            <p className="dark:text-gray-300 text-gray-700">
              Available for new projects
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:opacity-70 transition"
            >
              <path
                d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Twitter (X) */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:opacity-70 transition"
            >
              <path
                d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Right side — Profile Image */}
      <div className="flex justify-center">
        <img
          className="w-[240px] h-[280px] md:min-w-[240px] lg:min-w-[280px] lg:min-h-[320px] object-cover border-8 border-white rounded-2xl shadow-md"
          src="/profile.jpg"
          alt="Sagat portrait"
        />
      </div>
    </section>
  );
}
