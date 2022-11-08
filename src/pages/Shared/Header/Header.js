import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const {user, logoutUser} = useContext(AuthContext)
  
  const handleLogout = ()=>{
    logoutUser()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  // console.log(user);
  const navItems = (
    <>
      <li>
       
        <Link to='/'>Home</Link>
      </li>
      <li>
       
        <Link to='/services'>Services</Link>
      </li>
      <>{
        user? <li>
       
       <button onClick={handleLogout} className="btn btn-active btn-ghost">Logout</button>

      </li>: 
      <li>
        <button className="btn btn-active btn-ghost"><Link to='/login'>Login</Link></button>

      </li>

      }
      </>
      
    </>
  );

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown text-black">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
        
          <img
            src="https://i.ibb.co/gt1x1xn/logo.png"
            className=" h-12 w-14 rounded-lg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
