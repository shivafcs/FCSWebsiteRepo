import React from 'react';
import videoFcs from '../images/videoforfcs.mp4';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { BsArrowRightShort } from 'react-icons/bs';
import './index.css';

const Video = () => {
  return (
    <div className="video-background">
      {/* Container with autoplaying video background */}
      <div className="video-container">
        <video autoPlay muted loop className="video-bg">
          {/* Add your video source */}
          <source src={videoFcs} type="video/mp4" />
          {/* Add other video formats if needed */}
        </video>

        {/* Customized content */}
        <div className="custom-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 home-page-content-container custom-video-content">
                {/* <h1 className="home-page-heading">About FCS</h1> */}
                <h5 className="mb-4 home-page-paragraph">
                  Faalih Consultancy Services pioneers innovative software solutions, specializing in low code development in collaboration with Slingr. Our suite includes Certifify CRM, Validex Pro, and HireHub, offering tailored and efficient tools to elevate your business processes.
                </h5>

                <Link to="/contactUs">
                  <button className="learn-more-button">
                    Contact Us <BsArrowRightShort className="home-page-arrow" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
