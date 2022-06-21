import img1 from '../images/b_cloud02.svg';
import img2 from '../images/b_cloud01.svg';
import '../styles/clouds.css'

const Cloud2 = () => (
  <div className="clouds">
    <img className="cloud2" src={img1} alt="cloud2-img" />
    <img className="cloud1" src={img2} alt="cloud1-img" />
  </div>
);

export default Cloud2;
