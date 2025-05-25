import {  BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import MentionsLegales from "./components/MentionsLegales";
// import Grossesse from "./components/Grossesse";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/mentions-legales" element={<MentionsLegales/>}/>
     { /*<Route path="/grossesse" element={<Grossesse />} /> */}
    </Routes>
    </BrowserRouter>
  )
};
export default App;
