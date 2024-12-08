import React from 'react'
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
import { Button } from './ui/button'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-[#5454D4]' : 'text-gray-300';
  };

  return (
    <>
      <nav className='flex mt-14'>
        <div className='logo flex ml-32'>
          <Link to="/" className='text-[28px] font-bold font-monserrat text-white'>AL-Asser</Link>        </div>
        <div className='container flex mx-auto justify-center gap-20'>
          <Link to="/" className={`text-white hover:text-[#5454D4] opacity-[70%] font-nunito ${isActive('/')}`}>Homepage</Link>
          <Link to="/services" className={`text-white  opacity-[70%] hover:text-[#5454D4] font-nunito ${isActive('/services')}`}>Services</Link>
          <Link to="/faq" className={`text-white  opacity-[70%] hover:text-[#5454D4] font-nunito ${isActive('/faq')}`}>FAQ</Link>
          <Link to="/about" className={`text-white opacity-[70%] hover:text-[#5454D4] font-nunito ${isActive('/about')}`}>AboutPage</Link>
        </div>
        <div className='flex justify-end  mr-32 '>
          <Drawer>
            <DrawerTrigger>
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-[#5454D4] text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        open
      </button>
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
        </div>
      </nav>
    </>
  )
}

export default Header
