import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Naissance = () => {
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
        <h1>Naissance</h1>
        <p className="intro">
          Les premiers jours de la vie d'un bébé sont d’une beauté pure et
          incomparable.
        </p>
        <p>
          Une séance photo de naissance permet de capturer ces moments fragiles
          et précieux, avant même que votre tout-petit ait eu le temps de
          découvrir le monde.
        </p>
        <p>
          Ce sont des souvenirs inestimables qui, des années plus tard, vous
          rappelleront la tendresse de cette période magique.
        </p>

        <p>
          Le meilleur moment pour réaliser un shooting naissance se situe
          généralement dans les 10 premiers jours jusqu’au un mois de votre
          bébé.
        </p>
        <p>
          À ce stade, le nouveau-né est encore très endormi, ce qui facilite la
          prise de photos douces et naturelles, mettant en valeur sa petite
          taille, ses traits délicats et sa douceur.
        </p>

        <Link to="/#contact">
          <p className="highlight">
            N’hésitez pas à prévoir votre séance à l’avance pour garantir la
            disponibilité et profiter pleinement de ce moment unique.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Naissance;
