import React, { useState, useEffect } from "react";
import stationary1 from "../assets/stationary1.png";
import stationary2 from "../assets/stationary2.png";
import stationary3 from "../assets/stationary3.png";
import stationary4 from "../assets/stationary4.png";

const slides = [stationary1, stationary2, stationary3, stationary4];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-96 mt-20 flex-shrink-0"
          />
        ))}
      </div> 
    </div>
  );
};

export default CustomSlider;
