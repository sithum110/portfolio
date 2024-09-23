import './App.css';
import Education from './sections/aducation/Education';
import Contact from './sections/Contact/Contact';
import Experience from './sections/expireence/Experience';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
