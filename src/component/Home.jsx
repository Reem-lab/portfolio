// import Fullpage,{ FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Header from './Header';
import Works from './Works';
import Navbar from './Navbar';
import '../styles/Home.css';
import About from './About';
import ContactMe from './ContactMe';

const Home = () => (
  <div className="wrap">
    {/* <Fullpage>
      <FullpageNavigation />
      <FullPageSections >
          <FullpageSection>
              <Navbar />
             <Header />
          </FullpageSection>
          <FullpageSection>
            <Works />
          </FullpageSection>
          <FullpageSection>
             <About />
          </FullpageSection>
          <FullpageSection>
             <ContactMe />
          </FullpageSection>
      </FullPageSections>
    </Fullpage> */}
          <Navbar />
          <Header />
          <Works />
             <About />
             <ContactMe />
  </div>
);

export default Home;
