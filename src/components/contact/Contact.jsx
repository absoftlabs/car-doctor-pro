import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
                <p className='font-bold text-info uppercase text-[14px] md:text-[18px]'>__Get in touch</p>
                <h1 className='font-bold text-[36px] md:text-[45px] mb-5'>Drop us message</h1>
                <ContactForm/>
            </div>
            <div className="col-span-12 md:col-span-6">
                <ContactInfo/>
            </div>
        </div>
    )
}
