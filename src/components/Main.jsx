// Main.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from 'gsap';
import { TypewriterEffectSmooth } from './ui/Typewritter-effect';
import { FlipWords } from "./ui/FlipWords";
import { WobbleCard } from './ui/WopleCards';
import laptop from '../assets/Desktop-1.png';
import vision from '../assets/الرئيسية.png'; // Ensure correct asset path
import code from '../assets/code.png';
import hand from '../assets/1733254806686.png'; // Ensure correct asset path
import myshop from '../assets/myshop.jpeg'
import salesDashboard from '../assets/sales-dashboard.jpeg'
import restaurant from '../assets/restaurant.jpeg'

// Tech Stack & Tools Icons
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiMongodb, 
  SiRedis, 
  SiPython, 
  SiMysql, 
  SiFlutter, 
  SiFirebase, 
  SiReact, 
  SiNextdotjs, 
  SiAngular, 
  SiGit, 
  SiDocker, 
  SiAmazon, 
  SiSharp
} from 'react-icons/si';

import FAQSection from '@/pages/FAQ';
// 3D Hover Project Card
const ProjectCard = ({ title, description, image, tech, link, index }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]), {
    damping: 30,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]), {
    damping: 30,
    stiffness: 300,
  });

  const scale = useSpring(1, {
    damping: 30,
    stiffness: 300,
  });

  const onMouseMove = ({ clientX, clientY }) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const onMouseEnter = () => {
    setHovered(true);
    scale.set(1.05);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
    scale.set(1);
  };

  // Alternate sides for vertical layout
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} items-center w-full mb-20`}>
      {/* Vertical timeline line & dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">
        <div className="w-1 bg-white/20 flex-1" />
        <div className="w-3 h-3 bg-[#5454D4] rounded-full my-3 border-2 border-white/20" />
        <div className="w-1 bg-white/20 flex-1" />
      </div>

      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{ perspective: 1000, transformStyle: "preserve-3d", scale }}
        className={`relative w-full max-w-md rounded-xl cursor-pointer mx-4 overflow-hidden 
          ${isLeft ? 'origin-left' : 'origin-right'}`}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="bg-gradient-to-br from-[#0F0F1A] to-[#1A1A2E] rounded-xl shadow-2xl p-6 border border-[#5454D4]/20"
        >
          <div className="relative h-40 w-full overflow-hidden rounded-lg">
            <motion.img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              animate={{ opacity: hovered ? 1 : 0.3 }}
            />
          </div>

          <motion.h3 
            className="mt-4 text-xl font-bold text-white" 
            style={{ transform: "translateZ(50px)" }}
          >
            {title}
          </motion.h3>

          <motion.p 
            className="mt-2 text-gray-400" 
            style={{ transform: "translateZ(30px)" }}
          >
            {description}
          </motion.p>

          <motion.div 
            className="mt-4 flex flex-wrap gap-2" 
            style={{ transform: "translateZ(40px)" }}
          >
            {tech.map((item, idx) => (
              <motion.span
                key={idx}
                className="rounded-full bg-[#5454D4]/10 px-3 py-1 text-sm text-[#5454D4]"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 flex gap-3"
            style={{ transform: "translateZ(60px)" }}
          >
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#5454D4] text-white hover:bg-[#4545B0] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Main = () => {
  
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const moveBackground = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to("#backgroundGradient", {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveBackground);
    return () => window.removeEventListener('mousemove', moveBackground);
  }, []);

  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack E-commerce solution with real-time inventory management and seamless checkout.",
      image: myshop,
      tech: ["Reactjs", "Framer Motion", "Tailwind CSS", "mongodb" , "stripe" , "nodejs" , "express"],
      link: "https://alasser0s.github.io/my-ecommerce/"
    },
    {
      title: "Blog-E-commerce mix Website",
      description: "a full stack blog-e-commerce mix website that contains creating post , updating post , deleting post , creating products , updating products , deleting produts",
      image: vision,
      tech: ["React.ts", "Node.js", "MongoDB", "Stripe" , "typescript" , "tailwindcss" , "framer-motion" , "saas"],
      link: "https://alasser0s.github.io/vision/"
    },
    {
      title: "Restaurant Website",
      description: "a full stack restaurant website that contains Booking table , Menu Showoff , Orderring , and more",
      image: restaurant,
      tech: ["Emailjs", "typescript", "tailwind", "Next.ts"],
      link: "https://alasser0s.github.io/restaurant-web/"
    },
    {
      title: "Sales Dashboard",
      description: "sales dashboard for a businesses that benfits from the data and analytics.",
      image: salesDashboard,
      tech: ["Python", "Django", "PowerBI", "Reactjs" , "tailwindcss" , "framer-motion"],
      link: "https://alasser0s.github.io/sales-dashboard/"
    }
  ];

  const techStack = [
    { name: "HTML", color: "#E34F26", icon: <SiHtml5 size={28} color="#E34F26" /> },
    { name: "CSS", color: "#1572B6", icon: <SiCss3 size={28} color="#1572B6" /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript size={28} color="#F7DF1E" /> },
    { name: "MongoDB", color: "#47A248", icon: <SiMongodb size={28} color="#47A248" /> },
    { name: "Redis", color: "#DC382D", icon: <SiRedis size={28} color="#DC382D" /> },
    { name: "Python", color: "#3776AB", icon: <SiPython size={28} color="#3776AB" /> },
    { name: "SQL", color: "#4479A1", icon: <SiMysql size={28} color="#4479A1" /> },
    { name: "C#", color: "#239120", icon: <SiSharp size={28} color="#239120" /> },
  ];

  const frameworksTools = [
    { name: "Firebase", color: "#FFCA28", icon: <SiFirebase size={28} color="#FFCA28" /> },
    { name: "React", color: "#61DBFB", icon: <SiReact size={28} color="#61DBFB" /> },
    { name: "Next.js", color: "#000000", icon: <SiNextdotjs size={28} color="#000000" /> },
    { name: "Angular", color: "#DD0031", icon: <SiAngular size={28} color="#DD0031" /> },
    { name: "Git", color: "#F1502F", icon: <SiGit size={28} color="#F1502F" /> },
    { name: "Docker", color: "#2496ED", icon: <SiDocker size={28} color="#2496ED" /> },
    { name: "AWS", color: "#FF9900", icon: <SiAmazon size={28} color="#FF9900" /> },
    { name: "Flutter", color: "#02569B", icon: <SiFlutter size={28} color="#02569B" /> },
  ];

  return (
    <div className="relative bg-[#0F0F1A] text-white">
      {/* Hero/Intro Section */}
      <div className='relative mt-[120px] flex flex-col items-center'>
        <TypewriterEffectSmooth words={[
          { text: "Build" },
          { text: "awesome" },
          { text: "apps" },
          { text: "with" },
          { text: "AL-Asser.", className: "text-blue-500 dark:text-blue-500 font-graphik" },
        ]} />
        <p className='text-[20px] font-bold font-monserrat text-white mt-2'>
          Turning ideas into reality
        </p>
      </div>

      {/* About Section (WobbleCards) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[2000px] mx-auto w-full mb-32 px-4 mt-20" id="about">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-[#5454D4] to-[#3F3FA8] min-h-[500px] lg:min-h-[300px] relative overflow-hidden"
        >
          <div className="max-w-xs relative z-10">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Full-Stack Development Excellence
            </h2>
            <p className="mt-4 text-left text-base text-white/80">
              Specializing in modern web technologies to create scalable, performant applications that deliver exceptional user experiences.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#5454D4]/20 to-transparent mix-blend-overlay" />
          <motion.img
            src={laptop}
            width={500}
            height={500}
            alt="development workspace"
            className="absolute right-32 filter -bottom-5 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
          />
          <motion.img
            src={hand}
            width={500}
            height={500}
            alt="coding illustration"
            className="absolute -right-20 filter -top-7 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold text-white">
              Clean Code, Better Solutions
            </h2>
            <p className="mt-4 text-left text-base text-white/80">
              Writing maintainable, efficient code that scales with your business needs.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#5454D4]/10 to-transparent mix-blend-overlay" />
          <motion.img
            src={code}
            width={500}
            height={500}
            alt="code example"
            className="relative -right-36 filter -bottom-5 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </WobbleCard>
      </div>

      {/* Projects Section */}
      <div className="relative py-20 overflow-hidden" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern web development expertise
          </p>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#5454D4]/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5454D4]/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Tech Stack Section */}
      <div className="relative py-20" id="techstack">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated selection of technologies I use to build efficient, scalable, and visually striking solutions.
          </p>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 px-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 shadow-lg"
            >
              <div className="mb-3">
                {tech.icon}
              </div>
              <p className="text-white/90 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div className="relative py-20" id="frameworks-tools">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Frameworks & Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond the core stack, here are additional tools and frameworks that streamline my workflow, enabling rapid and reliable deployments.
          </p>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 px-4">
          {frameworksTools.map((fw, idx) => (
            <motion.div
              key={fw.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 shadow-lg"
            >
              <div className="mb-3">
                {fw.icon}
              </div>
              <p className="text-white/90 font-medium">{fw.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}


      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Animated Background Gradient */}
      <div
        id="backgroundGradient"
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #5454D4 0%, transparent 50%)',
          filter: 'blur(100px)',
          transform: 'translate3d(0, 0, 0)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Main;
