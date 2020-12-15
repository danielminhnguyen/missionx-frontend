import React, { Component } from "react";
import "./Projects.scss";
import LibaryIcon from "../../components/LibraryIcon/LibaryIcon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const teacher = (
      <div className="button-wrapper">
        <button>Back To Top</button>
        <Link>Back To Dashboard</Link>
      </div>
    );
    const student = (
      <div>
        <button>Back To Top</button>
      </div>
    );
    return (
      <div className="library-content-wrapper">
        <div className="content-control">
          <h3>Subscription</h3>
          <div className="control-wrapper">
            <input type="checkbox" name="Free" id="" />
            <span>Free</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="Preminum" id="" />
            <span>Premium</span>
          </div>

          <h3>Activity Type</h3>
          <div className="control-wrapper">
            <input type="checkbox" name="animation" id="" />
            <span>Animation</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="games" id="" />
            <span>Games</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="chatbots" id="" />
            <span>Chatbots</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="ar" id="" />
            <span>Augmented Reality</span>
          </div>

          <h3>Year Level</h3>
          <div className="control-wrapper">
            <input type="checkbox" name="1-4" id="" />
            <span>1-4</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="5-6" id="" />
            <span>5-6</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="7-8" id="" />
            <span>7-8</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="9-31" id="" />
            <span>9-13</span>
          </div>

          <h3>Subject Matter</h3>
          <div className="control-wrapper">
            <input type="checkbox" name="computer-science" id="" />
            <span>Computer Science</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="maths" id="" />
            <span>Maths</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="maths" id="" />
            <span>Science</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="maths" id="" />
            <span>Language</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="maths" id="" />
            <span>Art</span>
          </div>
          <div className="control-wrapper">
            <input type="checkbox" name="maths" id="" />
            <span>Music</span>
          </div>
        </div>

        <div className="content-feed">
          <div>
            <h1>PROJECTS</h1>
            <p>
              Welcome to the project library. You can use the filters on the right to help you
              search for specific projects.
            </p>
          </div>
          <div className="feed-control">
            <div className="control-level">
              <button>Beginner</button>
              <button>Intermediate</button>
              <button>Advance</button>
            </div>
            <div className="control-show-limit">
              <span>show</span>
              <button>25</button>
              <button>50</button>
              <button>100</button>
            </div>
          </div>
          <div className="feed-content">
            <LibaryIcon />
          </div>
          {this.props.category === "teacher" ? teacher : student}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  category: PropTypes.string,
};
