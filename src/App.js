import logo from './logo.svg';
import './App.css';
import  Login  from './Login/login';
import Register from './Register/register';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import Leftbar from './Components/Leftbar/leftbar';
import Rightbar from './Components/Rightbar/rightbar';
import Profile from './Profile/profile';
import Home from './Home/home';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./style.scss";

function App() {

  const currentUser=true;

  const Layout=()=>{
    return(
      <div className='theme-dark'>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ flex: 8 }}>
          <Home/>
          {/* <Outlet /> */}
        </div>
        <Rightbar />
      </div>
    </div>)
  }

  const ProtectedRoute=({children})=>{
 if(!currentUser){
  return(<Navigate to="/login"></Navigate>)
 }
 else{
  return children;
 }
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,     
    },
    {
      path: "/register",
      element: <Register/>,     
    },
    {
      path: "/",
      element: (<ProtectedRoute><Layout/></ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home/>,
       
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ],
    },
  ]);

  return (
    <div>  
      <RouterProvider router={router} />
         </div>
  );
}

export default App;
