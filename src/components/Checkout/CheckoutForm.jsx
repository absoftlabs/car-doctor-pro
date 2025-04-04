import React from 'react'

export default function CheckoutForm() {
    return (
        <form className='rounded-xl bg-base-200 p-[95px]'>
            <div className="flex gap-5 justify-between items-center mb-5">
                <input type="text" placeholder="First Name" className="input w-full h-[60px] focus:outline-none border-0 text-[16px] md:text-[18px]" />
                <input type="text" placeholder="Last Name" className="input w-full h-[60px] focus:outline-none border-0 text-[16px] md:text-[18px]" />
            </div>
            <div className="flex gap-5 justify-between items-center mb-5">
                <input type="phone" placeholder="Your Phone" className="input w-full h-[60px] focus:outline-none border-0 text-[16px] md:text-[18px]" />
                <input type="email" placeholder="Your Email" className="input w-full h-[60px] focus:outline-none border-0 text-[16px] md:text-[18px]" />
            </div>
            <textarea className="textarea w-full h-[250px] focus:outline-none mb-5 border-0 text-[16px] md:text-[18px]" placeholder="Your Message"></textarea>
            <button className='btn btn-info btn-block h-[60px]'>Order Confirm</button>
        </form>
    )
}
