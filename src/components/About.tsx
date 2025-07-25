import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Database, Settings, Wifi } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'IoT Development', icon: Wifi, level: 95 },
    { name: 'Robotics', icon: Settings, level: 90 },
    { name: 'Embedded Systems', icon: Cpu, level: 92 },
    { name: 'Data Analysis', icon: Database, level: 85 }
  ];

  const technologies = [
    'Arduino', 'Raspberry Pi', 'ESP32', 'Python', 'C++', 
    'MQTT', 'LoRaWAN', 'TensorFlow', 'ROS', 'Node-RED'
  ];

  return (
    <section className="py-20 px-4 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-secondary border-border shadow-primary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Passion for Innovation
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Saya adalah seorang engineer yang bersemangat dalam mengembangkan 
                  solusi IoT dan robotika yang dapat mengubah cara kita berinteraksi 
                  dengan teknologi. Dengan pengalaman lebih dari 5 tahun, saya telah 
                  mengerjakan berbagai proyek mulai dari sistem monitoring industri 
                  hingga robot otonom.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Keahlian saya mencakup pengembangan embedded systems, integrasi 
                  sensor, komunikasi wireless, dan implementasi machine learning 
                  pada edge devices.
                </p>
              </CardContent>
            </Card>

            {/* Technologies */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Teknologi & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm bg-muted hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Keahlian Utama
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-lg p-6 border-border shadow-lg hover:shadow-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-primary font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;