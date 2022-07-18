import { Animate } from 'react-simple-animate';
import exit from '../images/exit.svg';
import '../styles/Menu.css';

const Menu = ({onclick}) => {
  return (
    <Animate
    play
    duration={1.5}
    delay={0.5}
    start={{
      transform: "translateY(-1000px)",
    }}
    end={{
      transform: "translatey(0px)",
    }}
    >
    <div className='main'>
     <nav class="nav">
       <ul class="ul-menu">
       <li  class="li-menu"><a class="anchor" href="#header">HOME</a></li>
         <li  class="li-menu"><a class="anchor" href="#works">WORKS</a></li>
         <li class="li-menu"><a class="anchor" href="#about">ABOUT</a></li>
         <li class="li-menu"><a class="anchor" href="#contact">CONTACT</a></li>
       </ul>
    </nav>
        <div className="exit-div" >
        <img class="exit" src={exit} alt="exit" onClick={onclick}/>
         </div>
        </div>
        </Animate>
  )
}

export default Menu;