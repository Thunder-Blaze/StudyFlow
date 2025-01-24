import React from "react";
import "./StudentPortal.css"; 

const StudentPortal = () => {
  return (
    
    <div className="container">
      <div className="upper">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="p-header">
        <div className="p-info">
          <img
            className="p-avatar"
            src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" 
            alt="STUDENT"
          />
          <div>
            <h2>Name</h2>
            <p>1st year</p>
          </div>
        </div>
        <div className="icon">
          <span>🔴</span> 
        </div>
      </div>
      </div>

      <div className="wel-section">
        <div className="wel-header">
          <span>DATE</span>
          <h1>Welcome back, NAME</h1>
          <p>Always stay updated in your student portal</p>
        </div>
        <div className="wel-image">
          <img
            src="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" 
            alt="Student"
          />
        </div>
      </div>

      
    </div>
  );
};

export default StudentPortal;
