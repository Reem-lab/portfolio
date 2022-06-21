import '../styles/Header.css';
import Cloud2 from './cloud2';
import Cloud3 from './cloud3';
import img6 from '../images/moon.svg';

const Header = () => (
  <div className="intro">
    <div>
      <div className="horizontal-line" />
      <div className="horizontal-line" />
      <div className="horizontal-line" />
      <div className="horizontal-line" />
    </div>
    <div className="info">
      <h1 className="name">REEM</h1>
      <h2 className="last-name">JANINA</h2>
      <div className="lines">
        <div className="horizontal-line-red" />
        <div className="horizontal-line-red second" />
      </div>
      <h3 className="job-title">Full-stack web developer</h3>
    </div>
    <div className="moon-clouds">
      <Cloud2 />
      <img className="moon" src={img6} alt="moon" />
      <Cloud3 />
      <p className="porfolio">PORTFOLIO</p>
    </div>
  </div>
);

export default Header;
