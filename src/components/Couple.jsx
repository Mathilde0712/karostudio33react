
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Couple = () => {
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
          <h1>Couple</h1>
          <p className="intro">
          Ensemble, créons des photos qui racontent votre histoire d’amour !
          </p>
      
          <p>
          Que ce soit en extérieur dans un cadre naturel ou en studio pour une ambiance plus intime, je vous accompagne pour créer des images authentiques, pleines de tendresse et de douceur. 
          </p>
          <p>
          Chaque séance est pensée pour vous mettre à l’aise, afin que vous puissiez exprimer toute la beauté de votre relation.
          </p>
        
          <Link to="/#contact">
          <p className="highlight">
          Parlons ensemble de votre future séance photo 
          </p>
          </Link>
        </div>
      </section>
    );
};

export default Couple;