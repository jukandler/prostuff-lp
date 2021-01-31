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
        Trete jetzt der PROSTUFF-Community bei:<br></br>Entdecke die besten Produkte von anderen Sportlern und teile selbst deine Lieblingsprodukte.
        </p>
        <Button/>
        <button className="blocker-applink">Bald verfügbar!</button>
      </header>
    </div>
  );
}

export default AppLink;
