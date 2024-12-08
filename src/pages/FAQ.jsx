import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, creating responsive and modern web applications. My services include front-end development with React, back-end development with Node.js, and database design."
  },
  {
    question: "What is your development process?",
    answer: "My development process involves understanding client requirements, creating wireframes, developing prototypes, implementing features, thorough testing, and continuous deployment. I maintain clear communication throughout the project lifecycle."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline after understanding your specific needs."
  },
  {
    question: "Do you offer maintenance and support?",
    answer: "Yes, I provide ongoing maintenance and support services. This includes bug fixes, feature updates, security patches, and performance optimizations to ensure your application runs smoothly."
  },
  {
    question: "What technologies do you work with?",
    answer: "I work with modern web technologies including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and various CSS frameworks. I'm always learning and adapting to new technologies to deliver the best solutions."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className={`ml-6 flex-shrink-0 ${isOpen ? 'rotate-180' : ''} transition-transform duration-200 text-white`}>
          ↓
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && (
          <p className="mt-4 text-gray-300">
            {answer}
          </p>
        )}
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="py-24 bg-[#19191B]" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300">
              Still have questions?{' '}
              <a
                href="#contact"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Contact me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
