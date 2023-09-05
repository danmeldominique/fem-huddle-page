import React from 'react'
import Image from 'next/image';
import clsx from 'clsx';


type ImageTextSectionsProps = {
    image: string,
    imagePlacement: string,
    textHeading: string,
    textBody: string
    imageBorderTop?: string,
    imageBorderBottom?: string,
    bgFill: boolean
}
export default function ImageTextSection({image, bgFill, imagePlacement, textHeading, textBody, imageBorderTop, imageBorderBottom} : ImageTextSectionsProps) {
  return (
    <div className={clsx('flex flex-col', imageBorderBottom && 'my-16')}>
      {
        imageBorderTop && <Image src={imageBorderTop} alt='Image'className='w-full' />
      }
        <div className={clsx(`flex flex-row justify-around  space-x-12`,bgFill ? 'bg-VeryPaleBlue' : '')} >
          <Image src={image} className={clsx(`w-5/12`, imagePlacement == 'left' ? 'order-0' : 'order-1')} alt='Image' />
          <div className='w-1/2 my-auto'>
            <h1 className='font-poppins font-bold my-4 text-3xl'>{textHeading}</h1>
            <p className='font-openSans text-sm w-10/12 text-justify'>{textBody}</p>
          </div>
        </div>
        {
        imageBorderBottom && <Image src={imageBorderBottom} alt='Image' className='w-full' />
      }
    </div>
  )
}
