import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'eia',
    title: 'Environmental Impact Assessments (EIA)',
    description: 'Comprehensive evaluations of potential environmental effects of your projects to ensure sustainable development.',
    packages: [
      {
        name: 'Basic Screening',
        price: 'ZMW 15,000 – 25,000',
        features: ['Project Brief Preparation', 'Initial Site Visit', 'Regulatory Consultation', 'Basic Impact Identification'],
        highlight: false
      },
      {
        name: 'Standard Full EIA',
        price: 'ZMW 40,000 – 80,000',
        features: ['Full EIA + EMP', 'Public Consultations', 'Detailed Impact Analysis', 'Mitigation Planning', 'ZEMA Submission Support'],
        highlight: true
      },
      {
        name: 'Premium Study',
        price: 'ZMW 100,000 – 250,000+',
        features: ['Comprehensive Multi-site Study', 'Specialist Investigations', 'Long-term Monitoring Plan', 'International Standards Alignment'],
        highlight: false
      }
    ]
  },
  {
    id: 'audits',
    title: 'Environmental Audits',
    description: 'Systematic reviews of your business operations to ensure full compliance with environmental laws and regulations.',
    packages: [
      {
        name: 'Basic Check',
        price: 'ZMW 10,000 – 20,000',
        features: ['Compliance Checklist', 'Document Review', 'Summary Report', 'Gap Analysis'],
        highlight: false
      },
      {
        name: 'Standard Audit',
        price: 'ZMW 25,000 – 50,000',
        features: ['Full Site Audit', 'Operational Review', 'Detailed Compliance Report', 'Corrective Action Plan'],
        highlight: true
      },
      {
        name: 'Premium Support',
        price: 'ZMW 60,000 – 120,000',
        features: ['Integrated Audit + Support', 'Implementation Monitoring', 'Staff Training', 'Continuous Compliance Advisory'],
        highlight: false
      }
    ]
  },
  {
    id: 'waste',
    title: 'Waste Management',
    description: 'Strategic planning and implementation of responsible waste handling, reduction, and recycling systems.',
    packages: [
      {
        name: 'Basic Plan',
        price: 'ZMW 8,000 – 15,000',
        features: ['Waste Inventory', 'Basic Disposal Plan', 'Regulatory Alignment', 'Simple Reporting'],
        highlight: false
      },
      {
        name: 'Standard System',
        price: 'ZMW 20,000 – 40,000',
        features: ['Integrated Waste System', 'Recycling Strategy', 'Vendor Management', 'Detailed SOPs'],
        highlight: true
      },
      {
        name: 'Premium Strategy',
        price: 'ZMW 50,000 – 100,000',
        features: ['Sustainability Strategy', 'Zero Waste Roadmap', 'Circular Economy Integration', 'Impact Tracking Dashboard'],
        highlight: false
      }
    ]
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      {/* Header */}
      <section className="section-padding pt-0 text-center max-w-4xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
        <h1 className="text-5xl md:text-7xl text-primary mb-8 leading-tight">
          Professional <span className="italic text-accent">Environmental</span> Solutions
        </h1>
        <p className="text-xl text-ink/70 leading-relaxed">
          We provide a comprehensive suite of environmental consultancy services tailored to the specific needs of businesses, NGOs, and government institutions.
        </p>
      </section>

      {/* Services & Pricing */}
      <div className="space-y-32">
        {serviceCategories.map((category, catIdx) => (
          <section key={category.id} className={catIdx % 2 === 0 ? 'bg-white py-24' : 'py-24'}>
            <div className="section-padding pt-0">
              <div className="max-w-3xl mb-16">
                <h2 className="text-4xl md:text-5xl text-primary mb-6">{category.title}</h2>
                <p className="text-lg text-ink/70 leading-relaxed">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.packages.map((pkg, pkgIdx) => (
                  <div
                    key={pkgIdx}
                    className={`p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-primary text-white shadow-2xl scale-105 z-10'
                        : 'bg-earth text-ink border border-gray-200 hover:border-primary/30'
                    }`}
                  >
                    <div className="mb-8">
                      <h3 className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-accent' : 'text-primary'}`}>
                        {pkg.name}
                      </h3>
                      <div className="text-2xl font-serif font-bold">{pkg.price}</div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm">
                          <Check size={18} className={pkg.highlight ? 'text-accent' : 'text-primary'} />
                          <span className={pkg.highlight ? 'text-white/80' : 'text-ink/70'}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:fatnessngoma@gmail.com?subject=Inquiry for ${category.title} - ${pkg.name}&body=Hello Femino Eco Blossom,%0D%0A%0D%0AI am interested in the ${pkg.name} package for ${category.title}. Please provide more information.%0D%0A%0D%0APrice: ${pkg.price}`}
                      className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                        pkg.highlight
                          ? 'bg-accent text-primary-dark hover:bg-white'
                          : 'bg-primary text-white hover:bg-primary-dark'
                      }`}
                    >
                      Choose Plan
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Custom Quote CTA */}
      <section className="section-padding">
        <div className="bg-primary-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl">Need a Custom Solution?</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Every project is unique. If our standard packages don't fit your needs, contact us for a tailored environmental consultancy quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-primary-dark px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Request Custom Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
