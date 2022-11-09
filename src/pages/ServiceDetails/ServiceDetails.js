import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews]= useState([])

  // console.log(user);
    // console.log(reviews)

  const service = useLoaderData({});
  // console.log(service);
  const { description, duration, image, name, price, _id } = service;

  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?courseId=${_id}`)
    .then(res => res.json())
    .then(data => setReviews(data))

  },[])

  return (
    <div className="mx-auto w-full md:w-11/12 lg:w-9/12 mb-10">
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className=" w-full lg:h-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-bodrounded-md mt-10 px-10 py-5">
          {" "}
          <h2 className="card-title text-4xl">{name}</h2>
          <div className=" flex flex-row justify-between flex-wrap  text-primary text-xl font-bold my-2">
            <p>Price: {price}/-</p>
            <p>Duration: {duration} months</p>
          </div>
          <p className="p-5 text-md text-lime-600 border-2  border-solid  border-slate-500 rounded-lg">
            {description}
          </p>
        </div>
      </div>

      <h2 className=" text-center my-5 text-2xl  lg:text-4xl font-semibold">
        Review
      </h2>

      <div className="text-center flex flex-row justify-between">
        <h3 className=" text-xl font-semibold">View Others Review</h3>

        {user ? (
          <button className="btn btn-link">
            <Link to={`/givereview/${_id}`}>Write a Review</Link>
          </button>
        ) : (
          <button className="btn btn-link">
            <label htmlFor="my-modal-4" >
              Write a Review
            </label>
          </button>
        )}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg font-bold">
              You need to login first to give a review. Thank You!
            </h3>
            
          </label>
        </label>
      </div>

      <div className="  mt-10 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
            reviews.map(review => <Review key={review._id} reviewItem={review}></Review>)
        }
      </div>
    </div>
  );
};

export default ServiceDetails;
