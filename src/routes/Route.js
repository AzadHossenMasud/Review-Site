import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllServices from "../pages/AllServices/AllServices";
import Home from "../pages/Home/Home/Home";
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'services',
          element: <AllServices></AllServices>,
          loader: async () => {
            return fetch('http://localhost:5000/allservices');
          },
        }
      ]
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'signup',
      element: <SignUp></SignUp>
    }
    
  ])