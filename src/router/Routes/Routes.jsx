import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import About from "../../pages/About/About";
import AddToys from "../../pages/AddToys/AddToys";
import AllToys from "../../pages/AllToys/AllToys";
import Blogs from "../../pages/Blogs/Blogs";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import MyToys from "../../pages/MyToys/MyToys";

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
        path: "all_toys",
        element: <AllToys />,
      },
      {
        path: "add_toys",
        element: <AddToys />,
      },
      {
        path: "/my_toys",
        element: <MyToys />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <About />,
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
