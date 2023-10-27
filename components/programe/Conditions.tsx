import React from 'react'
import ConditionCard from './ConditionCard'
import { Condition } from '../../types'

type Props = {
  conditions: Condition[]
}

const Conditions = ({ conditions }: Props) => {
  return (
    <div className='mt-12 w-full flex flex-col items-center'>
      <h1 className='text-primary font-extrabold text-[20px] md:text-[36px]'>Care sunt condițiile de aplicare?</h1>

      <div className='lg:grid lg:grid-cols-2 lg:gap-6 w-full mt-8 lg:mt-12'>
        { conditions.map((item, index) => (
            <ConditionCard 
              index={index}
              condition={item}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Conditions