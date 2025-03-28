import Image from 'next/image'
import React from 'react'
import notfound from '@/assets/notfound.svg';
import "./notfound.css";

export default function NotFound() {
    return (
        <div className='error w-full grid place-content-center'>
            <Image className='' src={notfound} width={790} height={490} alt='404 Error Image' />
        </div>
    )
}
