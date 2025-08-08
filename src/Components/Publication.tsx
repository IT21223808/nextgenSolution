'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Publication() {
  return (
    <section
      id="publicationdetails"
      className="relative w-full py-20 px-6 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/publication-bg.jpg')", // Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 backdrop-blur-sm z-0" />

      {/* Animated Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.h2 variants={childVariants} className="text-4xl sm:text-5xl font-extrabold mb-6">
          ICAC 2025
        </motion.h2>

        <motion.div variants={childVariants}>
          <Award className="w-12 h-12 mx-auto mb-4" />
        </motion.div>

        <motion.p variants={childVariants} className="text-xl sm:text-2xl font-medium mb-10">
          For the Paper titled <span className="font-bold">MACHINE LEARNING BASED AUTOMATED CONSTRUCTION PLANNING SYSTEM FOR SRI LANKA</span>
        </motion.p>

        <motion.p variants={childVariants} className="text-lg sm:text-xl text-white">
          Presented in The Session <span className="italic">Machine Learning (Session 26)</span><br />
          at <span className="font-semibold">ICAC 2025 </span> on <span className="underline">12th - 14th October 2025</span><br />
          SLIIT University, Malabe, SriLanka
        </motion.p>
      </motion.div>
    </section>
  );
}
