import React from 'react';
import Testimonial from './Testimonial';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';

export default async function WhatCustomerSays() {
    const serviceCollection = dbConnect(collectionNamesObj.testimonialCollection);
    const data = await serviceCollection.find({}).toArray();

    // Convert MongoDB ObjectId to plain string
    const plainTestimonials = data.map(item => ({
        ...item,
        _id: item._id.toString(),
    }));

    return (
        <div className='my-20'>
            <div className="">
                <p className='font-bold text-info text-center text-[20px] '>Testimonial</p>
                <h1 className='font-bold text-[45px] text-center'>What Customer Says</h1>
                <p className='text-[16px] font-light text-center'>
                    the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.
                </p>
            </div>
            <Testimonial plainTestimonials={plainTestimonials} />
        </div>
    );
}
