"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Principle } from "@/data/principles";
import { getVisualization } from "./Visualizations";

interface PrincipleCardProps {
  principle: Principle;
  index: number;
}

export default function PrincipleCard({ principle, index }: PrincipleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Visualization = getVisualization(principle.id);

  return (
    <Link href={`/principle/${principle.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group cursor-pointer"
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-[280px] flex flex-col"
          whileHover={{
            scale: 1.02,
            y: -8,
            borderColor: "rgba(0, 113, 227, 0.5)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
              {principle.category}
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-blue-500"
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? 1 : 0.5,
              }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            />
          </div>

          {/* Visualization */}
          <div className="flex-1 flex items-center justify-center mb-4 relative">
            <motion.div
              className="w-full h-[100px]"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Visualization isHovered={isHovered} />
            </motion.div>
          </div>

          {/* Title and description */}
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
              {principle.name}
            </h3>
            <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
              {principle.shortDesc}
            </p>
          </div>

          {/* Hover arrow indicator */}
          <motion.div
            className="absolute bottom-6 right-6 opacity-0"
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
