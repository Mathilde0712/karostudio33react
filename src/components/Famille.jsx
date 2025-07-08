
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Famille = () => {
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
          <h1>Famille</h1>
          <p className="intro">
          Un instant privilégié pour rassembler vos proches et créer des souvenirs inoubliables

          </p>
      
          <p>
          Que ce soit en extérieur ou en studio, je vous accompagne pour capturer la complicité, la joie et l’amour qui unissent votre famille. 
          </p>
          <p>
          Laissez-vous porter par une ambiance conviviale et détendue, pour des photos qui reflètent la véritable essence de votre famille. 
          </p>
        
          <Link to="/#contact">
          <p className="highlight">
          Ensemble, créons des souvenirs qui dureront toute une vie, <br/>
          pour plus d’informations ou pour réserver je suis à votre écoute.
          </p>
          </Link>
        </div>
      </section>
    );
};

export default Famille;