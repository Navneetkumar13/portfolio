import Navbar from './Navbar'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import TechCard from './TechCard'

const Page1 = () => {
  return (
    <div className='min-h-screen'>
        <Navbar />
        {/* <div className='min-h-screen'>
            <Navbar />
        </div> */}
        <div id='home' className='flex w-full flex-col lg:flex-row justify-between  p-6 md:p-10 lg:p-20 gap-5'>
            <div className='p-5 w-full lg:w-1/2 min-w-0 lg:h-160 rounded-2xl'>
                <HeroSection />
            </div>
            <div className='flex min-h-0 min-w-0 h-80 md:h-96 lg:h-160 lg:max-h-[calc(100vh-12rem)] w-full lg:w-1/2 overflow-hidden rounded-2xl'>
                <CardSection />
            </div>
        </div>
        <div className='text-amber-50 p-20'>
            <TechCard />
        </div>
    </div>
  )
}

export default Page1