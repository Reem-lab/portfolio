import Passion from './Passion';
import photoMe from '../images/myphoto.jpg';
import '../styles/WhoMe.css';

const WhoMe = () => {
  return (
    <>
    <section className="information">
      <div className="left-side--div">
         <div className="horizontal--line-black" />
         <p className="number-text--about">01</p>
         <p className="question">WHO I AM</p>
      </div>
      <div className="right-side--div">
        <h2 className="heading-secondary">REEM JANINA</h2>
        <summary className="small-summary"> I am 22 years old and I am in love with paired programming and delivering UI projects with the React.js framework and the magical back-end framework ROR, I am a diligent recent college graduate (Bachelor's degree in Computer Science ) from Suez canal university. Throughout my academic career, I was consistently praised as proactive by my professors and peers. While working on academic and extracurricular projects, I developed proven communication, leadership, and planning skills.</summary>
        <img className="my-photo" src={photoMe} alt="photo for me"/>
      </div>

    </section>
     <Passion />
    </>
  )
}

export default WhoMe;
