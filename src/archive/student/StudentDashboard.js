import React from "react";
import TeacherNavSide from "../components/TeacherNav/TeacherNavSide";
import TeacherNavTop from "../components/TeacherNav/TeacherNavTop";
import TeacherNavBottom from "../components/TeacherNav/TeacherNavBottom";

import HelpRequest from "../components/HelpRequest/HelpRequest";
import "../teacher/TeacherDashboard.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProjectBuilderStudent, NavStudentSetting } from "../dataset";
import LearningObjective from "./LearningObjective/LearningObjective";
import Instruction from "./Instruction/Instruction";
import Tutorial from "./Tutorial/Tutorial";
import MakeProject from "./MakeProject/MakeProject";
import SubmitProject from "./SubmitProject/SubmitProject";
export default function StudentDashboard() {
  return (
    <div className="layout_teacher_nav">
      <TeacherNavTop layout="students" />
      <div className="middle-wrapper">
        <TeacherNavSide
          navData={ProjectBuilderStudent}
          settingData={NavStudentSetting}
          profile="/student-profile.png"
        />
        <div className="teacher-content-wrapper">
          <div className="teacher-content">
            <Switch>
              <Route path="/students/objective" component={LearningObjective}></Route>
              <Route path="/students/instruction" component={Instruction}></Route>
              <Route path="/students/tutorial" component={Tutorial}></Route>
              <Route path="/students/requests" component={HelpRequest}></Route>
              <Route path="/students/makeproject" component={MakeProject}></Route>
              <Route path="/students/submitproject" component={SubmitProject}></Route>
              <Redirect from="/students" to="/students/objective" />
            </Switch>
          </div>
        </div>
      </div>
      <TeacherNavBottom />
    </div>
  );
}
