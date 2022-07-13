import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './component/Navbar';
import Home from './component/Home';
import './styles/app.css';
import Projects from './component/Projects';
import InfoMe from './component/InfoMe';
import Form from './component/Form';

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/InfoMe" id="#info" element={<InfoMe />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
