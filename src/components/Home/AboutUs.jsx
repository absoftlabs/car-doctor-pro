import React from 'react'
import person from '@/assets/images/about_us/person.svg';
import parts from '@/assets/images/about_us/parts.svg';
import Image from 'next/image';


export default function AboutUs() {
    return (
        <div className='grid grid-cols-12 gap-10 items-center my-36'>
            <div className="col-span-12 md:col-span-6">
                <figure className='relative'>
                    <Image src={person} style={{ objectFit: "cover" }} alt='person' />
                    <Image className='absolute left-[200px] bottom-[-80px]' src={parts} height={330} width={330} alt='parts' />
                </figure>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="mb-5">
                    <p className='font-bold text-info text-[20px] mb-3'>About Us</p>
                    <h1 className='font-bold text-[45px] mb-4 leading-16'>We are qualified <br></br>& of experience <br></br>in this field</h1>
                    <p className='text-[16px] font-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br></br><br></br> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className="btn btn-info">Get More Info</button>
            </div>
        </div>
    )
}
