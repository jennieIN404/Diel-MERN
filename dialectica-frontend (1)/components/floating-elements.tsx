"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-lg"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/8 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-primary/6 rounded-lg"
        animate={{
          y: [0, 25, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
