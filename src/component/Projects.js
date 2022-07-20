/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaArrowLeft } from 'react-icons/fa';
import projects from '../images/project7.jpg';
import '../styles/Projects.css';
import Cards from './Cards';

const Projects = () => (
  <>
    <section className="projects">
      <div className="works-projects">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div onClick={() => window.location.replace('/#works')} className="arrow">
          <FaArrowLeft className="backArrow" />
        </div>
        <div className="side--text-projects">
          <p className="projects--text">MOST HIGHLIGHTED PROJECTS</p>
          <div className="lines">
            <div className="horizontal--line-red" />
            <div className="horizontal-line-red second" />
          </div>
        </div>
        <div className="img-div">
          <img className="image2" src={projects} alt="projects" />
        </div>
      </div>
    </section>
    <Cards />
  </>
);

export default Projects;
