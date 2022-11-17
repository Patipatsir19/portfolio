import React from "react";

import Button from "../button/button.compnent";

import Github from "../../Asset/GitHub-Mark-64px.png";
import Netlify from "../../Asset/netlify-logo-png-transparent.png";
import LinkedIn from "../../Asset/linkedin-logo-png-2026.png";
import Kevin from '../../Asset/LINE_ALBUM_png.png'

import "./intro.styles.scss";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="intro_left">
          <div className="intro_left_name">
            <span>Hi! I am</span>
            <span>Patipat Siripisitwong</span>
            <span className="mb-2">
              Frontend Developer with beginer level of experience in web design
              <br />
              and development, producting with quality work
            </span>
          </div>
          <Button className="mb-2">contact me</Button>
          <div className="icon">
            <a href="https://github.com/Patipatsir19">
              <img src={Github} alt="" />
            </a>
            <a href="https://app.netlify.com/teams/patipatsir19/overview">
              <img src={Netlify} alt="" style={{ width: 70 }} />
            </a>
            <a href="https://www.linkedin.com/in/patipat-siripisitwong-09b283162/">
              <img src={LinkedIn} alt="" style={{ width: 70, height: 70 }} />
            </a>
          </div>
        </div>
        <div className="intro_right">
            <img src={Kevin} alt='' style={{width:400, height:500}}/>
        </div>
      </div>
    </>
  );
};

export default Intro;
