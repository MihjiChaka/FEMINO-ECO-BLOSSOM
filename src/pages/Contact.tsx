import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      {/* Header */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl text-primary mb-8 leading-tight">
            Let's Start a <span className="italic text-accent">Conversation</span>
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed">
            Have questions about environmental compliance or need a quote for your project? Our team is here to help you navigate your sustainability journey.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Phone</h4>
                <p className="text-ink/60 text-sm">+260 973 917 979</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Email</h4>
                <p className="text-ink/60 text-sm">fatnessngoma@gmail.com</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Location</h4>
                <p className="text-ink/60 text-sm">Lusaka, Zambia</p>
              </div>
            </div>
            <div className="p-8 bg-primary-dark text-white rounded-3xl shadow-sm flex items-start gap-6">
              <div className="p-4 bg-white/10 rounded-2xl text-accent">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Business Hours</h4>
                <p className="text-white/60 text-sm">Mon - Fri: 08:00 - 17:00</p>
                <p className="text-white/60 text-sm">Sat: 09:00 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Direct Contact Section */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col justify-center items-center text-center space-y-8">
            <div className="max-w-md space-y-4">
              <h2 className="text-4xl text-primary">Get in Touch Directly</h2>
              <p className="text-ink/60">
                We prefer direct communication to provide you with the most accurate and personalized service. Click below to reach us instantly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
              <a
                href="mailto:fatnessngoma@gmail.com"
                className="flex flex-col items-center gap-4 p-8 bg-earth rounded-[2rem] border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-primary text-white rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-primary">Email Us</span>
                  <span className="text-sm text-ink/50">fatnessngoma@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+260973917979"
                className="flex flex-col items-center gap-4 p-8 bg-earth rounded-[2rem] border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-green-600 text-white rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-primary">Call / WhatsApp</span>
                  <span className="text-sm text-ink/50">+260 973 917 979</span>
                </div>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-100 w-full max-w-xl">
              <p className="text-sm text-ink/40">
                Our team typically responds to emails within 24 hours. For urgent inquiries, please use the phone number provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding pt-0">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] relative border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123063.123456789!2d28.2833!3d-15.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3733330a3fd%3A0x28f007803d2c659a!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </motion.div>
  );
}
