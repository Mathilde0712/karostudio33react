
import Slider from 'react-slick';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Mariage = () => {
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
          <h1>Mariage</h1>
          <p className="intro">
          Qu'il s'agisse d'une fête intime ou d'une grande célébration, je capture avec douceur et authenticité les sourires, les rires, les surprises et l’émotion qui font la magie de cet evènement. 
          </p>
      
          <p>
          Mon objectif est de vous offrir des souvenirs durables, que vous pourrez chérir et partager avec vos proches pour les années à venir. 
          </p>
          
          
          <p className="highlight">
          Je serais ravie de capturer cette période magique pour vous
          </p>
          <a href='mailto:kro.studio33@gmail.com'>
          <p><u>Demande de devis personnalisé ici</u> </p>
          </a>
        </div>
      </section>
    );
};

export default Mariage;