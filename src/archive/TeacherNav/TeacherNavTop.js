import React from "react";
import "./TeacherNavTop.scss";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import FlagNZ from "../../img/nz-flag.png";
import FlagMaori from "../..//img/maori-flag.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import PropTypes from "prop-types";

TeacherNavTop.propTypes = {
  layout: PropTypes.string,
};

export default function TeacherNavTop(props) {
  return (
    <div className="nav-teacher-top" id="dashboard-top">
      <Link to="/">
        <img src={logo} alt=""></img>
      </Link>
      <div className="project-wrapper">
        <div className="project-name">
          <span>PROJECT</span>
          <p>Introduction</p>
        </div>
        <div className="status-wrapper">
          <span className="progress-status">1</span>
          <div className="progress">
            <ProgressBar repeat={12} />
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button-three">Take Screenshot</button>
        <button className="button-one">Ask Teacher for help</button>
        <button className="button-four">
          <Link to={`/${props.layout}/projects`}>More Projects</Link>
        </button>
      </div>
      <div className="language">
        <img src={FlagNZ} alt="language"></img>
        <img src={FlagMaori} alt="language"></img>
      </div>
    </div>
  );
}
