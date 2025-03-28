import React from 'react'
import login from '@/assets/images/login/login.svg';
import Image from 'next/image';
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import Link from 'next/link';

export default function Login() {
    return (
        <div className='grid grid-cols-12 justify-between my-10 items-center gap-10'>
            <div className="col-span-12 md:col-span-7 p-10">
                <Image src={login} width={460} height={502} alt='login image' />
            </div>
            <div className="col-span-12 md:col-span-5">
                <div className="border-2 border-gray-300 rounded-xl p-[75px]">
                    <h2 className='text-[25px] md:text-[40px] text-center font-semibold'>Login</h2>
                    <form>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input type="email" className="input w-full" placeholder="Your email" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Confirm Password</legend>
                            <input type="password" className="input w-full" placeholder="Your password" />
                        </fieldset>
                    </form>
                    <div className='my-5'>
                        <button className="btn-block btn-info btn">Login</button>
                        <p className='text-center text-[16px] md:text-[18px] my-5'>Or Sign In with</p>
                        <div className="flex gap-4 justify-center items-center">
                            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                                <IconBrandFacebookFilled className='text-blue-900'/>
                            </div>
                            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                                <IconBrandLinkedinFilled className='text-blue-600'/>
                            </div>
                            <div className="bg-base-200 rounded-full h-[55px] w-[55px] grid place-content-center">
                                <IconBrandGoogleFilled className='text-red-600'/>
                            </div>
                        </div>
                        <p className='text-center text-[16px] md:text-[18px] my-5 text-gray-400'>have'nt an account? <Link className='text-info' href={'/register'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
