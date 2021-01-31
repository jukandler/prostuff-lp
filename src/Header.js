import './Header.css';
import logo from './logo_dark.jpg'
import Button from './Button';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="prostuff Logo" className="header-logo"/>
      {/* <h1 className="headline">
          prostuff
      </h1> */}
      <h2 className="subheadline">
          Entdecke die besten Produkte zu deinen Lieblingssportarten von Profis und Gleichgesinnten
      </h2>
      <Button/>
    </div>
  );
}

export default Header;
