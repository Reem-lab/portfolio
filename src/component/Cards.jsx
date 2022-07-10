import Data from './porjectsData.js';
import '../styles/Cards.css';

const Cards = () => {


  return (
    <>
    <div className="header-works">
    <h2 className="heading-two">MY WORK</h2>
      <p className="summary">
      A small gallery of recent projects chosen by me.
      For more projects, please <a className="link-visit" href="https://github.com/Reem-lab">visit</a> my Github
      </p>
    </div>
    <div className="card-container">
        { Data.map((card) => (
             <div className="card">
              <div className="face face1">
              <img src={card.image} alt="project1" className="image-project" />
              <p className="project-name">{card.name}</p>
              </div>
              <div className="face face2">
                  <p className="description content">{card.description}</p>
                  <div className="links-div">
                  <a className="link" href={card.liveLink}>Go live</a>
                  <a  className="link"href={card.sourceLink}>source code</a>
                  </div>
              </div>
              </div>
          ))
        }
    </div>
    </>
  )
}

export default Cards;