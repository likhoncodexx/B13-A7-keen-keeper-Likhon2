import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import TimeLine from "../pages/Timeline/TimeLine";
import Stats from "../pages/Timeline/stats/Stats";

export const router = createBrowserRouter([
  
{
  path:"/",
  Component:MainLayout,
  children:[
    {
      index:true,
      element:<Homepage/>
    },
    {
      path:"/Timeline",
      element:<TimeLine/>
    },
    {
      path:"/stats",
      element:<Stats/>
    }
  ],
  errorElement:<ErrorPage/>

}
])