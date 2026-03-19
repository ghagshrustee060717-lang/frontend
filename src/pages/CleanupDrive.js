import React, { use, useEffect, useState } from "react";
import "./CleanupDrive.css";
import axios from "axios";

function CleanupDrive(){
const [drives, setDrives] = useState([]);
// const drives = [
// {
// location:"Juhu Beach",
// date:"15 April 2026",
// time:"7:00 AM"
// },
// {
// location:"Sanjay Gandhi National Park",
// date:"20 April 2026",
// time:"8:30 AM"
// },
// {
// location:"Powai Lake",
// date:"28 April 2026",
// time:"7:30 AM"
// }
// ];
useEffect(()=>{
    // Fetch scheduled drives from backend and update state
    const drives= axios.get("http://localhost:5000/api/scheduled-drives").then(((res)=>{
        setDrives(res.data.drives);
    }))
},[]);

return(

<div className="drive-container">

<h1>🌿 Community Clean Up Drives</h1>

<p>Join our mission to make the environment cleaner and greener.</p>

<div className="drive-grid">

{drives.map((drive,index)=>(

<div className="drive-card" key={index}>

<h3>{drive.title}</h3>

<p>📅 Date: {drive.date}</p>

<p>⏰ Time: {drive.time}</p>

<button>Join Drive</button>

</div>

))}

</div>

</div>

)

}

// return(

// <div className="drive-container">

// <h1>🌿 Community Clean Up Drives</h1>

// <p>Join our mission to make the environment cleaner and greener.</p>

// <div className="drive-grid">

// {drives.map((drive,index)=>(

// <div className="drive-card" key={index}>

// <h3>{drive.location}</h3>

// <p>📅 Date: {drive.date}</p>

// <p>⏰ Time: {drive.time}</p>

// <button>Join Drive</button>

// </div>

// ))}

// </div>

// </div>

// )




export default CleanupDrive;