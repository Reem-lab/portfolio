import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import { FaAngellist } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="name-div">
      <p className="name-nav">Reem Janina</p>
    </div>
    <div className="wrap-social">
      <div className="social">
        <AiOutlineTwitter className="social-icon" />
        <AiFillGithub className="social-icon" />
        <AiFillLinkedin className="social-icon" />
        {/* <FaAngellist className="social-icon" /> */}
      </div>
      <div className="menu">
        <HiOutlineMenuAlt4 className="menu-bar" />
      </div>
    </div>
  </div>
);

export default Navbar;
