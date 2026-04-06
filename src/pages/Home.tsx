import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Settings, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <ShieldCheck className="text-primary" size={32} />,
    title: 'Expertise in Compliance',
    description: 'Deep understanding of ZEMA regulations and international environmental standards.'
  },
  {
    icon: <Settings className="text-primary" size={32} />,
    title: 'Tailored Solutions',
    description: 'We provide customized environmental strategies that fit your specific business needs.'
  },
  {
    icon: <Users className="text-primary" size={32} />,
    title: 'Local Understanding',
    description: 'Strong grasp of the local regulatory landscape in Zambia and regional dynamics.'
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: 'Innovation Driven',
    description: 'Utilizing modern tools and innovative practices for sustainable business growth.'
  }
];

const services = [
  {
    title: 'Environmental Impact Assessments',
    description: 'Comprehensive evaluations of potential environmental effects of your projects.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Environmental Audits',
    description: 'Systematic reviews of operations to ensure full compliance with environmental laws.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Waste Management',
    description: 'Strategic planning for responsible waste handling and reduction.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
            alt="Nature landscape"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent" />
        </div>

        <div className="section-padding relative z-10 text-white">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/30 backdrop-blur-sm border border-accent/50 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              Environmental Consultancy
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Guiding businesses towards <span className="text-accent italic">sustainable</span> growth
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Expert environmental solutions tailored for compliance, innovation, and responsible development in Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-primary-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group"
              >
                Request Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
                alt="Green forest"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-xl italic text-primary mb-2">"Sustainability is no longer an option, it is a necessity for growth."</p>
              <p className="text-sm font-bold text-ink/60">— Femino Eco Blossom</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-primary">Expert Guidance for a Greener Future</h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Femino Eco Blossom is a professional environmental consultancy dedicated to helping businesses achieve compliance, sustainability, and responsible growth. We provide tailored environmental solutions aligned with regulatory requirements in Zambia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="block text-4xl font-bold text-primary mb-1">10+</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-ink/50">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary mb-1">100+</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-ink/50">Projects Completed</span>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Learn more about us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="bg-primary-dark text-white section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">Our Core Expertise</h2>
          <p className="text-white/60">We offer a wide range of environmental services designed to help your business thrive while staying compliant.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-primary">Why Choose Us</h2>
          <p className="text-ink/60">Our commitment to excellence and sustainability sets us apart as a leading consultancy in Zambia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl text-primary">{feature.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding pt-0">
        <div className="bg-accent rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl text-primary-dark">Ready to grow sustainably?</h2>
            <p className="text-primary-dark/70 text-lg">
              Partner with Femino Eco Blossom for expert environmental consultancy that drives compliance and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="mailto:fatnessngoma@gmail.com?subject=Consultation Request"
                className="bg-primary-dark text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Request Consultation
              </a>
              <a
                href="mailto:fatnessngoma@gmail.com?subject=Quote Inquiry"
                className="bg-transparent border-2 border-primary-dark text-primary-dark px-10 py-4 rounded-full font-bold hover:bg-primary-dark hover:text-white transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
