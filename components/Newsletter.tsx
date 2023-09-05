/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CustomButton from './CustomButton'

export default function Newsletter() {
  return (
    <div className='flex flex-col text-white font-openSans w-[20rem]'>
        <h1 className='font-extrabold text-[24px] font-poppins'>NEWSLETTER</h1>
        <p className='text-[0.7rem] w-10/12 my-8'>To recieve tips on how to grow your community, sign up to our weekly newletter. We'll never send you spam or pass on your email address.</p>
        <form className='flex flex-row text-[0.7rem] space-x-4'>
            <input type="text" className='bg-white pl-4 py-2 rounded-sm w-full'/>
            <CustomButton solid={true} text='Subscribe' className='px-4 py-2 !rounded-sm !border-none'/>
        </form>
    </div>
  )
}
