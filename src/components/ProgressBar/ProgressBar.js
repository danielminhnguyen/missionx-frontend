import React from "react";
import "./ProgressBar.scss";

export default function ProgressBar(props) {
  const repeat = { props };
  let dom = [];
  for (let i = 0; i < repeat; i++) {
    dom.push(<ProgressBarComponent />);
  }
  return <div className="circle-wrapper">{dom}</div>;
}

function ProgressBarComponent() {
  return <div className="progress-circle"></div>;
}
