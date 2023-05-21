import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AddToys from "../../pages/AddToys/AddToys";
import AllToys from "../../pages/AllToys/AllToys";
import ToysDetails from "../../pages/AllToys/ToysDetails";
import Blogs from "../../pages/Blogs/Blogs";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import MyToys from "../../pages/MyToys/MyToys";
import UpdatedToys from "../../pages/MyToys/UpdatedToys";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "toys",
        element: <AllToys />,
        loader: () =>
          fetch(`https://toy-marketplace-server-silk.vercel.app/toys`),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoutes>
            <ToysDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-silk.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "add_toys",
        element: (
          <PrivateRoutes>
            <AddToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "my_toys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },

      {
        path: "update_toys/:id",
        element: (
          <PrivateRoutes>
            <UpdatedToys />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-silk.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
