import Image from 'next/image'
import React from 'react'
import FooterTop from '../public/bg-footer-top-desktop.svg'
import CompanyInfo from './CompanyInfo'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className='flex flex-col relative'>
        <Image src={FooterTop} alt="footer top" className='w-full' />
        <div className='flex flex-row bg-VeryDarkCyan gap-x-6 justify-around py-6'>
        <CompanyInfo />
        <Newsletter />
        </div>
    </footer>
  )
}
