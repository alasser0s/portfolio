import React from 'react';
import { StickyScroll } from '@/components/ui/stickyscroll';
import desktop1 from '@/assets/Desktop-1.png';
import desktop2 from '@/assets/Desktop-2.png';
import ui1 from '@/assets/1732897290343.png';
import ui2 from '@/assets/1732897313668.png';
import mobile1 from '@/assets/1732897362829.png';
import mobile2 from '@/assets/1732991547108.png';
import { Compare } from '@/components/ui/Compare';

const content = [
  {
    title: "Full Stack Development",
    description:
      "Expert in building end-to-end web applications using modern technologies. From responsive frontends with React to scalable backends with Node.js and Python, I create seamless digital experiences that drive business growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center relative border border-neutral-700">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that users love. I combine aesthetic design with practical functionality, ensuring your web applications are not just visually stunning but also highly usable and accessible.",
    content: (
      <div className="h-full w-full flex items-center justify-center relative border border-neutral-700">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile applications that deliver exceptional user experiences. Using React Native and other modern frameworks to create fast, responsive, and feature-rich mobile solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center relative border border-neutral-700">
        <Compare
          firstImage={desktop1}
          secondImage={desktop2}
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "Implementing robust cloud solutions and DevOps practices for scalable, reliable applications. Expertise in AWS, Docker, and CI/CD pipelines to ensure your applications are always available and performing optimally.",
    content: (
      <div className="h-full w-full flex items-center justify-center relative border border-neutral-700">
        <img
          src={mobile1}
          alt="cloud services"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen relative mt-80">
      <StickyScroll content={content} />
    </div>
  );
};

export default ServicesPage;
