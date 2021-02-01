import './Benefit.css';

function Benefit(props) {
  const {reverse, headline, text, logo} = props;
  return (
    <div className={`benefit ${reverse ? "reverse" : ""}`}>
        <img src={logo} className="benefit-image" alt="logo" />
        <div className="text-block">
            <h2 className="h2">{headline}</h2>
            <p>{text}</p>
        </div>
    </div>
  );
}

export default Benefit;
