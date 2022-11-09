import React from 'react';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
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