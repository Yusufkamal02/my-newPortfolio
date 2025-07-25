import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 IoT & Robotics Engineer. Built with React & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;