// Hero.jsx
import React, { useEffect, useRef } from 'react';
import { FlipWords } from "./ui/FlipWords";
import { motion, useAnimation, useInView } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Environment, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';

// Example floating objects
const FloatingCube = () => {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5454D4" emissive="#10105A" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const FloatingSphere = () => {
  return (
    <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="#FF6B6B" emissive="#400000" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

// If you have a model file, you can import and display it like this:
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// const FloatingModel = () => {
//   const { scene } = useLoader(GLTFLoader, '/path/to/model.glb');
//   return (
//     <Float speed={1} rotationIntensity={1} floatIntensity={1.5}>
//       <primitive object={scene} scale={[0.5, 0.5, 0.5]} />
//     </Float>
//   );
// };

const Hero = () => {
  const words = ["innovative", "creative", "powerful", "modern"];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const bg = backgroundRef.current;
    if (bg) {
      const moveBackground = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(bg, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', moveBackground);
      return () => window.removeEventListener('mousemove', moveBackground);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F0F1A]" id='home'>
      {/* Animated Background Gradient */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #5454D4 0%, transparent 50%)',
          filter: 'blur(100px)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.5} scale={10} blur={2.5} far={4.5} />
          <group position={[-2, 1, 0]}>
            <FloatingCube />
          </group>
          <group position={[2, -1, 0]}>
            <FloatingSphere />
          </group>
          {/* <group position={[0, 0, -2]}>
            <FloatingModel />
          </group> */}
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-[#5454D4] font-bold text-xl">Welcome to my portfolio</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Creating{' '}
              <FlipWords words={words} className="text-[#5454D4]" />
              <br />
              Digital Solutions
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            I’m a full-stack developer specializing in modern technologies. I build immersive, high-performance web experiences that bring ideas to life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#5454D4] text-white rounded-full font-medium 
                         hover:bg-[#4646B3] transition-colors duration-300 
                         shadow-lg hover:shadow-[#5454D4]/50"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#5454D4] text-white rounded-full 
                         font-medium hover:bg-[#5454D4]/10 transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Floating badges */}
          <div className="mt-16 flex justify-center gap-6 flex-wrap">
            {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-white/5 rounded-full text-sm text-white/80 
                           backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-white/20 hover:bg-white/10 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0], }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-1 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
