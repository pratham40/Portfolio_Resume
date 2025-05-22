"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "45cf3b2e-7709-4f7d-a5fa-44e5925f8dd2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
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
        Connect With Me
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        If you have any questions, suggestions, or comments, feel free to reach
        out to me. I would love to hear from you!
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-2 w-full"
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-2 w-full"
            name="email"
          />
        </div>
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          className="border border-gray-300 rounded-md p-2 w-full mt-4"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="hover:cursor-pointer bg-black text-white py-2 px-4 rounded-full mt-4"
        >
          Send Message
        </motion.button>
        <motion.p
          className="mt-4 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
}
