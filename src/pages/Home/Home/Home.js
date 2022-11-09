import React from 'react';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;