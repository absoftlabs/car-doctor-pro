import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react'

export default async function ServicesSection() {
    const res = await fetch('http://localhost:3000/services.json');
    const data = await res.json();
    return (
        <div className=''>
            <div className="my-5">
                <p className='font-bold text-info text-center text-[20px]'>Services</p>
                <h1 className='font-bold text-[45px] text-center'>Our Service Area</h1>
                <p className='text-[16px] font-light text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-12 gap-5'>
                {
                    data.map((item) => {
                        return (
                            <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className="card bg-base-100 w-full shadow-sm p-6 border-2a border-gray-300">
                                    <figure className='min-h-[208px]'>
                                        <Image className='rounded-lg' src={item.img} height={208} width={314} alt='service thumbnail' />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-[25px] font-bold">{item.title}</h2>
                                        <div className="card-actions flex justify-between items-center">
                                            <p className='font-bold text-info text-[20px]'>Price:{item.price}</p>
                                            <button className="btn btn-ghost text-info"><IconArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
