import { useState, useEffect } from "react";
import Slider from "react-slick";
import logo from "../assets/photos/Karostudiologo1.png";

// Desktop/tablette photos
import photo1 from "../assets/photos/headerKaro.webp";
import photo2 from "../assets/photos/allaitement.webp";
import photo3 from "../assets/photos/Coralie-9.webp";
import photo4 from "../assets/photos/kelly-25.webp";

// Mobile-specific photos
import mobile1 from "../assets/photos/Coralie-6-_2_.webp";
import mobile2 from "../assets/photos/kelly-11.webp";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile
    ? [photo1, photo2, mobile1, mobile2]
    : [photo1, photo2, photo3, photo4];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    cssEase: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
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
                !isMobile && src === photo1 ? "special-position" : ""
              }`}
            />
          </div>
        ))}
      </Slider>

      {/* Unique overlay layer, outside of slides */}
      <div className="overlay">
        <img src={logo} alt="logo" className="logo" />
        {currentSlide === 0 && (
          <div className="text animate-fade-in">
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
        )}
      </div>
    </div>
  );
};

export default Header;