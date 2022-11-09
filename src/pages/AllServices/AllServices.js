import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceItem from '../ServiceItem/ServiceItem';

const AllServices = () => {
    const services = useLoaderData()
    useTitle('Services')
    // console.log(services)
    return (
        <div className='my-10'>
            <h1 className=' text-center text-5xl font-semibold'>All Services</h1>
            <div className=' mt-10 mx-auto md:w-11/12 lg:w-9/12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <ServiceItem
                    key={service._id} service={service}></ServiceItem>)
                }

            </div>
        </div>
    );
};

export default AllServices;