import HeroKaro from "../assets/photos/heroKaro.webp";

const Hero = () => {
  return (
    <div className="hero" id="accueil">
      <div className="hero-content">
        <h1 className="hero-title">À mon sujet</h1>
        <div className="Herocontent">
          <p className="hero-text1">
          Je suis une maman de deux enfants passionnée de photographie, guidée par l’envie de capturer l’émotion pure et les instants précieux de la vie.

          </p>
        
          <p className="hero-text">
            À travers une approche douce et naturelle, je crée des images
            intemporelles dans des tons beiges et blancs, inspirées de l’univers
            bohème. Chaque séance est une parenthèse de tendresse, où la
            simplicité révèle toute la beauté de vos histoires. Je veille à ce
            que vous vous sentiez détendue et à l’aise tout au long de la
            séance, en créant une atmosphère calme et chaleureuse.
          </p>
        </div>
      </div>
      <img className="heroImg" src={HeroKaro} alt="une mariée" />
    </div>
  );
};

export default Hero;
