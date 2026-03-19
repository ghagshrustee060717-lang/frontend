import React from "react";
import "./Dashboard.css";

function UserDashboard(){

return(

<div className="dashboard-container">

<h1>🌱 User Dashboard</h1>

<div className="dashboard-grid">

<div className="dashboard-card">
<h3>Carbon Calculator</h3>
<p>Calculate your carbon footprint and track sustainability impact.</p>
</div>

<div className="dashboard-card">
<h3>Eco Challenges</h3>
<p>Complete sustainability challenges and earn eco points.</p>
</div>

<div className="dashboard-card">
<h3>Clean Up Drives</h3>
<p>Join community clean-up drives and help protect the environment.</p>
</div>

</div>

</div>

)

}

export default UserDashboard;