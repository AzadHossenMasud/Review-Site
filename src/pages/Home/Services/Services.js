import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../../ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])
    // console.log(services)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-10 py-10'>
            <h1 className=' text-center text-5xl font-semibold text-slate-700'>Our Services</h1>
            <div className=' mt-10 mx-auto md:w-11/12 lg:w-9/12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services.map(service => <ServiceItem
                    key={service._id} service={service}></ServiceItem>)
                }

            </div>
            <div className='flex mt-10 justify-center'>
            <button className="btn btn-outline"><Link to='/services'>View All Service</Link></button>

            </div>

            
        </div>
    );
};

export default Services;