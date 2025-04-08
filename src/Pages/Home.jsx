import Banniere from "../components/Banniere";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MomentDeVie from "../components/MomentDeVie";
import Tarifs from "../components/Tarifs";

const Home = () => {
    return (
        <div>
           <Header />
           <Banniere />
           <Hero />
           <MomentDeVie />
           <Tarifs />
        </div>
    );
};

export default Home;