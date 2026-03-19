import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const ScheduleDrive = () => {
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");

    const handleSchedule = async (e) => {

e.preventDefault();

try{

await axios.post("http://localhost:5000/api/schedule-drive",{
title,
date,
time
});

alert("Drive scheduled Successfully");

}catch(error){

alert("Error scheduling drive");

}

};

  return (
   <div className="register-container">

<div className="register-box">

<h2>Schedule Drive 🌱</h2>

<form onSubmit={handleSchedule}>

<input
type="text"
placeholder="Name of Drive"
value={title}
onChange={(e)=>setTitle(e.target.value)}
required
/>

<input
type="date"
placeholder="Date"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>

<input
type="time"
placeholder="Time"
value={time}
onChange={(e)=>setTime(e.target.value)}
required
/>

<button type="submit">Schedule Drive</button>

</form>

</div>

</div>
  )
}

export default ScheduleDrive
