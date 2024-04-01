import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import VideoPage from "../VideoPage";
import Minicards from "../MiniCards";
import Services from "../Services";
import Industries from '../Industries'
import TechnologiesPage from "../Technologies";
import Card from "../Card";
import CRmCertify from '../images/Products/CERTIFY CRM LOGO.png'
import HireHub from '../images/Products/HIRE HUB LOGO.png'
import ValidexPro from '../images/Products/VALIDEX PRO.png'
// import Slingir from '../Slingir'
import "./index.css";
const Home = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "0px" }}>
        <VideoPage />
        <div className="row  home-bg-top ">
          {/* <div className="col-12 col-md-7 home-page-content-container ">
            <h1 className="home-page-heading">About FCS</h1>
            <h5 className="mb-4 home-page-paragraph">
              Step into the realm of innovation and digital brilliance! Within
              Faaliha Consulting Services, we transcend being a mere IT company;
              we stand as your companions in materializing visions. Trailblazers
              in web and app development, we wield technology's might to craft
              effortless digital journeys fostering expansion and igniting
              transformation.
            </h5>
            <h4 className="home-page-heading">Industries We are Serving </h4>
            <div className="home-page-list-container">
              <ul>
                <li className="home-page-list">
                  <TiTick className="home-page-tick" />
                  Health Tech
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Automotive & Transportation
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" /> Aerospace
                </li>
              </ul>
              <ul>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Oil & Gas
                </li>
                <li className="home-page-list">
                  {" "}
                  <TiTick className="home-page-tick" />
                  Enterprise Agile (SAFE)
                </li>
              </ul>
            </div>
            <Link to="/contactus">
              <button className="learn-more-button">
                Contact Us <BsArrowRightShort className="home-page-arrow" />
              </button>
            </Link>
          </div> */}
          {/* <div className="col-12 col-md-5">
            <img src={lgshome} alt="home-page" className="home-page-image " />
          </div> */}
        </div>
        <div className="home-page-bg-colour">
        <div className="col-12 mincards-container">
            <Minicards />
          </div>
          <div className="row">
            <h1 className="text-center home-page-heading">
              Harmonizing Business and Technology
            </h1>
          </div>
          <div className="row">
            <Services />
          </div>
          <div className="" >
            <Industries />
          </div>
          
          <div className="home-clients" id="clients">
            <Card />
          </div>
          <div className="home-products-container">
            <h1 className="text-center home-page-heading">Our Products</h1>
            <div className="home-products-images">
              <img src={CRmCertify} alt="validex Pro" className="products-image-size-crmcertify"/>
              <img src={HireHub} alt="Hire Hub" className="products-image-sizes"/>
              <img src={ValidexPro} alt="CRM certify" className="products-image-sizes"/>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
