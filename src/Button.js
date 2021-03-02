import { HashLink as Link } from 'react-router-hash-link';
import './Button.css';

function Button() {
  return (
      <Link to="#appstore"> 
        <button className="button" >
          App-Download
        </button>
      </Link>
  );
}

export default Button;