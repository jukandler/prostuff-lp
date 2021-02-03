import { Link } from "react-router-dom";
import './Imprint.css';
import back_icon from './assets/back_icon.png';

function Imprint() {
  return (
    <div className="imprint">
        <Link className="icon-wrapper" to="/">
            <img src={back_icon} className="back-icon" alt="back icon" />
        </Link>
        <h1>Impressum</h1>
        <h2>PROSTUFF GbR</h2>
        <p>Königinstr. 37<br/>80539 München<br/><br/>E-Mail: <a className="email-link" href="mailto:kontakt@prostuff.app">kontakt@prostuff.app</a></p>
        <h2>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
        <p>Timm Gaber und Julia Kandler,<br/>Geschäftsführung<br/><br/>Königinstr. 37<br/>80539 München</p>
    </div>
  );
}

export default Imprint;
