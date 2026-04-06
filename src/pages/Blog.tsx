import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Search, X } from 'lucide-react';
import { useState, useMemo } from 'react';

const posts = [
  {
    id: 1,
    title: 'Top 5 Environmental Compliance Tips for Zambian Businesses',
    excerpt: 'Navigating the ZEMA regulatory landscape can be challenging. Here are our top tips for staying compliant and avoiding penalties.',
    content: `
      Navigating the environmental regulatory landscape in Zambia requires a proactive approach. The Zambia Environmental Management Agency (ZEMA) has strict guidelines that businesses must follow to ensure sustainable operations. 
      
      1. Understand Your Project Category: ZEMA classifies projects based on their potential environmental impact. Knowing whether you need a Project Brief or a full EIA is the first step.
      
      2. Regular Internal Audits: Don't wait for a regulatory inspection. Conduct regular internal audits to identify and fix compliance gaps early.
      
      3. Community Engagement: Sustainable growth involves the community. Transparent communication with local stakeholders can prevent conflicts and improve project outcomes.
      
      4. Waste Management Documentation: Keep meticulous records of your waste disposal processes. ZEMA requires clear evidence of responsible waste handling.
      
      5. Stay Updated on Legislation: Environmental laws are evolving. Regularly review the Environmental Management Act and associated regulations to ensure your business remains compliant.
    `,
    date: 'March 24, 2026',
    author: 'Environmental Expert',
    category: 'Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'The Future of Waste Management in Lusaka',
    excerpt: 'As Lusaka grows, so does the challenge of waste. Discover innovative integrated systems that are changing the game.',
    content: `
      Lusaka's rapid urbanization presents significant challenges for waste management. Traditional methods are becoming insufficient, necessitating a shift towards integrated and innovative systems.
      
      The future lies in the circular economy—where waste is viewed as a resource rather than a burden. Integrated waste management systems focus on segregation at source, efficient collection, and advanced recycling technologies.
      
      Femino Eco Blossom is at the forefront of this transition, helping businesses implement waste-to-energy solutions and comprehensive recycling programs. By reducing landfill dependency, we can create a cleaner, healthier Lusaka for future generations.
    `,
    date: 'March 18, 2026',
    author: 'Sustainability Lead',
    category: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Climate Change Awareness: What Your Business Can Do',
    excerpt: 'Climate change is no longer a distant threat. Learn practical steps your business can take to reduce its carbon footprint.',
    content: `
      Climate change is impacting businesses globally, and Zambia is no exception. From fluctuating rainfall patterns to energy challenges, the effects are real and immediate.
      
      Businesses have a critical role to play in climate mitigation. Simple steps like improving energy efficiency, transitioning to renewable energy sources, and optimizing supply chains can significantly reduce a company's carbon footprint.
      
      At Femino Eco Blossom, we help businesses develop climate resilience strategies that not only protect the environment but also improve operational efficiency and long-term viability.
    `,
    date: 'March 10, 2026',
    author: 'Climate Specialist',
    category: 'Climate Change',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Understanding Environmental Impact Assessments',
    excerpt: 'What exactly is an EIA and why does your project need one? We break down the process in simple terms.',
    content: `
      An Environmental Impact Assessment (EIA) is a critical planning tool used to identify and predict the environmental consequences of a proposed project. 
      
      In Zambia, the EIA process is governed by ZEMA and is mandatory for projects that may have significant environmental effects. The process involves baseline studies, impact prediction, mitigation planning, and public consultations.
      
      A well-executed EIA ensures that environmental considerations are integrated into project design, leading to more sustainable and socially responsible development. Femino Eco Blossom provides expert guidance through every stage of the EIA process.
    `,
    date: 'March 05, 2026',
    author: 'EIA Consultant',
    category: 'EIA',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      {/* Header */}
      <section className="section-padding pt-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Blog & Insights</span>
            <h1 className="text-5xl md:text-7xl text-primary mb-6 leading-tight">
              Environmental <span className="italic text-accent">Insights</span>
            </h1>
            <p className="text-xl text-ink/70 leading-relaxed">
              Stay updated with the latest trends, tips, and regulatory changes in the environmental sector.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Featured Post (only if no search or if it matches) */}
      {(!searchQuery || filteredPosts.some(p => p.id === 1)) && (
        <section className="section-padding pt-0">
          <div className="group relative rounded-[3rem] overflow-hidden aspect-[21/9] min-h-[400px] flex items-end p-8 md:p-16">
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent" />
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="bg-accent text-primary-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-5xl text-white font-serif leading-tight">
                {posts[0].title}
              </h2>
              <div className="flex items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2"><Calendar size={16} /> {posts[0].date}</span>
                <span className="flex items-center gap-2"><User size={16} /> {posts[0].author}</span>
              </div>
              <button 
                onClick={() => setSelectedPost(posts[0])}
                className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors"
              >
                Read Article <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.filter(p => p.id !== 1 || searchQuery).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">{post.category}</span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-2xl text-primary group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-ink/60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-ink/40">No articles found matching your search.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-primary font-bold underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
          >
            <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-earth rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 md:h-96 w-full relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              
              <div className="p-8 md:p-16 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-primary font-bold uppercase tracking-widest">
                    <span>{selectedPost.category}</span>
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    <span className="text-gray-400 font-medium">{selectedPost.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl text-primary font-serif leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-ink/70 leading-relaxed space-y-6 whitespace-pre-line">
                  {selectedPost.content}
                </div>
                
                <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{selectedPost.author}</p>
                    <p className="text-xs text-ink/40">Femino Eco Blossom Expert</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
