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
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Singup></Singup>,
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
        path: "/ditels/:id",
        element: <CatagoriDetils></CatagoriDetils>,
        loader: () => fetch("Data.json"),
      },
    ],
  },
]);

export default router;
