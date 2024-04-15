import React from "react";
import { NavLink } from "react-router-dom";
import "./bgcss.css";

const HomePage = () => {
  return (
    <div className="page">
      <h1>
        EMIS<span>Education Management Information System</span>
      </h1>

      <h2 className="login">Login as</h2>

      <NavLink className="aaa" to="/login">
        Admin
      </NavLink>
      <br></br>
      <br></br>
      <NavLink className="aaa" to="/districtlogin">
        District Head
      </NavLink>
      <br></br>
      <br></br>
      <NavLink className="aaa" to="/schoollogin">
        School Head
      </NavLink>
      <br></br>
      <br></br>
      <NavLink className="aaa" to="/learninghomepage">
        Learning Platform
      </NavLink>
      <br></br>
      <br></br>
      <NavLink className="aaa" to="http://localhost:5000/">
        Student Faculty Chat ! 
      </NavLink>
      <br></br>
      <br></br>
      <NavLink className="aaa" to="/scholarship">
        Scholarship Portal 
      </NavLink>
    </div>
  );
};

export default HomePage;
