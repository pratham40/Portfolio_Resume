"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-3 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <p className="text-gray-700 font-medium">
          &copy; {new Date().getFullYear()} Pratham. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/pratham40/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/pratham-2a76bb255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:pratham25736@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
