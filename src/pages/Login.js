import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("user");
const navigate = useNavigate();

const handleRegister = async (e) => {

e.preventDefault();

try{

await axios.post("http://localhost:5000/api/login",{
email,
password,
role
});

alert("Login Successfully");
navigate("/dashboard");

}catch(error){

alert("Error Loging user");

}

};

return(

<div className="login-container">

<div className="register-box">

<h2>Login 🌱</h2>

<form onSubmit={handleRegister}>



<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="role-select"
>
<option value="user">User</option>
<option value="admin">Admin</option>
</select>

<button type="submit">Login</button>

</form>
<p>Don't have an account? <p className="navigate" onClick={() => navigate("/register")}>Register</p></p>
</div>

</div>

)
}

export default Login;