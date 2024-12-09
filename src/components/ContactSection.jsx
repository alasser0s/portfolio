import React from 'react';
import { motion } from 'framer-motion';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { SocialIcon } from 'react-social-icons'
const ContactSection = () => {
  return (
    <div className="relative mt-80" id='contact'>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-[250px] tran w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-blue-400/10 to-transparent rounded-full rotate-[-54.37deg] blur-[20px] opacity-[27%] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 via-pink-400/10 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-6"
        >
          Let's Build Something<br />Amazing Together
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-neutral-300 mb-12 max-w-2xl"
        >
          Start your next project with us and bring your ideas to life
        </motion.p>
        <Drawer>
            <DrawerTrigger>
            <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl font-semibold px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          Contact Us
        </motion.button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className='flex justify-center'>
                  <h1 className='text-[#626764]'>
                    Contact me on one of these platforms !
                  </h1>
                </DrawerTitle>
              </DrawerHeader>
              <DrawerFooter className='flex justify-end gap-4'>
                <DrawerClose>
                  <SocialIcon url='https://www.instagram.com/sono.rar/'></SocialIcon>
                </DrawerClose>
                <DrawerClose>
                  <SocialIcon url='https://x.com/abdelrhmanstor4'></SocialIcon>
                </DrawerClose>
                <DrawerClose>
                  <SocialIcon url='https://www.facebook.com/profile.php?id=100022872382304'></SocialIcon>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
     

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-8 h-8 border-2 border-blue-500/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-indigo-500/30 rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 border border-purple-500/30 rotate-45"></div>
      </div>
    </div>
  );
};

export default ContactSection;
