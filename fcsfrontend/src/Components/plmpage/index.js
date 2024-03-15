import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import player from "../images/videoforfcs.mp4";
import { useTypewriter } from "react-simple-typewriter";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

export default function Polarion() {
  const [text] = useTypewriter({
    words: ["Design", "Manufacturing", "And", "Lifecycle Management"],
    loop: false,
  });

  const rendercontent = () => (
    <>
      <h1 style={{ fontSize: "50px" }}>{text}</h1>
      {/* <Cursor cursorColor="red" /> */}
    </>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    var revals = document.querySelectorAll(".polarioncardsContainer");
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
    <div className="polarionContainer"style={{ paddingTop: "70px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-left"> ALM </h1>
            <h2 className="text-left">
               ALM™ — Application Lifecycle Management Solution
            </h2>
          </div>

          <div className="col-12 col-md-6 mt-5">
            <div className="polarionImageContainer">
              <img
                className="polarionimage"
                src="https://www.plm.automation.siemens.com/media/global/en/polarion-product-line_tcm27-26638.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="text-center">
              <h3>ALM</h3>
              <h6>
                Release faster and more frequent while maintaining end-to-end
                traceability and visibility into your application lifecycle.
                Define, build, test, and manage complex software systems in a
                unified 100% browser-based solution that serves small teams or
                thousands of users. Connect teams and projects, and improve
                application development processes with a single, unified
                solution for requirements, coding, testing, and release.
              </h6>
              <div className="polarionButtonContainer text-center w-100">
                <Link to='/contactUs'>
                <button className="btn btn-warning" id="polarionButton">
                  {" "}
                  Try FCS
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer mt-5">
                <h3 className="text-primary">Polarion PRO</h3>
                <p className="text-secondary">
                  Unify change management, task &amp; issue tracking and work
                  reporting across all project contributors across the
                  enterprise.
                </p>
                <div className="polarioniconContainer ">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer  mt-5">
                <h3 className="text-primary">Polarion Reviewer</h3>
                <p className="text-secondary">
                  Enable internal and external stakeholders to review and
                  comment on work items, and provide industry-compliant
                  electronic signatures and approvals.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer active mt-5">
                <h3 className="text-primary">Polarion Saas</h3>
                <p className="text-secondary">
                  Our cloud based solution for requirements, quality and risk
                  managements offers huge cost savings and rapid productivity.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer  mt-5">
                <h3 className="text-primary">Varients Add-On</h3>
                <p className="text-secondary">
                  Rapidly and effectively design, develop and manage complex
                  families of product versions and variants with
                  industry-leading technology and integrations.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer  mt-5">
                <h3 className="text-primary">Polarion ALM</h3>
                <p className="text-secondary">
                  {" "}
                  Release faster and more frequent while maintaining end-to-end
                  traceability and visibility into your application lifecycle.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer   mt-5">
                <h3 className="text-primary">Polarion QA</h3>
                <p className="text-secondary">
                  Provides complete software quality assurance and testing
                  solution.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4">
            <div className="center">
              <div className="polarioncardsContainer  mt-5">
                <h3 className="text-primary">Polarion REQUIREMENTS</h3>
                <p className="text-secondary">
                  Effectively gather, author, approve and manage requirements
                  for complex systems across entire project lifecycles.
                </p>
                <div className="polarioniconContainer  bg-primary">
                  <FaArrowRight size={30} color="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Player code */}
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 mt-5 w-100">
            <div className="plmvideoContainer">
              <video
                id="plmbackground-video"
                className="videoElement"
                autoPlay
                loop
                muted
              >
                <source src={player} type="video/mp4" />
              </video>

              <div id="plmcontent">{rendercontent()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 style={{color:'#000029'}}>Discover our products</h1>
            <p className="text-secondary plmhead">
              Recognized by industry analysts as the #1 leader in engineering
              software, industry leaders such as Airbus, BioNTEch,
              Bausch+Stroebel, Daimler, Honda, Lockheed Martin and the US Navy
              depend on Siemens.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div
              style={{
                backgroundColor: "#4c34eb",
                display: "inline-block",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <FaLightbulb color="#ffffff" size={30} />
            </div>
            <h3 style={{color:'#000029'}}>Design</h3>
            <p className="text-secondary plmpara">
              Integrate mechanical design, electrical and electronic systems,
              software and multiphysics simulation to create a comprehensive
              digital twin for performance prediction and design optimization.
            </p>
          </div>

          <div className="col-12 col-lg-4">
            <div
              style={{
                backgroundColor: "#4c34eb",
                display: "inline-block",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <MdPrecisionManufacturing color="#ffffff" size={30} />
            </div>
            <h3 style={{color:'#000029'}}>Manufacturing</h3>
            <p className="text-secondary plmpara">
              Bring high-quality products to market quickly and efficiently with
              generative design, virtual commissioning, complete supply chain
              management and breakthrough manufacturing technologies.
            </p>
          </div>

          <div className="col-12 col-lg-4">
            <div
              style={{
                backgroundColor: "#4c34eb",
                display: "inline-block",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <RxHamburgerMenu color="#ffffff" size={30} />
            </div>
            <h3 style={{color:'#000029'}}>Life Cycle Management</h3>
            <p className="text-secondary plmpara">
              Collect, analyze and visualize data and processes throughout the
              product lifecycle. Create closed-loop analytics from development
              to manufacturing to real-world feedback and then back to design.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          <h3 style={{color:'#000029'}}>Ready to learn more?</h3>
          <p className="text-secondary">
            Discuss your business needs with our product specialists and learn
            how you can benefit from our solutions.
          </p>
          <Link to='./contactUs'>
          <button className="btn btn-success p-2 m-2" id="polarionButton">Contact Us</button>

          </Link>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}