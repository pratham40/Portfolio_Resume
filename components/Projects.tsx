"use client";
import { workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      className="w-full px-[12%] scroll-mt-20 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="mb-2 text-4xl font-Ovo text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Here are some of the projects I have worked on.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.bgImage}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-40 object-cover rounded-lg mb-4"
              width={500}
              height={200}
              priority={index < 2}
            />

            <h2 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-3 mt-5">
              {project.sourceCodeLink && (
                <a
                  href={project.sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  aria-label={`Source code of ${project.title}`}
                >
                  Source Code
                </a>
              )}
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
                  aria-label={`Live demo of ${project.title}`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
