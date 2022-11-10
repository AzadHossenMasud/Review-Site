import React from "react";
import useTitle from "../../hook/useTitle";
import toast, { Toaster } from 'react-hot-toast';


const AddService = () => {
  useTitle("Add Service");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.imageAddress.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const description = form.description.value;

    const doc = { name, image, price, duration, description };
    console.log(doc);
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
            toast("You Successfully Add A Course!");

          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
              <Toaster />

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name: </span>
              </label>
              <input
                type="text"
                placeholder="Course Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Address: </span>
              </label>
              <input
                type="text"
                placeholder="Course Thumbnail"
                className="input input-bordered"
                name="imageAddress"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="BDT"
                className="input input-bordered"
                name="price"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                placeholder="Month"
                className="input input-bordered"
                name="duration"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Description</span>
              </label>
              <textarea
                className="textarea"
                placeholder="Course Description"
                name="description"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
