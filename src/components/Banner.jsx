import React, { useEffect, useState } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
<div
      style={{
        position: "relative",
        height: "50vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${images.length * 100}%`,
          transform: `translateX(-${activeIndex * (100 / images.length)}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              width: `${100 / images.length}%`,
              height: "50vh",
              objectFit: "cover",
              objectPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;