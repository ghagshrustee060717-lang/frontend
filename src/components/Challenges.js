import React, { useState } from "react";
import "./Challenges.css";

function Challenges(){
    const [isCompleted, setisCompleted] = useState([]);
    const iscomplteed = false

    const handleComplete = (index) => {
        if(isCompleted.includes(index)){
            setisCompleted(isCompleted.filter(i => i !== index));
        } else {
            setisCompleted([...isCompleted, index]);
        }
    };


const challenges = [
{
title: "Use a Reusable Bottle",
image: "https://images.unsplash.com/photo-1605539586415-daa9dfa260df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1526401485004-2fda9f47c1c1",
description: "Avoid single-use plastic bottles by carrying a reusable water bottle."
},
{
title: "Turn Off Unused Lights",
image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
description: "Save electricity by turning off lights when they are not needed."
},
{
title: "Plant a Tree",
image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
description: "Planting trees helps absorb carbon dioxide and improve air quality."
},
{
title: "Avoid Plastic Bags",
image: "https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
description: "Use cloth or reusable bags when shopping to reduce plastic waste."
}
];

return(

<div className="challenge-container">

<h1>🌍 Eco Challenges</h1>
<p>Take small actions today to create a sustainable tomorrow.</p>

<div className="challenge-grid">

{challenges.map((challenge,index)=>(
<div className="challenge-card" key={index}>

<img src={challenge.image} alt="challenge"/>

<h3>{challenge.title}</h3>

<p>{challenge.description}</p>

<button onClick={() => handleComplete(index)}>
    {isCompleted.includes(index) ? "completed" : "Mark Complete"}
</button>

</div>
))}

</div>

</div>

)

}

export default Challenges;