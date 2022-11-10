import React from 'react';
import useTitle from '../../../hook/useTitle';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Welcome></Welcome>
            <Features></Features>
        </div>
    );
};

export default Home;