"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Brain, GraduationCap, LifeBuoy } from "lucide-react";

// Correct easing using a cubic-bezier array
const easing: [number, number, number, number] = [0.42, 0, 0.58, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const services = [
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Full-Stack Web Development",
    desc: "I build scalable and responsive web applications from front to back using modern tools and frameworks.",
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "AI / ML Engineering",
    desc: "I apply machine learning and artificial intelligence to solve real-world problems.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Mentoring",
    desc: "I help aspiring developers grow through personalized guidance and practical projects.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-white" />,
    title: "Coaching",
    desc: "I work with individuals to unlock their potential, boost performance, and stay motivated.",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="min-h-[90vh] grid grid-cols-1 md:grid-cols-6">
      <div className="bg-black hidden md:block"></div>

      <div
        className="py-28 md:col-span-5 px-8 lg:px-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative font-serif text-3xl md:text-5xl font-medium pb-4 mb-8 md:mb-20 before:content-[''] before:absolute before:bottom-0 before:left-0.5 before:w-20 before:h-1 before:bg-black">
            What I do
          </motion.h2>

          <motion.div ref={containerRef} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service, index) => (
              <motion.div key={index} variants={cardVariants} className="mb-12 p-6 max-w-[500px]">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 shadow-md">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
