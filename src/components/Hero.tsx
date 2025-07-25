import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-primary">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-glow animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-accent rounded-full blur-2xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl animate-glow opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6 animate-glow">
              Hallo! I'm Yusuf Kamal
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              IoT & Robotics Engineer
            </h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-center text-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Membangun masa depan dengan teknologi IoT dan Robotika yang inovatif.
            Mengintegrasikan hardware dan software untuk solusi pintar.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="px-8 py-6 text-lg shadow-primary hover:shadow-accent transition-all duration-300">
              Lihat Portfolio
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/6285211300942', '_blank')}
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Hubungi Saya
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-accent rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-glow rounded-full animate-float opacity-25" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;