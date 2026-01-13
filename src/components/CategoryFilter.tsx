"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/principles";

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selected === null
            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
            : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
        }`}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selected === category
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}
