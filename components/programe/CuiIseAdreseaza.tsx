import Image from 'next/image'
import React from 'react'

const CuiIseAdreseaza = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-12 md:mt-24 w-full'>
      <Image 
        alt='Cui i se adreseaza'
        src='/images/PaginaProgram/Cui-adreseazaz.png'
        width={387}
        height={387}
        className='w-full h-full md:w-[25vw] max-w-[300px] max-h-[300px] md:h-[25vw] md:mr-10'
      />
      <div className='flex flex-col items-center'>
        <p className='text-primary text-[18px] md:text-[32px] font-bold'>Programul ideal pentru antreprenorii în domeniul agriculturii și al apiculturii</p>
        <p className='text-[#00103C] text-[14px] md:text-[16px] text-justify mt-4 md:mt-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus a auctor sapien, sed viverra erat. Cras aliquam auctor urna. Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla facilisis est lorem, tincidunt elementum felis bibendum eu.
        </p>
      </div>
    </div>
  )
}

export default CuiIseAdreseaza