import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
console.log(reviews.length)
  return (
    <div className="py-5 bg-slate-400">
      <h2 className="font-semibold text-3xl lg:text-5xl text-center">My Reviews</h2>
      {
        reviews.length && <div className="mt-5 md:w-11/12 lg:w-9/12 mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          reviews.map(review =><div className="card w-full bg-base-100 shadow-xl">
        
          <div className="card-body">
            <h2 className="card-title text-purple-500">
              {review.name}
            </h2>
            <p className="font-semibold italic">"{review.review}"</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline-dark">Edit</div>
              <div className="badge badge-outline-dark">Delete</div>
            </div>
          </div>
        </div>)
        }
       </div>
      }

      {
        reviews.length || <div className="my-20 flex justify-center items-center">
          <h3 className=" text-2xl font-semibold">No Review Added Yet</h3>
          </div>
      }
     

    </div>
  );
};

export default MyReviews;
