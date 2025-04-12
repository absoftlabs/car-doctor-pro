import React from 'react'
import { IconBrandGithubFilled, IconBrandGoogleFilled } from '@tabler/icons-react';

export default function SocialLogin() {
    return (
        <div className="flex gap-4 justify-center items-center">
            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center hover:bg-info text-error hover:text-white active:scale-95 transition-all cursor-pointer">
                <IconBrandGoogleFilled className='' />
            </div>
            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center hover:bg-info text-black hover:text-white active:scale-95 transition-all cursor-pointer">
                <IconBrandGithubFilled className='' />
            </div>
        </div>
    )
}
