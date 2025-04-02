
import logo from "../assets/photos/Karostudiologo1.png"

const Header = () => {
  return (
    <div className="header">
       
      <img src={logo} alt="logo" className="logo"/>
      <div className="content">
      <h1 className="header-text">Vos précieux souvenirs</h1>
      <h1 className="header-text">capturés pour toujours</h1>
      </div>
    </div>
  );
};

export default Header;
