import React from 'react'
import { IconBrandGithubFilled, IconBrandGoogleFilled } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

export default function SocialLogin() {
    const handleSocialLogin = async (providerName) => {
        console.log("Social Login", providerName);
        const result = await signIn(providerName, {redirect: false});
        console.log(result);
    }
    return (
        <div className="flex gap-4 justify-center items-center">
            <div onClick={() => handleSocialLogin('google')} className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center hover:bg-info text-error hover:text-white active:scale-95 transition-all cursor-pointer">
                <IconBrandGoogleFilled className='' />
            </div>
            <div onClick={() => handleSocialLogin('github')} className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center hover:bg-info text-black hover:text-white active:scale-95 transition-all cursor-pointer">
                <IconBrandGithubFilled className='' />
            </div>
        </div>
    )
}
