import { Link } from 'react-router-dom';
import about from '../images/about.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/Projects.css'


const InfoMe = () => {
  return (
    <>
    <section className="projects">
     <div className="works-projects">
     <Link className="arrow" to="/"> <FaArrowLeft className="backArrow" /></Link>
      <div className="side--text-projects">
        <p className="projects--text">About ME</p>
          <div className="lines">
              <div className="horizontal--line-red" />
               <div className="horizontal-line-red second" />
           </div>
      </div>
      <div className="img-div">
           <img className="image2" src={about} alt="about" />
        </div>
        </div>
    </section>
     </>
  )
}

export default InfoMe;
