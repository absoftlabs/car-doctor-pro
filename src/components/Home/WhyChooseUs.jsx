import Image from 'next/image'
import React from 'react'
import team from '@/assets/icons/group.svg';
import clock from '@/assets/icons/clock.svg';
import support from '@/assets/icons/person.svg';
import wrench from '@/assets/icons/Wrench.svg';
import sheld from '@/assets/icons/check.svg';
import delivery from '@/assets/icons/delivery.svg';

export default function WhyChooseUs() {
    return (
        <div className='my-20'>
            <div className="">
                <p className='font-bold text-info text-center text-[20px]'>Core Features</p>
                <h1 className='font-bold text-[45px] text-center'>Why Choose Us</h1>
                <p className='text-[16px] font-light text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-12 gap-5 my-10">
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={team} width={75} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl bg-info input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={clock} width={53} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5 text-white'>Timely Delivery</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={support} width={42} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>24/7 Support</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={wrench} width={42} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Best Equipment</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={sheld} width={42} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>100% Guranty</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-center p-[25px]">
                    <Image src={delivery} width={42} height={53} alt='group icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Best Packaging</h4>
                </div>
            </div>
        </div>
    )
}
