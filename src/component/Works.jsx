// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import '../styles/Works.css';
import projects from '../images/project7.jpg';

const Works = () => {
  return (
    <div id="works"  className="works">
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
           <p className="projects-text">MOST HIGHLIGHTED PORJECTS</p>
          <div className="lines">
              <div className="horizontal-line-red" />
               <div className="horizontal-line-red second" />
           </div>
            <Link to="/Projects" className="btn show-more" exact>
              Show me more
            </Link>
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
           <img className="image" src={projects} alt="projects" />
           <p className="number-text">01</p>
           </Animate>
        </div>

    </div>
  )
}

export default Works;
