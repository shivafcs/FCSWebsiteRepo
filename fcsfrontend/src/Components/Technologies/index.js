import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  html5 from '../images/TechnologiesImages/html5.png';
import css from '../images/TechnologiesImages/css.png'
import angular from '../images/TechnologiesImages/angular.png'
import java from '../images/TechnologiesImages/java.png'
import javascript from '../images/TechnologiesImages/javascript.png'
import nodejs from '../images/TechnologiesImages/nodejs.png'
import react from '../images/TechnologiesImages/react.png'
import slingr from '../images/TechnologiesImages/slingr.png'
import vuejs from '../images/TechnologiesImages/vuejs.png'
import postgrsSql from '../images/TechnologiesImages/PostgrsSql.png'
//import html5 from './Components/images/technologies/html5.png'

import "./index.css";


// List of Technologies in one list
const TechnologiesList = [
  {
    id: 1,
    src: html5,
    class: "technologyIndustriesImage",
    height: 70,
    width: 110,  
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690555717/11-react-native-1_avarfs.svg",
    class: "technologyIndustriesImage",
    height: 120,
    width: 140,
  },
  {
    id: 3,
    src: css,
    class: "technologyIndustriesImage",
    height: 70,
    width: 100,
  },
  {
    id: 4,
    src: nodejs,
    class: "polarian-image-2",
    height: 50,
    width: 140,
  },
  {
    id: 5,
    src: react ,
    class: "technologyIndustriesImage",
    height: 70,
    width: 100,
  },
  {
    id: 6,
    src: angular,
    class: "technologyIndustriesImage",
    height: 70,
    width: 140,
  },
  {
    id: 7,
    src: java,
    class: "java-image",
    height: 90,
    width: 105,
  },
  {
    id: 8,
    src: javascript,
    class: "technologyIndustriesImage",
    height: 70,
    width: 150,
  },
  {
    id: 9,
    src: vuejs,
    class: "technologyIndustriesImage",
    height: 60,
    width: 100,
  },
  {
    id: 10,
    src: postgrsSql,
    class: "technologyIndustriesImage",
    height: 100,
    width: 120,
  },
  // {
  //   id: 11,
  //   src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1690556120/Polarion_small_cfwksb.png",
  //   class: "polarian-image-2",
  //   height: 65,
  //   width: 180,
  // },
  {
    id: 12,
    src: slingr,
    class: "slingr-image",
    height: 85,
    width: 200,
  },
];

const TechnologiesPage = () => {
  return (
    <div className="container technology-main-container">
      <h3 className=" IndustriesHeading text-center text-uppercase mt-4">
        Technologies
      </h3>
      <div className="technologies-h-line"></div>
      <div className="row">
        {/* here used list for mapping the elements  */}
        {TechnologiesList.map((eachImage) => (
          <div
            className="col-6 col-md-4 col-lg-3 technologies-imageContainer"
            key={eachImage.id}
          >
            <img
              alt={`Technologies ${eachImage.id}`}
              className={eachImage.class}
              src={eachImage.src}
              height={eachImage.height}
              width={eachImage.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
