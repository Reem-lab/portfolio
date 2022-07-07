import Header from './Header';
import Works from './Works';
import Navbar from './Navbar';
import '../styles/Home.css';

const Home = () => (
  <div className="wrap">
    <Navbar />
    <Header />
    <Works />
  </div>
);

export default Home;
