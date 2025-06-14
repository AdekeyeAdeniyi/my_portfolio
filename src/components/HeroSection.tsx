"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 max-w-6xl w-full mx-auto items-center h-full">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-medium mb-2 md:mb-4 font-serif">Hi, my name is</h1>
        <h2 className="text-3xl md:text-5xl font-light text-black mb-4 font-serif">Emmanuel Adekeye</h2>
        <p className="text-lg text-gray-700 mb-6 font-normal">
          I’m a Software Engineer and an aspiring Machine Learning Developer, driven by a passion for intelligent systems and grounded in a strong foundation of software craftsmanship.
        </p>

        <Button className="w-fit" size="lg">
          My works <span>&rarr;</span>
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center items-center">
        {/* <Image src="" alt="Solomon Eyitene" width={400} height={500} className="rounded-md object-cover grayscale" /> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
