import React from 'react'

const TechItems = (props) => {
  return (
        <div id={props.data.id} className='flex flex-col sm:flex-wrap justify-center items-center rounded-xl w-50 p-3 sm:p-5 bg-white/10 transition-all duration-300 hover:border-violet-400/40 hover:bg-slate-900/70'>
            <div className='bg-cover h-25 w-30'><img loading='lazy' src={props.data.url}></img></div>
            <h2 className='pt-8'>{props.data.name}</h2>
        </div>
  )
}

export default TechItems