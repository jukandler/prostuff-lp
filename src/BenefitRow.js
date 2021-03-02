import inspiration from './assets/icon_rainbow.png';
import equipment from './assets/icon_equipment.png';
import heart from './assets/icon_heart.png';
import './BenefitRow.css';

function BenefitRow() {
  return (
    <div className="benefit-row">
        <div className="benefit-column">
            <img src={equipment} className="benefit-icon" alt="logo" />
            <h3>Entdecke die Ausstattung<br/>anderer Sportler</h3>
        </div>
        <div className="benefit-column">
            <img src={inspiration} className="benefit-icon" alt="logo" />
            <h3>Hole dir Inspiration<br/>von Gleichgesinnten </h3>
        </div>
        <div className="benefit-column">
            <img src={heart} className="benefit-icon" alt="logo" />
            <h3>Teile deine<br/>Lieblingsprodukte</h3>
        </div>
    </div>
  );
}

export default BenefitRow;
