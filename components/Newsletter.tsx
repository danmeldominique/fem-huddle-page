/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CustomButton from './CustomButton'

export default function Newsletter() {
  return (
    <div className='flex flex-col text-white font-openSans w-[20rem] order-0 sm:order-none mx-auto sm:mx-0 mb-16 sm:mb-0'>
        <h1 className='font-extrabold text-3xl font-poppins'>NEWSLETTER</h1>
        <p className='text-[0.7rem] sm:w-10/12 my-8'>To recieve tips on how to grow your community, sign up to our weekly newletter. We'll never send you spam or pass on your email address.</p>
        <form className='flex flex-col sm:flex-row text-[0.7rem] space-x-4 mr-4'>
            <input type="text" className='bg-white pl-4 py-2 rounded-sm w-full mr-4 mb-3 sm:mb-0'/>
            <CustomButton solid={true} text='Subscribe' className='px-4 py-2 !rounded-sm !border-none !m-0'/>
        </form>
    </div>
  )
}
