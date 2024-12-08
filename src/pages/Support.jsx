import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Support = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'service_uh2dalb', // Replace with your EmailJS service ID
        'template_x2micup', // Replace with your EmailJS template ID
        formRef.current,
        '_b7zgtW_RY1e-WgaQ' // Replace with your EmailJS public key
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#19191B] text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Support & Contact
        </h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Let's Work Together</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm available for freelance projects and collaborations. Whether you have a specific project in mind 
              or just want to discuss possibilities, I'm here to help.
            </p>
          </section>

          {/* Email Form Section */}
          <section className="bg-[#0f172a] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Send Me a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="text-green-500 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-200 
                  ${loading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600'
                  }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Common Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">How can we start working together?</h3>
                <p className="text-gray-300">
                  Send me a message with your project details through the contact form above or direct email. 
                  I'll get back to you quickly to discuss your needs and how I can help.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">What's your availability?</h3>
                <p className="text-gray-300">
                  I take on a limited number of projects to ensure quality and timely delivery. 
                  Contact me to check my current availability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Do you offer ongoing support?</h3>
                <p className="text-gray-300">
                  Yes, I provide support and maintenance services for projects I've developed. 
                  We can discuss specific support needs for your project.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0f172a] p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-white">Direct Email</h3>
                <p className="text-gray-300 mb-4">
                  Prefer to email directly?
                </p>
                <a href="mailto:your.email@example.com" 
                   className="text-blue-400 hover:text-blue-300 transition-colors">
                  your.email@example.com
                </a>
              </div>

              <div className="bg-[#0f172a] p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3 text-white">Social Media</h3>
                <p className="text-gray-300 mb-4">
                  Connect with me on:
                </p>
                <div className="space-y-2">
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">GitHub</a>
                  <a href="#" className="block text-blue-400 hover:text-blue-300 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
