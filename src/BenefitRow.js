import logo from './logo.png';
import './BenefitRow.css';

function BenefitRow() {
  return (
    <div className="benefit-row">
        <div className="benefit-column">
            <img src={logo} className="benefit-icon" alt="logo" />
            <p>Produktempfehlungen der Profis</p>
        </div>
        <div className="benefit-column">
            <img src={logo} className="benefit-icon" alt="logo" />
            <p>Community aus Gleichgesinnten</p>
        </div>
        <div className="benefit-column">
            <img src={logo} className="benefit-icon" alt="logo" />
            <p>Deine Lieblingsprodukte</p>
        </div>
    </div>
  );
}

export default BenefitRow;
