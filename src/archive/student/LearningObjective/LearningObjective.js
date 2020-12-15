import React from "react";
import "./LearningObjective.scss";

export default function LearningObjective() {
  return (
    <div className="student-objective-wrapper">
      <h2>Explore Scratch blocks</h2>
      <div>
        Learn the basic function of some basic scratch blocks such as “say,” “wait,” “go to” and
        “hide.”
      </div>
      <div className="learning-block-wrapper">
        <div>
          <h3>Look Blocks</h3>
          <div className="block-image">
            <img src="/objective-block-1-0.png" alt="" />
            <div className="image-sub">
              <img src="/objective-block-1-1.png" alt="" />
              <img src="/objective-block-1-2.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h3>Control Blocks</h3>
          <div className="block-image">
            <img src="/objective-block-2-0.png" alt="" />
            <img src="/objective-block-2-1.png" alt="" />
          </div>
        </div>

        <div>
          <h3>Motion Blocks</h3>
          <div className="block-image">
            <img src="/objective-block-3-0.png" alt="" />
            <img src="/objective-block-3-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
