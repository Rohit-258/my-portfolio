import React from 'react'
import "./Intro.css"
import Typical from "react-typical";
import Me from "../../img/me.png"
const Intro = () => {
    return (
      <div className="i">
        <div className="i-m"></div>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, I'm</h2>
            <h1 className="i-name"> Rohit Saha</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">
                  <h1>
                    {" "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Tech Enthusiast",
                        2000,
                        "MERN Stack Developer",
                        2000,
                        "Full Stack Developer",
                        2000,
                        "Software Enginner",
                        2000,
                      ]}
                    />
                  </h1>
                </div>
              </div>
            </div>
            <p className="i-desc">
              Knack of building applications with front and back end operations.
              {/* I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. */}
            </p>
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/rohit.saha.3517"
                target="_blank"
              >
                <i className=" colz-icon fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/iamrohit_saha/"
                target="_blank"
              >
                <i className=" colz-icon fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://github.com/Rohit-258" target="_blank">
                <i className="colz-icon fab fa-github fa-2x"></i>
              </a>
              <a href="https://mobile.twitter.com/iamRohitSaha" target="_blank">
                <i className="colz-icon fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-saha-ba3169191/"
                target="_blank"
              >
                <i className="colz-icon fab fa-linkedin fa-2x"></i>
              </a>
            </div>
            <div className="profile-options">
              <a href="../contact/Contact"></a>
              <button className="btn primary-btn"> Hire Me! </button>
              <a href="ROHIT_SAHA_NEW_CV.PDF" download="ROHIT_SAHA_NEW_CV.PDF">
                <button className="btn highlighted-btn">My Resume</button>
              </a>
            </div>
          </div>
          {/* <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className="i-scroll"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg> */}
        </div>
        <div className="i-right">
          <div className="i-bg"> </div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    );
}

export default Intro
