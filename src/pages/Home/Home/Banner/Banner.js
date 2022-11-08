import React from 'react';
import banner from '../../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Skill Develop Training Center!</h1>
            <p className="mb-5">We are offering many courses for you. After completing our courses, you will develop your skill. We offer best teacher for you.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;