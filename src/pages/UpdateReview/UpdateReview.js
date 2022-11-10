import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const UpdateReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate()
//   console.log(review._id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateText = e.target.reviewText.value;
    const reviewData = { updateText };
    // console.log(review);
    fetch(`https://review-site-server.vercel.app/updatereview/${review._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Success:", data);
        if(data.modifiedCount){
            toast('Review update successfully.');


            setTimeout(() => {
                navigate('/myreviews')
            }, 1000);
           
        }
      });
  };

  return (
    <div>
      <div className=" text-center w-3/4 mx-auto">
      <Toaster />

        <form onSubmit={handleUpdate}>
          <div className="form-control ">
            <label className="label text-xl font-semibold mb-3">
              Your Review
            </label>
            <textarea
              className="textarea textarea-bordered h-48"
              placeholder="Write Your Review"
              name="reviewText"
              defaultValue={review.review}
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
    </div>
  );
};

export default UpdateReview;
