import './Header.css';
import logo from './assets/logo_dark.jpg'
import Button from './Button';

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="prostuff Logo" className="header-logo"/>
        <h1 className="headline">
            Prostuff App
        </h1>
        <h2 className="subheadline">
            Entdecke die besten Produkte ambitionierter Sportler zu deinen Lieblingssportarten
        </h2>
        <Button/>
        <button className="blocker">Bald verfügbar!</button>
    </div>
  );
}

export default Header;
