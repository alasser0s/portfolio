import React from 'react'
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      title: "Development",
      description: "Expert development services to bring your digital vision to life.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-500">
          <path d="M8 3H7C5.89543 3 5 3.89543 5 5V7C5 8.10457 5.89543 9 7 9H8C9.10457 9 10 8.10457 10 7V5C10 3.89543 9.10457 3 8 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 15H7C5.89543 15 5 15.8954 5 17V19C5 20.1046 5.89543 21 7 21H8C9.10457 21 10 20.1046 10 19V17C10 15.8954 9.10457 15 8 15Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 3H16C14.8954 3 14 3.89543 14 5V7C14 8.10457 14.8954 9 16 9H17C18.1046 9 19 8.10457 19 7V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 15H16C14.8954 15 14 15.8954 14 17V19C14 20.1046 14.8954 21 16 21H17C18.1046 21 19 20.1046 19 19V17C19 15.8954 18.1046 15 17 15Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "UI/UX Designer",
      description: "Transform your digital presence with our expert UI/UX design services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Graphik Designer",
      description: "Elevate your brand with our expert graphic design services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
          <path d="M2 7L12 2L22 7V17L12 22L2 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12L12 22" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12L22 7" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12L2 7" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Motion Graphik",
      description: "Bring your brand to life with our expert motion graphics services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
          <path d="M4 8V16M8 4V20M12 10V14M16 4V20M20 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Photography",
      description: "Capture the essence of your brand with our expert photography services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
          <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Videography",
      description: "Tell your brand's story with our expert videography services.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-500">
          <path d="M23 7L16 12L23 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <div className='relative'>
      <div className='flex flex-col items-center justify-center text-center mb-8'>
        <h1 className='text-4xl font-bold text-white mb-4'>Our Services</h1>
        <p className='text-gray-400 max-w-2xl'>
          We offer comprehensive digital solutions including development, design, and creative services to bring your vision to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#163832] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
