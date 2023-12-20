import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import PartenerCard from './PartenerCard';

const getWindowSize = () => {
    const {innerWidth, innerHeight} = window // {innerWidth: 12, innerHeight: 23}
    return {innerWidth, innerHeight}
}

const listaFirme = [
  {
    name: "DAMIAN CONCEPT SOLUTION S.R.L",
    cui: "RO44352947",
    numberOfStars: 4.62,
    nr: "J15/850/2021 ",
    experienceRating: 175,
    humanResourcesRating: 175,
    transparencyRating: 165,
    feedBackRating: 180
  },
]

const Partners = () => {
  const [windowSize, setWindowSize] = useState({innerWidth: 0, innerHeight: 0})

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize())
      }
      
      handleWindowResize()

      window.addEventListener('resize', handleWindowResize)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }, [])

  return (
    <div className='pt-16 md:pt-32 -mx-4 md:px-[80px] xl:px-[140px] 2xl:px-[276px]'>
      <h1 className='text-secondary font-bold pb-8 md:pb-12 text-2xl xl:text-4xl text-center'>Iată partenerii noștri:</h1>
      <Carousel 
        itemsToShow={1}
        isRTL={false}
        pagination={false}
        disableArrowsOnEnd={true}
        showArrows={false}
      >
        { listaFirme.map((item) => (
            <PartenerCard 
              feedBackRating={item.feedBackRating}
              humanResourcesRating={item.humanResourcesRating}
              experienceRating={item.experienceRating}
              numberOfStars={item.numberOfStars}
              transparencyRating={item.transparencyRating}
              cui={item.cui}
              nr={item.nr}
              name={item.name}
              key={item}
            />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Partners