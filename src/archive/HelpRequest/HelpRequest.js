import React, { useState } from "react";
import { SubmissionData } from "../../dataset";
import "../SubmissionDisplay/SubmissionDisplay.scss";
import PropTypes from 'prop-types'

export default function HelpRequest() {
  const [data, setData] = useState(SubmissionData);
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    if (active === id) {
      setActive(0);
    } else {
      setActive(id);
    }
  };

  const selectClick = (id, event) => {
    // console.log("click");
    // console.log(event.target.checked);
    const a = data.slice();
    for (let i = 0; i < a.length; i++) {
      if (data[i].id === id) {
        a[i].select = event.target.checked;
      }
    }
    setData(a);
  };

  // console.log(this.state.active);
  const projects = data.map((item) => (
    <HelpRequestComponent
      key={item.id}
      name={item.name}
      profileURL={item.profileURL}
      projectURL={item.projectURL}
      gender={item.gender}
      timestamp={item.timestamp}
      handleClick={handleClick}
      selectClick={selectClick}
      open={active}
      id={item.id}
    />
  ));

  return (
    <div className="submissionContainer">{projects}</div>
  );
}

HelpRequestComponent.propTypes = {
  gender: PropTypes.string,
  timestamp: PropTypes.string,
  profileURL: PropTypes.string,
  selectClick: PropTypes.func,
  handleClick: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  projectURL: PropTypes.string,
  open: PropTypes.number
}

function HelpRequestComponent(props) {
  const {
    gender, timestamp, profileURL, selectClick, handleClick, id, name, projectURL, open,
  } = props;
  let gen;
  if (gender === "M") {
    gen = " his";
  } else if (gender === "F") {
    gen = " her";
  } else {
    gen = "";
  }

  // Extract Date and Time
  const d = new Date(timestamp);
  const time = d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  const stringDate = d.toString();
  const date = `${stringDate.substring(0, 3)} ${d.getDate()} ${stringDate.substring(
    4,
    7,
  )} ${d.getFullYear()}`;

  //
  return (
    <div className="submission-item">
      <input type="checkbox" onClick={(event) => selectClick(id, event)} />
      <div className="project-wrapper" onClick={() => handleClick(id)}>
        <img src={profileURL} alt="" />
        <div className="submission-message">
          <span className="status">
            {name}
            {" "}
            needs help with
            {gen}
            {" "}
            project
          </span>
          <span className={`teacher-project-image ${open === id ? "active" : ""}`}>
            <img src={projectURL} alt="" />
            <button type="button">Enlarge Photo</button>
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
