import React from "react";
import { NavLink } from "react-router-dom";
import "./coursecss.css";

const CoursePage = () => {
  return (
    <div className="page">
      <h1>
        LMS<span>E-Learning Platform</span>
      </h1>
      <h2 className="login">Login as</h2>
      <NavLink className="aaa1" to="/studentlogin">
        Student
      </NavLink>
      <br />
      <NavLink className="aaa1" to="/facultyloginforcourse">
        Faculty
      </NavLink>
    </div>
  );
};

export default CoursePage;
