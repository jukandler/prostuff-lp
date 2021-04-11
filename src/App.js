import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import './App.css';
import appscreen_feed from './assets/appscreen_feed.png';
import appscreen_inspiration from './assets/appscreen_inspiration.png';
import appscreen_profile from './assets/appscreen_profile.png'
import Footer from './Footer';
import Header from './Header';
import Benefit from './Benefit';
import AppLink from './AppLink';
import Imprint from './Imprint';
import DataPrivacy from './DataPrivacy';
import Download from './Download';
import Redirect from './Redirect';
import Button from './Button';

import SmartBanner from 'react-smartbanner';
import 'react-smartbanner/dist/main.css';

import logo from './assets/logo_transparent.png';

function App() {

  return (
    <div className="App">
      <SmartBanner title={'Prostuff'} />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <div className="stickyheader">
              <div className="stickyheader-content">
                <img src={logo} alt="prostuff Logo" className="nav-logo"/>
                <h1 className="headline">
                      Prostuff App
                  </h1>
                  <div className="header-button-container">
                    <Button/>
                  </div>
                </div>
            </div>
            <Header/>
            <div className="benefit-container">
                <Benefit logo={appscreen_feed} headline="Entdecke die Ausstattung anderer Sportler" text="Finde heraus, welche Produkte andere Sportler nutzen. Egal ob du dich für Fitness, Yoga oder Joggen interessierst: Bei PROSTUFF findest du die beste Ausstattung, die dich deinen sportlichen Zielen näher bringt."/>
                <Benefit logo={appscreen_inspiration} headline="Hole dir Inspiration von Gleichgesinnten" text="Folge anderen Sportlern aus der Community, lasse dich inspirieren und bleibe auf dem Laufenden, um keine Empfehlungen mehr zu verpassen. Speichere deine Favoriten auf der Merkliste, damit du sie später wiederfindest." reverse={true}/>
                <Benefit logo={appscreen_profile} headline="Teile deine Lieblingsprodukte" text="Teile selbst deine eigenen Lieblingsprodukte und Empfehlungen mit deiner Community. Zeige, auf welche Sportausstattung du setzt und hilf so anderen dabei, sich zu verbessern und ihre sportlichen Ziele zu erreichen."/>
            </div>
            <AppLink/>
            <div className="footer-container">
                <Footer/>
            </div>
          </Route>
          <Route path='/impressum'>
            <Imprint />
          </Route>
          <Route path='/datenschutz'>
            <DataPrivacy />
          </Route>
          <Route path='/download'>
            <Download />
          </Route>
          <Route path='/redirect'>
            <Redirect />
          </Route>
        </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
