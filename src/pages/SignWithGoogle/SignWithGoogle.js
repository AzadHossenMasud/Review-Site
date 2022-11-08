import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const SignWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const {loginWithGoogle} = useContext(AuthContext)
    // console.log(loginWithGoogle);
    const handleGoogle =()=>{
        loginWithGoogle(provider)
        .then((result) => {
    
            const user = result.user;
            console.log(user);
            // ...
          }).catch((error) => {
            console.log(error)
          });

    }

    return (
        <div>
            <button onClick={handleGoogle} className="btn">Continue With Google</button>

        </div>
    );
};

export default SignWithGoogle;