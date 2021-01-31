import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Footer from './Footer';
import Header from './Header';
import BenefitRow from './BenefitRow';
import Benefit from './Benefit';
import AppLink from './AppLink';
import Imprint from './Imprint';
import DataPrivacy from './DataPrivacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <div className="highlight-container">
                <BenefitRow/>
            </div>
            <div className="benefit-container">
                <Benefit headline="Entdecke die Ausstattung der Profis" text="Finde heraus, welche Produkte die Profis nutzen. Egal ob du dich für Fitness, Yoga oder Joggen interessierst: Bei PROSTUFF findest du die beste Ausstattung, die dich deinen sportlichen Zielen näher bringt."/>
                <Benefit headline="Hole dir Inspiration von Gleichgesinnten" text="Folge anderen Sportlern aus der Community, lasse dich inspirieren und bleibe auf dem Laufenden, welche neuen Produkte deine Bekannten empfehlen. Speichere die besten Empfehlungen auf deine Merkliste." reverse={true}/>
                <Benefit headline="Teile deine Lieblingsprodukte" text="Teile selbst deine eigenen Lieblingsprodukte und Empfehlungen mit deiner Community. Zeige, auf welche Sportausstattung du setzt und hilf so anderen dabei, sich zu verbessern und ihre sportlichen Ziele zu erreichen."/>
            </div>
            <AppLink/>
            <Footer/>
          </Route>
          <Route path="/impressum">
            <Imprint />
          </Route>
          <Route path="/datenschutz">
            <DataPrivacy />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
