import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import ServiceItem from '../ServiceItem/ServiceItem';

const AllServices = () => {
    // const services = useLoaderData()
    const [services, setServices]= useState([])

    useTitle('Services')

    useEffect(()=>{
        fetch('https://review-site-server.vercel.app/allservices')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])

    
    console.log(services.length)
    return (
        <div className='my-10'>
            {
            services.length===0 ? <div className=' flex justify-center items-center'><button className="btn loading">loading</button></div> :
            <>
             <h1 className=' text-center text-5xl font-semibold'>All Services</h1>
            <div className=' mt-10 mx-auto md:w-11/12 lg:w-9/12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <ServiceItem
                    key={service._id} service={service}></ServiceItem>)
                }

            </div>
            </>

        }
       
           
        </div>
    );
};

export default AllServices;