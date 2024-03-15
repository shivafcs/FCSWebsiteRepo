import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import polarianCard from "../images/Services/polarian2.png";
import mendixCard from "../images/Services/mendix2.jpeg";
import digitalmarketingCard from "../images/Services/digitalmarketing2.png";
import webdevelopmentCard from "../images/Services/webdevelopment.png";


class Services extends Component {
  componentDidMount() {
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", this.handleScroll);

  }

  componentWillUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var revals = document.querySelectorAll(".services-reval"); 
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
  render() {
    return (

      <div className="container">
      <div className="parent card2">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Conventinal Development</h1>
            <p className="card-content">
            At Faalih consulting services, we don't just build websites and apps; we build experiences that connect, inspire, and empower. We are not just developers; we are dreamers and visionaries who are passionate about making a difference in the digital world
            </p>
            <span className="see-more"><Link to="/webdev">See More</Link></span>
          </div>
          <div className="date-box">
          <img
                src={webdevelopmentCard}
                alt="web-development"
                className="services-card-image"
              />
          </div>
        </div>
      </div>

      <div className="parent card3">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Digital Marketing</h1>
            <p className="card-content">
            We excel in creating impactful websites and employing data-driven SEO to boost search engine rankings. Our expertise spans social media marketing, content creation, and email campaigns, crafting a customized blend of marketing tactics for your unique requirements.</p><span className="see-more"><Link to="/DigitalMarketing">See More</Link></span>
          </div>
          <div className="date-box">
          <img
                src={digitalmarketingCard}
                alt="web-development"
                className="services-card-image"
              />
          </div>
        </div>
      </div>

      <div className="parent card4">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">ALM/PLM</h1>
            <p className="card-content">
            Welcome to the cutting-edge world of Polarion Solutions & Development, where innovation meets excellence! We empower businesses and individuals with state-of-the-art Polarion Solutions that redefine possibilities and accelerate growth.            </p>
            <span className="see-more"><Link to="/plmPage">See More</Link></span>
          </div>
          <div className="date-box">
          <img
                src={polarianCard}
                alt="web-development"
                className="services-card-image"
              />
          </div>
        </div>
      </div>

      <div className="parent card5">
        <div className="card">
          <div className="content-box">
            <h1 className="card-title">Slingr</h1>
            <p className="card-content">
            In today's fast-paced world, staying ahead of the competition requires agility, adaptability, and the ability to rapidly deploy custom applications. That's where Slingr comes in a powerful low-code development platform that enables us to build robust and scalable applications faster than ever before.            </p>
            <span className="see-more"><Link to="/slingr">See More</Link></span>
          </div>
          <div className="date-box">
          <img
                src={mendixCard}
                alt="web-development"
                className="services-card-image"
              />
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default Services;
