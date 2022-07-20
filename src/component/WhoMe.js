import Passion from './Passion';
import Skills from './Skills';
import photoMe from '../images/myphoto.jpg';
import '../styles/WhoMe.css';

const WhoMe = () => (
  <>
    <section className="information">
      <div className="left-side--div">
        <div className="horizontal--line-black" />
        <p className="number-text--about">01</p>
        <p className="question">WHO I AM</p>
      </div>
      <div className="right-side--div">
        <h2 className="heading-secondary">REEM JANINA</h2>
        <summary className="small-summary"> I am 22 years old and I am in love with pair programming and delivering UI projects with React and the magical back-end framework ROR, I am a diligent recent college graduate (Bachelor`&apos;`s degree in Computer Science ) from Suez canal university. Throughout my academic career, I was consistently praised as proactive by my professors and peers. While working on academic and extracurricular projects, I developed proven communication, leadership, and planning skills.</summary>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className="my-photo" src={photoMe} alt="photo for me" />
      </div>

    </section>
    <Passion />
    <Skills />
  </>
);

export default WhoMe;
