import React from 'react'
import dateTime from '@/assets/icons/time-date.svg';
import call from '@/assets/icons/call.svg';
import location from '@/assets/icons/location.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
    return (
        <div className='bg-secondary px-[75px] py-[95px] rounded-2xl grid grid-cols-12 gap-5 my-20'>
            <div className='col-span-12 md:col-span-4'>
                <div className="flex gap-5 items-center">
                    <Image src={dateTime} height={40} width={40} alt='date time icon'/>
                    <div className="text-primary">
                        <p className='font-normal text-[16px] md:text-[18px]'>We are open monday-friday</p>
                        <h3 className='font-bold text-[20px] md:text-[24px]'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
                <div className="flex gap-5 items-center">
                    <Image src={call} height={40} width={40} alt='date time icon'/>
                    <div className="text-primary">
                        <p className='font-normal text-[16px] md:text-[18px]'>Have a question?</p>
                        <h3 className='font-bold text-[20px] md:text-[24px]'><Link href={'tel:+8801798930232'}>+880 1798930232</Link></h3>
                    </div>
                </div>
            </div>
            <div className='col-span-12 md:col-span-4'>
                <div className="flex gap-5 items-center">
                    <Image src={location} height={40} width={40} alt='date time icon'/>
                    <div className="text-primary">
                        <p className='font-normal text-[16px] md:text-[18px]'>Need a repair? our address</p>
                        <h3 className='font-bold text-[20px] md:text-[24px]'>Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
