import "./Instruction.scss";

import React from "react";

export default function Instruction() {
  return (
    <div className="instruction-wrapper">
      <h3>1. JOIN SCRATCH</h3>
      <p>If you haven’t used Scratch before, you will need to join Scratch first.</p>
      <p>
        Go to https://scratch.mit.edu. Click on <span>Join Scratch.</span>
      </p>
      <img src="/student-instruction.png" alt="" />
      <span>
        Follow the instructions to join. You will need a username and a password that you will
        remember. If possible, you should also verify your email address so that you can Share
        projects later. Ask your teacher to help with this step if you don’t have an email address,
        or if you are not sure what to do.
      </span>
    </div>
  );
}
