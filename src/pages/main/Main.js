import React from "react";
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"

import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main_content">
        <div className="title_container">
        <span className="main_title">ut aliquip ex ea commodo consequat</span>
        </div>
        <div>
          <p className="main_block_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="main_block_one">
          <div className="main_image-container">
          <img src={img1} />
          </div>
          <p className="main_block_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          </div>
        </div>
        <div>
        <p className="main_block_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="main_block_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          <img src={img2} />

        </div>
        <div className="main_slider">
          <p>Lorem ipsum dolor sit amet</p>
          <div>
            
          </div>

        </div>
      </div>
    </div>
  );
};
