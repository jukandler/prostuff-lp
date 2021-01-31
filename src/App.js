import './App.css';
import Footer from './Footer';
import Header from './Header';
import BenefitRow from './BenefitRow';
import Benefit from './Benefit';
import AppLink from './AppLink';

function App() {
  return (
    <div className="App">
      <Header/>
      <BenefitRow/>
      <Benefit headline="Produktempfehlungen der Profis" text="Entdecke die besten Produkte für Sportler und Empfehlungen der Profis. Egal ob du dich für Fitness, Yoga oder Joggen interessierst, wir haben die besten Produktempfehlungen für dich, um dich deinen sportlichen Zielen näher zu bringen."/>
      <Benefit headline="Community aus Gleichgesinnten" text="Folge anderen Nutzern aus der Communit, lasse dich inspirieren und verpasse keine neuen Produktempfehlungen mehr. Speichere die besten Empfehlungen und kaufe sie direkt im Shop." reverse={true}/>
      <Benefit headline="Deine Lieblingsprodukte" text="Teile selbst deine eigenen Lieblingsprodukte und Empfehlungen mit deiner Commnuity und hilf so anderen dabei sich zu verbessern und ihre Ziele zu erreichen."/>
      <AppLink/>
      <Footer/>
    </div>
  );
}

export default App;
