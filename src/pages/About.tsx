import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
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
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl text-primary mb-8 leading-tight">
            Dedicated to <span className="italic text-accent">Sustainability</span> and Compliance
          </h1>
          <p className="text-xl text-ink/70 leading-relaxed">
            Femino Eco Blossom is a professional environmental consultancy dedicated to helping businesses achieve compliance, sustainability, and responsible growth. We provide tailored environmental solutions aligned with regulatory requirements in Zambia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24">
        <div className="section-padding grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-earth p-12 rounded-[2rem] space-y-6">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-4xl text-primary">Our Mission</h2>
            <p className="text-lg text-ink/70 leading-relaxed italic">
              “To guide businesses towards sustainable growth through innovative and compliant environmental solutions.”
            </p>
          </div>
          <div className="bg-primary-dark p-12 rounded-[2rem] space-y-6 text-white">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary-dark mb-8">
              <Eye size={32} />
            </div>
            <h2 className="text-4xl">Our Vision</h2>
            <p className="text-lg text-white/70 leading-relaxed italic">
              “To be a leading environmental consultancy in Zambia and beyond.”
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-primary">Our Core Values</h2>
            <p className="text-lg text-ink/70">
              We believe that environmental responsibility is the foundation of long-term business success. Our values guide every project we undertake.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Integrity', desc: 'Honesty and transparency in all our environmental assessments.' },
                { title: 'Innovation', desc: 'Applying modern technology to solve complex environmental challenges.' },
                { title: 'Excellence', desc: 'Striving for the highest quality in compliance and reporting.' },
                { title: 'Sustainability', desc: 'Ensuring that growth today does not compromise tomorrow.' }
              ].map((value, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-primary"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">{value.title}</h4>
                    <p className="text-ink/60">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
                alt="Plant growing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Team / Expertise */}
      <section className="bg-primary text-white py-24">
        <div className="section-padding text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl">Our Expertise</h2>
            <p className="text-white/70">Our team consists of certified environmental experts with years of experience in the Zambian regulatory landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award size={40} />, title: 'Certified Experts', desc: 'ZEMA registered consultants with deep technical knowledge.' },
              { icon: <Target size={40} />, title: 'Strategic Planning', desc: 'Helping businesses align their goals with environmental laws.' },
              { icon: <CheckCircle2 size={40} />, title: 'Full Compliance', desc: 'Ensuring every project meets local and international standards.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl space-y-6">
                <div className="text-accent flex justify-center">{item.icon}</div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
