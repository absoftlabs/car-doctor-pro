import React from 'react'
import teamMember from '@/assets/images/team/1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/assets/icons/facebook.png';
import twitter from '@/assets/icons/twitter.png';
import linkedin from '@/assets/icons/linkedin.png';
import instagram from '@/assets/icons/instagram.png';

export default function TeamMember() {
    return (
        <div className="card sweet-shadow">
            <figure className='p-[25px] rounded-xl overflow-hidden'>
                <Image className='rounded-md overflow-hidden w-full' src={teamMember} height={314} width={293} alt='team member image' />
            </figure>
            <div className="card-body pt-0">
                <h2 className="text-center text-[25px] font-bold">Car Engine Plug</h2>
                <p className='text-[20px] font-semibold text-center text-gray-400'>Engine Expert</p>
                <div className="flex gap-3 items-center justify-center mt-2">
                    <Link href={'/'} className='active:scale-90 transition-all'>
                        <Image src={facebook} height={40} width={40} alt='facebook icon' />
                    </Link>
                    <Link href={'/'} className='active:scale-90 transition-all'>
                        <Image src={twitter} height={40} width={40} alt='facebook icon' />
                    </Link>
                    <Link href={'/'} className='active:scale-90 transition-all'>
                        <Image src={linkedin} height={40} width={40} alt='facebook icon' />
                    </Link>
                    <Link href={'/'} className='active:scale-90 transition-all'>
                        <Image src={instagram} height={40} width={40} alt='facebook icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
