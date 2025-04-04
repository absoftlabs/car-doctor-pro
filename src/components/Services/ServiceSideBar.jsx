'use client'
import { IconArrowRight, IconFileRss } from '@tabler/icons-react';
import React, { useState } from 'react'
import white_logo from '@/assets/white_logo.svg';
import Image from 'next/image';

export default function ServiceSideBar() {
    const [isActive, setIsActive] = useState(0)
    return (
        <div>
            <div className="bg-base-200 rounded-xl p-10">
                <h2 className='text-[25px] font-bold mb-5'>Services</h2>
                <div onClick={() => setIsActive(0)} className={`mb-3 p-[18px] justify-between text-[16px] rounded-lg flex w-full cursor-pointer active:scale-95 transition-all ${isActive === 0 ? 'bg-info text-white' : 'bg-white'}`}>Full Car Repair <IconArrowRight /></div>
                <div onClick={() => setIsActive(1)} className={`mb-3 p-[18px] justify-between text-[16px] rounded-lg flex w-full cursor-pointer active:scale-95 transition-all ${isActive === 1 ? 'bg-info text-white' : 'bg-white'}`}>Engine Repair <IconArrowRight /></div>
                <div onClick={() => setIsActive(2)} className={`mb-3 p-[18px] justify-between text-[16px] rounded-lg flex w-full cursor-pointer active:scale-95 transition-all ${isActive === 2 ? 'bg-info text-white' : 'bg-white'}`}>Automatic Services <IconArrowRight /></div>
                <div onClick={() => setIsActive(3)} className={`mb-3 p-[18px] justify-between text-[16px] rounded-lg flex w-full cursor-pointer active:scale-95 transition-all ${isActive === 3 ? 'bg-info text-white' : 'bg-white'}`}>Engine Oil Change <IconArrowRight /></div>
                <div onClick={() => setIsActive(4)} className={`mb-3 p-[18px] justify-between text-[16px] rounded-lg flex w-full cursor-pointer active:scale-95 transition-all ${isActive === 4 ? 'bg-info text-white' : 'bg-white'}`}>Battery Charge <IconArrowRight /></div>
            </div>
            <div className="bg-secondary rounded-xl p-10 my-10">
                <h2 className='text-[25px] font-bold mb-5 text-white'>Download</h2>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 items-center">
                        <IconFileRss size={30} className='text-white' />
                        <div className="">
                            <h4 className='text-white text-[16px] md:text-[18px] font-bold'>Company Details</h4>
                            <p className='text-base-300 text-[14px] md:text-[16px]'>Download</p>
                        </div>
                    </div>
                    <div className="bg-info p-4 rounded-xl cursor-pointer active:scale-90 transition-all">
                        <IconArrowRight className='text-white' />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <IconFileRss size={30} className='text-white' />
                        <div className="">
                            <h4 className='text-white text-[16px] md:text-[18px] font-bold'>Our Brochure</h4>
                            <p className='text-base-300 text-[14px] md:text-[16px]'>Download</p>
                        </div>
                    </div>
                    <div className="bg-info p-4 rounded-xl cursor-pointer active:scale-90 transition-all">
                        <IconArrowRight className='text-white' />
                    </div>
                </div>
            </div>
            <div className="bg-secondary rounded-xl p-10 pb-16 my-10">
                <figure className='place-content-center grid mb-4'>
                    <Image src={white_logo} width={141} height={115} alt='white logo' />
                </figure>
                <h2 className='text-white font-bold text-[18px] md:text-[20px] text-center mb-6'>Need Help? We Are Here<br></br> To Help You</h2>
                <div className="bg-base-100 rounded-xl p-4 pb-9 relative">
                    <p className='text-center text-[18px] md:text-[20px] font-bold'><span className='text-info'>Car Doctor</span> Special <br></br><span className='text-gray-600'>Save up to</span> <span className='text-info'>60% off</span></p>
                    <button className='btn btn-lg btn-info absolute bottom-[-22%] left-[27%]'>Get A Quote</button>
                </div>
            </div>
        </div>
    )
}
