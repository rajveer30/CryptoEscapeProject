import React from "react";
import '../Css/Intro.css';
import home_img from '../photos/home-img2.jpg'
const Intro = () => {
  return (
    <>
      <div className="container-fluid intro">
        <div className="row">
          <div class="col">
          <h1>Introduction</h1>
              <div className="intro-txt">
             <p> At CryptoEscape, we believe that everyone should have the freedom to earn, hold, spend,
               share and give their money - no matter who you are or where you come from.</p>
              <p> A simple and smart way to start your journey in
                cryptocurencies...</p>
            </div>
          </div>

          <div class="col">
            <img src={home_img} className="intro-img" placeholder="image"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
