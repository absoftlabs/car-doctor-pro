'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

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
                spaceBetween={30}
                className="w-full h-auto px-4 py-10"
            >
                {plainTestimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center my-10">
                        <div className="max-w-xl bg-white p-6 rounded-xl input-bg text-center">
                            <img
                                src={testimonial.avater}
                                alt={testimonial.name}
                                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.designation}</p>
                            <p className="mt-4 text-gray-700 italic">"{testimonial.says}"</p>
                            <p className="mt-2 text-yellow-500">{"⭐".repeat(testimonial.rating)}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (optional) */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                <div onClick={handlePrev} className="bg-info p-4 cursor-pointer text-white rounded-full active:scale-90 transition-all"><IconArrowLeft /></div>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                <div onClick={handleNext} className="bg-info p-4 cursor-pointer text-white rounded-full active:scale-90 transition-all"><IconArrowRight /></div>
            </div>
        </div>
    );
}
