'use client'
import React, { useEffect } from 'react'
import { IconBrandGithubFilled, IconBrandGoogleFilled } from '@tabler/icons-react';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SocialLogin() {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (providerName) => {
        signIn(providerName);
    };

    useEffect(()=>{
        if(session?.status == "authenticated"){
            router.push('/');
            toast.success('User loged in successfully')
        }
    },[session?.status])
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
