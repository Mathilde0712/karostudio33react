import HeroKaro from "../assets/photos/heroKaro.webp"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
      <h1 className="hero-title">À mon sujet</h1>
        <div className="Herocontent">
        <p className="hero-text">
          Maman de deux enfants, la photographie c’est avant tout une passion
          mais aussi le challenge d’une nouvelle aventure.
        </p>
        <p className="hero-text">
          Mon style est lumineux et épuré dans la douceur de tons beige et
          blanc. Je capture tous les moments importants de votre vie
        </p>
      </div>
    </div>
    <img className="heroImg" src={HeroKaro} alt="une mariée"/>
    </div>
  );
};

export default Hero;
