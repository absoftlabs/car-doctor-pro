'use client'
import React from 'react'
import login from '@/assets/images/login/login.svg';
import Image from 'next/image';
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandLinkedinFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import SocialLogin from './SocialLogin';


export default function Login() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const toastId = toast.custom(() => (
            /* From Uiverse.io by ParasSalunke */
            <div className="flex gap-3 flex-wrap justify-center p-4 md:p-12">
                <button
                    disabled=""
                    type="button"
                    className="text-white bg-orange-600 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center"
                >
                    <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-5 h-5 mr-2 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                        ></path>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    Please wait..
                </button>
            </div>
            
        ))

        try {
            const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false, });
            if (response.ok) {
                router.push('/')
                toast.dismiss(toastId)
                toast.success('User successfully loged in')
                form.reset();
            } else {
                toast.dismiss(toastId)
                toast.error('Authentication failed')
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='grid grid-cols-12 justify-between my-10 items-center gap-10'>
            <div className="col-span-12 md:col-span-7 p-10">
                <Image src={login} width={460} height={502} alt='login image' />
            </div>
            <div className="col-span-12 md:col-span-5">
                <div className="border-2 border-gray-300 rounded-xl p-[75px]">
                    <h2 className='text-[25px] md:text-[40px] text-center font-semibold'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input name='email' type="email" className="input w-full focus:outline-none border-0 input-bg" placeholder="Your email" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Confirm Password</legend>
                            <input name='password' type="password" className="input w-full focus:outline-none border-0 input-bg" placeholder="Your password" />
                        </fieldset>
                        <button className="btn-block btn-info btn mt-5">Login</button>
                    </form>
                    <div className='my-5'>
                        <p className='text-center text-[16px] md:text-[18px] my-5'>Or Sign In with</p>
                        <SocialLogin/>
                        <p className='text-center text-[16px] md:text-[18px] my-5 text-gray-400'>have'nt an account? <Link className='text-info' href={'/register'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
