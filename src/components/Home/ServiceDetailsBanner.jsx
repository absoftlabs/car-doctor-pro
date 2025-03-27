import React from 'react'
import banner from '@/assets/images/checkout/checkout.png';
import Image from 'next/image';

export default function ServiceDetailsBanner() {
    return (
        <div className='md:my-5 w-full'>
            <figure className='w-full relative'>
                <Image className='w-full rounded-xl overflow-hidden' src={banner} sizes="(width: 100% height: 400px) 100vw" alt='banner' />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 bg-blend-overlay">
                    
                </div>
                <h1 className='absolute top-[30%] md:top-[40%] left-[30%] md:left-[10%] text-center text-white font-bold text-[24px] md:text-[42px] '>Service Details</h1>
                <div className="trapezoid absolute bottom-0 left-[12%] md:left-[40%] text-white text-center align-middle text-[14px] md:text-[16px]">
                    Home/Service Detilas
                </div>
            </figure>
        </div>
    )
}
