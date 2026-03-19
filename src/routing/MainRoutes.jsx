import React from 'react'
import { Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Calculator from "../components/Calculator";
import Challenges from "../components/Challenges";
// import Navbar from "./components/Navbar";
import CleanupDrive from "../pages/CleanupDrive";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ScheduleDrive from '../pages/ScheduleDrive';

const MainRoutes = () => {
  return (
    <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/calculator" element={<Calculator/>}/>
<Route path="/challenges" element={<Challenges/>}/>
<Route path="/CleanupDrive" element={<CleanupDrive/>}/>
<Route path="/user-dashboard" element={<UserDashboard/>}/>
<Route path="/admin-dashboard" element={<AdminDashboard/>}/>
<Route path="/schedule-drive" element={<ScheduleDrive/>}/>

</Routes>

  )
}

export default MainRoutes
