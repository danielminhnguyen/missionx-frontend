import React from "react";
import "./TeacherProfile.scss";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function TeacherProfile() {
  return (
    <div className="homepage">
      <NavigationBar />
      <PersonalPage />
      <Footer />
    </div>
  );
}

export default TeacherProfile;

function PersonalPage() {
  return (
    <div className="flex-center">
      <div className="profile-wrapper">
        <div className="info-container">
          <img src="/teacher-nav-profilephoto.png" alt=""></img>
          <button>Edit Profile</button>
          <button>Change Photo</button>
          <button>Settings</button>
        </div>
        <div className="right-column">
          <div className="info-container">
            <h1>Jasmina Salvador</h1>
            <div className="info-content">
              <label htmlFor="">School</label>
              <span>Homai School</span>
              <label htmlFor="">Course Purchased</label>
              <span>Beginner</span>
              <label htmlFor="">Date of Birth</label>
              <span>25 June 1986</span>
              <label htmlFor="">Contact No</label>
              <span>027 754 28 00</span>
              <label htmlFor="">Email Address</label>
              <span>jsalvador@homai.edu</span>
            </div>
          </div>
          <div className="button-wrapper">
            <Link to="/teachers/projects" className="button-three">
              Back to projects
            </Link>
            <Link to="/teachers/" className="button-one">
              Back to dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
