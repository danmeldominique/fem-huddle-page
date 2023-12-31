import clsx from 'clsx'
import React from 'react'
import CustomButton from './CustomButton'

type HeroProps = {
    className?: string
}

export default function Hero(className?: HeroProps) {
  return (
    <div className={clsx(`flex flex-col justify-items-center items-center my-24 sm:my-48`, className)}>
        <h1 className='font-poppins text-xl text-center sm:text-3xl my-4'>Build The Community<br/>Your Fans Will Love</h1>
        <p className='w-6/12 font-openSans text-center text-[0.7rem] sm:text-base'>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <CustomButton solid={true} text='Get Started For Free' className='px-8 sm:px-16 text-sm sm:text-base py-3 mt-12 shadow-md'/>
    </div>
  )
}
