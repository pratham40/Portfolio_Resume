"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 text-center mx-3 my-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Pratham's profile photo"
          className="rounded-full w-28 h-40 mt-20"
          priority
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-end gap-2 text-3xl font-bold text-gray-800"
      >
        Hello I'm Pratham
        <Image src={assets.hand_icon} alt="Waving hand icon" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl font-bold text-gray-800"
      >
        FullStack Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-gray-500 text-lg sm:text-2xl font-normal mt-2 max-w-3xl"
      >
        I am a FullStack Developer with a passion for creating dynamic and
        responsive web applications. I have experience in both front-end and
        back-end development, and I am always eager to learn new technologies
        and improve my skills.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me <MdArrowOutward size={20} />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="Pratham_Resume.pdf"
          download
          className="px-10 py-3 border border-white rounded-full bg-gray-500 text-white flex items-center gap-2"
        >
          My Resume <IoMdCloudDownload size={20} />
        </motion.a>
      </div>
    </div>
  );
}
