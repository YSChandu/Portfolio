import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Languages />
    </div>
  );
}

export default App;