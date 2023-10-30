import Image from 'next/image'
import React from 'react'

const Logos = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20, 21, 22, 23, 24, 25, 26, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18, 19, 20, 21, 22, 23, 24, 25, 26].map((logo, index) => (
          <Image
            src={`/images/trust logos/${logo}.png`}
            key={index}
            width={158}
            height={158}
            className="w-20 md:w-23 lg:w-26 xl:w-29 2xl:w-32 h-auto object-contain"
            placeholder="blur"
            alt="Feedback 1"
            blurDataURL={`/images/trust logos/${logo}.png`}
          />
        ))}
      </div>
    </div>
  )
}

export default Logos