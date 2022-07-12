import { FaArrowLeft } from 'react-icons/fa';
import '../styles/InfoMe.css';
import contact from '../images/contact.jpg';
import FormContact from './FormContact';
const Form = () => {
  return (
    <>
    <section className="projects">
     <div className="works-projects">
     <div onClick={() => window.location.replace('/#contact')} className="arrow" >
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
    </>
  )
}

export default Form;