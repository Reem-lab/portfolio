import about from '../images/about.jpg';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/InfoMe.css';
import WhoMe from './WhoMe';


const InfoMe = () => {
  return (
    <>
    <section className="projects">
     <div className="works-projects">
     <div onClick={() => window.location.replace('/#about')} className="arrow" >
       <FaArrowLeft className="backArrow" />
       </div>
      <div className="side--text-about">
        <p className="info-projects--text">About ME</p>
          <div className="lines">
              <div className="horizontal--line-red" />
               <div className="horizontal-line-red second" />
           </div>
           <span className="span-text">I love Design, Technology, and React.</span>
      </div>
      <div className="img-div">
           <img className="image2" src={about} alt="about" />
        </div>
        </div>
    </section>
    <WhoMe />
     </>
  )
}

export default InfoMe;
