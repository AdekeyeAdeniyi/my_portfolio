"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    slug: "team-collaboration-dashboard",
    title: "Team Collaboration Dashboard",
    description: "A real-time dashboard to enhance team productivity with task management and chat features.",
    tags: ["React", "Node.js", "MongoDB"],
    live: "https://teamdash.vercel.app",
    github: "https://github.com/adekeyeadeniyi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  {
    slug: "ai-resume-parser",
    title: "AI Resume Parser",
    description: "Extracts and categorizes key resume data using natural language processing.",
    tags: ["Python", "NLP", "FastAPI"],
    live: "https://resumeparser.dev",
    github: "https://github.com/adekeyeadeniyi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  {
    slug: "portfolio-site",
    title: "Personal Portfolio Website",
    description: "A minimal and elegant portfolio to showcase projects, blog posts, and contact info.",
    tags: ["Next.js", "TailwindCSS"],
    github: "https://github.com/adekeyeadeniyi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  {
    slug: "portfolio-sites",
    title: "Personal Portfolio Website",
    description: "A minimal and elegant portfolio to showcase projects, blog posts, and contact info.",
    tags: ["Next.js", "TailwindCSS"],
    github: "https://github.com/adekeyeadeniyi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  {
    slug: "portfolio-sited",
    title: "Personal Portfolio Website",
    description: "A minimal and elegant portfolio to showcase projects, blog posts, and contact info.",
    tags: ["Next.js", "TailwindCSS"],
    github: "https://github.com/adekeyeadeniyi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
  },
  // Add more projects as needed
];

const PROJECTS_PER_PAGE = 2;

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
                      🔗 Live Demo
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
                <img src={project.image} alt={project.title} className="rounded-md w-full object-cover max-h-48" />
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
