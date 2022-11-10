import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import AllServices from "../pages/AllServices/AllServices";
import GiveReview from "../pages/GiveReview/GiveReview";
import Home from "../pages/Home/Home/Home";
import Login from '../pages/Login/Login';
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignUp from '../pages/SignUp/SignUp'
import UpdateReview from "../pages/UpdateReview/UpdateReview";
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
          path: 'addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: 'updatereview/:id',
          element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
          loader: async ({params}) => {
            return fetch(`http://localhost:5000/updatereview/${params.id}`);
          },
        },
        {
          path: 'givereview/:id',
          element: <PrivateRoute><GiveReview></GiveReview></PrivateRoute>,
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