import { Link } from 'react-router-dom';
import projects from '../images/project7.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/Projects.css'
import Cards from './Cards';

const Projects = () => {
  return (
    <>
    <section className="projects">
     <div className="works-projects">
     <Link className="arrow" to="/"> <FaArrowLeft className="backArrow" /></Link>
      <div className="side--text-projects">
        <p className="projects--text">MOST HIGHLIGHTED PORJECTS</p>
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
  )
}

export default Projects;