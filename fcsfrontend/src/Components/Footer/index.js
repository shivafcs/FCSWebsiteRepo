import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebook,
  FaYoutubeSquare,
  FaChevronDown,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import "./index.css";

const Footer = () => {
  const [showList, setShowList] = useState(false);

  // Function to toggle the list visibility
  // function toggleList() {
  //   const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

  //   if (isMobileDevice) {
  //     setShowList(!showList); // Toggle the showList state for mobile devices
  //   }
  // }
  function toggleList(section) {
    setShowList(section === showList ? null : section);
  }
  

  return (
    <div className="fcs-footer-bg">
      <div className="fcs-card-container">
        <div>
          <h3 className="Heading-footer">FCS</h3>
          <h5 className="Heading-footer-fcs">Faaliha Consulting Services</h5>
          <div>
            <a href="https://www.instagram.com/faalihservices99/"><FaInstagramSquare className="fcs-footer-icons-insta " /></a>
            <a href="https://www.facebook.com/profile.php?id=100077099258313"><FaFacebook className="fcs-footer-icons-facebook" /></a>
            <a href="https://twitter.com/FCS_GoDigital"><FaXTwitter className="fcs-footer-icons-twitter " /></a>
            <a href="https://www.linkedin.com/company/78274811/admin/feed/posts/"><FaLinkedin className="fcs-footer-icons-linkdin" /></a>
            <a href=""><FaYoutubeSquare className="fcs-footer-icons-youtube"/></a>
          </div>
        </div>
        <div>
  <h4 className="Heading-footer" onClick={() => toggleList("portfolio")}>
    Portfolio <FaChevronDown className="arrow-icon" />
  </h4>
  <ul className={`portfolio-list ${showList === "portfolio" ? "show" : ""}`}>
    <li className="Heading-footer"><Link to="/slingr" className="custom-link-footer">Slingir</Link></li>
    <li className="Heading-footer"><Link to="/PlmPage" className="custom-link-footer">ALM</Link></li>
    <li className="Heading-footer"><Link to="/webdev" className="custom-link-footer">Web App development</Link></li>
    <li className="Heading-footer"><Link to="/webdev" className="custom-link-footer">Mobile App development</Link></li>
    <li className="Heading-footer"><Link to="/webdev" className="custom-link-footer">Customized development</Link></li>
  </ul>
</div>

<div>
  <h4 className="Heading-footer" onClick={() => toggleList("explore")}>
    Explore <FaChevronDown className="arrow-icon" />
  </h4>
  <ul className={`portfolio-list ${showList === "explore" ? "show" : ""}`}>
    <li className="Heading-footer">Community</li>
    <li className="Heading-footer">Blog</li>
  </ul>
</div>

<div>
  <h4 className="Heading-footer" onClick={() => toggleList("fcs")}>
    FCS <FaChevronDown className="arrow-icon" />
  </h4>
  <ul className={`portfolio-list ${showList === "fcs" ? "show" : ""}`}>
    <li className="Heading-footer"><Link to="/aboutus" className="custom-link-footer">About Us</Link></li>
    <li className="Heading-footer">Leadership</li>
    <li className="Heading-footer"><Link to="/Careers" className="custom-link-footer">Careers</Link></li>
    <li className="Heading-footer">Case Studies</li>
  </ul>
</div>

        <div>
          <h4 className="Heading-footer"><Link to="/Contact" className="custom-link-footer">Contact</Link></h4>
          <ul className="portfolio-list-contact">
            <li className="Heading-footer custom-link-footer">info@fcs.world</li>
            <li className="Heading-footer custom-link-footer">7680042224</li>
            {/* <li className="Heading-footer"><Link to="/Contact" className="custom-link-footer">Give Us FeedBack</Link></li> */}
          </ul>
        </div>
      </div>
      <div className="line">
        <hr className="line" />
      </div>
      <div className="fcs-card-container">
        <div>
          <p className="Heading-footer">
            &copy; 2023 Faaliha Consulting services
          </p>
        </div>
        <div className="fcs-footer-bottom-line">
          <p className="Heading-footer-bottom">Terms of Use</p>
          <p className="Heading-footer-bottom">Privacy Statement</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
