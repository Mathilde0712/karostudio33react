import HeroKaro from "../assets/photos/heroKaro.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">À mon sujet</h1>
        <div className="Herocontent">
          <p className="hero-text1">
          Maman de deux enfants, la photographie est avant tout une passion, mais aussi le défi d’une nouvelle aventure.


          </p>
          <p className="hero-text">
          Mon style est lumineux et épuré, dans la douceur des tons beige et blanc. Je capture les moments importants de votre vie avec sensibilité et authenticité.
          </p>
          <p className="hero-text">
          Je veille à ce que vous vous sentiez détendu(e) et à l’aise tout au long de la séance, en créant une atmosphère calme et chaleureuse..
          </p>
        </div>
      </div>
      <img className="heroImg" src={HeroKaro} alt="une mariée" />
    </div>
  );
};

export default Hero;
