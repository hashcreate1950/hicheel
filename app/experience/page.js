"use client";
import { useState } from "react";
import Link from "next/link";

// components/TechStack.jsx
export default function Experience() {
  // Each tech has a name, short label (initials) and a brand-ish color.
  // Icons are inline SVGs (no external files).
  const techs = [
    { name: "JavaScript", label: "JS", color: "#FFD600", textColor: "#111827" },
    { name: "TypeScript", label: "TS", color: "#3178C6", textColor: "white" },
    { name: "React", label: "R", color: "#61DAFB", textColor: "#0f172a" },
    { name: "Next.js", label: "Next", color: "#111827", textColor: "white" },
    { name: "Node.js", label: "Node", color: "#3C873A", textColor: "white" },
    { name: "Express.js", label: "Ex", color: "#000000", textColor: "white" },
    { name: "Nest.js", label: "Nest", color: "#E0234E", textColor: "white" },
    { name: "Socket.io", label: "SO", color: "#000000", textColor: "white" },
    { name: "PostgreSQL", label: "PG", color: "#336791", textColor: "white" },
    { name: "MongoDB", label: "MDB", color: "#0FA960", textColor: "white" },
    { name: "Sass/Scss", label: "Sass", color: "#CF649A", textColor: "white" },
    {
      name: "Tailwindcss",
      label: "TW",
      color: "#38BDF8",
      textColor: "#0f172a",
    },
    { name: "Figma", label: "Fi", color: "#F24E1E", textColor: "white" },
    { name: "Cypress", label: "Cy", color: "#58D09E", textColor: "#0f172a" },
    { name: "Storybook", label: "SB", color: "#FF4081", textColor: "white" },
    { name: "Git", label: "Git", color: "#F0502D", textColor: "white" },
  ];

  return (
    <section className="px-4 py-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 dark:text-white">
        Stuff I'm Good At
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-6 items-center justify-center">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 text-center transform transition duration-300 hover:scale-105 hover:-translate-y-1 text-black"
          >
            {/* Inline SVG badge — no external files */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              className="block"
              role="img"
              aria-label={tech.name}
            >
              <rect
                x="0"
                y="0"
                width="64"
                height="64"
                rx="12"
                fill={tech.color}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14"
                fontWeight="700"
                fill={tech.textColor}
                style={{ fontFamily: "Inter, system-ui, Arial, sans-serif" }}
              >
                {tech.label}
              </text>
            </svg>

            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
