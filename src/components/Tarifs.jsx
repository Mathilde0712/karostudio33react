import famillePhoto from "../assets/photos/famille.webp";
import couplePhoto from "../assets/photos/couple.webp";
import mariage2 from "../assets/photos/mariage2.webp";
import grossesse2 from "../assets/photos/grossesse2.webp"

const Tarifs = () => {
  return (
   
      <div className="tarif">
        <h1 className="title-tarif">TARIFS</h1>
        <div className="content-tarif">
          <div className="contain" >
          <div className="tarifcontent">
          <div className="separator1" >
            <h2 className="tarifTitle">Bulle de bonheur </h2>
            <p>10 photos numériques</p>
            <p>accessoires et pret de tenue</p>
            <p className="text1" >home studio ou extérieur</p>
            <p className="prix">130 euros</p>
            <img src={couplePhoto} alt="couple" />
            </div>
          </div>
          <div className="tarifcontent ">
            <div className="separator2" >
            <h2 className="tarifTitle">Jolie merveille </h2>
            <p>20 photos numériques</p>
            <p>accessoires et pret de tenue</p>
            <p className="text1" >home studio ou extérieur</p>
            <p className="prix">180 euros</p>
            <img src={mariage2} alt="mariée" />
            </div>
            </div>
            </div>
          <div className="contain" >
          <div className="tarifcontent">
          <div className="separator3 separator4" >
            <h2 className="tarifTitle">Sur un nuage </h2>
            <p>30 photos numériques</p>
            <p>accessoires et pret de tenue</p>
            <p className="text1">home studio ou extérieur</p>
            <p className="prix">230 euros</p>
            <img src={famillePhoto} alt="famille" />
            </div>
          </div>
          <div className="tarifcontent">
          <div className="separator3" >
            <h2 className="tarifTitle">Pack Maternité </h2>
            <p>Shooting</p>
            <p>Grossesse +</p>
            <p className="text1">Maternité</p>
            <p className="prix">20 euros OFFERT</p>
            <img src={grossesse2} alt="famille" />
            </div>
          </div>
          </div>
      </div>
      <p className="sup" >Photo retouchée supplémentaire : +6 € par photo</p>
      <p className="sup" >Le tarif indiqué ne comprend pas les frais kilométriques.</p>
      </div>
      
    
  );
};

export default Tarifs;