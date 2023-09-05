
import React from 'react'
import Image from 'next/image';

type StatCardProps = {
    imageName: string,
    statistic: string,
    text: string
}

export default function StatCard({imageName, statistic, text} : StatCardProps) {
  return (
    <div className='flex flex-col w-fit justify-self-center'>
        <Image src={imageName} alt='communities' width='30' height='30' />
        <h1 className='font-bold text-6xl font-poppins my-3'>{statistic}</h1>
        <p className='text-gray-500 font-openSans text-center'>{text}</p>
    </div>
  )
}
