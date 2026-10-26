import { Briefcase } from 'lucide-react'

const CardSection = () => {
  return (
    <div className='relative h-full w-full min-h-0 min-w-0 overflow-hidden'>
      <img
        className='block h-full w-auto object-contain object-center'
        src='profile.png'
        alt='Navneet Kumar'
      />
      <div className='flex lg:flex-row justify-center gap-2 absolute sm:right-10 sm:top-10 rounded-xl bg-white/20 px-3 py-2 min-h-30 min-w-50 font-semibold text-white shadow-lg backdrop-blur-md'>
        <div className='pt-8 pr-3 items-center'>
          <Briefcase size={32} strokeWidth={1.25} color='#0eb0f0'/>
        </div>
        <div className='flex flex-col justify-start p-2'>
          <h1 className='text-3xl font-semibold'>4+</h1>
          <h2 className='text-l'>Years</h2>
          <h2 className='text-l'> Experience</h2>
        </div>
      </div>
    </div>
  )
}

export default CardSection
