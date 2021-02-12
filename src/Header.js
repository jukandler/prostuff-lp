import './Header.css';
import Button from './Button';

import logo from './assets/logo_transparent.png';

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="prostuff Logo" className="header-logo"/>
        <h1 className="headline">
            Prostuff App
        </h1>
        <h2 className="subheadline">
            Entdecke die besten Produkte und Empfehlungen anderer Sportler
        </h2>
        <Button/>
    </div>
  );
}

export default Header;
