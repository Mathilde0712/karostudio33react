import React from 'react';
import Slider from 'react-slick';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Grossesse = () => {
  const settings = {
    dots: false,
    arrows : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="pregnancy-section">
      <div className="pregnancy-image">
        <Slider {...settings}>
          <div><img src={img1} alt="Naissance 1" /></div>
          <div><img src={img2} alt="Naissance 2" /></div>
          <div><img src={img3} alt="Naissance 3" /></div>
         
        </Slider>
        <p className="caption">Chaque moment compte,<br />du premier battement au premier regard</p>
      </div>

      <div className="pregnancy-text">
        <h2>Grossesse</h2>
        <p className="intro">
          Une séance photo de maternité est un moment spécial et intime,<br />
          capturant la beauté et l'attente avant l'arrivée de bébé.
        </p>
    
        <p>
          La période idéale pour une séance photo de maternité se situe généralement entre le
          7ème et 8ème mois de grossesse.
        </p>
        <p>
          À ce stade, votre ventre est bien visible, et vous êtes encore suffisamment à l’aise pour
          profiter pleinement de la séance.
        </p>
        <p>
          Mon objectif est de refléter vos émotions et de vous offrir des souvenirs inoubliables.
        </p>
        <p>
          Je vous propose plusieurs tenues qui vous sublimeront ainsi que des accessoires
          comme des couronnes de fleurs.
        </p>
        <p className="highlight">
          20 euros offert si vous réservez<br />
          votre shooting grossesse et naissance en simultané
        </p>
      </div>
    </section>
  );
};

export default Grossesse;
