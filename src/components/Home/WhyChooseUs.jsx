'use client'
import Image from 'next/image'
import React from 'react'
import team from '@/assets/icons/group.svg';
import clock from '@/assets/icons/clock.svg';
import support from '@/assets/icons/person.svg';
import wrench from '@/assets/icons/Wrench.svg';
import sheld from '@/assets/icons/check.svg';
import delivery from '@/assets/icons/delivery.svg';
import white_team from '@/assets/icons/reverse/Team.svg';
import white_clock from '@/assets/icons/reverse/Clock.svg';
import white_support from '@/assets/icons/reverse/Support.svg';
import white_wrench from '@/assets/icons/reverse/Wrench.svg';
import white_sheld from '@/assets/icons/reverse/Gourd.svg';
import white_delivery from '@/assets/icons/reverse/Box.svg';

export default function WhyChooseUs() {
    return (
        <div className='my-20'>
            <div className="">
                <p className='font-bold text-info text-center text-[20px]'>Core Features</p>
                <h1 className='font-bold text-[45px] text-center'>Why Choose Us</h1>
                <p className='text-[16px] font-light text-center'>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-5 my-10">
                {/* First card with hover effect */}
                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={team}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_team}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>

                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={clock}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_clock}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>
                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={support}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_support}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>
                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={wrench}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_wrench}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>
                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={sheld}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_sheld}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>
                <div className="group col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px] hover:bg-info hover:text-white transition-all">
                    <div className="relative w-[75px] h-[53px]">
                        {/* Default icon */}
                        <Image
                            src={delivery}
                            alt="group icon"
                            fill
                            className="object-contain group-hover:opacity-0 transition-opacity duration-300"
                        />
                        {/* Hover icon */}
                        <Image
                            src={white_delivery}
                            alt="group icon white"
                            fill
                            className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Expert Team</h4>
                </div>

                {/* Other cards
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px]">
                    <Image src={clock} width={53} height={53} alt='clock icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Timely Delivery</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px]">
                    <Image src={support} width={42} height={53} alt='support icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>24/7 Support</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px]">
                    <Image src={wrench} width={53} height={53} alt='wrench icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Best Equipment</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px]">
                    <Image src={sheld} width={45} height={53} alt='shield icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>100% Guranty</h4>
                </div>
                <div className="col-span-6 md:col-span-2 rounded-xl input-bg flex flex-col items-center justify-between p-[25px]">
                    <Image src={delivery} width={67} height={53} alt='delivery icon' />
                    <h4 className='font-bold text-[16px] md:text-[18px] mt-5'>Best Packaging</h4>
                </div> */}
            </div>
        </div>
    );
}
