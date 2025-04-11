import React from 'react'
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';

export default function SocialLogin() {
    return (
        <div className="flex gap-4 justify-center items-center">
            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                <IconBrandFacebookFilled className='text-blue-900' />
            </div>
            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                <IconBrandLinkedinFilled className='text-blue-600' />
            </div>
            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                <IconBrandGoogleFilled className='text-red-600' />
            </div>
        </div>
    )
}
