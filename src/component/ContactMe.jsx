// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import '../styles/Works.css';
import contact from '../images/contact.jpg';

const ContactMe = () => {
  return (
    <div id="contact" className="works">
        <div className="side-text">
        <Animate
  play
  duration={1.5}
  delay={1}
  start={{
    transform: "translateX(-1000px)",
  }}
  end={{
    transform: "translatex(0px)",
  }}
  >
           <p className="projects-text-about">Get In Touch</p>
          <div className="lines--about">
              <div className="horizontal-line-red" />
               <div className="horizontal-line-red second" />
           </div>
           <div className="about-span--link">
            <Link to="/Form" className="btn" exact>
              Let's connect
            </Link>
           </div>
            </Animate>
        </div>
        <div className="img-div">
        <Animate
  play
  duration={1.5}
  delay={1}
  start={{
    transform: "translateX(1000px)",
    scrollBehavior: "smooth"
  }}
  end={{
    transform: "translatex(0px)",
  }}
  >
           <img className="about-image" src={contact} alt="projects" />
           <p className="number-text--two">03</p>
           </Animate>
        </div>
    </div>
  )
}

export default ContactMe;
