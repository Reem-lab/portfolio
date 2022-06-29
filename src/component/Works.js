import '../styles/Works.css';
import projects from '../images/project7.jpg';

const Works = () => {
  return (
    <div className="works">
        <div className="side-text">
           <p className="projects-text">MOST HIGHLIGHTED PORJECTS</p>
          <div className="lines">
              <div className="horizontal-line-red" />
               <div className="horizontal-line-red second" />
           </div>
         <button className="btn">
            Show me more
           </button>
        </div>
        <div className="img-div">
           <img className="image" src={projects} alt="projects" />
           <p className="number-text">01</p>
        </div>

    </div>
  )
}

export default Works;
