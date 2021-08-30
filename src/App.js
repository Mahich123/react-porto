import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
