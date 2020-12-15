import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StudentProfile.scss";
import { StudentProfileData } from "./StudentProfileData";

export default class studentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: StudentProfileData,
    };
  }

  render() {
    let list = this.state.data.map((item) => (
      <StudentProfileComponent key={item.id} imgURL={item.imgURL} name={item.name} />
    ));
    return (
      <div className="student-profile-wrapper" id="style">
        {list}
      </div>
    );
  }
}

StudentProfileComponent.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string,
};

function StudentProfileComponent(props) {
  return (
    <div className="student-profile-item">
      <img src={props.imgURL} alt="" />
      <span>{props.name}</span>
    </div>
  );
}
