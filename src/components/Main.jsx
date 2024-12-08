import React from 'react'
import { WobbleCard } from './ui/WopleCards'
import laptop from '../assets/Desktop-1.png'
import vision from '../assets/الرئيسية.png'
import code from '../assets/code.png'
import hand from '../assets/1733254806686.png'
import { TypewriterEffectSmooth } from './ui/Typewritter-effect'
import { AnimatedTestimonials } from './ui/animated-test'

const Main = () => {
  const testimonials = [
    {
      quote:
        "AL-asser's expertise in React and modern web technologies helped us create a stunning, performant web application that exceeded our expectations.",
      name: "Ahmed Hassan",
      designation: "Startup Founder",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The attention to detail and clean code structure made our project maintenance a breeze. Highly recommend working with AL-asser.",
      name: "Sara Mohamed",
      designation: "Tech Lead",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Working with AL-asser was a great experience. Their problem-solving skills and technical knowledge helped us deliver our project on time.",
      name: "Omar Khaled",
      designation: "Project Manager",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The UI/UX design and implementation were top-notch. AL-asser brought our vision to life with modern, responsive design.",
      name: "Nour Ahmed",
      designation: "Design Director",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Excellent communication and project management skills. AL-asser was always available to discuss ideas and implement changes quickly.",
      name: "Layla Ibrahim",
      designation: "Product Owner",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "AL-Asser.",
      className: "text-blue-500 dark:text-blue-500 font-graphik",
    },
  ];

  return (
    <div className='relative mt-[1200px]'>
      <div className='flex justify-center -top-20 relative'>
        <TypewriterEffectSmooth words={words} />
        <p className='absolute -bottom-2 text-[20px] font-bold font-monserrat text-white'>
          Turning ideas into reality
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[2000px] mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Full-Stack Development Excellence
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Specializing in modern web technologies to create scalable, 
              performant applications that deliver exceptional user experiences.
            </p>
          </div>
          <img
            src={laptop}
            width={500}
            height={500}
            alt="development workspace"
            className="absolute right-32 filter -bottom-5 object-contain rounded-2xl"
          />
          <img
            src={hand}
            width={500}
            height={500}
            alt="coding illustration"
            className="absolute -right-20 filter -top-7 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Clean Code, Better Solutions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Writing maintainable, efficient code that scales with your business needs.
          </p>
          <img
            src={code}
            width={500}
            height={500}
            alt="code example"
            className=" relative -right-36 filter -bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Let's Create Something Amazing Together
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              From concept to deployment, I'm here to help bring your vision to life
              with cutting-edge web technologies and best practices.
            </p>
          </div>
          <img
            src={vision}
            width={500}
            height={500}
            alt="project vision"
            className="absolute right-32 filter -bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>

      <div className='relative mt-32 pb-20 max-w-7xl mx-auto px-4'>
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-transparent rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-500/30 via-green-400/20 to-transparent rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-purple-600/30 via-indigo-400/20 to-transparent rounded-full blur-3xl opacity-30 mix-blend-multiply pointer-events-none"></div>

        <div className='absolute top-8 left-8'>
          <svg
            className='w-10 h-10 text-white opacity-80 hover:opacity-100 transition-opacity duration-300'
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>

        <div className='absolute bottom-8 left-16'>
          <svg
            className='w-8 h-8 text-white opacity-80 hover:scale-110 transition-transform duration-300'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>

        <div className='absolute top-12 right-16'>
          <svg
            className='w-6 h-6 text-white opacity-80 hover:rotate-45 transition-transform duration-300'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <h2 className="text-5xl font-bold text-white text-center relative z-10">
          The Service We Provide For You
        </h2>
        <p className='mt-2 text-center text-neutral-300'>
          We deliver high-quality services tailored to your needs.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16'>
          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-blue-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>Frontend (React)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              Build dynamic, interactive UIs that scale.
            </p>
          </div>

          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-red-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M3 5.25h18M3 12h18M3 18.75h18" />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>Backend (Node.js)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              Robust server-side logic and APIs at scale.
            </p>
          </div>

          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-green-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M4.5 6c0-2 3.357-3.75 7.5-3.75s7.5 1.75 7.5 3.75-3.357 3.75-7.5 3.75S4.5 8 4.5 6zm0 0v7.5c0 2 3.357 3.75 7.5 3.75s7.5-1.75 7.5-3.75V6"/>
                <path strokeWidth="1.5" d="M4.5 13.5v4.5c0 2 3.357 3.75 7.5 3.75s7.5-1.75 7.5-3.75v-4.5"/>
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>SQL (Databases)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              Store, query, and manage data efficiently.
            </p>
          </div>

          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-yellow-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M3 16.5h17.25M3 16.5l3-7.5h11.25l3 7.5M9 9V6H6v3M12 9V6h3v3"/>
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>DevOps (Docker)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              Containerize and deploy apps anywhere.
            </p>
          </div>

          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-indigo-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M9 4.5h6M12 1.5v3M12 19.5v3M4.5 9v6M19.5 9v6M8.25 8.25h7.5v7.5h-7.5z"/>
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>C# (Performance)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              High-performance applications on .NET.
            </p>
          </div>

          <div className='flex flex-col items-center text-center p-6 bg-[#0f172a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'>
            <div className='bg-[#1e293b] p-4 rounded-full mb-4'>
              <svg className='w-10 h-10 text-pink-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M5.25 14.25a4.5 4.5 0 018.598-1.836A3.75 3.75 0 1117.25 15h-12"/>
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>Cloud (AWS)</h3>
            <p className='text-sm text-gray-300 mt-2'>
              Scalable infrastructure and global deployments.
            </p>
          </div>
        </div>
      </div>

      <div className='flex relative -bottom-[100px] flex-col items-center'>
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        
      </div>
    </div>
  )
}

export default Main
