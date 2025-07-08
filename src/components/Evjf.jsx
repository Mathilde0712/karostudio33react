import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Evjf = () => {
  const settings = {
    dots: false,
    arrows : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="pregnancy-section">
      <div className="pregnancy-image">
        <Slider {...settings}>
          <div><img src={img1} alt="Naissance 1" /></div>
          <div><img src={img2} alt="Naissance 2" /></div>
          <div><img src={img3} alt="Naissance 3" /></div>
         
        </Slider>
        
      </div>

      <div className="pregnancy-text">
        <h1>Evjf</h1>
        <p className="intro">
        Avec un style naturel et convivial, je vous propose des séances photo sur mesure, adaptées à vos envies et à l’ambiance de votre EVJF.
        </p>
    
        <p>
        N’hésitez pas à me contacter pour organiser une séance qui reflète toute la joie et la fête de votre journée. Je suis impatiente de contribuer à rendre votre EVJF encore plus mémorable !
        </p>
        
        <Link to="/#contact">
        <p className="highlight">
          Viens discuter de ton évènement
        </p>
        </Link>
      </div>
    </section>
  );
};

export default Evjf;
