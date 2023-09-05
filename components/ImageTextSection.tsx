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
        <div className={clsx(`flex flex-col sm:flex-row justify-around space-x-12 py-12`,bgFill ? 'bg-VeryPaleBlue' : '')} >
          <Image src={image} className={clsx(`w-5/6 mx-auto sm:mx-0 sm:w-5/12`, imagePlacement == 'left' ? 'sm:order-0' : 'sm:order-1')} alt='Image' />
          <div className='sm:w-1/2 my-auto'>
            <h1 className='font-poppins font-bold my-8 text-3xl text-center sm:my-4'>{textHeading}</h1>
            <p className='font-openSans text-[0.7rem] sm:text-sm w-10/12 mx-auto sm:mx-0 text-center'>{textBody}</p>
          </div>
        </div>
        {
        imageBorderBottom && <Image src={imageBorderBottom} alt='Image' className='w-full' />
      }
    </div>
  )
}
