import dbConnect, { collectionNamesObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import React from 'react'
import ServiceDetailsBanner from '@/components/Home/ServiceDetailsBanner';

export default async function page({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.serviesCollection)
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)})
    return (
        <div className=''>
            <ServiceDetailsBanner/>
        </div>
    )
}
