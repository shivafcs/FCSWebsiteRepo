import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import TestimonialSlider from '../Testimonials';
import ContentMarketing from '../images/Digital marketing/Content Marketing.jpg';
import SocialMediaMarketing from '../images/Digital marketing/Social Media Marketing.jpg';
import DigitalBranding from '../images/Digital marketing/Digital Branding.png';
import EmailMarketing from '../images/Digital marketing/Email marketing.jpg';
import Influencer from '../images/Digital marketing/influencer.png';
import SEO from '../images/Digital marketing/SEO.png';
import PayPerClick from '../images/Digital marketing/Payperclick.png';
import ReputationManagement from '../images/Digital marketing/Reputation Management.jpg';
import AffiliateMarketing from '../images/Digital marketing/Aflicate Marketing.png';
import ConversationrateOp from '../images/Digital marketing/Conversion Rate Optimization.png'
import PublicRelation from '../images/Digital marketing/Public relation.png'
import LocalSeo from '../images/Digital marketing/Local SEO.png'
// import DigitalBranding from '../images/Digital marketing/DigitalBranding.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

const cardsContent = [
   {
     heading: 'Search Engine Optimization',
     imageSrc: SEO,
     paragraph: 'Optimize your online presence with our SEO expertise. Rank higher, attract the right audience, and amplify your visibility.',
   },
   {
     heading: 'Pay-Per-Click Advertising',
     imageSrc: PayPerClick,
     paragraph: 'Maximize impact with our PPC services. Engage potential customers, optimize your budget, and drive conversions.',
   },
   {
     heading: 'Content Marketing',
     imageSrc: ContentMarketing,
     paragraph: 'Captivate your audience with compelling content. Tailored strategies for customer action and lasting loyalty.',
   },
   {
     heading: 'Affiliate Marketing',
     imageSrc: AffiliateMarketing,
     paragraph: 'Drive sales and expand market presence through strategic Affiliate Marketing partnerships.',
   },
   {
     heading: 'Online Public Relations (PR)',
     imageSrc: PublicRelation,
     paragraph: 'Shape and maintain your brand\'s online image. Proactively respond to digital communications and stay in the spotlight.',
   },
   {
     heading: 'Display Advertising',
     imageSrc: SocialMediaMarketing,
     paragraph: 'Engage your audience with visually appealing graphic ads. Craft strategies for a lasting impression and conversions.',
   },
   {
     heading: 'Mobile Marketing',
     imageSrc: PublicRelation,
     paragraph: 'Reach customers on the go with Mobile Marketing. SMS campaigns, mobile-friendly websites, and more for anytime, anywhere connections.',
   },
   {
     heading: 'Web Analytics',
     imageSrc: LocalSeo,
     paragraph: 'Delve deep into website analytics for valuable insights. Empower decision-making, optimize digital presence, and enhance user satisfaction.',
   },
   {
     heading: 'Video Marketing',
     imageSrc: Influencer,
     paragraph: 'Transform your digital strategy with captivating Video Marketing. Inspire action through compelling advertisements, tutorials, and customer stories.',
   },
   {
     heading: 'Search Engine Marketing',
     imageSrc: SocialMediaMarketing,
     paragraph: 'Experience a comprehensive approach to online visibility with SEM. Propel your brand to greater heights, leaving a lasting impression.',
   },
   {
     heading: 'Email Marketing',
     imageSrc: EmailMarketing,
     paragraph: 'Unlock the potential of personalized communication. Drive results and foster long-term relationships with impactful Email Marketing.',
   },
   {
     heading: 'Reputation Management',
     imageSrc: ReputationManagement,
     paragraph: 'Shape and influence how your business is perceived online. Build and maintain a positive image for trust and credibility.',
   },
   {
     heading: 'Digital Branding',
     imageSrc: DigitalBranding,
     paragraph: 'Craft a strong brand presence across digital channels. Ensure every touchpoint reflects your brand essence, leaving a memorable impression.',
   },
   {
     heading: 'Conversion Rate Optimization',
     imageSrc: ConversationrateOp,
     paragraph: 'Enhance visitor actions on your website with CRO. Meticulously tweak elements for a seamless and compelling user journey.',
   },
   {
     heading: 'Local SEO',
     imageSrc: LocalSeo,
     paragraph: 'Stand out in local search queries with our Local SEO. Attract attention, drive foot traffic, and prompt local engagement.',
   },
];


export  default function DigitalMarkeing(){
   return(
      <>
      <Header/>
    <div className='Dm-main-container'style={{ paddingTop: "70px" }}>
         <div className='dm-top-container'>
            <h1 style={{ color: "#000028" }}>Elevating Businesses to New Heights through Innovative Marketing Strategies</h1>
            <p style={{ color: "#000028" }}>Transforming Visions into Digital Reality: Mastering Digital Marketing, Website Design, and Mobile Hybrid Application Development for Your Unique Journey </p>
            
         </div>
         <h2 style={{ color: "#000028" }}><u>Our Services</u></h2>
         <div className='rotatecards-conteiner '>
          
  {cardsContent.map((card, index) => (
    <div className='rotate-card col-12 col-sm-6 col-md-4' key={index}>
      <p>{card.heading}</p>
      <div className='rotate-card-inner'>
        <div className='rotate-card-front'>
          <img src={card.imageSrc} alt={card.heading}/>
        </div>
        <div className='rotate-card-back'>
          <p>{card.paragraph}</p>
        </div>
      </div>
    </div>
  ))}
</div>
   <div className='ourfocus'>
         <h2 style={{ color: "Black" }}><u>Our Focus</u></h2>
         <p style={{ color: "Black" }}>At ADD Technologies, we're not just a digital marketing firm; we're your strategic partners in navigating the digital landscape. Our approach is tailored, focusing on what truly matters for your business growth and return on investment</p>
         </div>
         <div className='testimonial-container'>
            <h2 align="center" style={{ color: "Black" }}><u>Testimonials</u></h2>
               <TestimonialSlider/>
         </div>
         <button className='dm-button'>Contact Us</button>
    </div>
    <Footer/>
    </>
   ) 
}