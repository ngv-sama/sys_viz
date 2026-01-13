"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, Key, HelpCircle, Building2 } from "lucide-react";
import { principles } from "@/data/principles";
import { getVisualization } from "@/components/Visualizations";
import Navbar from "@/components/Navbar";

export default function PrinciplePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isHovered, setIsHovered] = useState(true);

  const principle = principles.find((p) => p.id === id);

  if (!principle) {
    notFound();
  }

  const Visualization = getVisualization(principle.id);
  const relatedPrinciples = principles
    .filter((p) => p.category === principle.category && p.id !== principle.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 grid-pattern opacity-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all principles</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              {principle.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {principle.name}
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              {principle.shortDesc}
            </p>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
            >
              <motion.div
                className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 h-[400px] flex items-center justify-center overflow-hidden"
                whileHover={{ borderColor: "rgba(0, 113, 227, 0.5)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
                  animate={{ opacity: isHovered ? 1 : 0.5 }}
                />
                <div className="w-full h-full max-w-md max-h-80">
                  <Visualization isHovered={isHovered} />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs text-white/30">Hover to interact</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                {principle.description}
              </p>
            </motion.div>
          </div>

          {/* Use cases, pros, cons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Use Cases</h3>
              </div>
              <ul className="space-y-3">
                {principle.useCases.map((useCase, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {useCase}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Pros */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Advantages</h3>
              </div>
              <ul className="space-y-3">
                {principle.pros.map((pro, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {pro}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Cons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Trade-offs</h3>
              </div>
              <ul className="space-y-3">
                {principle.cons.map((con, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    {con}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Key Points */}
          {principle.keyPoints && principle.keyPoints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Key className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Key Points</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {principle.keyPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="flex items-start gap-3 text-white/70 bg-white/[0.02] rounded-lg p-3"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* FAQs */}
          {principle.faqs && principle.faqs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                {principle.faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75 + i * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <h4 className="text-lg font-medium text-white mb-3">{faq.question}</h4>
                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Real World Examples */}
          {principle.realWorld && principle.realWorld.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Real World Examples</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {principle.realWorld.map((example, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                    >
                      {example}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Related principles */}
          {relatedPrinciples.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Related Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedPrinciples.map((related) => (
                  <Link key={related.id} href={`/principle/${related.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all"
                    >
                      <h3 className="text-lg font-medium text-white mb-2">{related.name}</h3>
                      <p className="text-sm text-white/50 line-clamp-2">{related.shortDesc}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
