
import couplePhoto from "../assets/photos/kelly-1-3.webp";
import bebebain from "../assets/photos/bebebain.webp";
import gateau from "../assets/photos/gateau.webp"

const Tarifs2 = () => {
    return (
        <div className="tarif">
              <div className="content-tarif">
        <div className="tarifcontent">
          <img src={couplePhoto} alt="couple" />
          <h2 className="tarifTitle">Eclat de vie</h2>
          <p><strong>20 euros offert</strong> pour une</p>
          <p>réservation <strong>simultané</strong> d’une </p>
          <p className="text1">séance <strong>grossesse et naissance</strong>
          </p>
          
        </div>
        <div className="tarifcontent ">
          <img src={bebebain} alt="institut" />
          <h2 className="tarifTitle">Cocon de naissance</h2>
          <p>Profiter d’un <strong>moment hors </strong></p>
          <p><strong>du temps</strong> avec votre bébé.</p>
          <p className="text1"><strong>A partir de 135 euros</strong></p>
         
        </div>

        <div className="tarifcontent">
          <img src={gateau} alt="gateau" />
          <h2 className="tarifTitle">Évènements</h2>
          <p>Chaque événement est <strong>unique </strong>, </p>
          <p>c’est pourquoi les prestations</p>
          <p className="text1">sont réalisées <strong>sur mesure</strong>. 
          </p>
       
        </div>
      </div>
      <p className="sup">Photo retouchée supplémentaire : +8 € par photo</p>
      <p className="sup sup2">
        Le tarif indiqué ne comprend pas les frais kilométriques.
      </p>
      <a href="mailto:kro.studio33@gmail.com">Contactez moi pour plus d’informations ou un devis personnalisé</a>
        </div>
    );
};

export default Tarifs2;