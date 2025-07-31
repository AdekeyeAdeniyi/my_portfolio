"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";

import Profile from "../images/image.jpeg";

const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 max-w-6xl w-full mx-auto items-center h-full">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
        <h1 className="text-4xl font-medium mb-2 md:mb-4 font-serif">Hi, my name is</h1>
        <h2 className="text-5xl font-light text-black mb-4 font-serif ">Emmanuel Adekeye</h2>
        <p className="text-lg text-gray-700 mb-6 font-normal max-w-[45ch]">
          I’m a Software Engineer and an aspiring Machine Learning Developer, driven by a passion for intelligent systems and grounded in a strong foundation of software craftsmanship.
        </p>
        <a href="/Emmanuel_Adekeye_Resume.pdf" download>
          <Button className="w-fit" size="lg">
            My Resume <span>&rarr;</span>
          </Button>
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center   w-full">
        <Image src={Profile} alt="Emmanuel Adekeye" className="  h-[400px] w-[400px] object-cover object-top rounded-full grayscale" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
