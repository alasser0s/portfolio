"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    (<div
      className="max-w-full md:max-w-[1500px] mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <div className="relative h-[500px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={800}
                    height={800}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-xl" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-8">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="text-3xl font-bold text-white mb-8">
              {testimonials[active].quote}
            </h3>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 items-center">
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={50}
                  height={50}
                  className="rounded-full h-12 w-12 object-cover" />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[active].name}
                  </h4>
                  <p className="text-base text-gray-400">
                    {testimonials[active].designation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex gap-2 mt-8">
            <button
              onClick={handlePrev}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 hover:scale-110 transition-all duration-200"
              aria-label="Previous testimonial">
              <IconArrowLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full p-3 hover:scale-110 transition-all duration-200"
              aria-label="Next testimonial">
              <IconArrowRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>)
  );
};
