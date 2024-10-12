"use client";

import { motion } from "framer-motion";
export default function Description({ page, description }) {
  return (
    <motion.section className="w-full" initial={{ y: 30 }} animate={{ y: 0 }}>
      <h1 className="mb-10 text-4xl font-semibold">{page}</h1>
      <p className={`${page === "Blog" ? "w-1/2" : "w-2/3"} font-normal`}>
        {description}
      </p>
    </motion.section>
  );
}