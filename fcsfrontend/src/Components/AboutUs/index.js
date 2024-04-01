import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import BussinessConsulting  from '../images/about/BusinessStrategypng.webp'
import MobileApplication from '../images/about/MobileApplication.webp'
import DedicatedTeams from '../images/about/DedicatedTeams.webp'
import EnterpriceMobilitySolutions from '../images/about/EnterpriseMobilitySolutions.webp'
import MObileProtoType from '../images/about/MobilePrototype.webp'
import TechIcon01 from '../images/about/techicon01.webp'
import TechIcon02 from '../images/about/techicon02.webp'
import TechIcon03 from '../images/about/techicon03.webp'
import TechIcon04 from '../images/about/techicon04.webp'

import "./index.css";

export default function AboutUs() {
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    var revals = document.querySelectorAll(".aboutuscardsContainer");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };
  return (
    <>
    <Header/>
    <div className="aboutusContainer" style={{ paddingTop: "0px" }}>
      <div className="aboutusDetailsContainer p-3">
        <div className="detailsContainer p-5">
          <h1 className="text-white">FCS |Faalih Consultancy Services|</h1>
          <hr className="h-line"/>
          <h4 className="text-white">
            India’s #1 Mobile App Development Company
          </h4>
          
          <h4 className="text-white">
            We Turn Your Great Ideas into Amazing Mobile Apps
          </h4>
          
          <ul className="aboutusListContainer p-2">
            <li className="text-white">Accelerated Development Cycle</li>
            <li className="text-white">Fully Confidential, Strict NDA</li>
            <li className="text-white">
              Flexible Engagement Options (Fixed Cost / Hourly / Monthly)
            </li>
            <li className="text-white">
              Clients include Startups, SMEs &amp; Enterprises
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <ul className="aboutusListContainer p-5">
              <div className="row">
                <div className="col-6 ">
                  {" "}
                  <li className="text-primary  mt-2 mb-2 p-2">
                    Quality assurance
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-primary mt-2 mb-2 p-2">
                    Cost-Effective Services
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-primary mt-2 mb-2 p-2">
                    24*7 Dedicated Support
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-primary mt-2 mb-2 p-2">
                    100% Quality Assurance
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-primary mt-2 mb-2 p-2">
                    Complete Peace of Mind
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-primary mt-2 mb-2 p-2">
                    Daily/Weekly/Monthly Reporting
                  </li>
                </div>
                <div className="col-6">
                  {" "}
                  <li className="text-primary mt-2 mb-2 p-2">
                    Transparent & Smooth Communication
                  </li>
                </div>
                <div className="col-6">
                  <li className="text-primary mt-2 mb-2 p-2">
                    No Hidden Costs, 0 Overheads
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <div className="col-6  text-center p-5">
            <img
              alt=""
              height="300px"
              width="350px"
              src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/hire-image.png.webp"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-4 ">
            <div className="center">
              <div className="aboutuscardsContainer mt-5">
                <img
                  src="https://www.valuecoders.com/l/wp-content/uploads-webpc/uploads/2022/11/Custom-Mobile-Apps-Development.png.webp"
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Custom Mobile Apps Development</h3>
                <p className="text-secondary">
                  Our expertise in custom development will help businesses to
                  accommodate multiple features into a single app and bring out
                  a world-class user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src={EnterpriceMobilitySolutions}
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Enterprise Mobility Solutions</h3>
                <p className="text-secondary">
                  Our expert &amp; highly experienced enterprise mobility team
                  build enterprise-grade applications for native, cross-platform
                  mobile and wearable devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer active mt-5">
                <img
                  src={MobileApplication}
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">
                  Cross-Platform Mobile Application
                </h3>
                <p className="text-secondary">
                  Our cross-platform mobile applications run precisely for every
                  platform with reduced cost, faster speed and reusable code
                  components.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src={DedicatedTeams}
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Dedicated Development Teams</h3>
                <p className="text-secondary">
                  A dedicated team allows you to rapidly scale up or down as
                  needed, cut the development costs, reduce time to market and
                  gives an undivided attention on your project.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer  mt-5">
                <img
                  src={MObileProtoType}
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">Mobile App Prototype</h3>
                <p className="text-secondary">
                  For a robust mobile app, mobile prototyping lays the
                  foundation for your app development process, and we possess
                  the necessary knowledge in it.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4">
            <div className="center">
              <div className="aboutuscardsContainer mt-5">
                <img
                  src={BussinessConsulting}
                  height="50"
                  width="50"
                  alt=""
                />
                <h3 className="text-primary">
                  Business Consulting and Strategy
                </h3>
                <p className="text-secondary">
                  Our mobility consulting and strategy services help in defining
                  mobility roadmaps, then planning and implementing them for
                  your mobile apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutusWorkingContainer text-center mt-3">
        <h3>Ready to work ?</h3>
        <Link to='/contactUs'>
              <button  className="heading-colors header-button-contactus nav-button-pod aboutusbutton">
              Contact Us
              </button>
              
            </Link>
      </div>
     <div className="aboutus-tech-dev-container">
      <h1>Technology & Development Stacks</h1>
      <h3>We Are An Expert Software Development Company And Use The Best Technologies And Platforms To Deliver High-Quality Products.</h3>
      <div className="techstack-cards-containeraboutus">
        <div className="techstack-card">
          <img src={TechIcon01} alt="mobile dev technologies"/>
          <h5>Mobile dev Technologies</h5>
          <ul className="techStack-container">
            <li className="techStack-Element">Androide</li>
            <li className="techStack-Element">Swift</li>
            <li className="techStack-Element">Objective C</li>
            <li className="techStack-Element">ReactNative</li>
            <li className="techStack-Element">Kotlin</li>
            <li>Flutter</li>
          </ul>
        </div>
        <div className="techstack-card">
          <img  src={TechIcon02} alt="Front-end Technologies"/>
          <h5>Front-end Technologies</h5>
          <ul className="techStack-container">
            <li className="techStack-Element">HTML5</li>
            <li className="techStack-Element">CSS3</li>
            <li className="techStack-Element">Javascript</li>
            <li className="techStack-Element">TypeScript</li>
            <li className="techStack-Element">React</li>
            <li className="techStack-Element">Angular</li>
            <li className="techStack-Element">Vue</li>
          </ul>
        </div>
        <div className="techstack-card">
          <img  src={TechIcon03} alt="Back-end Technologies"/>
          <h5>Back-end Technologies</h5>
          <ul className="techStack-container">
            <li className="techStack-Element">Node</li>
            <li className="techStack-Element">Python</li>
            <li className="techStack-Element">.Net</li>
            <li className="techStack-Element">C#</li>
            <li className="techStack-Element">Java</li>
            <li className="techStack-Element">Scala</li>
            <li className="techStack-Element">PHP</li>
          </ul>
        </div>
        <div className="techstack-card">
          <img  src={TechIcon04} alt="Other Technologies"/>
          <h5>Other Technologies</h5>
          <ul className="techStack-container">
            <li className="techStack-Element">WordPress</li>
            <li className="techStack-Element">Magento</li>
            <li className="techStack-Element">GoLang</li>
            <li className="techStack-Element">Ruby On Rails</li>
            <li className="techStack-Element">Docker</li>
            <li className="techStack-Element">Kubernetes</li>
            <li className="techStack-Element">Jenkins</li>
          </ul>
        </div>
      </div>
     </div>
    </div>
    <Footer/>
    </>
  );
}
