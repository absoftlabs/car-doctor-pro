'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import { signOut, useSession } from "next-auth/react"

const NavBar = () => {
    const { data: session, status } = useSession();
    const [isActive, setIsActive] = useState(0);

    const navMenu = () => {
        return (
            <>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/services'}>Services</Link></li>
                <li><Link href={'/blogs'}>Blogs</Link></li>
                <li><Link href={'/contacts'}>Contacts</Link></li>
            </>
        )
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navMenu()
                        }
                    </ul>
                </div>
                <Link href='/' className="">
                    <Image src={logo} height={80} width={110} alt='logo' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navMenu()
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    status === 'authenticated' ? (
                        <button onClick={() => signOut()} className="btn btn-error">Logout</button>
                    ) : (
                        <div className="join">
                            <Link onClick={() => setIsActive(1)} href={'/login'} className={`btn join-item btn-info ${isActive === 0 ? 'btn-outline' : 'btn-info'}`}>Login</Link>
                            <Link onClick={() => setIsActive(0)} href={'/register'} className={`btn join-item btn-info ${isActive === 1 ? 'btn-outline' : 'btn-info'}`}>Sign Up</Link>
                        </div>
                    )
                }
            </div >
        </div >
    );
};

export default NavBar;