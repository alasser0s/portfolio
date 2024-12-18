import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

// Example FAQ Data
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "I offer full-stack web development, including front-end design, backend services, database management, API integrations, and more. I specialize in technologies like React.ts, Next.ts, Node.js, and Tailwind CSS."
  },
  {
    question: "How does the development process work?",
    answer:
      "My process starts with a consultation to understand your requirements, followed by wireframing and design, development, testing, and deployment. I maintain transparent communication throughout and adapt as needed to deliver the best possible product."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely. After the project launch, I offer maintenance, updates, bug fixes, and additional features as your business grows and evolves."
  },
  {
    question: "How can I get started?",
    answer:
      "Reach out through my contact form or email. Once we discuss your project scope, timeline, and budget, I'll begin crafting a solution tailored to your needs."
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden mb-4 hover:scale-[1.01] hover:shadow-lg transition-transform duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#5454D4]/50"
        aria-expanded={open}
        aria-controls={question}
      >
        <span className="text-white font-semibold text-base md:text-lg">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white"
        >
          <FiChevronDown size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            id={question}
          >
            <div className="px-6 pb-5 pt-0 text-white/80 text-sm md:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A]"></div>
      
      {/* Animated Gradient Glows */}
      <motion.div
        className="absolute w-72 h-72 bg-[#5454D4]/30 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: '10%', left: '5%' }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-[#5454D4]/30 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        style={{ bottom: '10%', right: '5%' }}
      />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        >
          Find answers to some common questions below. If you have more inquiries, feel free to reach out at any time.
        </motion.p>
        
        <div className="relative z-10">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
