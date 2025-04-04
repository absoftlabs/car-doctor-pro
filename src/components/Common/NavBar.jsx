'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import { signOut, useSession } from "next-auth/react"
import { IconShoppingBag } from '@tabler/icons-react';

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
        <div className='border-b-2 border-gray-200'>
            <div className="navbar bg-base-100 mx-auto w-full md:w-[1200px] p-0">
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
                    <Link href='/' className="py-2">
                        <Image src={logo} height={60} width={90} alt='logo' />
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
                            // <button onClick={() => signOut()} className="btn btn-error">Logout</button>
                            <div className="flex gap-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle active:scale-90 transition-all">
                                        <div className="indicator">
                                            <IconShoppingBag/>
                                            <span className="indicator-item text-info">1</span>
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                        <div className="card-body">
                                            <span className="text-lg font-bold">8 Items</span>
                                            <span className="text-info">Subtotal: $999</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar active:scale-90 transition-all">
                                        <div className="w-10 rounded-full">
                                            <Image src={'https://i.ibb.co.com/G36qb7X/nft1.jpg'} height={40} width={40} alt='avater'/>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li><a>Add Service</a></li>
                                        <li><a>Orders</a></li>
                                        <li onClick={() => signOut()}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="join">
                                <Link onClick={() => setIsActive(1)} href={'/login'} className={`btn join-item btn-info ${isActive === 0 ? 'btn-outline' : 'btn-info'}`}>Login</Link>
                                <Link onClick={() => setIsActive(0)} href={'/register'} className={`btn join-item btn-info ${isActive === 1 ? 'btn-outline' : 'btn-info'}`}>Sign Up</Link>
                            </div>
                        )
                    }
                </div >
            </div >
        </div>
    );
};

export default NavBar;