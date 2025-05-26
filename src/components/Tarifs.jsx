
import baby2 from "../assets/photos/sunset-nicolas-et-charlotte-1-16.webp";
import famille1 from "../assets/photos/Coralie-3.webp";
import baby1 from "../assets/photos/NOA-one-5.webp"


const Tarifs = () => {
  return (
    <div className="tarif " id="tarifs">
      <h1 className="title-tarif">TARIFS</h1>
      <div className="content-tarif ">
        <div className="tarifcontent">
          <img src={baby1} alt="bébé" />
          <h2 className="tarifTitle">Bulle de douceur </h2>
          <p><strong>Toutes Séances</strong></p>
          <p className="com">(sauf grossesse et naissance)</p>
          <p>25 photos numériques en galerie</p>
          <p className="text1">Home studio ou extérieur</p>
          <p className="prix">190 euros</p>
        </div>
        <div className="tarifcontent ">
          <img src={baby2} alt="bébé" />
          <h2 className="tarifTitle">Jolie merveille </h2>
          <p><strong>Séance Grossesse</strong></p>
          <p>25 photos numériques en galerie</p>
          <p>Accessoires et prêt de tenue</p>
          <p className="text1">Home studio ou extérieur</p>
          <p className="prix">210 euros</p>
        </div>

        <div className="tarifcontent">
          <img src={famille1} alt="famille" />
          <h2 className="tarifTitle">Sur un nuage </h2>
          <p><strong>Séance Naissance</strong></p>
          <p>25 photos numériques en galerie</p>
          <p>Accessoires et prêt de tenue</p>
          <p className="text1">Home studio ou extérieur</p>
          <p className="prix">220 euros</p>
        </div>
      </div>
      
    
    </div>
  );
};

export default Tarifs;
