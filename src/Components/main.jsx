import React from "react";
import img from "/assets/img2.jpg";
import imgs from "/assets/img1.png";

function Main() {
  return (
    <div className="main" id="main">
      <div className="Explores" data-aos="zoom-in" data-aos-duration="1000">
        <h1>
          Explore the Possibilities of <span id="span">AI Book Writing</span>{" "}
          with BookAI
        </h1>

        <p>
          Unleash the power of AI to create captivating books in minutes.
          <br />
          Download, Distribute wherever you want. Generate unlimited free
          <br /> books
        </p>

        <button>
          {" "}
          <a href="https://trybookai.com/playground">Get Started</a>
        </button>
        <button>
          {" "}
          <a href="https://trybookai.com/api">Get API Access</a>
        </button>
      </div>
      <div className="quantum" data-aos="zoom-in" data-aos-duration="1000">
        <img src={imgs} alt="hello" id="hello" />
        <div className="Small">
          <div className="circle"></div>

          <img src={img} alt="kon" id="Kon" />
        </div>
        <div className="Chapter">
          <div className="into">Hello</div>
          <span>Chapter Complete</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
