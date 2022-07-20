/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaArrowLeft } from 'react-icons/fa';
import about from '../images/about.jpg';
import '../styles/InfoMe.css';
import WhoMe from './WhoMe';

const InfoMe = () => (
  <>
    <section className="projects">
      <div className="works-projects">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div onClick={() => window.location.replace('/#about')} className="arrow">
          <FaArrowLeft className="backArrow" />
        </div>
        <div className="side--text-about">
          <p className="info-projects--text">About ME</p>
          <div className="lines">
            <div className="horizontal--line-red" />
            <div className="horizontal-line-red second" />
          </div>
          <span className="span-text span-text--mobile ">I love Design, Technology, and React.</span>
        </div>
        <div className="img-div">
          <img className="image2" src={about} alt="about" />
        </div>
      </div>
    </section>
    <WhoMe />
  </>
);

export default InfoMe;
