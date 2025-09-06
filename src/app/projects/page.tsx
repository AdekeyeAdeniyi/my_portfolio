"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import AjoByCowris from "../../images/ajo.png";
import SendCowris from "../../images/cowris.png";
import ForbesRoyal from "../../images/forbesroyal.png";
import Micromerce from "../../images/micromerce.png";
import Timart from "../../images/timart.png";
import Scaremoor from "../../images/scaremoor.png";
import Porfolio from "../../images/porfolio.png";

const projects = [
  {
    slug: "scaremoor-pub",
    title: "Scaremoor Book",
    description: "An interactive horror puzzle book and immersive experience where readers must solve clues and uncover secrets to escape the haunted village of Scaremoor.",
    tags: ["Nextjs", "Interactive Fiction", "Horror", "Escape Room"],
    image: Scaremoor,
    live: "https://www.scaremoor.com/",
  },
  {
    slug: "timart-business-solution",
    title: "Timart Business Solution",
    description:
      "Tested and validated web, desktop, and mobile applications to ensure seamless performance, responsiveness, and cross-platform functionality. Collaborated with developers to identify bugs, improve UI/UX, and maintain application quality.",
    tags: ["QA", "Web", "Mobile", "Desktop"],
    image: Timart,
    live: "https://gettimart.com/",
    github: "",
  },
  {
    slug: "forbes-royal-school",
    title: "Forbes Royal School",
    description:
      "Taught grade school students both practical and theoretical aspects of technology, nurturing curiosity and foundational tech skills through hands-on learning and guided instruction.",
    tags: ["Education", "Coaching", "Tech Literacy"],
    image: ForbesRoyal,
    live: "https://forbesroyalschools.com/",
    github: "",
  },
  {
    slug: "client-onboarding-platform",
    title: "Client Onboarding Platform",
    description: "Developed a web app to streamline client onboarding and complex data migrations for tech companies, with self-service and guided workflows.",
    tags: ["SaaS", "Onboarding", "Data Migration", "Web App"],
    image: Micromerce,
    live: "https://www.micromerce.com/en",
    github: "",
  },
  {
    slug: "ajo-by-cowris",
    title: "Ajo by Cowris",
    description: "Converted design mockups into a responsive Vue.js application for a collaborative funding platform, enabling users to securely contribute and manage pooled money with ease.",
    tags: ["Vue.js", "Fintech", "Frontend", "Design to Code"],
    image: AjoByCowris,
    live: "https://ajo.cowris.com/",
    github: "",
  },
  {
    slug: "cowris",
    title: "Cowris",
    description: "Fixed and created Vue.js components for a cross-border money transfer platform, enhancing user experience and ensuring seamless transactions across continents.",
    tags: ["Vue.js", "Fintech", "Frontend"],
    image: SendCowris,
    live: "https://send.cowris.com/",
    github: "",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A clean and responsive portfolio built with Next.js and TailwindCSS to showcase projects, skills, and contact information.",
    tags: ["Next.js", "TailwindCSS", "Portfolio"],
    image: Porfolio,
    live: "https://my-portfolio-ten-smoky-17.vercel.app/",
    github: "https://github.com/AdekeyeAdeniyi/my_portfolio",
  },
];

const PROJECTS_PER_PAGE = 3;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  return (
    <main className="max-w-6xl mx-auto py-14 px-8">
      <motion.h1 className="text-4xl font-serif mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        My Projects
      </motion.h1>

      <motion.p className="text-gray-600 max-w-2xl mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}>
        A closer look at the projects I’ve built, the tools I used, and the problems they solved.
      </motion.p>

      <ul className="space-y-12">
        {paginatedProjects.map((project, i) => (
          <motion.li key={project.slug} className="border-b border-gray-200 pb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}>
            <div className="md:flex md:items-start md:justify-between gap-6">
              {/* Text Section */}
              <div className="md:w-2/3">
                <Link href={`/projects/${project.slug}`} className="block group">
                  <h2 className="text-xl font-medium group-hover:underline">{project.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>

                <div className="mt-4 flex gap-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm underline text-blue-600">
                      🔗 Live View
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline text-blue-600">
                      📂 GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/3 mt-6 md:mt-0">
                <Image src={project.image} alt={project.title} className="rounded-md w-full object-cover max-h-48" width={400} height={400} />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-4">
          <Button size="sm" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1}>
            Previous
          </Button>
          <span className="text-sm self-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button size="sm" onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      )}
    </main>
  );
}
