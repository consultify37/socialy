import Image from 'next/image'
import React from 'react'

type Props = {
  images: {
    image: File, 
    link: string
  }[]
  handleDelete: (image: any) => void
}

const SlideHomePageImages = ({ images, handleDelete }: Props) => {
  return (
    <div className='flex flex-col'>
      {
        images.map((image, index) => (
          <div className='relative' key={image.link+index}>
            <Image 
              src={ URL.createObjectURL(image.image)}
              alt='mock-slide'
              width={346}
              height={133}
              className='rounded-xl bg-white h-[186px] w-[484px] mb-4 object-cover'
            />
            <svg width="24" height="24" className='absolute top-4 right-4 cursor-pointer hover:scale-[1.05] transition-all' onClick={() => handleDelete(image)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#8717F8"/>
              <rect x="14.8281" y="7.75732" width="2" height="10" rx="1" transform="rotate(45 14.8281 7.75732)" fill="#8717F8"/>
              <rect x="16.2422" y="14.8284" width="2" height="10" rx="1" transform="rotate(135 16.2422 14.8284)" fill="#8717F8"/>
            </svg>
          </div>
        ))
      }
    </div>
  )
}

export default SlideHomePageImages