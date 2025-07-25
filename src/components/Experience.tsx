import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Koordinator IoT & Robotics',
      company: 'IDN Boardingschool',
      period: '2024 - Sekarang',
      location: 'Surakarta, Indonesia',
      description: 'Mengembangkan kurikulum, membina siswa & guru, serta mengelola lab IoT & Robotika. Fokus pada proyek, lomba, dan kolaborasi industri.',
      achievements: [
        'Menyusun kurikulum berbasis project-based learning dan berhasil diimplementasikan.',
        'Membawa siswa menjuarai kompetisi robotika tingkat nasional seperti NRC, IARC, dan kompetisi IoT tingkat ASEAN.',
        'Menghasilkan lebih dari 20 produk unggulan seperti Smart Trash Bin, Smart Irrigation, Fingerprint Locker, dll. yang dipresentasikan ke publik dan stake holder.'
      ],
      technologies: ['Arduino', 'Makecode', 'Blynk', 'MQTT', 'Firebase/Supabase', 'Tinkercad', 'C/C++', 'Python', 'AWS IoT', 'TensorFlow', 'MQTT']
    },
    {
      title: 'IoT Robotics AI Trainer',
      company: 'ID Networkers',
      period: '2024 - Sekarang',
      location: 'Jakarta, Indonesia',
      description: 'Sertifikasi IoT, Robotika dan Automation. Fokus pada pelatihan dan pengembangan keterampilan hardskill.',
      achievements: [
        'Menciptakan Alumni yang berkompeten sebagai seorang pengajar IoT dan Robotika',
        'Bisa membuat project untuk kebutuhan sekolah atau industri',
        'Menerapkan metode pembelajaran yang efektif dan menyenangkan'
      ],
      technologies: ['Arduino', 'C/C++', 'Python', 'Blynk', 'MQTT', 'Google Assistant' , 'OpenCV', 'Numpy', 'Ultralytics']
    },
    {
      title: 'IoT & Robotics Mentor',
      company: 'SD, SMP & SMK Cinta Kasih Tzuchi',
      period: '2023 - 2024',
      location: 'Jakarta Barat, Indonesia',
      description: 'Memperkenalkan IoT dan Robotika kepada Guru sebagai kurikulum baru dengan menggunakan metode pembelajaran yang interaktif.',
      achievements: [
        'Memahami fundamental IoT, Robotika dan Desain Hardware',
        'Menerapkan konsep STEM dan Metode Project Based Learning untuk meningkatkan minat siswa',
        'Integrasi dengan mobile app untuk real-time data visualization'
      ],
      technologies: ['Arduino', 'ESP32', 'Blynk', 'Python', 'C/C++', 'Thingkercad']
    },
    {
      title: 'IoT & Robotic Trainer',
      company: 'SMK Negeri 1 Cibinong',
      period: '2023 - 2024',
      location: 'Cibinong, Indonesia',
      description: 'Mengajar dengan metode Project Based Learning di bidang IoT dan Robotika untuk sekolah menengah kejuruan.',
      achievements: [
        'Mastering Fundamentals IoT and Robotics by hands-on projects',
        'Integrasi data dari sensor dan aktuator untuk membuat sistem yang lebih kompleks',
        'Membuat proyek nyata untuk meningkatkan pemahaman konsep IoT dan Robotika',
      ],
      technologies: ['Arduino', 'ESP32', 'Blynk', 'Python', 'C/C++']
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pengalaman Kerja
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Perjalanan karir dalam dunia IoT dan robotika
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block"></div>

                <Card className="md:ml-20 bg-gradient-secondary border-border shadow-lg hover:shadow-primary transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex} 
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;