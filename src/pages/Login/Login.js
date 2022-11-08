import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import SignWithGoogle from "../SignWithGoogle/SignWithGoogle";

const Login = () => {
  const {loginUser}= useContext(AuthContext)
  // console.log(loginUser);

  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    loginUser(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    // console.log(password, email);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
           Thanks a lot to connect with us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form  onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-goast">Login</button>
            </div>
            <div>
              <label className="text-primary font-semibold">
                Haven't You Accout??{" "}
                <Link className="font-bold underline" to="/signup">
                  Create Account
                </Link>{" "}
                .
              </label>
            </div>
          </form>
          <SignWithGoogle></SignWithGoogle>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
