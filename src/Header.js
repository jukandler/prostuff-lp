import Lane from './Lane';
import './Header.css';

// import categories from './assets/category_lane.png';

function Header() {
  return (
    <div className="header">
      <div className="headercontent">
          <h1 className="subheadline">
              No Filter! No Makeup! Just Products!
          </h1>
          <h2 className="laneheadline">
            Entdecke die perfekte Ausstattung, von Sportlern persönlich empfohlen,<br />egal für welche Sportart du dich interessierst:
          </h2>
          {/* <div className="lanewrapper">
              <img src={categories} alt="prostuff Heimtraining" className="lane"/>
          </div> */}
          <Lane />
        </div>
    </div>
  );
}

export default Header;
