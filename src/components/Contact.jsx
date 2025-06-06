import logo from "../assets/photos/Karostudiologo1.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
    <div className="contact-wrapper">
      <h1>PRISE DE CONTACT</h1>
      <p>
        Contactez-moi dès aujourd’hui pour réserver votre séance photo, discuter
        de vos idées, planifier une expérience unique qui vous ressemble… ou
        offrir un joli moment grâce à une carte cadeau personnalisée.
      </p>
  
      <div className="contactcontent1">
        <div className="email">
          <h2>E-MAIL</h2>
          <a href="mailto:kro.studio33@gmail.com">kro.studio33@gmail.com</a>
        </div>
        <div className="tel">
          <h2>TÉLÉPHONE</h2>
          <p>07 66 10 20 60</p>
        </div>
      </div>
  
      <div className="contactcontent2">
        <div className="reseauContent">
        <a href="https://www.facebook.com/profile.php?id=61569209636631&locale=fr_FR" aria-label="Facebook"  >
              <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/karostudio33/" aria-label="instagram">
              <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
        </div>
      </div>
    </div>
  
    
    <img src={logo} alt="logo" className="logoContact footer-logo" />
    <footer className="footer">
  <nav className="footer-nav">
    <a href="#accueil">À mon sujet</a>
    <a href="#moment">Moments de vie</a>
    <a href="#evenement">Évènements de vie</a>
    <a href="#tarifs">Tarifs</a>
    <a href="#contact">Contact</a>
  </nav>
  <p>© 2025 KaroStudio. Tous droits réservés.</p>
  <a href="/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions légales</a>
</footer>
  </div>
   
  );
};

export default Contact;
