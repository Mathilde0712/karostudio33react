import Slider from "react-slick";
import img1 from "../assets/photos/kelly-2-2.webp";
import img2 from "../assets/photos/kelly-1-3.webp";
import img3 from "../assets/photos/kelly-11.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gender = () => {
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
          <h1>Gender Reveal</h1>
          <p className="intro">
            La Gender Reveal est un moment rempli d’émotion, de surprise et de
            joie.
          </p>

          <p className="gender">
            Que vous choisissiez une mise en scène intime ou un décor plus
            festif, je vous accompagne pour créer un souvenir authentique de
            cette belle révélation… celle de la vie qui grandit et du lien qui
            se tisse déjà.
          </p>
       
       
          <h1>Baby Shower</h1>
          <p className="intro">
            La baby shower, c’est un moment doux et joyeux, entouré(e) de ceux
            qui comptent avant l’arrivée de bébé.
          </p>

          <p>
            Lors de ces instants remplis d’amour et de rires, je vous accompagne
            pour capturer l’émotion, les détails, les regards complices et
            l’ambiance unique de votre célébration.
          </p>
      
     </div>
    </section>
  );
};

export default Gender;
