import Image from 'next/image'
import React from 'react'
import logo from '@/assets/white_logo.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='bg-secondary py-[60px] w-full'>
            <div className="grid grid-cols-11 gap-5 w-full md:w-[1200px] mx-auto">
                <div className="col-span-11 md:col-span-5">
                    <Image src={logo} height={80} width={120} alt='logo' />
                    <p className='text-white text-[14px] md:text-[16px]'>Edwin Diaz is a software and web<br></br> technologies engineer, a life coach<br></br> trainer who is also a serial.</p>
                </div>
                <div className="col-span-11 md:col-span-2">
                    <h4 className='text-[20px] text-white font-bold mb-3'>About</h4>
                    <ul className='text-white'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/service'}>Service</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-span-11 md:col-span-2">
                    <h4 className='text-[20px] text-white font-bold mb-3'>About</h4>
                    <ul className='text-white'>
                        <li><Link href={'/why-car-doctor'}>Why Car Doctor</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                    </ul>
                </div>
                <div className="col-span-11 md:col-span-2">
                    <h4 className='text-[20px] text-white font-bold mb-3'>Support</h4>
                    <ul className='text-white'>
                        <li><Link href={'/support-center'}>Support Center</Link></li>
                        <li><Link href={'/feedback'}>Feedback</Link></li>
                        <li><Link href={'/accessibility'}>Accessibility</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
