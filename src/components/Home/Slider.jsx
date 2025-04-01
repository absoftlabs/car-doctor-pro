'use client';
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function Slider() {
    const [slider, setSlider] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch('/slider.json')
            .then(res => res.json())
            .then(data => setSlider(data));
    }, []);

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
        <div className="rounded-xl overflow-hidden my-10">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                loop={true}
                pagination={{ clickable: true }}
                className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden"
            >
                {slider.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl overflow-hidden"
                            />
                            <div className="absolut top-0 z-10">
                                <Image src={'https://i.ibb.co.com/gLY6M4XY/overlay.png'} layout="fill"
                                    objectFit="cover" alt="overlay" />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center p-5 md:p-24 md:w-3/4 lg:w-1/2 z-20">
                                <h2 className="text-white text-[36px] md:text-[60px] font-bold mb-4 md:leading-18 text-center md:text-left">
                                    {slide.title}
                                </h2>
                                <p className="text-white text-lg mb-6 text-center md:text-left">{slide.description}</p>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <button className="btn btn-info btn-md md:btn-lg font-semibold">
                                        Discover More
                                    </button>
                                    <button className="btn btn-primary btn-outline btn-md md:btn-lg font-semibold">
                                        Latest Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="absolute right-[50px] bottom-[50px] md:flex gap-2 z-50 hidden">
                    <div onClick={handlePrev} className="bg-info p-4 cursor-pointer text-white rounded-full active:scale-90 transition-all"><IconArrowLeft /></div>
                    <div onClick={handleNext} className="bg-info p-4 cursor-pointer text-white rounded-full active:scale-90 transition-all"><IconArrowRight /></div>
                </div>
            </Swiper>
        </div>
    );
}
