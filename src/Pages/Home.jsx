
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MomentDeVie from "../components/MomentDeVie";
import Tarifs from "../components/Tarifs";
import Tarifs2 from "../components/Tarifs2";


const Home = () => {
    return (
        <div>
           <Header />
           <Hero />
           <MomentDeVie />
           <Tarifs />
           <Tarifs2 />
           <Contact />
          
        </div>
    );
};

export default Home;