import Card from '../Card'
import TechItems from './TechItems'
import { techData } from './TechData'
import { ArrowRight } from 'lucide-react'


const TechCard = () => {

  return (
    <div>
      <Card>

      {/* Tech Stack Header */}
      <div className='flex flex-row justify-between min-h-30  p-15'>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Technologies and tools to build modern, scalable applications.
          </p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tech <span className="text-blue-500">Stack.</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </div>
        <div>
            <div>
              <a className='flex flex-row items-center justify-center border-2 gap-3 h-12 w-60 active:scale-90 rounded-xl text-white p-2 cursor-pointer backdrop-blur-xm' href='#contact'>Always learning more<ArrowRight size={16} strokeWidth={3} /></a>
            </div>
        </div>
      </div>

      {/* Tech Stack Items */}
      <div className='p-15'>
        <div className='flex flex-wrap gap-10'>
          {techData.map((elem, idx) => {
            return <TechItems data={elem} id={idx}/>
          })}
        </div>
      </div>

      </Card>
    </div>
  )
}

export default TechCard