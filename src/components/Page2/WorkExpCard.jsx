import React from 'react'
import Card from '../Card'
import { experiences } from './WorkExpData'
import WorkExpItem from './WorkExpItem'

const WorkExpCard = () => {
  return (
    <div>
        <Card>
            {/* <h2 className='mb-10 text-4xl font-bold text-white p-10'>
                Work <span className='text-blue-600'>Experience</span>
            </h2> */}
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl pt-10 pl-10 pr-10">
              Work <span className="text-blue-500">Experience.</span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-blue-500 mb-15 ml-10" />

            {/* Timeline container */}
            <div className='relative space-y-8 pl-10 pr-10'>

                {/* Vertical connecting line */}
                <div className='absolute left-1.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-blue-500 via-violet-500 to-blue-500'/>
                {experiences.map((e, idx) => {
                   return  <WorkExpItem data={e} id={idx}/>
                })}
            </div>
        </Card>
    </div>
  )
}

export default WorkExpCard