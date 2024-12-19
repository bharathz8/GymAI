import React, { useEffect } from "react";
import { HeroConstant } from "../constants/constants";
import { useRecoilState } from "recoil";
import { currentIndexAtom } from "../recoil/Atom";
import HeroCard from "../components/HeroCard";
import Button from "../components/Button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexAtom);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === HeroConstant.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      {/* Render the HeroCard */}
      <HeroCard
        imgURL={HeroConstant[currentIndex].imgURL}
        name={HeroConstant[currentIndex].name}
      />

      {/* Button Section */}
      <div className="relative z-10 flex justify-center mt-8">
        <Button
          label="Explore More"
          transparent={true}
          textColor="text-white"
          borderColor="border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
