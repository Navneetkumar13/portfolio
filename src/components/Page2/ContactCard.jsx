import React from 'react'
import Card from '../Card'
import ContactItems from './ContactItems'

const ContactCard = () => {
  return (
    <div>
        <Card>
            <div className='px-6 py-10 md:px-10 lg:px-12 text-white h-full'>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Have a project in mind or just wanna say hi? Feel free to reach out!
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Contact <span className="text-blue-500">Me.</span>
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />

            </div>
            <div className='h-full w-full md:px-10'>
              <ContactItems />
            </div>
        </Card>
    </div>
  )
}

export default ContactCard