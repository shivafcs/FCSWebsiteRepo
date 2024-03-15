import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PodsImage from '../images/pods/pod2.png'
import "./index.css";

const Pods = () => {
  return (
    <>
      <Header />
      <div className="hirepod-bg"style={{ paddingTop: "70px" }}>
        <div className="hirepod-container">
          <div className="hirepod-sub-container">
          <h1 className="pod-top-heading">Understand Our Pods</h1>
          {/* <p className="pod-description">
            We supply Mendix development teams known as Pods. Our team was put
            together from a diversity of backgrounds. Each Pod has between two
            and five developers.
          </p>
          <button className="pod-button">Hire a Pod</button> */}
          </div>
        </div>
        <div className="pod-mid-container">
          
          <h1 className="pod-top-heading">Minimize Your Risk</h1>
          <p className="pod-description">
            IT leaders face delivery risk when senior leaders leave your
            project. Unfortunately, finding successors for such jobs takes time
            and effort. If such jobs are not filled in a timely manner, your
            project's delivery is jeopardized.
          </p>
          
        </div>
        <div className="hire-pod-botcon">
          <div className=" col-12 col-md-6">
          <img src={PodsImage} alt="pods-people" className="pod-second-container-image"/>
          </div>
          <div className="pods-content-container  col-12 col-md-6">
            <h1 className="pod-top-heading">Hire a Pod</h1>
            <p className="pod-description">
              Reduce risk by making sure team members can step up if someone
              leaves.
            </p>
            <p className="pod-description">
              We are native English speakers operating in EU time zones. As an
              ISO 27001 certified company, we're committed to excellence. Pods
              can connect with other pods for technical expertise and input if
              needed.
            </p>
            <button className="pod-button">Hire aPod</button>
          </div>
        </div>
      </div>
      <h3 className="pod-top-heading">Our Pods Deliverbles</h3>
      <Footer />
    </>
  );
};

export default Pods;
