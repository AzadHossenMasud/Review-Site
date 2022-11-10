import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllServices from "../pages/AllServices/AllServices";
import GiveReview from "../pages/GiveReview/GiveReview";
import Home from "../pages/Home/Home/Home";
import Login from '../pages/Login/Login';
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'myreviews',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: 'givereview/:id',
          element: <GiveReview></GiveReview>,
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/givereview/${params.id}`);
          },
        },
        {
          path: 'services',
          element: <AllServices></AllServices>,
          loader: async () => {
            return fetch('http://localhost:5000/allservices');
          },
        },
        {
          path: 'services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/services/${params.id}`);
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