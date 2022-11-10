import React from "react";
import useTitle from "../../hook/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className=" mt-10 mx-auto md:w-11/12 lg:w-9/12 ">
      <div className="flex flex-col w-full">
        <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
          <h2 className="mb-5 text-xl font-semibold">
            Q1.What is the difference between SQL and NoSQL?
          </h2>
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className="divider"></div>

        <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
          <h2 className="mb-5 text-xl font-semibold">
            Q2. What is JWT, and how does it work?
          </h2>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
        </div>
        <div className="divider"></div>

        <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
          <h2 className="mb-5 text-xl font-semibold">
            Q1. How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
        <div className="divider"></div>

        <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
          <h2 className="mb-5 text-xl font-semibold">
            Q1. What is the difference between javascript and NodeJS?
          </h2>
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Blog;
