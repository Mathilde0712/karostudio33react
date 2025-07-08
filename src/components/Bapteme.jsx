import Slider from "react-slick";
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bapteme = () => {
  const settings = {
    dots: false,
    arrows: false,
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
          <div>
            <img src={img1} alt="Naissance 1" />
          </div>
          <div>
            <img src={img2} alt="Naissance 2" />
          </div>
          <div>
            <img src={img3} alt="Naissance 3" />
          </div>
        </Slider>
      </div>

      <div className="pregnancy-text">
        <h1>Baptême</h1>
        <p className="intro">
          Le baptême est un moment précieux, chargé d'émotions et de symboles.
          C'est l'occasion de célébrer l'arrivée d'un enfant dans la communauté
          chrétienne, entouré de ses proches.
        </p>

        <p>
          En tant que photographe spécialisée, je vous propose de capturer ces
          instants magiques avec discrétion et bienveillance.
        </p>
      </div>
    </section>
  );
};

export default Bapteme;
