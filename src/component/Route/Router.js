import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Contactus from "../Pages/Contactus";
import Login from "../Pages/login/Login";
import Signin from "../Pages/SignUp/Signin";
import DeshBoard from "../Pages/DeshBoard/Deshboart/DeshBoard";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
      element: <Home></Home>,
        },
        {
          path: "/shop",
      element: <Shop></Shop>,
        },
        {
          path: "/blog",
      element: <Blog></Blog>,
        },
        {
          path: "/about",
      element:<About></About> ,
        },
        {
          path: "/contact",
      element: <Contactus></Contactus>,
        },
        {
          path: "/login",
      element: <Login></Login>,
        },
        {
          path: "/signup",
      element: <Signin></Signin>,
        },
      ]
    },
    {
      path:'/deshboard',
      element:<DeshBoard></DeshBoard>
    }
  ]);
  export default router;