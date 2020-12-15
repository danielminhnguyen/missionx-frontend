import "./SubmitProject.scss";

import React from "react";

export default function SubmitProject() {
  return (
    <div className="submit-project-wrapper">
      <div className="submit-column">
        <img src="/student-submit-project-1.png" alt="" />
        <h3>Submit Project Photo</h3>
        <p>After completing your project, take a screenshot of your project and upload it here.</p>
        <button>Send Photo</button>
      </div>
      <div className="submit-column">
        <img src="/student-submit-project-2.png" alt="" />
        <h3>Show your teacher</h3>
        <p>
          If your teacher is in the same room as you, click the button below to let them know you
          are done.
        </p>
        <button>Call Teacher</button>
      </div>
    </div>
  );
}
