import { useState, useEffect } from "react";
import Slider from "react-slick";
import logo from "../assets/photos/Karostudiologo1.png";

// Desktop/tablette photos
import photo1 from "../assets/photos/headerKaro.webp";
import photo3 from "../assets/photos/banniereKaro.webp";
import photo4 from "../assets/photos/Coralie-9.webp";
import photo5 from "../assets/photos/kelly33-1-2.webp";

// Mobile-specific photos
import mobile1 from "../assets/photos/Coralie-6-_2_.webp";
import mobile2 from "../assets/photos/kelly-11.webp";
import mobile3 from "../assets/photos/bebemob.webp"
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      setShowText(false);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const images = isMobile
    ? [photo1, mobile1, mobile2, mobile3]
    : [photo1,  photo4, photo3, photo5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
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
      {/* Menu burger */}
      <div className="menu-container">
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {menuOpen && (
          <nav className="dropdown-menu">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>À mon sujet</a>
            <a href="#moment" onClick={() => setMenuOpen(false)}>Moments de vie</a>
            <a href="#evenement" onClick={() => setMenuOpen(false)}>Évènements de vie</a>
              {/* <a href="#tarifs" onClick={() => setMenuOpen(false)}>Tarifs</a>*/}
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img
              src={src}
              alt={`slide-${index}`}
              className={`slide-img ${
                !isMobile && src === photo1 ? "special-position" : ""
              }`}
               loading="eager"
               fetchPriority="high"
            />
          </div>
        ))}
      </Slider>

      <div className="overlay">
        <img src={logo} alt="logo" className="logo" />
        {showText && (
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