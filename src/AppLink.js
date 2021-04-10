import './AppLink.css';

import appstore from './assets/appstore.png';
import playstore from './assets/playstore.png';

function AppLink() {
  return (
    <div className="link-header" id="appstore">
      <header className="content">
        <h2 className="h2">
          Jetzt die App holen
        </h2>
        <div className="appstore-buttons">
          <a href="https://apps.apple.com/de/app/prostuff/id1553954162?l=de" target="_blank" rel="noreferrer"> 
            <img src={appstore} alt="App Store Badge"></img>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.prostuff.prostuff" target="_blank" rel="noreferrer"> 
            <img src={playstore} alt="Play Store Badge"></img>
          </a>
        </div>
      </header>
    </div>
  );
}

export default AppLink;
