import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yusufkml.developer@gmail.com',
      link: 'mailto:yusufkml.developer@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 8521-130-0942',
      link: 'https://wa.me/6285211300942'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yusufkamal/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Yusufkamal02',
      color: 'hover:text-purple-400'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'https://mailto:yusufkml.developer@gmail.com',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mari Berkolaborasi
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Tertarik untuk bekerja sama atau memiliki proyek IoT & robotika? 
            Mari diskusikan bagaimana teknologi dapat membantu visi Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border-border hover:bg-card hover:shadow-primary transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`p-4 bg-card/50 backdrop-blur-sm rounded-lg border-border hover:shadow-accent transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Kirim Pesan
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nama
                      </label>
                      <Input 
                        className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                        placeholder="Nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subjek
                    </label>
                    <Input 
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan
                    </label>
                    <Textarea 
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Ceritakan tentang proyek atau ide Anda..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;