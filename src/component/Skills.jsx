// import html from '../images/skills/html.svg';
import tailwind from '../images/skills/tailwindcss.svg';
import js from '../images/skills/js.svg';
import react from '../images/skills/react.svg';
import sass from '../images/skills/sass.svg';
// import html from '../images/skills/html.svg';
// import css from '../images/skills/css.svg';
// import ruby from '../images/skills/ruby.svg';

import '../styles/Skills.css';

const Skills = () => {
  return (
    <>
     <div className="left-side--skills">
       <div className="horizontal--line-black" />
       <p className="number-text--about">03</p>
       <p className="question">SKILL SET</p>
    </div>
    <section className="skills">
          <div className='skills-left--side'>

            <div className="skill-percent">
               <img className="skill-icon" src={tailwind} alt="html icon" />
               <div className="percent-frame">
                  <div className='top-precent'>
                     <p className="skill-paragraph">HTML <span className="span-years">2 YEARS</span></p>
                     <span className="percent">90%</span>
                  </div>
                  <div className="line-skills--percent"> <span className='progress-line'></span></div>
               </div>
            </div>

            <div className="skill-percent">
               <img className="skill-icon" src={tailwind} alt="html icon" />
               <div className="percent-frame">
                  <div className='top-precent'>
                     <p className="skill-paragraph">CSS <span className="span-years">2 YEARS</span></p>
                     <span className="percent">90%</span>
                  </div>
                  <div className="line-skills--percent"> <span className='progress-line'></span></div>
               </div>
            </div>

            <div className="skill-percent">
               <img className="skill-icon" src={js} alt="html icon" />
               <div className="percent-frame">
                  <div className='top-precent'>
                     <p className="skill-paragraph">JAVASCRIPT <span className="span-years">2 YEARS</span></p>
                     <span className="percent">90%</span>
                  </div>
                  <div className="line-skills--percent"> <span className='progress-line'></span></div>
               </div>
            </div>

             <div className="skill-percent">
               <img className="skill-icon" src={react} alt="html icon" />
               <div className="percent-frame">
                  <div className='top-precent'>
                     <p className="skill-paragraph">REACT <span className="span-years">2 YEARS</span></p>
                     <span className="percent">90%</span>
                  </div>
                  <div className="line-skills--percent"> <span className='progress-line'></span></div>
               </div>
            </div>
           
            <div className="skill-percent">
               <img className="skill-icon" src={tailwind} alt="html icon" />
               <div className="percent-frame">
                  <div className='top-precent'>
                     <p className="skill-paragraph">TAILWIND <span className="span-years">2 YEARS</span></p>
                     <span className="percent">90%</span>
                  </div>
                  <div className="line-skills--percent"> <span className='progress-line'></span></div>
               </div>
            </div>
              
              </div>

              <div className='skills-left--side'>

<div className="skill-percent">
   <img className="skill-icon" src={tailwind} alt="html icon" />
   <div className="percent-frame">
      <div className='top-precent'>
         <p className="skill-paragraph">HTML <span className="span-years">2 YEARS</span></p>
         <span className="percent">90%</span>
      </div>
      <div className="line-skills--percent"> <span className='progress-line'></span></div>
   </div>
</div>

<div className="skill-percent">
   <img className="skill-icon" src={sass} alt="html icon" />
   <div className="percent-frame">
      <div className='top-precent'>
         <p className="skill-paragraph">SASS <span className="span-years">2 YEARS</span></p>
         <span className="percent">90%</span>
      </div>
      <div className="line-skills--percent"> <span className='progress-line'></span></div>
   </div>
</div>

<div className="skill-percent">
   <img className="skill-icon" src={js} alt="html icon" />
   <div className="percent-frame">
      <div className='top-precent'>
         <p className="skill-paragraph">JAVASCRIPT <span className="span-years">2 YEARS</span></p>
         <span className="percent">90%</span>
      </div>
      <div className="line-skills--percent"> <span className='progress-line'></span></div>
   </div>
</div>

 <div className="skill-percent">
   <img className="skill-icon" src={react} alt="html icon" />
   <div className="percent-frame">
      <div className='top-precent'>
         <p className="skill-paragraph">REACT <span className="span-years">2 YEARS</span></p>
         <span className="percent">90%</span>
      </div>
      <div className="line-skills--percent"> <span className='progress-line'></span></div>
   </div>
</div>

<div className="skill-percent">
   <img className="skill-icon" src={tailwind} alt="html icon" />
   <div className="percent-frame">
      <div className='top-precent'>
         <p className="skill-paragraph">TAILWIND <span className="span-years">2 YEARS</span></p>
         <span className="percent">90%</span>
      </div>
      <div className="line-skills--percent"> <span className='progress-line'></span></div>
   </div>
</div>
  
  </div>

      </section>
      <div className="footer">
        <a className="mail" href='janinareem@gmail.com'>janinareem@gmail.com</a>
     </div>
    </>
  )
}

export default Skills;