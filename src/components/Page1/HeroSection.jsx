import React from 'react'
import {CircleSmall} from 'lucide-react'
import Button from './Button'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-start text-white p-4'>
        <h4 className='flex flex-row justify-items-start pt-8 pb-8 text-blue-400 '><CircleSmall size={16} strokeWidth={3} className='m-1'/>WELCOME TO MY PORTFOLIO<CircleSmall size={16} strokeWidth={3} className='m-1'/></h4>
        <h2 className='text-white text-4xl font-bold pb-2'>Hi, I'm</h2>
        <h1 className='text-6xl font-extrabold'>Navneet <span className='text-blue-500'>Kumar</span></h1>
        <h3 className='flex flex-row justify-items-start text-pink-300 text-xl pt-2 font-bold'> Software Developer | Python <CircleSmall size={16} strokeWidth={3} className='m-2'/> FastApi <CircleSmall size={16} strokeWidth={3} className='m-2'/> Django </h3>
        <p className='text-xl pt-4 text-gray-200'>
            Software Developer with 4+ years of experience in designing, developing, and optimizing scalable backend systems and APIs.
            Skilled in Python, Java, Go, Django, FastAPI, and microservices architecture with strong expertise in cloud technologies (AWS S3, EC2,
            Lambda, SQS), databases (PostgreSQL, MongoDB, MySQL), and containerization (Docker). Proven track record of improving system
            performance, reducing operational overhead, and delivering high-quality software in Agile environments.
        </p>
        <div className='flex flex-row justify-start gap-4 pt-5'>
            <Button name='Download Resume' icon='Download' className='bg-blue-600'/>
            <div>
              <a className='flex flex-row items-center justify-center border-2 gap-3 h-12 w-60 active:scale-90 rounded-xl text-white p-2 cursor-pointer backdrop-blur-xm' href='#contact'>Contact Me<ArrowRight size={16} strokeWidth={3} /></a>
            </div>
        </div>
        <h2 className='flex flex-row justify-start gap-4 pt-5'><SocialIcon url='https://github.com/NavneetKumar13'bgColor='transparent'/><SocialIcon url="https://linkedin.com/in/navneet-kumar-a1a6bba0" bgColor='transparent'/></h2>
    </div>
  )
}

export default HeroSection