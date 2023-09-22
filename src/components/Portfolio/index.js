import React from 'react';
import myImage from '../../assets/images/resume.jpg';
import "./index.scss";

function Portfolio() {
    return (
      <div className="image-container">
        <img src={myImage} alt="Professional" className="full-width-image" />
      </div>
    );
  }
  
  export default Portfolio;