import {  BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import MentionsLegales from "./components/MentionsLegales";
 import Grossesse from "./components/Grossesse";
import Naissance from "./components/Naissance";
import Famille from "./components/Famille";
import Couple from "./components/Couple";
import Anniversaire from "./components/Anniversaire";
import Mariage from "./components/Mariage";
import Bapteme from "./components/Bapteme";
import Evjf from "./components/Evjf";
import Professionnel from "./components/Professionnel";
import Gender from "./components/gender";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/mentions-legales" element={<MentionsLegales/>}/>
    <Route path="/grossesse" element={<Grossesse />} />
    <Route path="/naissance" element={<Naissance />} />
    <Route path="/famille" element={<Famille />} />
    <Route path="/couple" element={<Couple />} />
    <Route path="/anniversaire" element={<Anniversaire />} />
    <Route path="/mariage" element={<Mariage />} />
    <Route path="/bapteme" element={<Bapteme />} />
    <Route path="/evjf" element={<Evjf />} />
    <Route path="/professionnel" element={<Professionnel />} />
    <Route path="/gender-reveal" element={<Gender />} />
    </Routes>
    </BrowserRouter>
  )
};
export default App;
