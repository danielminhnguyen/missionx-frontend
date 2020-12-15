import React, { Component } from "react";
import "./ModalLoginSignup.scss";
import { Link } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import student from "assets/images/modal-student.png";
import teacher from "assets/images/modal-teacher.png";

// import teacher from "@images/modal-teacher.png";

export default class ModalLoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal-login" id="modal">
          <div className="student-login">
            <img src={student} alt="" />
            <div className="login-signup-switch">
              <h2>Students</h2>
              <Tabs setactive={this.props.request}>
                <div label="Login">
                  <input type="email" name="" id="" placeholder="email" />
                  <input type="password" name="" placeholder="password" id="" />
                  <Link to="/students" onClick={() => this.props.close()}>
                    <button className="button-one">Login</button>
                  </Link>
                </div>
                <div label="Sign Up">
                  <input type="fullname" name="" id="" placeholder="fullname" />
                  <input type="email" name="" id="" placeholder="email" />
                  <input type="password" name="" id="" placeholder="password" />
                  <input type="confirm" name="" id="" placeholder="confirm password" />
                  <Link to="/students" onClick={() => this.props.close()}>
                    <button className="button-one">Sign Up</button>
                  </Link>
                </div>
              </Tabs>
            </div>
          </div>

          <div className="teacher-login">
            <img src={teacher} alt="" />
            <div className="login-signup-switch">
              <h2>Teachers</h2>
              <Tabs setactive={this.props.request}>
                <div label="Login">
                  <input type="email" name="" id="" placeholder="email" />
                  <input type="password" name="" placeholder="password" id="" />
                  <Link to="/teachers" onClick={() => this.props.close()}>
                    <button className="button-one">Login</button>
                  </Link>
                </div>
                <div label="Sign Up">
                  <input type="fullname" name="" id="" placeholder="fullname" />
                  <input type="email" name="" id="" placeholder="email" />
                  <input type="password" name="" id="" placeholder="password" />
                  <input type="confirm" name="" id="" placeholder="confirm password" />
                  <Link to="/teachers" onClick={() => this.props.close()}>
                    <button className="button-one">Sign Up</button>
                  </Link>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
