import React from 'react'
import { Mail, Phone } from 'lucide-react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

const ContactItems = () => {
  return (
    <div className='flex flex-col justify-start'>
        {/* Email */}
        <div className='flex flex-row gap-5 h-30 w-full '>
            <div className='flex justify-center items-center w-20 rounded-2xl '>
                <div className='flex justify-center items-center bg-white/10 backdrop-blur-md h-20 w-20 rounded-2xl'>
                    <Mail size={52} strokeWidth={1.25} />
                </div>   
            </div>
            <div className='h-full w-full pt-7'>
                <h2 className='font-bold text-3xl'>Email</h2>
                <h3 className='text-xl'>navneet1465@gmail.com</h3>
            </div>
        </div>

        {/* GitHub */}
        <div className='flex flex-row gap-5 h-30 w-full '>
            <div className='flex justify-center items-center w-20 rounded-2xl '>
                <div className='flex items-center bg-white/10 backdrop-blur-md h-20 w-20 rounded-2xl'>
                <SocialIcon url='https://github.com'bgColor='transparent'  style={{ height: 100, width: 100 }}/>
                </div>   
            </div>
            <div className='h-full w-full pt-7'>
                <h2 className='font-bold text-3xl'>GitHub</h2>
                <h3 className='text-xl'>github.com/Navneetkumar13</h3>
            </div>
        </div>

        {/* Linkdin */}
        <div className='flex flex-row gap-5 h-30 w-full '>
            <div className='flex justify-center items-center w-20 rounded-2xl '>
                <div className='flex items-center bg-white/10 backdrop-blur-md h-20 w-20 rounded-2xl'>
                <SocialIcon url="https://linkedin.com" bgColor='transparent'  style={{ height: 100, width: 100 }}/>
                </div>   
            </div>
            <div className='h-full w-full pt-7'>
                <h2 className='font-bold text-3xl'>Linkdin</h2>
                <h3 className='text-xl'>linkedin.com/in/navneet-kumar-a1a6bba0</h3>
            </div>
        </div>

        {/* Phone */}
        <div className='flex flex-row gap-5 h-30 w-full '>
            <div className='flex justify-center items-center w-20 rounded-2xl '>
                <div className='flex justify-center items-center bg-white/10 backdrop-blur-md h-20 w-20 rounded-2xl'>
                    <Phone size={42} strokeWidth={1.25} />
                </div>   
            </div>
            <div className='h-full w-full pt-7'>
                <h2 className='font-bold text-3xl'>Phone</h2>
                <h3 className='text-xl'>+91-9695999490</h3>
            </div>
        </div>
    </div>
  )
}

export default ContactItems