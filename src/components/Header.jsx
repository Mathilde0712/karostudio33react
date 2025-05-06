import logo from "../assets/photos/Karostudiologo1.png";
import Slider from "react-slick";
import photo1 from "../assets/photos/headerKaro.webp";
import photo2 from "../assets/photos/allaitement.webp";
import photo3 from "../assets/photos/Coralie-9.webp";
import photo4 from "../assets/photos/kelly-25.webp";

const images = [photo1, photo2, photo3, photo4];

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className="header">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img
              src={src}
              alt={`slide-${index}`}
              className={`slide-img ${
                src === photo1 ? "special-position" : ""
              }`}
            />
          </div>
        ))}
      </Slider>

      <div className="overlay">
        <img src={logo} alt="logo" className="logo" />
        <div className="text">
          <h2>
            VOS PRÉCIEUX
            <br />
            SOUVENIRS
          </h2>
          <h2>
            CAPTURÉS POUR
            <br />
            TOUJOURS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
