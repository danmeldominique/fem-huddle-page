import clsx from 'clsx'
import React from 'react'

type CustomButtonProps = {
    solid: boolean,
    text: string,
    className?: string
}

export default function CustomButton({solid, text, className} : CustomButtonProps) {
  return (
    <button className={clsx('rounded-l-full rounded-r-full',solid ? 
    'border bg-Pink text-white hover:bg-LightPink' 
    : 'border border-Pink text-Pink hover:border-LightPink hover:text-LightPink',className)}>
        {text}
    </button>
  )
}
