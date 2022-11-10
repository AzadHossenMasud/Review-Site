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

  return (
    <div className="text-center text-3xl lg:text-5xl my-10 overflow-x-auto">
      <h2>My Reviews</h2>
      
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Review</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <th>{review.name}</th>
                <td>{review.review}</td>
                <td>
                  <PencilSquareIcon></PencilSquareIcon>
                </td>
                <td>
                  <TrashIcon></TrashIcon>
                </td>
              </tr>
            ))}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default MyReviews;
