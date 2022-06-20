import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>TailWind</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
