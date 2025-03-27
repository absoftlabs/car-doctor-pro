import Image from 'next/image';
import React from 'react'
import YouTube from './YouTube';

export default function ServiceDetails({ data }) {
    const { title, img, description, facility } = data;
    console.log(facility);

    return (
        <div>
            <figure className='h-[400px] overflow-hidden rounded-xl border-2 border-gray-300'><Image className='rounded-xl w-full' src={img} width={752} height={200} alt={title} /></figure>
            <div className="my-4">
                <h1 className='text-[35px] font-bold mb-7'>{title}</h1>
                <p className='text-[14px] md:text-[16px] text-gray-400'>{description}</p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {facility.map((item, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 p-10 border-t-4 bg-base-200 border-t-info rounded-lg">
                        <h2 className="text-xl font-semibold mb-[10px]">{item.name}</h2>
                        <p className="text-gray-500 text-[14px] md:text-[16px]">{item.details}</p>
                    </div>
                ))}
            </div>
            <div className="my-5">
                <p className='text-[14px] md:text-[16px] text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <h1 className='text-[35px] font-bold mb-7'>3 Simple Steps to Process</h1>
                <p className='text-[14px] md:text-[16px] text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-4 w-full">
                    <div className="card border-2 border-base-300 hover:border-info transition-all rounded-xl p-10 flex items-center">
                        <div className="bg-[#FFEBE7] h-[83px] w-[83px] rounded-full flex items-center justify-center mb-5">
                            <div className="bg-info h-[56px] w-[56px] rounded-full grid place-content-center">
                                <h1 className='text-white font-bold text-[18px] md:text-[20px]'>01</h1>
                            </div>
                        </div>
                        <h2 className='font-bold text-[18px] md:text-[20px] mb-5 text-center'>STEP ONE</h2>
                        <p className='text-[14px] md:text-[16px] text-gray-400 text-center'>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 w-full">
                    <div className="card border-2 border-base-300 hover:border-info transition-all rounded-xl p-10 flex items-center">
                        <div className="bg-[#FFEBE7] h-[83px] w-[83px] rounded-full flex items-center justify-center mb-5">
                            <div className="bg-info h-[56px] w-[56px] rounded-full grid place-content-center">
                                <h1 className='text-white font-bold text-[18px] md:text-[20px]'>02</h1>
                            </div>
                        </div>
                        <h2 className='font-bold text-[18px] md:text-[20px] mb-5 text-center'>STEP TWO</h2>
                        <p className='text-[14px] md:text-[16px] text-gray-400 text-center'>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 w-full">
                    <div className="card border-2 border-base-300 hover:border-info transition-all rounded-xl p-10 flex items-center">
                        <div className="bg-[#FFEBE7] h-[83px] w-[83px] rounded-full flex items-center justify-center mb-5">
                            <div className="bg-info h-[56px] w-[56px] rounded-full grid place-content-center">
                                <h1 className='text-white font-bold text-[18px] md:text-[20px]'>03</h1>
                            </div>
                        </div>
                        <h2 className='font-bold text-[18px] md:text-[20px] mb-5 text-center'>STEP THREE</h2>
                        <p className='text-[14px] md:text-[16px] text-gray-400 text-center'>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
            </div>
            <YouTube/>
        </div>
    )
}
