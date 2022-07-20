/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/InfoMe.css';
import contact from '../images/contact.jpg';
import FormContact from './FormContact';
import SocialLinks from './SocialLinks';

const Form = () => (
  <>
    <section className="projects">
      <div className="works-projects">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions  */}
        <div onClick={() => window.location.replace('/#contact')} className="arrow">
          <FaArrowLeft className="backArrow" />
        </div>
        <div className="side--text-about form-side--text">
          <p className="info-projects--text">Get In Touch</p>
          <div className="lines">
            <div className="horizontal--line-red" />
            <div className="horizontal-line-red second" />
          </div>
        </div>
        <div className="img-div">
          <img className="image2" src={contact} alt="about" />
        </div>
      </div>
    </section>
    <FormContact />
    <SocialLinks />
  </>
);

export default Form;
