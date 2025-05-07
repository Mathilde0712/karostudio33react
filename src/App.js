import {  HashRouter , Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import MentionsLegales from "./components/MentionsLegales";


const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/mentions-legales" element={<MentionsLegales/>}/>
    </Routes>
    </HashRouter>
  )
};
export default App;
