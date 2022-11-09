import React from 'react';
import banner from '../../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-xl lg:text-3xl">Tomorrow Belogs To Those Who </p>
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Prepare For Today!</h1>

          </div>
        </div>
      </div>
    );
};

export default Banner;