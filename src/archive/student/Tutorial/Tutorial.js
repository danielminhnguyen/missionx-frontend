import "./Tutorial.scss";

import React, { Component } from "react";

export default class Tutorial extends Component {
  render() {
    return (
      <div className="flex-center">
        <div className="video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/65583694"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            title="tutorial"
          ></iframe>
        </div>
      </div>
    );
  }
}
