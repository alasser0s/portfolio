import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="bg-darkteal rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-md bg-deepgreen border border-forestgreen focus:outline-none focus:ring-2 focus:ring-sagegreen"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-md bg-deepgreen border border-forestgreen focus:outline-none focus:ring-2 focus:ring-sagegreen"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-deepgreen border border-forestgreen focus:outline-none focus:ring-2 focus:ring-sagegreen"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sagegreen hover:bg-forestgreen text-darkteal font-semibold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
