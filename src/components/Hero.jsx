import React from 'react'
import { FlipWords } from "./ui/FlipWords";
import { LampContainer } from './ui/LampContainer';
import { motion } from "framer-motion";
import laptop from '../assets/1732991547108.png'
import businessdude from '../assets/1732897313668.png'
import chief from '../assets/1732897290343.png'
const Hero = () => {
    const words = ["better", "cute", "beautiful", "modern"];
    return (
        <div className='relative'
        >

            <div className="absolute top-[500px] right-0  transform -translate-y-1/2 h-[464.5px] w-[1240px]   bg-[#5454D4]  -skew-y-12">
                <div className=' bottom-0 right-0 bg-purple-500 clip-path-polygon overflow-hidden'>
                    <div className='object-fill'>
                        <div className='object-cover'>
                            <img
                                src={businessdude}
                                alt="Person"
                                className="absolute bottom-0 left-[50px] object-cover h-auto max-w-[470px]"
                            />
                        </div>

                        <img
                            src={laptop}
                            width={500}
                            alt="Person"
                            className="absolute bottom-0 right-2 object-cover"
                        />
                        <img
                            src={chief}
                            alt="Person"
                            width={430}
                            height={430}
                            className="absolute bottom-0 left-[380px] object-cover max-w-[430px]"
                        />
                    </div>

                </div>
            </div>

            <div className=' absolute flex flex-col sm:flex-row '>
                <div className="relative bg-custom-gradient w-[467px] h-[1233.79px] rounded-[233.5px] rotate-[-54.37deg] blur-[200px] opacity-[27%] left-24 bottom-[250px]"
                >

                </div>
                <div className='relative sm:right-[335px] sm:top-[155px] w-[582px] h-[252px]'>
                    <h1 className='text-[40px] sm:text-[80px] font-graphik font-bold text-white'>  Build
                        <FlipWords words={words} className={'font-graphik'} /> <br />
                        websites with AL-asser</h1>
                    <p className='font-nunito text-[16px] sm:text-[21px] text-white'>Creative and results-driven software developer with expertise in JavaScript (React, Next.js, Angular), Python (Django), and C#. Experienced in building scalable applications and collaborating with international teams on innovative projects like a gym app and an RTS game. Passionate about solving complex problems and delivering exceptional user experiences.
                    </p>
                    <div className=''>
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className=' relative -bottom-7 w-10'>
                                <path d="M8 7.5C8 6.94772 8.44772 6.5 9 6.5L17 6.5C17.5523 6.5 18 6.94772 18 7.5V15.5C18 16.0523 17.5523 16.5 17 16.5C16.4477 16.5 16 16.0523 16 15.5V9.91421L7.70711 18.2071C7.31658 18.5976 6.68342 18.5976 6.29289 18.2071C5.90237 17.8166 5.90237 17.1834 6.29289 16.7929L14.5858 8.5L9 8.5C8.44772 8.5 8 8.05228 8 7.5Z" fill="white" />
                            </svg>
                        <a href="/services" className='px-8 py-2 rounded-md bg-[#5454D4] text-white font-bold transition duration-200 hover:bg-purple-500 hover:text-black border-2 border-transparent hover:border-teal-500'>
        
                            My Projects
                            

                        </a>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero
