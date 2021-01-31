import inspiration from './inspiration.png';
import weights from './weights.png';
import heart from './heart.png';
import './BenefitRow.css';

function BenefitRow() {
  return (
    <div className="benefit-row">
        <div className="benefit-column">
            <img src={weights} className="benefit-icon" alt="logo" />
            <h3>Entdecke die Ausstattung<br/>der Profis</h3>
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
