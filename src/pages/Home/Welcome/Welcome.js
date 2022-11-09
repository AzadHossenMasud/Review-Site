import React from "react";

const Welcome = () => {
  return (
    <div className=" text-center bg-slate-400  py-10">
      <h1 className=" text-center text-base-100 text-xl">
        Welocme to Skill Developm Training Center(SDTC)
      </h1>
      <h1 className=" my-10  text-4xl lg:text-5xl font-semibold">
        Unlock The Door Of Freedom
      </h1>
      <div className="grid grid-cols-1 gap-5 mx-5 mb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl ">1.</h2>
            <p className="text-lg font-semibold">Choose the Field of Study</p>
            <div className="card-actions justify-end">
              You ca find a wide range of fields. Choose one or multiple courses{" "}
            </div>
          </div>
        </div>
        
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl ">2.</h2>
            <p className="text-lg font-semibold">Get The Education Plan</p>
            <div className="card-actions justify-end">
            Students need the education plan to follow the scheduled program.            </div>
          </div>
        </div>
        
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl ">3.</h2>
            <p className="text-lg font-semibold">Enjoy the Best Studing</p>
            <div className="card-actions justify-end">
            We prefer using a modern, individual approach to teaching students.            </div>
          </div>
        </div>
        
        <div className="card w-full bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl ">4.</h2>
            <p className="text-lg font-semibold">Get Dream Career</p>
            <div className="card-actions justify-end">
            We guarantee the best results after graduation! Start your career now!            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
