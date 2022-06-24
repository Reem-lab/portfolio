import { useState } from 'react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Menu from './Menu';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menu, setmenu] = useState(false)
  const showMenu = ()=>{
    setmenu(true)
  }

  const onClickHandler = () =>{
    setmenu(false)
  }
  
  return (
    <>
    {menu && <Menu onclick={onClickHandler}/>}
  <div className="nav">
    <div className="name-div">
      <p className="name-nav">Reem Janina</p>
    </div>
    <div className="wrap-social">
      <div className="social">
        <a className="anchor-link" href="https://twitter.com/Rem79940127">
        <AiOutlineTwitter className="social-icon" />
        </a>
       <a className="anchor-link" href='https://github.com/Reem-lab'>
       <AiFillGithub className="social-icon" />
       </a>
       <a className="anchor-link" href="https://www.linkedin.com/in/reemjanina/" >
       <AiFillLinkedin className="social-icon" />
       </a>
      </div>
      <div className="menu" onClick={showMenu} >
        <HiOutlineMenuAlt4 className="menu-bar" />
      </div>
    </div>
  </div>
  </>
  )
  };

export default Navbar;
