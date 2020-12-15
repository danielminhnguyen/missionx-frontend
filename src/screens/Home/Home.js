import React from "react";
import PropTypes from "prop-types";
import SlideShow from "components/Slideshow/Slideshow";
import OverlayIcon from "components/OverlayIcon/OverlayIcon";
import { slideshow, digitalSkills, studentCreation } from "../../dataset";
import "./Home.scss";
import Tabs from "components/Tabs/Tabs";
import bulletpoint from "./bullet-point.png";
import section4 from "./home-sectionfour.png";

Home.propTypes = {
  signUp: PropTypes.func,
};

export default function Home(props) {
  return (
    <div className="content-wrapper">
      <section className="header-bottom" src="/home-header.png">
        <div>
          <h1>
            Prepare young minds for a better <span>future.</span>
          </h1>
          <p>
            Let us help you advance students in Digital Technologies and other learning areas with
            our project-based learning programme.
          </p>
          <div className="button-wrapper">
            <div>
              <button className="button-two">Learn More</button>
            </div>
            <div className="button-signup-wrapper">
              <button className="button-one" onClick={() => props.signUp("Sign Up")}>
                Sign Up
              </button>
              <p>*Basic subscription includes the first 15 projects free of charge.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/home-header.png" alt="" />
        </div>
      </section>

      <section className="section-1">
        <div className="section-column">
          <div>
            <div>
              <h1>What we offer</h1>
              <p>
                The Creative Problem Solving programme is series of digital creation projects aimed
                to encourage self-motivation and student agency, designed by New Zealand’s leading
                IT industry experts and schools.
              </p>
            </div>
            <h1>What will students create?</h1>
            <div className="center-wrapper">
              <OverlayIcon data={studentCreation} />
            </div>
          </div>
        </div>

        <div className="section-column">
          <SlideShow data={slideshow} />
        </div>
      </section>

      <section className="section-2">
        <h2>
          Teaching kids programming and digital skills is <span>MORE</span> than just writing code.
        </h2>
        <OverlayIcon data={digitalSkills} />
        <div></div>
      </section>
      <section className="section-3">
        {/* Tab links */}

        <Tabs>
          <div label="LEARNING PATHWAYS">
            <p>Content</p>
          </div>
          <div label="DIGITAL TECHNOLOGIES">
            <p>Content</p>
          </div>
          <div label="KEY COMPETENCIES">
            <div>
              <title>Enhance key competencies</title>
              <p>
                The programme enhances capabilities of students in the 5 Key Competencies identified
                in the New Zealand Curriculum:
              </p>
              <div>
                <div className="section3-list">
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>THINKING</span>
                      <p>
                        In particular the programme focused on problem solving, design thinking and
                        computational thinking.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>DISCERNING CODES</span>
                      <p>
                        Analysing language, symbols, and texts in order to understand and make sense
                        of the codes in which knowledge is expressed.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>SELF-MANAGEMENT</span>
                      <p>
                        Projects and challenges are designed to motivate students to explore and
                        experiment with self-motivation
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>RELATIONSHIPS WITH PEERS</span>
                      <p>
                        The programme is designed with unplugged sessions where students interact in
                        a range of different situations, including things like being able to listen
                        well, recognise different points of view, and share ideas.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>PARTICIPATION AND COLLABORATION</span>
                      <p>
                        The programme encourages students to be involved in communities, such as
                        family, whānau, school, and contribute and make connections with other
                        people
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="IR4.0">
            <p>Content</p>
          </div>
        </Tabs>
      </section>

      <section className="section-4">
        <div>
          <img src={section4} alt="" />
        </div>
        <div>
          <h1>What are you waiting for?</h1>
          <h4>Start teaching Digital Technologies today.</h4>
          <span>
            If you need more information, we are happy to answer any questions you may have.
          </span>
          <div className="button-wrapper">
            <button className="button-two">ENQUIRE NOW</button>
            <button className="button-one" onClick={() => props.signUp("Sign Up")}>
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
