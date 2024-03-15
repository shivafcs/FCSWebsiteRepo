import React from "react";
import {Link} from 'react-router-dom'
import Logo from "../images/weblogo.png";
import './index.css'
const Header = () => {
  return (
  
      <nav className="navbar navbar-bg navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="fcsLogo-header mr-5" to="/"> 
            <img src={Logo} alt="logo-fcs" className="nav-logo"/>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ml-5 mb-lg-0">
            <li className="heading-colors">
                <Link className="nav-link heading-color-header" aria-disabled="false" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown heading-colors mr-5">
                <Link className="nav-link heading-color-header dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Software&Solutions
                </Link>
                <ul className="dropdown-menu nav-card">
                <li className="heading-color">
                   <Link to="/slingr" className="dropdown-item heading-color-header">LowCode/NoCode Development</Link>
                </li>
                 <li className="heading-color">
                   <Link to="/webdev" className="dropdown-item heading-color-header">Customized Development</Link>
                 </li>
                <li className="heading-color">
                   <Link to="/DigitalMarketing" className="dropdown-item heading-color-header">Digital Marketing</Link>
                 </li>
                 <li className="heading-color">
                   <Link to="/plmPage" className="dropdown-item heading-color-header">ALM/PLM</Link>
                 </li>
                 <li className="heading-color">
                   <Link to="/contactus" className="dropdown-item heading-color-header">CAD</Link>
                 </li>
                 <li className="heading-color">
                   <Link to="/sas" className="dropdown-item heading-color-header">SAS</Link>
                 </li>
                </ul>
              </li>
              <li className="nav-item dropdown heading-colors">
                <Link className="nav-link heading-color-header dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Products
                </Link>
                <ul className="dropdown-menu nav-card">
                <li className="heading-color ">
                  <Link to="#" className="dropdown-item heading-color-header" >HireHub</Link>
                </li>
                <li className="heading-color ">
                  <Link to="#" className="dropdown-item heading-color-header" >ValidexPro</Link>
                </li>
                <li className="heading-color ">
                  <Link to="#" className="dropdown-item heading-color-header" >CRM Certify</Link>
                </li>
                <li className="heading-color ">
                  <Link to="#" className="dropdown-item heading-color-header" >Stress Management</Link>
                </li>
                <li className="heading-color ">
                  <Link to="#"  className="dropdown-item heading-color-header" >Slingr</Link>
                </li>
                </ul>
              </li>
              <li className="nav-item dropdown heading-colors">
                <Link
                  className="nav-link heading-color-header dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training & Support
                </Link>
                <ul className="dropdown-menu nav-card">
                  <li className="heading-color">
                    <Link className="dropdown-item heading-color-header" to="/plmPage">
                    Polarian
                    </Link>
                  </li>
                  <li className="heading-color">
                    <Link className="dropdown-item heading-color-header" to="/slingr">
                      Mendix/Slingr
                    </Link>
                  </li>
                  <li>
                    {/* <hr className="dropdown-divider" /> */}
                  </li>
                  <li className="heading-color">
                    <Link className="dropdown-item heading-color-header" to="/webdev">
                      Conventinal Development
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="heading-colors">
                <Link className="nav-link heading-color-header" aria-disabled="false" to='/aboutUs'>
                  About Us
                </Link>
              </li>
              <li className="heading-colors">
                <Link className="nav-link heading-color-header" aria-disabled="false" to='/contactUs'>
                  Careers
                </Link>
              </li>
              {/* <li className="nav-item heading-colors">
                <Link className="nav-link heading-color-header " aria-disabled="false" to='/contactUs'>
                  Contact Us
                </Link>
              </li> */}
            </ul>

            <Link className=" " to='/contactUs'>
              <button className="heading-colors header-button-contactus  nav-button-pod">
              Contact Us
              </button>
              
            </Link>
          </div>
        </div>
      </nav>

  );
};

export default Header;
