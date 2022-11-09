import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const ServiceItem = ({ service }) => {
  const { _id, description, duration, image, name, price } = service;
  // console.log(service);
  return (
    <div>
      <div className="card card-compact w-full h-96   bg-base-500 shadow-xl ">
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
            <img className=" h-48" src={image} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.slice(0, 25) + "..."}</h2>
          <p>{description.slice(0, 100) + "..."}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-dark">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
