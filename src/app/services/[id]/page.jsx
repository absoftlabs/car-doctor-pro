import dbConnect, { collectionNamesObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'
import ServiceDetailsBanner from '@/components/Services/ServiceDetailsBanner';
import ServiceDetails from '@/components/Services/ServiceDetails';
import ServiceSideBar from '@/components/Services/ServiceSideBar';

export default async function page({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.serviesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div className=''>
            <ServiceDetailsBanner />
            <div className="grid grid-cols-12 gap-5 my-10">
                <div className="col-span-12 md:col-span-8">
                    <ServiceDetails data={data} />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <ServiceSideBar />
                    <div>
                        <h3 className='font-bold text-[35px] mb-4'>Price: ${data.price}</h3>
                        <button className="btn btn-block btn-info btn-xl">Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
