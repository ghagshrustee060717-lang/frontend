import React, { use, useEffect, useState } from "react";
import "./CleanupDrive.css";
import axios from "axios";

function CleanupDrive(){
const [drives, setDrives] = useState([]);

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





export default CleanupDrive;