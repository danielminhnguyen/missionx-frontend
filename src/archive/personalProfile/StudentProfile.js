import React from "react";
import "./TeacherProfile.scss";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function StudentProfile() {
  return (
    <div className="homepage">
      <NavigationBar />
      <PersonalPage />
      <Footer />
    </div>
  );
}

export default StudentProfile;

function PersonalPage() {
  return (
    <div className="flex-center">
      <div className="profile-wrapper">
        <div className="info-container">
          <img src="/student-profile.png" alt=""></img>
          <button>Edit Profile</button>
          <button>Change Photo</button>
          <button>Settings</button>
        </div>
        <div className="right-column">
          <div className="info-container">
            <h1>Rawiri Fletcher</h1>
            <div className="info-content">
              <label htmlFor="">School</label>
              <span>Homai School</span>
              <label htmlFor="">Teacher</label>
              <span>Jasmina Salvador</span>
              <label htmlFor="">Course</label>
              <span>Beginner</span>
              <label htmlFor="">25 June 2010</label>
              <span>027 754 28 00</span>
              <label htmlFor="">Contact No</label>
              <span>022 524 63 99</span>
              <label htmlFor="">Email Address</label>
              <span>fletchy.r@gmail.com</span>
            </div>
          </div>

          <div className="button-container">
            <div className="button-wrapper">
              <Link to="/students/projects" className="button-one">
                Back To Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
