import './AppLink.css';
import Button from './Button';

function AppLink() {
  return (
    <div className="link-header">
      <header className="content">
        <h2 className="h2">
          Jetzt die App holen
        </h2>
        <p>
        Trete der prostuff Community bei, um die besten Produkte zu entdecken und selbst deine Lieblingsprodukte zu teilen.
        </p>
        <Button/>
      </header>
    </div>
  );
}

export default AppLink;
