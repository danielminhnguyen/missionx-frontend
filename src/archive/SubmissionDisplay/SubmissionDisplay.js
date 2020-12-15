import React, { Component } from "react";
import PropTypes from "prop-types";
import { SubmissionData } from "../../dataset";
import "./SubmissionDisplay.scss";
import Dialog from "@material-ui/core/Dialog";

export default class SubmissionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SubmissionData,
      active: 0,
      enlarge: false,
      photoID: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectClick = this.selectClick.bind(this);
    this.enlargeClose = this.enlargeClose.bind(this);
  }

  handleClick(id, url, event) {
    console.log(id);
    if (event.target.tagName === "BUTTON") {
      this.setState({ enlarge: true });
      this.setState({ photoID: url });
    } else {
      if (this.state.active === id) {
        this.setState({ active: 0 });
        // console.log("click True");
      } else {
        this.setState({ active: id });
        // console.log("click False");
      }
    }
  }

  selectClick(id, event) {
    // console.log("click");
    // console.log(event.target.checked);
    let a = this.state.data.slice();
    for (let i = 0; i < a.length; i++) {
      if (this.state.data[i].id === id) {
        a[i].select = event.target.checked;
      }
    }
    this.setState({ data: a });
  }

  enlargeClose() {
    this.setState({ enlarge: false });
  }

  render() {
    // console.log(this.state.active);
    let projects = this.state.data.map((item) => (
      <SubmissionDisplayComponent
        key={item.id}
        name={item.name}
        profileURL={item.profileURL}
        projectURL={item.projectURL}
        gender={item.gender}
        timestamp={item.timestamp}
        handleClick={this.handleClick}
        selectClick={this.selectClick}
        englargePhoto={this.englargePhoto}
        open={this.state.active}
        id={item.id}
      />
    ));

    return (
      <div className="submissionContainer">
        {this.state.enlarge && (
          <Dialog
            open={this.state.enlarge}
            alt="enlarge"
            className="enlarge-photo"
            onClose={this.enlargeClose}
            maxWidth="lg"
          >
            <img src={this.state.photoID} alt="enlarge"></img>
          </Dialog>
        )}
        {projects}
      </div>
    );
  }
}

SubmissionDisplayComponent.propTypes = {
  gender: PropTypes.string,
  timestamp: PropTypes.string,
  selectClick: PropTypes.func,
  id: PropTypes.string,
  handleClick: PropTypes.func,
  projectURL: PropTypes.string,
  profileURL: PropTypes.string,
  name: PropTypes.string,
  open: PropTypes.string,
};

function SubmissionDisplayComponent(props) {
  // Determine his or her
  let gen;
  if (props.gender === "M") {
    gen = " his";
  } else if (props.gender === "F") {
    gen = " her";
  } else {
    gen = "";
  }

  // Extract Date and Time
  let d = new Date(props.timestamp);
  let time = d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  let stringDate = d.toString();
  let date = `${stringDate.substring(0, 3)} ${d.getDate()} ${stringDate.substring(
    4,
    7
  )} ${d.getFullYear()}`;

  return (
    <div className="submission-item">
      <input type="checkbox" onClick={(event) => props.selectClick(props.id, event)} />
      <div
        className="project-wrapper"
        onClick={(event) => props.handleClick(props.id, props.projectURL, event)}
      >
        <img src={props.profileURL} alt="" />
        <div className="submission-message">
          <span className="status">
            {props.name} want to show{gen} project
          </span>
          <span className={`teacher-project-image ${props.open === props.id ? "active" : ""}`}>
            <img src={props.projectURL} alt="" />
            <button>Enlarge Photo</button>
          </span>
        </div>
        <div className="submission-timestamp">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
