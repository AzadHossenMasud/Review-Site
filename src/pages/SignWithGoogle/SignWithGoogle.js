import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const { loginWithGoogle } = useContext(AuthContext);
  // console.log(loginWithGoogle);

  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    loginWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <button onClick={handleGoogle} className="btn">
        Continue With Google
      </button>
    </div>
  );
};

export default SignWithGoogle;
