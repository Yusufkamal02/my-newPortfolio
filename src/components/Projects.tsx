import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cpu, Wifi, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Home IoT System',
      description: 'Sistem rumah pintar komprehensif dengan kontrol suhu, cahaya, dan keamanan menggunakan ESP32 dan aplikasi mobile.',
      image: '/Smart-home.jpg',
      technologies: ['ESP32', 'Flutter', 'MQTT', 'Firebase'],
      icon: Wifi,
      github: '#',
      demo: '#'
    },
    {
      title: 'Humanoid Robot',
      description: 'Robot yang dapat melakukan tugas-tugas yang berulang sesuai dengan instruksi yang diberikan.',
      image: '/humanoid.jpg',
      technologies: ['ROS', 'Python', 'OpenCV', 'Lidar'],
      icon: Settings,
      github: '#',
      demo: '#'
    },
    {
      title: 'Coaching Robotic Competition in China',
      description: 'Mebimbing dan melatih Siswa untuk mempersiapkan diri mengikuti kompetisi Youth Science and Technology Elite Gathering Zmrobo Maze Solving di China.',
      image: '/idnjuara.jpg',
      technologies: ['Python', 'Node.js', 'OpenCV', 'Zmrobo'],
      icon: Cpu,
      github: '#',
      demo: 'https://www.liputan6.com/news/read/5851295/membanggakan-5-siswa-smp-asal-bogor-juara-pertama-kompetisi-ai-robotik-internasional-di-beijing'
    },
    {
      title: 'Training and Development IoT Robotics and AI',
      description: 'Pelatihan materi IoT Robotics dan AI untuk Guru, Mahasiswa dan Umum dengan metode pembelajaran interaktif berbasis proyek nyata.',
      image: '/training.jpg',
      technologies: ['Esp8266', 'OpenCV', 'Blynk', 'Python', 'Machine Learning', 'Tensorflow', 'Ultralytics'],
      icon: Cpu,
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio Proyek
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Koleksi proyek IoT dan robotika yang telah saya kembangkan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:shadow-accent transition-all duration-500 hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 p-3 bg-primary/90 backdrop-blur-sm rounded-full">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 shadow-primary/50 hover:shadow-primary transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;