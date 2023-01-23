
import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Project from './components/Project';
import SimpleProject from './components/SimpleProject';
import SkillGraph from './components/SkillGraph';
import Footer from "./components/Footer"
import ScrollToTop from "react-scroll-to-top";
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutMe />
      <br />
      <br />
      <br />
      <br />
      <SkillGraph />
      <br />
      <br />
      <br />
      <br />
      <Project />
      <br />
      <br />
      <br />
      <br />
      <SimpleProject />
      <br />
      <br />
      <br />
      <Footer />
      <ScrollToTop smooth/>
    </div>
  );
}

export default App;
