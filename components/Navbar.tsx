import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton';
import Logo from '../public/logo.svg'

export default function Navbar() {
  return (
    <nav className='h-16 flex flex-row flex-nowrap justify-between items-center w-11/12 mx-auto'>
      <Image src={Logo} alt="logo" className='w-[100px] sm:w-fit' />  
      <CustomButton solid={false} text='Try It Free' className='px-4 py-1 w'/>
    </nav>
  )
}
