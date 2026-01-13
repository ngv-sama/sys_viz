"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between glass rounded-2xl px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">SystemViz</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Explore
            </Link>
            <a
              href="#categories"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Categories
            </a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
