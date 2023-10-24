import React from 'react'

type Props = {
  index: number
}

const ConditionCard = ({ index }: Props) => {
  return (
    <div className='flex flex-row p-6 mt-4 lg:mt-1 bg-secondary rounded-2xl w-full'>
      <div className='bg-primary w-10 min-w-[40px] h-10 md:w-12 md:min-w-[48px] md:h-12 flex items-center justify-center rounded-[10px] mt-1 mr-4'>
        <p className='text-onPrimary text-[22px] md:text-[28px] font-bold'>{index+1}</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-onSecondary font-bold text-16 md:text-[24px]'>Suprafață a terenului de minim 2ha</p>
        <p className='text-onSecondary text-[14px] md:text-[16px] mt-6'>Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce sed dolor est.</p>
      </div>
    </div>
  )
}

export default ConditionCard