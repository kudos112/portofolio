import React from "react";

const HireMe = () => {
  return (
    <div className="main" id="hireme">
      <h1 className="prof-title">Hire Me!</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        <a
          itemprop="url"
          href="https://www.fiverr.com/miankuddoos"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={require("../../assets/images/fiverr.png")}
            alt="hire me on fiverr"
          />
        </a>
      </div>
    </div>
  );
};

export default HireMe;
