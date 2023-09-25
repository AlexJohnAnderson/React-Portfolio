import React, { useEffect, useState } from 'react';
import myImage from '../../assets/images/resume.jpg';
import "./index.scss";

function ResizableImage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img
          src={myImage}
          alt="Professional"
          style={{ maxWidth: '100%', height: 'auto', width: '100%' }}
        />
      </div>
    </div>
  );
}

export default ResizableImage;
