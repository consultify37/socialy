import React from 'react'
import ConditionCard from './ConditionCard'

const Conditions = () => {
  return (
    <div className='mt-12 w-full flex flex-col items-center'>
      <h1 className='text-primary font-extrabold text-[20px] md:text-[36px]'>Care sunt condițiile de aplicare?</h1>

      <div className='lg:grid lg:grid-cols-2 lg:gap-6 w-full mt-8 lg:mt-12'>
        { [0,1,2,3,4,5].map((item, index) => (
            <ConditionCard 
              index={index}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Conditions