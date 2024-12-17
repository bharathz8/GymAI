import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

const Hero = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        preload="metadata"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ opacity: isVideoVisible ? 1 : 0 }}
      >
        {isVideoVisible && (
          <>
            <source src="/hero.mp4" type="video/mp4" /> {/* H.264 encoded MP4 video */}
          </>
        )}
        Sorry, your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10 px-5 md:px-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 font-sans tracking-wide">
            Transform Your Fitness with Gym AI - Smarter Plans, Faster Results
          </h1>
          <p className="text-xl mb-6 sm:text-2xl">
            AI-powered workout and diet plans tailored just for you
          </p>
          <div className="flex justify-center">
            <Button
              label="Get Started"
              transparent={true}
              textColor="text-white"
              borderColor="border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
