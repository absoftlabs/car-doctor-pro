'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import qoute from '@/assets/icons/quote.svg';

export default function Testimonial({ plainTestimonials }) {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="relative">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={-20}
                className="w-full h-auto px-4 py-10"
            >
                {plainTestimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center my-10 px-8">
                        <div className="p-12 input-bg rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-5 items-center">
                                    <Image className='rounded-full' src={testimonial.avater} height={60} width={60} alt={testimonial.name} />
                                    <div className="">
                                        <h2 className='font-bold text-[22px] md:text-[25px]'>{testimonial.name}</h2>
                                        <p className='font-normal text-[14px] md:text-[18px] text-gray-500'>{testimonial.designation}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <Image src={qoute} height={56} width={56} alt={testimonial.name} />
                                </div>
                            </div>
                            <p className='font-normal text-[14px] md:text-[16px] text-[#737373] my-5'>{testimonial.says}</p>
                            <p className="mt-2 text-yellow-500">{"⭐".repeat(testimonial.rating)}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (optional) */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                <div onClick={handlePrev} className="bg-base-300 p-4 cursor-pointer rounded-full hover:bg-info hover:text-white active:scale-90 transition-all"><IconArrowLeft /></div>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                <div onClick={handleNext} className="bg-base-300 p-4 cursor-pointer hover:bg-info hover:text-white rounded-full active:scale-90 transition-all"><IconArrowRight /></div>
            </div>
        </div>
    );
}
