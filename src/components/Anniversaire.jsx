import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Anniversaire = () => {
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
        <h1>Anniversaire</h1>
        <p className="intro">
        Qu'il s'agisse d'une fête intime ou d'une grande célébration, je capture avec douceur et authenticité les sourires, les rires, les surprises et l’émotion qui font la magie de cet anniversaire. 
        </p>
    
        <p>
        Mon objectif est de vous offrir des souvenirs durables, que vous pourrez chérir et partager avec vos proches pour les années à venir. N'hésitez pas à me contacter pour organiser une séance photo qui reflète toute la joie et la convivialité de votre événement !
        </p>

        <p className="highlight2">
          
Je propose aussi la séance “smash cake”
        </p>
        <p>
        Le smash cake, c’est une séance photo fun et gourmande pour célébrer le premier anniversaire de votre bébé ! 
        </p>
        <p>
        Laisser votre tout-petit découvrir, toucher son tout premier gâteau, dans un décor doux et bohème aux tons beige et blanc.
        </p>
        <p>
        C’est un moment plein de rires, de surprise et d’émotion, immortalisé avec tendresse pour garder un souvenir unique de cette grande étape.
        </p>
        <Link to="/#contact">
        <p className="highlight">
        Besoin d’informations ou envie de réserver? je suis à votre écoute.
        </p>
        </Link>
      </div>
    </section>
  );
};

export default Anniversaire;
