import { IconBrandTelegram } from '@tabler/icons-react'
import React from 'react'

export default function ContactForm() {
    return (
        <form>
            <fieldset className="fieldset mb-4">
                <input name='name' type="text" className="input w-full focus:outline-none border-0 input-bg" placeholder="Your Name" />
            </fieldset>
            <fieldset className="fieldset mb-4">
                <input name='email' type="email" className="input w-full focus:outline-none border-0 input-bg" placeholder="Your Email" />
            </fieldset>
            <fieldset className="fieldset mb-4">
                <input name='subject' type="text" className="input w-full focus:outline-none border-0 input-bg" placeholder="Subject" />
            </fieldset>
            <fieldset className="fieldset mb-4">
                <textarea className="textarea w-full focus:outline-none border-0 input-bg h-36" placeholder="Message"></textarea>
            </fieldset>
            <button className="btn-info btn mt-5">Send Now <IconBrandTelegram/></button>
        </form>
    )
}
