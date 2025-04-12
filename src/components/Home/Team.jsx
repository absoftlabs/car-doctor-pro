import React from 'react'
import TeamMember from './TeamMember'

export default function Team() {
    return (
        <div className='my-20'>
            <div className="">
                <p className='font-bold text-info text-[14px] md:text-[18px] mb-3 uppercase text-center'>__Team</p>
                <h1 className='font-bold text-[45px] text-center'>Meet Our Team</h1>
                <p className='text-[16px] font-light text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-12 gap-10 my-10 sweet-bg">
                <div className="col-span-12 md:col-span-4">
                    <TeamMember />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <TeamMember />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <TeamMember />
                </div>
            </div>
        </div>
    )
}
