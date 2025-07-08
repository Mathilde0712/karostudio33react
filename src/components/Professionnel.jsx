import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Professionnel = () => {
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
        <h1>Professionnel</h1>
        <p className="intro">
        En tant que photographe, je suis là pour vous aider à mettre en valeur votre image, votre personnalité ou votre entreprise.
        </p>
    
        <p>
        Que ce soit pour des portraits, des photos pour votre site web, vos réseaux sociaux ou tout autre projet professionnel, je m’engage à créer des images de qualité, naturelles et percutantes. 
        </p>
        <p>
        Mon objectif est de capturer votre authenticité tout en vous mettant en confiance, afin que chaque photo reflète parfaitement votre identité ou votre message.
        </p>
        <p>
         
        </p>
        <p>
        N’hésitez pas à me contacter pour organiser un shooting qui vous mettra en valeur et renforcera votre présence professionnelle !
        </p>
        <a href='mailto:kro.studio33@gmail.com' >
          <p className="highlight"><u>Contactez-moi pour votre shooting</u> </p>
          </a>
      </div>
    </section>
  );
};

export default Professionnel;
