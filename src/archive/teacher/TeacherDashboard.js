import React from "react";
import TeacherNavSide from "../components/TeacherNav/TeacherNavSide";
import TeacherNavTop from "../components/TeacherNav/TeacherNavTop";
import TeacherNavBottom from "../components/TeacherNav/TeacherNavBottom";
import ProjectSubmission from "./projectSubmission/ProjectSubmission";
import StudentProfile from "./studentProfile/StudentProfile";
import HelpRequest from "../components/HelpRequest/HelpRequest";
import "./TeacherDashboard.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { NavTeacherDashboard, NavTeacherSetting } from "../dataset";

export default function StudentDashboard() {
  return (
    <div className="layout_teacher_nav">
      <TeacherNavTop layout="teachers" />
      <div className="middle-wrapper">
        <TeacherNavSide
          navData={NavTeacherDashboard}
          settingData={NavTeacherSetting}
          profile="/teacher-nav-profilephoto.png"
        />
        <div className="teacher-content-wrapper">
          <div className="teacher-content">
            <Switch>
              <Route exact path="/teachers/studentprofile" component={StudentProfile}></Route>
              <Route exact path="/teachers/submission" component={ProjectSubmission}></Route>
              <Route exact path="/teachers/requests" component={HelpRequest}></Route>
              <Redirect from="/teachers" to="/teachers/submission" />
            </Switch>
          </div>
        </div>
      </div>
      <TeacherNavBottom />
    </div>
  );
}
