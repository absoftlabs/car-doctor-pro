import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'

export default function Footer() {
    return (
        <div className='bg-secondary py-44 w-full'>
            <div className="grid grid-cols-11 gap-5">
                <div className="col-span-11 md:col-span-5">
                    <Image src={logo} height={80} width={120} alt='logo'/>
                </div>
                <div className="col-span-11 md:col-span-2">

                </div>
                <div className="col-span-11 md:col-span-2">

                </div>
                <div className="col-span-11 md:col-span-2">

                </div>
            </div>
        </div>
    )
}
