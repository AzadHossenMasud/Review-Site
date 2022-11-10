import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const GiveReview = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const navigate = useNavigate();

  const { description, duration, image, name, price, _id } = service;
  const { email, displayName, photoURL } = user;
  //   console.log(service);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.reviewText.value;
    // console.log(email);
    const reviewData = { email, review, name, displayName, photoURL, courseId: _id };
    // console.log(reviewData)

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Success:", data);
        if (data.acknowledged) {
          toast("Thank your for your review!");
          navigate("/services");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className=" text-center w-3/4 mx-auto">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="form-control ">
          <label className="label text-xl font-semibold mb-3">
            Your Review
          </label>
          <textarea
            className="textarea textarea-bordered h-48"
            placeholder="Write Your Review"
            name="reviewText"
            required
          ></textarea>
          <label className="label">
            <button type="submit" className="btn btn-sm">
              Submit
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default GiveReview;
