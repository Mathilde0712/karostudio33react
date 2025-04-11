import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1>PRISE DE CONTACT</h1>
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
          <h2>RESEAUX</h2>
          <a href="https://www.facebook.com/profile.php?id=61569209636631&locale=fr_FR">
            FACEBOOK
          </a>
          <a href="https://www.instagram.com/karostudio33/">INSTAGRAM</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
