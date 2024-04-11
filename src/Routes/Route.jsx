import { createBrowserRouter } from "react-router-dom";
import Root from "./LayOut/Root";
import Home from "../Navber/Home";
import Signin from "../Navber/Signin";
import Singup from "../Navber/Singup";
import Error from "../Error/Error";
import Reservations from "../Navber/Privats/Reservations";
import PrivateRoute from "../Navber/Privats/PrivateRoute";
import Profile from "../Navber/Profile";
import CatagoriDetils from "../Component/CatagoriDetils";
import Contact from "../Navber/Contact";
import About from "../Navber/About";
import Gallary from "../Navber/Gallary";
import UpdatePrifile from "../Navber/UpdatePrifile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Singup></Singup>,
      },
      {
        path: "/gallary",
        element: <PrivateRoute><Gallary></Gallary></PrivateRoute>,
      },
      {
        path: "/reservetion",
        element: (
          <PrivateRoute>
            <Reservations></Reservations>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
           <UpdatePrifile></UpdatePrifile>
          </PrivateRoute>
        ),
      },
      {
        path: "/ditels/:id",
        element: <CatagoriDetils></CatagoriDetils>,
        loader: () => fetch("Data.json"),
      },
    ],
  },
]);

export default router;
