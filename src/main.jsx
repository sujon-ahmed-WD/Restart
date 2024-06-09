import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './Commponents/Root';
import Home from './Home';
import Jobs from './Commponents/Appliedjobs/Jobs';
import Errorpage from './Errorpage/Errorpage';
import Statistics from './Commponents/Statistics/Statistics';
import Blogs from './Blogs/Blogs';
import JobDetails from './Catagori/Featured/Job Details/JobDetails';
import Praties from './Catagori/Featured/Job/Praties/Praties';
import AppliedJobs from './Commponents/Appliedjobs/Jobs';

const router=createBrowserRouter([{
  path:"/",
  element:<Root></Root> ,
  errorElement:<Errorpage></Errorpage>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/applied',
      element:<AppliedJobs></AppliedJobs>,
      loader:() =>fetch('/jobs.json') // warning : only load the data you
      // need.do not load all the data
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/job/:id',
      element:<JobDetails></JobDetails>,
       loader:() => fetch('../jobs.json') // ata use kora dorker nii ok bujos..
    },
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
