import famillePhoto from "../assets/photos/famille.webp";
import couplePhoto from "../assets/photos/couple.webp";
import mariage2 from "../assets/photos/mariage2.webp";


const Tarifs = () => {
  return (
    <div className="tarif ">
      <h1 className="title-tarif">TARIFS</h1>
      <div className="content-tarif ">
        <div className="tarifcontent">
          <img src={couplePhoto} alt="couple" />
          <h2 className="tarifTitle">Bulle de douceur </h2>
          <p>15 photos numériques</p>
          <p>accessoires et pret de tenue</p>
          <p className="text1">home studio ou extérieur</p>
          <p className="prix">140 euros</p>
        </div>
        <div className="tarifcontent ">
          <img src={mariage2} alt="mariée" />
          <h2 className="tarifTitle">Jolie merveille </h2>
          <p>25 photos numériques</p>
          <p>accessoires et pret de tenue</p>
          <p className="text1">home studio ou extérieur</p>
          <p className="prix">190 euros</p>
        </div>

        <div className="tarifcontent">
          <img src={famillePhoto} alt="famille" />
          <h2 className="tarifTitle">Sur un nuage </h2>
          <p>35 photos numériques</p>
          <p>accessoires et pret de tenue</p>
          <p className="text1">home studio ou extérieur</p>
          <p className="prix">240 euros</p>
        </div>
      </div>
      
    
    </div>
  );
};

export default Tarifs;
