import CheckoutForm from '@/components/Checkout/CheckoutForm';
import PageHeader from '@/components/Ui/PageHeader'
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function page({params}) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNamesObj.serviesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div className=''>
            <PageHeader title={'Checkout'} breadcrumb="Home / Checkout" />
            <div className="">
                {data.title}
            </div>
            <div className="">
                <CheckoutForm/>
            </div>
        </div>
    )
}
