import Header from './Header';
import Works from './Works';
import Navbar from './Navbar';
import '../styles/Home.css';
import About from './About';

const Home = () => (
  <div className="wrap">
    <Navbar />
    <Header />
    <Works />
    <About />
  </div>
);

export default Home;
