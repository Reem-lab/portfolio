/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Animate } from 'react-simple-animate';
import PropTypes from 'prop-types';
import exit from '../images/exit.svg';
import '../styles/Menu.css';

// eslint-disable-next-line react/prop-types
const Menu = ({ onclick }) => (
  <Animate
    play
    duration={1.5}
    delay={0.5}
    start={{
      transform: 'translateY(-1000px)',
    }}
    end={{
      transform: 'translatey(0px)',
    }}
  >
    <div className="main">
      <nav className="nav">
        <ul className="ul-menu">
          <li className="li-menu"><a onClick={onclick} className="anchor" href="#header">HOME</a></li>
          <li className="li-menu"><a onClick={onclick} className="anchor" href="#works">WORKS</a></li>
          <li className="li-menu"><a onClick={onclick} className="anchor" href="#about">ABOUT</a></li>
          <li className="li-menu"><a onClick={onclick} className="anchor" href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <div className="exit-div">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events  */}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <img className="exit" src={exit} alt="exit" onClick={onclick} />
      </div>
    </div>
  </Animate>
);

Menu.prototype = {
  onclick: PropTypes.func,
};

export default Menu;
