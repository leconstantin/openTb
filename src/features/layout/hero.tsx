"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroContent } from "@/config/home";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentContent = heroContent[currentIndex];
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroContent.map((content, index) => (
        <Image
          key={index}
          src={content.image}
          alt={`School background ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
        <div
          className={`text-center transition-opacity duration-1000 max-w-3xl mx-auto ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
