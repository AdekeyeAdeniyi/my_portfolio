// components/PortfolioCard.tsx
"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string | StaticImageData;
  category: string;
  color: string;
}

const PortfolioCard = ({ title, description, icon, imageSrc, color }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-xl shadow-lg">
      <Image src={imageSrc} alt={title} width={400} height={300} className="object-cover w-full h-70 transition-transform duration-500 group-hover:scale-105" />

      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`p-3 rounded-full mb-4 ${color}`}>{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
