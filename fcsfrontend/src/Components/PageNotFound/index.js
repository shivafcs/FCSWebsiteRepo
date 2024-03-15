import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundImage from '../images/NotFound.png'; // Import the image
import './index.css'
const NotFound = () => {

    const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className='notFound-bg'>
      <img src={notFoundImage} alt='Not Found' className='notFound-image' />
      <button onClick={handleBackToHome} className='pagenotfound-button'>Back To Home</button>
    </div>
  );
};

export default NotFound;
