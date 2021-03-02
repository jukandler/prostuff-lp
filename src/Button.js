import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Button.css';

function Button() {
  return (
    <div>
      <Link to="https://apps.apple.com/de/app/prostuff/id1553954162?l=de" target="_blank"> 
        <button className="button" >
          App-Download
        </button>
        </Link>
        <Link to="http://play.google.com/store/apps/details?id=com.prostuff.prostuff" target="_blank"> 
        <button className="button" >
          App-Download
        </button>
        </Link>
      </div>
  );
}

export default Button;