import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import React from 'react'

export default function ContactInfo() {
    return (
        <div>
            <h2 className='text-[28px] md:text-[36px] font-bold'>Our Address</h2>
            <p className='text-gray-500 font-normal text-[14px] md:text-[18px]'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
            <div className="my-5">
                <div className="flex gap-5 items-center mb-4">
                    <IconMapPin size={35} className='bg-info p-2 rounded-md text-white active:scale-95 transition-all cursor-pointer' />
                    <div className="">
                        <h5 className='font-bold text-[16px] md:text-[18px]'>Address</h5>
                        <p className='text-[14px] md:text-[16px] font-normal text-gray-500'>54B, Tailstoi Town 5238 MT, La city, IA 5224</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center mb-4">
                    <IconMail size={35} className='bg-info p-2 rounded-md text-white active:scale-95 transition-all cursor-pointer' />
                    <div className="">
                        <h5 className='font-bold text-[16px] md:text-[18px]'>Email</h5>
                        <p className='text-[14px] md:text-[16px] font-normal text-gray-500'>contact@cardoctorpro.com</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center mb-4">
                    <IconPhone size={35} className='bg-info p-2 rounded-md text-white active:scale-95 transition-all cursor-pointer' />
                    <div className="">
                        <h5 className='font-bold text-[16px] md:text-[18px]'>Phone</h5>
                        <p className='text-[14px] md:text-[16px] font-normal text-gray-500'>1800-456-7890 / 1254-897-3654</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
