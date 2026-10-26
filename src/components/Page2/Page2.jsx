import React from 'react'
import WorkExpCard from './WorkExpCard'
import ContactCard from './ContactCard'
import AboutMe from './AboutMe'

const Page2 = () => {
  return (
    <div className='h-full w-full min-w-0'>
        <div id='experience' className='text-amber-50 p-2 sm:p-20'>
            <WorkExpCard />
        </div>
        <div className='flex flex-col w-full min-w-0 lg:flex-row justify-between gap-8 sm:gap-10 text-amber-50 sm:p-20'>
            <div id='about' className='h-full w-full min-w-0 lg:w-1/2'>
              <AboutMe />
            </div>
            <div id='contact' className='h-full w-full min-w-0 lg:w-1/2'>
              <ContactCard />
            </div>
        </div>
    </div>
  )
}

export default Page2