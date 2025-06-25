"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Brain, Code, GraduationCap, LifeBuoy } from "lucide-react";
import PortfolioCard from "./PorfolioCard";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    title: "Full-Stack Web App",
    description: "Built scalable and responsive applications with Next.js and Node.js.",
    icon: <Code className="w-8 h-8 text-white" />,
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Fullstack",
    color: "bg-[#0f172a]",
  },
  {
    title: "Machine Learning Pipeline",
    description: "Deployed ML models with Python and TensorFlow for real-time predictions.",
    icon: <Brain className="w-8 h-8 text-white" />,
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "ML",
    color: "bg-[#1e293b]",
  },
  {
    title: "Mentorship Program",
    description: "Guided over 50 students from zero to junior developer level.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Mentoring",
    color: "bg-[#2563eb]",
  },
  {
    title: "Coaching Session",
    description: "One-on-one coaching for productivity and tech career navigation.",
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Coaching",
    color: "bg-[#dc2626]",
  },
  {
    title: "E-Commerce App",
    description: "Developed with MERN stack and payment gateway integration.",
    icon: <Code className="w-8 h-8 text-white" />,
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    category: "Fullstack",
    color: "bg-[#0f172a]",
  },
];

const ProjectsSection = () => {
  const router = useRouter();
  const [activeCategory] = useState("All");
  const [showAll] = useState(false);

  const filteredItems = portfolioItems.filter((item) => (activeCategory === "All" ? true : item.category === activeCategory));

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3);

  return (
    <section id="work" className=" py-28 px-8 lg:px-20 bg-white">
      <div className=" max-w-6xl w-full mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative font-serif text-3xl md:text-4xl font-medium pb-4 mb-8 md:mb-20 before:content-[''] before:absolute before:bottom-0 before:left-0.5 before:w-20 before:h-1 before:bg-black">
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => (
            <PortfolioCard key={idx} {...item} />
          ))}
        </div>

        {filteredItems.length > 4 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} className="flex justify-center mt-10">
            <Button onClick={() => router.push("/projects")} className="hover:bg-transparent hover:text-black border transition-colors">
              See more
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
