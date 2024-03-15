import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import bannerImage from "../images/Slinger/slingir1.jpg";
import sli from "../images/Slinger/sli.png";
import card1 from "../images/Slinger/card1.jpeg";
import card2 from "../images/Slinger/card2.jpeg";
import card3 from "../images/Slinger/card3.jpeg";
import release from "../images/Slinger/Release.jpeg";
import dev from "../images/Slinger/development.jpeg";
import support from "../images/Slinger/support.jpeg";
import platform from "../images/Slinger/platform.jpeg";
import slingir2 from "../images/Slinger/slingir2.png";
import slingir3 from "../images/Slinger/slingir3.png";
import "./index.css";
const Slingir = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px",width:'100%' }}>
        <div className="slinger-bg-banner p-3">
          <div className="banner-content-slingir">
            <h1 className="banner-heading-slingir">
              Let's build something great together.®
            </h1>
            <h3 className="banner-subheading-slingir">
              Create Web Applications that are Fast, Flexible & Future-proof
            </h3>
          </div>
          <div className="banner-image-slingir-container">
            <img
              className="banner-image-slingir"
              alt="LowCode"
              src={bannerImage}
            />
          </div>
        </div>
        <div className="slingir-second-continer">
          <div className="cards-container-slinger">
            <div className="card-container">
              <div>
                <img className="cards-image" alt="swiftly" src={card3} />
              </div>
              <div className="card-content m-2">
                <h1 className="card-heading">Swiftly</h1>
                <h3 className="card-heading">Up to 4X faster to Market</h3>
                <p className="card-para">
                  With Slingr, we can have a first draft of an MVP ready for
                  your review in as little as ten days…(yes, ten days)
                </p>
              </div>
            </div>
            <div className="card-container">
              <div>
                <img className="cards-image" alt="Flexibility" src={card2} />
              </div>
              <div className="card-content">
                <h1 className="card-heading">Flexibility</h1>
                <h3 className="card-heading">Seamless Integration</h3>
                <p className="card-para">
                  Easily add a vast array of apps and services to your business
                  profile with the ability to pivot in real time.
                </p>
              </div>
            </div>
            <div className="card-container">
              <div>
                <img className="cards-image" alt="Efficiency" src={card1} />
              </div>
              <div className="card-content">
                <h1 className="card-heading">Efficiency</h1>
                <h3 className="card-heading">Reduced App Development Costs</h3>
                <p className="card-para">
                  Slingr low-code streamlines app development, resulting in
                  savings of up to 75% over custom code.
                </p>
              </div>
            </div>
          </div>
          <div className="m-3">
            <h3 className="second-heading-top">Startup services</h3>
            <div className="cards-container-slinger">
              <div className="card-content-startup">
                <img src={dev} alt="devImage" className="cards-image-startup" />
                <button className="startup-button">Developer</button>
                <h5 className="second-heading">
                  A dedicated, full-time team of developers to build your
                  project on our proprietary low-code platform, priced on a per
                  developer basis so you only pay for as few or as many coders
                  as your project needs.
                </h5>
              </div>
              <div className="card-content-startup">
                <img
                  src={platform}
                  alt="resourceImage"
                  className="cards-image-startup"
                />
                <button className="startup-button">platform</button>
                <h5 className="second-heading">
                  Easy ongoing maintenance and modification through slingr’s
                  platform —built so anyone can use it.
                </h5>
              </div>
              <div className="card-content-startup">
                <img
                  src={release}
                  alt="DatePic"
                  className="cards-image-startup"
                />
                <button className="startup-button">Releases</button>
                <h5 className="second-heading">
                  Regularly scheduled releases of your product, to provide an
                  opportunity for your team to offer feedback on a working
                  model.
                </h5>
              </div>
              <div className="card-content-startup">
                <img
                  src={support}
                  alt="Support"
                  className="cards-image-startup"
                />
                <button className="startup-button">Support</button>
                <h5 className="second-heading">
                  Continued support after launch via our affordably-priced
                  extended support plans that let you choose the level of
                  support your project needs.
                </h5>
              </div>
            </div>
          </div>
        </div>
       
         <div className="slingir-bottom-container2 m-0 p-3">
          <div className="imgslingr">
            <img
              src={slingir2}
              alt="slingir"
              className="bottom-image-slingir"
            />
          </div>
          <div className="slingir-bottom-content-container m-2 p-2">
            <h3 className="bottom-heading-slingir">Slingr is born.</h3>
            <p className="bottom-para-slingir">
              In 2011, Grace Schroeder created Slingr in Denver, CO, to make app
              development faster and easier using low-code technology. Since
              then, the Slingr team has grown a lot, but we are still pursuing
              the same mission as we were on day one: Make development better
              for everyone.
            </p>
          </div>
         </div>

         <div className="slingir-bottom-container2  p-3">
          <div className="slingir-bottom-content-container m-2 p-2">
            <h3 className="bottom-heading-slingir">The Best of Both Worlds</h3>
            <p className="bottom-para-slingir ">
              Slingr low-code offers enterprise businesses the dynamic
              flexibility of custom code with the speed and cost-efficiency of
              no-code. Low-code platforms significantly reduce the amount of
              time-consuming work for developers and give organizations
              flexibility, similar to custom-code, to build fine-grained
              automation and other customizations that elude their no-code
              counterparts. Low-code intrinsically recognizes there is value to
              simplification, while also not reducing the ability of developers
              to control how their product works. For enterprise businesses
              looking for speed and flexibility, Slingr low-code is a
              game-changer.
            </p>
          </div>
          <div className="imgslingr">
            <img src={sli} alt="fedility" className="bottom-image-slingir" />
          </div>
         </div>
         <div className="slingir-bottom-container2 m-0 p-3">
          <div className="imgslingr">
            <img
              src={slingir3}
              alt="slingir"
              className="bottom-image-slingir"
            />
          </div>
          <div className="slingir-bottom-content-container m-2 p-2">
            {/* <h3 className="bottom-heading-slingir">Slingr is born.</h3> */}
            <p className="bottom-para-slingir">
              These days, Slingr offers a low-code development platform and
              professional services driven by a world-class development team.
              But our mission is bigger than building a great platform. It’s to
              help the world access the benefits of the new age of software
              development.
            </p>
          </div>
         </div>
        </div>
      
      <Footer />
    </>
  );
};

export default Slingir;
