import React from "react";
import "./ProjectSubmission.scss";
import SubmissionDisplay from "../../components/SubmissionDisplay/SubmissionDisplay";

export default function ProjectSubmission() {
  return (
    <div className="teacher-project-library">
      <div className="library-content">
        <div className="library-content-control">
          <h1>PROJECT SUBMISSIONS</h1>
          <div className="button-wrapper">
            <img src="/download-icon.png" alt="" />
            <button>Download Files</button>
          </div>
          <div className="button-wrapper">
            <img src="/tick-icon.png" alt="" />
            <button>Mark As Complete Project</button>
          </div>
        </div>
        <div className="library-submission-feed">
          <SubmissionDisplay />
        </div>
      </div>
    </div>
  );
}
