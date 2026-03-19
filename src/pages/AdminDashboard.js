import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";


function AdminDashboard(){
    const navigate = useNavigate();

    const handeleScheduleDrive = () => {
        navigate("/schedule-drive");
    };
return(

<div className="dashboard-container">

<h1>🛠 Admin Dashboard</h1>

<div className="dashboard-grid">

<div className="dashboard-card">
<h3>Manage Users</h3>
<p>View and manage registered users.</p>
</div>

<div className="dashboard-card">
<h3>Add Eco Challenges</h3>
<p>Create and update sustainability challenges.</p>
</div>

<button onClick={handeleScheduleDrive} className="dashboard-card">
<h3>Schedule Clean Up Drives</h3>
<p>Add new clean-up drives for the community.</p>
</button>

</div>

</div>

)
}
export default AdminDashboard;