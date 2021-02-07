import { Link } from "react-router-dom";

import './Footer.css';

function Footer() {

  return (
    <div className="footer">
        <div className="footer-link">
            <Link to="/impressum">Impressum</Link>
        </div>
        <div className="footer-link">
            <Link to="/datenschutz">Datenschutz</Link>
        </div>
    </div>
  );
}

export default Footer;
