import React, {useState} from "react";
import "./Calculator.css";

function Calculator(){

const [electricity,setElectricity] = useState("");
const [travel,setTravel] = useState("");
const [result,setResult] = useState("");

function calculate(){

let carbon = (electricity * 0.5) + (travel * 0.2);

setResult(carbon.toFixed(2));

}

return(

<div className="calculator-container">

<div className="calculator-box">

<h2>🌱 Carbon Footprint Calculator</h2>

<input
type="number"
placeholder="Electricity usage (units/month)"
onChange={(e)=>setElectricity(e.target.value)}
/>

<input
type="number"
placeholder="Travel distance (km/week)"
onChange={(e)=>setTravel(e.target.value)}
/>

<button onClick={calculate}>Calculate</button>

{result && (
<h3 className="result">
Your Carbon Footprint: {result} kg CO₂
</h3>
)}

</div>

</div>

)

}

export default Calculator;