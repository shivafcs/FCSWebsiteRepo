import React from 'react'
import mobileandweb from '../lottieAnimations/mobileandweb.json'
import Ecomm from '../lottieAnimations/E-Comm.json'
import FoodDelivary from '../lottieAnimations/Food-Delivary.json'
import FoodFmcg from '../lottieAnimations/Food&FMCG.json'
import HealthCare from '../lottieAnimations/HealthCare.json'
import TravelTourisam from '../lottieAnimations/Travel&Tourisam.json'
import Lottie from 'lottie-react'
import Apple from '../images/webdev/apple-logo.png'
import Android from '../images/webdev/android-logo.png'
import ReactNative from '../images/webdev/react-native.png'
import Support from '../images/webdev/support.png'
import UiUX from '../images/webdev/ui-ux.png'
import Webdev from '../images/webdev/webdev.png'
import webDevelopment from '../images/webdev/development-webdev.jpg'
import plannigWebdev from '../images/webdev/plannig-webdev.jpg'
import Header from '../Header'
import Footer from '../Footer'
import "bootstrap/dist/css/bootstrap.min.css";

import './index.css'
const WebAndMobileDev = () => {
  return (
    <>
    <Header/>
    <div>
      <div className='webdev-top-container'>
        <div className='webdev-content-container'>
        <h1>Leading <span className='webdev-top-span'>Mobile App
        & Web Development</span>
        Company InHyderabad</h1>
        </div>
        <div className='webdev-lottie'>
        <Lottie animationData={mobileandweb}/>
        </div>   
      </div>
      <div className='webdev-services'>
        <div style={{padding:"30px 10px"}}>
          <h1 align="center" className='web-services-heading'>What we do <span className='webdev-top-span'>for you</span></h1>
          <h3 className='web-services-heading'>We provide world-class technology services by constantly exploring and implementing innovative solutions that drive long-term value to our clients. our solutions provide strategic advantage to several most-admired organizations in the world. We have long-standing and vibrant partnerships with over 30 companies across the globe.</h3>
        </div>
        <h1 className='web-services-heading'>Our Web & App  <span className='webdev-top-span'>development services</span></h1>
        <div className='services-tabs-webdev'>
          
          <div className='cards-services-webdev'>
              <div>
                <img src={Apple} alt='webdev ios'/>
              </div>
              <h3>Native IOS App Development</h3>
          </div>
          <div className='cards-services-webdev'>
              <div>
                <img src={Android} alt='webdev Android'/>
              </div>
              <h3>Native Android App Development</h3>
          </div>
          <div className='cards-services-webdev'>
              <div>
                <img src={ReactNative} alt='webdev ReactNative'/>
              </div>
              <h3>Native App Development</h3>
          </div>
          <div className='cards-services-webdev'>
              <div>
                <img src={Support} alt='webdev Support'/>
              </div>
              <h3>App Maintenance and support services</h3>
          </div>
          <div className='cards-services-webdev'>
              <div>
                <img src={UiUX} alt='webdev UiUX'/>
              </div>
              <h3>App UI/Ux design and development</h3>
          </div>
          <div className='cards-services-webdev'>
              <div>
                <img src={Webdev} alt='webdev Webdev'/>
              </div>
              <h3>Web App Development</h3>
          </div>
        </div>
      </div>
      <div className='main-industryexperts-container'>
        <h1>Industry Experts</h1>
        <h3>We design, develop and optimize native mobile applications for IOS and Android. All of it</h3>
      <div className='IndustryExperts-webdev'>
          <div className='cards-industryexp-webdev'>
            <Lottie className='industryexperts-animationa' animationData={Ecomm}/>
            <h2>E-Commerce appllication</h2>
          </div>
          <div className='cards-industryexp-webdev'>
            <Lottie className='industryexperts-animationa' animationData={FoodDelivary}/>
            <h2>Food Delivary and Fin/Tech Delivary app</h2>
          </div>
          <div className='cards-industryexp-webdev'>
            
            <Lottie className='industryexperts-animationa'  animationData={TravelTourisam}/>
            <h2>Travel and Tourisam</h2>
          </div>
        </div>
        <div className='IndustryExperts-webdev'>  
          <div className='cards-industryexp-webdev'>
            <Lottie className='industryexperts-animationa' animationData={HealthCare}/>
            <h2>HealthCare and pharma</h2>
          </div>
          <div className='cards-industryexp-webdev'>
            <Lottie  className='industryexperts-animationa'animationData={FoodFmcg}/>
            <h2>Food and FMCG</h2>
          </div>
          <div className='cards-industryexp-webdev'>
            <Lottie className='industryexperts-animationa' animationData={TravelTourisam}/>
            <h2>Education</h2>
          </div>
      </div>
      </div>
      <div className='webdev-buttonContainer'>
      <button className='btn btn-primary'>ContactUs</button>
      </div>
      
      <div className='main-industryexperts-container'>
        <div className='IndustryExperts-webdev'>
          <img src={plannigWebdev} alt='webdev-planning' className='webdev-bottom-image'/>
          <div className='webdev-content-container'>
            <h1>The Power To BuildYour Business</h1>
            <p>You have idea and we have minds to change that idea into 
              reality. Our teams of expert developers are capable of
               delivering any complex project for requirement. Just get 
               in touch with us and we will help you take your business to
                the whole new level.</p>
          </div>
        </div>
        <div className='IndustryExperts-webdev'>
        <div className='webdev-content-container'>
            <h1>A Little Bit of Everything</h1>
            <p>Software that can improve your business and everyday life…. is an example of a mo
              dest and concise design for a serious commercial firms selling company.</p>
          </div>
          <img src={webDevelopment} alt='webdev-development' className='webdev-bottom-image'/>
          
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default WebAndMobileDev
