import React from "react";
import {
  BeakerIcon,
  BoltIcon,
  ForwardIcon,
  ListBulletIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className=" text-center my-10">
      <h2 className=" font-semibold text-3xl lg:text-5xl">Our Key Features</h2>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
              Effective Lesson
            </h2>
            <p className=" text-left ml-5">
              An effective lesson gets students thinking and allows them to
              interact and ask questions, tap into their background knowledge,
              and build new skills.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <VideoCameraIcon className="h-6 w-6 text-blue-500"></VideoCameraIcon>
              Video Training{" "}
            </h2>
            <p className=" text-left ml-5">
              A training video is a video with an educational goal of teaching a
              skill or knowledge. Or simply, a video that teaches someone how to
              do something.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <PencilSquareIcon className="h-6 w-6 text-blue-500"></PencilSquareIcon>
              Planned Curriculum
            </h2>
            <p className=" text-left ml-5">
              Planned curriculum refers to documents that shape the content to
              be covered when teaching.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <ForwardIcon className="h-6 w-6 text-blue-500"></ForwardIcon>
              Focus on Details
            </h2>
            <p className=" text-left ml-5">
              Paying attention to detail refers to a person's ability to focus
              on both the small and important details while completing a task.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <ListBulletIcon className="h-6 w-6 text-blue-500"></ListBulletIcon>
              Awesome Quizzes
            </h2>
            <p className=" text-left ml-5">
              Quizzes are perfect to have fun with your friends online,
              especially when meeting in-person is hard. Here are the best
              websites for fun, free quizzes.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <PaperAirplaneIcon className="h-6 w-6 text-blue-500"></PaperAirplaneIcon>
              Advanced Expercise
            </h2>
            <p className=" text-left ml-5">
              An effective lesson gets students thinking and allows them to
              interact and ask questions, tap into their background knowledge,
              and build new skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
