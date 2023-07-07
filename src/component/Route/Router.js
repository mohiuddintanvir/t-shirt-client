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
import PrivateRoutes from "./privateRoutes/PrivateRoutes";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
      element: <PrivateRoutes><Home></Home></PrivateRoutes> ,
        },
        {
          path: "/shop",
      element:<PrivateRoutes><Shop></Shop></PrivateRoutes>  ,
        },
        {
          path: "/blog",
      element:<PrivateRoutes><Blog></Blog></PrivateRoutes>  ,
        },
        {
          path: "/about",
      element:<PrivateRoutes><About></About></PrivateRoutes>  ,
        },
        {
          path: "/contact",
      element:<PrivateRoutes><Contactus></Contactus></PrivateRoutes>  ,
        },
        {
          path: "/login",
      element:<Login></Login> ,
        },
        {
          path: "/signup",
      element:<Signin></Signin> ,
        },
      ]
    },
    {
      path:'/deshboard',
      element:<PrivateRoutes><DeshBoard></DeshBoard></PrivateRoutes> 
    }
  ]);
  export default router;


