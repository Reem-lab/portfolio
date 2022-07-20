import { FaReact } from 'react-icons/fa';
import design from '../images/skills/design-skills.svg';
import tech from '../images/skills/tech.svg';
import '../styles/Passion.css';

const Passion = () => (
  <>
    <div className="left-side--passion">
      <div className="horizontal--line-black" />
      <p className="number-text--about">02</p>
      <p className="question">PASSION</p>
    </div>
    <section className="passion">
      <div className="passion-info">
        <div className="design">
          <img className="design" src={design} alt="design" />
          <h3 className="heading-ternary">DESIGN</h3>
          <p className="design-paragraph">I think design is like a &quot;magic wand&quot;. If a service or product is magic to solve a problem, it is the role of design to act as an intermediary for the user to master it. We strive every day to create a &quot;magic wand&quot; that matches the user.</p>
        </div>
        <div className="design">
          <img className="design" src={tech} alt="tech" />
          <h3 className="heading-ternary">TECHNOLOGY</h3>
          <p className="design-paragraph">Technology has the power to change the lives of the world and individuals, as the phrase &quot;well-developed science and technology is indistinguishable from magic.&quot; I want to be a person who can always catch up with the latest technology and respond to changes. I think it is the mission of designers as well as engineers to promote innovation.</p>
        </div>
        <div className="design">
          <FaReact className="react-icon" />
          <h3 className="heading-ternary">REACT</h3>
          <p className="design-paragraph">Being a part of the JavaScript language, using React spawns lots of advantages. Products built with React are simple to scale, a single language used on the server/client/mobile side of things grants outstanding productivity, there are workflow patterns for convenient teamwork, UI code is readable and maintainable, and more.</p>
        </div>
      </div>
    </section>
  </>
);

export default Passion;
