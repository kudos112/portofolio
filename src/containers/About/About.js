import React, {useContext} from "react";
import "./Blog.scss";
import {aboutSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function About() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="About">
        <div className="blog-header">
          <h1 className="blog-header-text">
            {`${aboutSection.title} `}{" "}
            <span className="icon" role="img" aria-label="rocket">
              🚀
            </span>
          </h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {aboutSection.subtitle}
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <div className="blog-main-div">
            {/* <div className="blog-text-div"> */}
            {aboutSection.display && aboutSection.description1}
            {/* </div> */}
          </div>
          <div className="blog-main-div">
            {/* <div className="blog-text-div"> */}
            {aboutSection.display && aboutSection.description2}
            {/* </div> */}
          </div>
          <div className="blog-main-div">
            {/* <div className="blog-text-div"> */}
            {aboutSection.display && aboutSection.description3}
            {/* </div> */}
          </div>
          <div className="blog-main-div">
            {/* <div className="blog-text-div"> */}
            {aboutSection.display && aboutSection.description4}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
