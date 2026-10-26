import React from 'react'

const Card = (props) => {

  return (
    <div>
        <div className='min-h-150 w-full rounded-xl backdrop-blur-2xl'>
            {props.children}
        </div>
    </div>
  )
}

export default Card