import React from 'react'
import Header from '../components/Header'
import Hero from '@/components/Hero'
import Main from '@/components/Main'

const HomePage = () => {
  return (
    <>
    <div className='flex flex-col '>
      <Hero/>
      <Main className=" mt-8"/>
    </div>
   
    </>
  )
}

export default HomePage
