import React from "react";
import "./MakeProject.scss";

export default function MakeProject() {
  return (
    <div className="iframe-container">
      <div className="iframe-wrapper">
        <object
          aria-labelledby="label1"
          id="label1"
          aria-label=""
          type="text/html"
          data="http://www.example.com"
        ></object>
      </div>
    </div>
  );
}
