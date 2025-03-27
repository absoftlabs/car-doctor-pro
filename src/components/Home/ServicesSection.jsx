import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function ServicesSection() {
    // const res = await fetch('http://localhost:3000/services.json');
    // const data = await res.json();
    const serviceCollection = dbConnect(collectionNamesObj.serviesCollection);
    const data = await serviceCollection.find({}).toArray();
    console.log(process.env.MONGODB_URIcha);
    
    return (
        <div className='my-5 px-4 md:px-0'>
            <div className="">
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
                                        <Image className='rounded-lg' src={item.img} height={208} width={314} alt={item.title} />
                                    </figure>
                                    <div className="card-body px-0 pb-0">
                                        <h2 className="card-title text-[25px] font-bold">{item.title}</h2>
                                        <div className="card-actions flex justify-between items-center">
                                            <p className='font-bold text-info text-[20px]'>Price:{item.price}</p>
                                            <Link href={`/services/${item._id}`} className="btn btn-ghost text-info"><IconArrowRight /></Link>
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
