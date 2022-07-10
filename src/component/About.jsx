// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import '../styles/Works.css';
import about from '../images/about.jpg';

const About = () => {
  return (
    <div className="works">
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
           <p className="projects-text-about">About me</p>
          <div className="lines">
              <div className="horizontal-line-red" />
               <div className="horizontal-line-red second" />
           </div>
           <div className="about-span--link">
           <span className="span-text">I love Design, Technology, and React.</span>
            <Link to="/InfoMe" className="btn" exact>
              Show me more
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
           <img className="about-image" src={about} alt="projects" />
           <p className="number-text--two">02</p>
           </Animate>
        </div>
    </div>
  )
}

export default About;
