import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

const testimonials = [
  {
    id: 1,
    name: 'Meeran Maqsusi',
    content: 'Faalihs Lowcode Development by using Slingr transformed our business landscape. The intuitive interface and rapid deployment empowered us to streamline operations, reducing development time and costs. A true catalyst for innovation.',
  },
  {
    id: 2,
    name: 'Raparthi Vinod',
    content: 'Faalihs Cretify CRM software elevated our client relations. The robust system seamlessly integrates data, enhancing collaboration. Our teams now work efficiently, and client satisfaction has reached new heights. Exceptional service!',
  },
  {
    id:3,
    name:'Krishna Manohar',
    content:'Validex Pro by Faalih Consulting Services is a cornerstone in our quality control. The systematic product validation significantly reduced errors and improved efficiency. Integrating Validex Pro was smooth, and its now an indispensable part of our workflow.'
  },
  {
    id:4,
    name:'Sathish VeenaVanka',
    content:'Faalihs Digital Marketing strategies are a game-changer. Their expertise in crafting compelling content and executing targeted campaigns skyrocketed our brands online presence. The results speak for themselves - increased traffic, leads, and revenue.'
  },
  {
    id:5,
    name:'Naveen Alakanti',
    content:'Faalihs Social Media Marketing strategies have taken our brand to new heights. Their data-driven approach, engaging content, and precise targeting increased our social media reach exponentially. A strategic partner for sustained online growth.'
  }
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
  };

  return (
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial-card">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.content}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
