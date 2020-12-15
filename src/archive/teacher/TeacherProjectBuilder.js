import React from "react";
import TeacherNavSide from "../components/TeacherNav/TeacherNavSide";
import TeacherNavTop from "../components/TeacherNav/TeacherNavTop";
import TeacherNavBottom from "../components/TeacherNav/TeacherNavBottom";

import HelpRequest from "../components/HelpRequest/HelpRequest";
import "../teacher/TeacherDashboard.scss";
import { Route, Switch } from "react-router-dom";
import { ProjectBuilderTeacher, NavTeacherSetting } from "../dataset";
import LearningObjective from "../student/LearningObjective/LearningObjective";
import Instruction from "../student/Instruction/Instruction";
import Tutorial from "../student/Tutorial/Tutorial";
import MakeProject from "../student/MakeProject/MakeProject";
import SubmitProject from "../student/SubmitProject/SubmitProject";

export default function TeacherProjectBuilder() {
  return (
    <div className="layout_teacher_nav">
      <TeacherNavTop layout="teachers" />
      <div className="middle-wrapper">
        <TeacherNavSide
          navData={ProjectBuilderTeacher}
          settingData={NavTeacherSetting}
          profile="/teacher-nav-profilephoto.png"
        />
        <div className="teacher-content-wrapper">
          <div className="teacher-content">
            <Switch>
              <Route exact path="/teachers/project/objective" component={LearningObjective}></Route>
              <Route exact path="/teachers/project/instruction" component={Instruction}></Route>
              <Route exact path="/teachers/project/tutorial" component={Tutorial}></Route>
              <Route exact path="/teachers/project/requests" component={HelpRequest}></Route>
              <Route exact path="/teachers/project/makeproject" component={MakeProject}></Route>
              <Route exact path="/teachers/project/submitproject" component={SubmitProject}></Route>
            </Switch>
          </div>
        </div>
      </div>
      <TeacherNavBottom />
    </div>
  );
}
