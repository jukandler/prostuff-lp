import Lane from './Lane';
import './Header.css';

import logo from './assets/logo_transparent.png';

function Header() {
  return (
    <div className="header">
      <div className="headercontent">
          <img src={logo} alt="prostuff Logo" className="header-logo"/>
          <h2 className="subheadline">
              No Filter. No Makeup.<br />Just Products!
          </h2>
          <h3 className="laneheadline">
            Entdecke die persönlichen Empfehlungen anderer Sportler -<br />egal, für welche Sportart du dich interessierst:
          </h3>
          <Lane />
        </div>
    </div>
  );
}

export default Header;
