'use client'
import React from 'react'
import login from '@/assets/images/login/login.svg';
import Image from 'next/image';
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { registerUser } from '@/app/actions/auth/registerUser';

export default function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({name, email, password});

    }
    return (
        <div className='grid grid-cols-12 justify-between my-10 items-center gap-10'>
            <div className="col-span-12 md:col-span-7 p-10">
                <Image src={login} width={460} height={502} alt='login image' />
            </div>
            <div className="col-span-12 md:col-span-5">
                <div className="border-2 border-gray-300 rounded-xl p-[75px]">
                    <h2 className='text-[25px] md:text-[40px] text-center font-semibold'>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name</legend>
                            <input name='name' type="text" className="input w-full" placeholder="Your name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input name='email' type="email" className="input w-full" placeholder="Your email" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Confirm Password</legend>
                            <input name='password' type="password" className="input w-full" placeholder="Your password" />
                        </fieldset>
                        <button className="btn-block btn-info btn mt-5">Sign Up</button>
                    </form>
                    <div className='my-5'>
                        <p className='text-center text-[16px] md:text-[18px] my-5'>Or Sign Up with</p>
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
                        <p className='text-center text-[16px] md:text-[18px] my-5 text-gray-400'>Already have an account? <Link className='text-info' href={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
