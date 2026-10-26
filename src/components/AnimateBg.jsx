import React from 'react'

const AnimateBg = ({ children }) => {
    return (
      <div className="relative isolate min-h-screen w-full overflow-hidden bg-slate-950">
        
        {/* 1. Underlying Base Gradient Layer */}
        <div 
          className="
          pointer-events-none 
          absolute inset-0 z-0 
          bg-linear-to-br 
          from-slate-950 
          via-zinc-950 
          to-black
          " 
        />

        {/* 3.Portfolio content conatiner sitting securely on top */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>

        {/* 2. Floating Ambient Layer (Tailwind v4 Blurry Blobs) */}

        <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>

            {/* Large drifting purple glow */}
            <div className="absolute -left-40 top-[10%] h-112 w-md rounded-full bg-purple-600/30 blur-[100px] animate-float-slow" />

            {/* Blue glow that travels across the screen and fades out */}
            <div className="absolute -left-64 top-[20%] h-96 w-[24rem] rounded-full bg-blue-500/30 blur-[110px] animate-blob-travel" />

            {/* Bottom-right indigo glow */}
            <div className="absolute -right-40 bottom-[5%] h-128 w-lg rounded-full bg-indigo-500/25 blur-[120px] animate-float-delayed" />

            {/* Purple glow that pulses in and out */}
            <div className="absolute left-[25%] top-[35%] h-80 w-80 rounded-full bg-violet-500/25 blur-[100px] animate-glow-pulse" />

            {/* Independent cyan glow */}
            <div className="absolute right-[15%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-glow-pulse-delayed" />

        
        </div>
  
        
  
      </div>
    )
  }
  
  export default AnimateBg