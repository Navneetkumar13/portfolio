import React, { lazy, Suspense} from 'react'
import Glowcard from './components/Glowcard'
import Page1 from './components/Page1/Page1'
// import Page2 from './components/Page2/Page2'
import AnimateBg from './components/AnimateBg'

const Page2 = lazy(() => import('./components/Page2/Page2'))

const App = () => {
  return (
    
      <AnimateBg>
      {/* <div className='h-full w-full bg-cover bg-[url(./static/bg.png)]'> */}
      <Glowcard className='h-full'>
      <div className='h-full'>
        <Page1 />

        <Suspense fallback={<div className='min-h-40' />}>
          <Page2 />
        </Suspense>
        
      </div>
      </Glowcard>
      {/* </div> */}
      </AnimateBg>
  )
}

export default App