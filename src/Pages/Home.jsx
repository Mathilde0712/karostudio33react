
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MomentDeVie from "../components/MomentDeVie";
import Tarifs from "../components/Tarifs";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
           <Header />
           <Hero />
           <MomentDeVie />
           <Tarifs />
           <Contact />
          
        </div>
    );
};

export default Home;