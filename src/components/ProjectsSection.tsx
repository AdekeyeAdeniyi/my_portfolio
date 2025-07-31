"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Brain, Code, GraduationCap, LifeBuoy } from "lucide-react";
import PortfolioCard from "./PorfolioCard";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

import AjoByCowris from "../images/ajo.png";
import SendCowris from "../images/cowris.png";
import ForbesRoyal from "../images/forbesroyal.png";
import Micromerce from "../images/micromerce.png";
import Timart from "../images/timart.png";

const portfolioItems = [
  {
    title: "Timart Business Solution",
    description:
      "Tested and validated web, desktop, and mobile applications to ensure seamless performance, responsiveness, and cross-platform functionality. Collaborated with developers to identify bugs, improve UI/UX, and maintain application quality.",
    icon: <Code className="w-8 h-8 text-white" />,
    imageSrc: Timart,
    category: "Quality Assurance",
    color: "bg-[#0f172a]",
  },
  {
    title: "Forbes Royal School",
    description:
      "Taught grade school students both practical and theoretical aspects of technology, nurturing curiosity and foundational tech skills through hands-on learning and guided instruction.",
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    imageSrc: ForbesRoyal,
    category: "Education",
    color: "bg-[#dc2626]",
  },

  {
    title: "Client Onboarding Platform",
    description: "Developed a web app to streamline client onboarding and complex data migrations for tech companies, with self-service and guided workflows.",
    icon: <Code className="w-8 h-8 text-white" />,
    imageSrc: Micromerce,
    category: "SaaS",
    color: "bg-[#0f172a]",
  },
  {
    title: "Ajo by Cowris",
    description: "Converted design mockups into a responsive Vue.js application for a collaborative funding platform, enabling users to securely contribute and manage pooled money with ease.",
    icon: <Brain className="w-8 h-8 text-white" />,
    imageSrc: AjoByCowris,
    category: "Frontend",
    color: "bg-[#1e293b]",
  },
  {
    title: "Cowris",
    description: "Fixed and created Vue.js components for a cross-border money transfer platform, enhancing user experience and ensuring seamless transactions across continents.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    imageSrc: SendCowris,
    category: "Fintech",
    color: "bg-[#2563eb]",
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
