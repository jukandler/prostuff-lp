import './Header.css';
import Button from './Button';

function Header() {
  return (
    <div className="header">
      <h1 className="headline">
          prostuff
      </h1>
      <h2 className="subheadline">
          Die besten Produktempfehlungen zu deinen Lieblingssportarten von Profis und Gleichgesinnten!
      </h2>
      <Button/>
    </div>
  );
}

export default Header;
