import React from 'react'

const WorkExpItem = (props) => {
    console.log("here")
  return (
    <div key={props.data.company} className='relative'>

        {/* Timeline Dot */}
        <div className='absolute -left-10 top-6 z-10 h-4 w-4 rounded-full border-[3px] border-violet-400 bg-slate-950 shadow-[0_0_12px_rgba(139,92,246,0.9)]' />

        <div className='rounded-xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-2xl transition-all duration-300 hover:border-violet-400/40 hover:bg-slate-900/70'>
            <p className='text-xl pl-2 text-blue-400'>
                {props.data.duration}
            </p>

            <h3 className='text-3xl font-bold pl-2'>
                {props.data.company}
            </h3>

            <p className='text-xl font-bold pl-2 text-blue-500'>
                {props.data.role}
            </p>

            <ul className="list-disc space-y-2 pl-8 pt-2 text-xl text-slate-300">
                {props.data.description.map((item, i) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default WorkExpItem