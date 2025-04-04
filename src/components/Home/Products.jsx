import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react'

export default async function Products() {
    const serviceCollection = dbConnect(collectionNamesObj.productCollection);
    const data = await serviceCollection.find({}).toArray();
    return (
        <div className='my-20 px-4 md:px-0'>
            <div className="">
                <p className='font-bold text-info text-center text-[20px]'>Popular Products</p>
                <h1 className='font-bold text-[45px] text-center'>Browse Our Products</h1>
                <p className='text-[16px] font-light text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br>words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-12 gap-8 my-10">
                {
                    data.map(product => (
                        <div key={product._id} className="col-span-6 md:col-span-4 sweet-shadow rounded-xl overflow-hidden">
                            <div className="card p-5">
                                <figure className='h-[215px] bg-[#f0f0f0]'>
                                    <Image className='p-[15px]' src={product.image} height={200} width={200} sizes="(max-width: 100%) 100vw, 33vw" alt={product.name}/>
                                </figure>
                                <div className="card-body flex flex-col items-center">
                                    <div className="rating">
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-info" aria-label="1 star" />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-info" aria-label="2 star" />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-info" aria-label="3 star" />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-info" aria-label="4 star" />
                                        <input type="radio" name={product.name} className="mask mask-star-2 bg-info" aria-label="5 star" defaultChecked/>
                                    </div>
                                    <h2 className="card-title text-2xl font-bold">{product.name}</h2>
                                    <p className='text-info text-[18px] md:text-[20px] font-bold'>${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
