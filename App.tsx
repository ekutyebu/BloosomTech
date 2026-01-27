import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Palette, 
  Cpu, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin,
  Menu,
  X,
  Sparkles,
  Github,
  Award,
  Users,
  ChevronRight,
  Globe,
  Layers,
  Heart,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACKS = [
  {
    id: 'frontend',
    title: "Frontend Mastery",
    desc: "Architect seamless digital interfaces using React 19. Focus on performance, aesthetics, and user delight with high-fidelity components.",
    icon: Code2,
    gradient: "from-roseGold to-magenta",
    skills: ['React 19 & Hooks', 'Motion Design', 'Performance Tuning', 'TypeScript Mastery'],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'design',
    title: "Experience Strategy",
    desc: "Bridge vision and reality. Learn the psychological principles that drive successful product design and elegant user journeys.",
    icon: Palette,
    gradient: "from-pink-400 to-fuchsia-500",
    skills: ['User Research', 'Figma Systems', 'Prototyping', 'Accessibility'],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'backend',
    title: "Core Infrastructure",
    desc: "Build the robust systems that power global applications. Learn scalability, data architecture, and secure cloud environments.",
    icon: Cpu,
    gradient: "from-indigo-300 to-roseGold",
    skills: ['Node.js & Go', 'PostgreSQL', 'Cloud Architecture', 'API Security'],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
  }
];

const ENGINEERS = [
  {
    name: "Ekuty Ebu",
    role: "Lead Software Architect",
    specialty: "Backend & Systems",
    bio: "Passionate about building highly available systems and mentoring the next wave of engineering talent.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Mbakwa Blessing",
    role: "Lead UI/UX Strategist",
    specialty: "UX & Product Systems",
    bio: "Dedicated to creating digital spaces that are as functional as they are beautiful and user-centric.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Bihneh Nelly",
    role: "Lead Frontend Architect",
    specialty: "Web Applications & UI Performance",
    bio: "Expert in crafting high-performance, accessible, and elegantly designed web experiences.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'glass rounded-full shadow-lg max-w-5xl border border-roseGold/10' : ''}`}>
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-roseGold to-magenta rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">BloomTech</span>
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Tracks', 'Architects', 'Benefits'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-500 hover:text-roseGold transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-8 py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-magenta transition-all transform hover:-translate-y-1 shadow-lg">
              Join Cohort
            </button>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 bg-white rounded-3xl shadow-2xl p-8 border border-roseGold/10 md:hidden mt-4"
          >
            <div className="flex flex-col space-y-6 text-center">
              {['About', 'Tracks', 'Architects', 'Benefits'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-black uppercase tracking-widest text-gray-600 hover:text-roseGold"
                >
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                Join Cohort
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-40 bg-[#FFF5F7] overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-roseGold/5 to-transparent -z-10 blur-3xl"></div>
    <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-roseGold/10 rounded-full blur-[120px] -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-roseGold/20 px-6 py-3 rounded-full text-roseGold text-[10px] font-black tracking-[0.2em] uppercase mb-12 shadow-sm"
          >
            <Sparkles size={16} className="animate-pulse" />
            Engineering Professionalism & Grace
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[0.95] mb-10"
          >
            Bloom Into <br />
            <span className="bg-gradient-to-r from-magenta to-roseGold bg-clip-text text-transparent italic">Excellence</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 mb-14 max-w-xl leading-relaxed font-medium"
          >
            A premier internship initiative blending high-performance engineering with a sophisticated blossom-themed design. Elevate your career with our project architects.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <button className="px-12 py-5 bg-roseGold text-white rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-roseGold/30 hover:bg-magenta hover:-translate-y-1 transition-all flex items-center gap-3">
              Apply Now <ChevronRight size={18} />
            </button>
            <a href="#about" className="text-gray-900 font-black text-xs uppercase tracking-[0.2em] border-b-2 border-roseGold py-1 hover:text-roseGold transition-all">
              Our Methodology
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            alt="Architect Collaboration" 
            className="w-full h-[650px] object-cover rounded-[4rem] border-[12px] border-white shadow-2xl"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 animate-float border border-roseGold/5 hidden xl:flex items-center gap-5">
            <div className="w-14 h-14 bg-blossom rounded-2xl flex items-center justify-center text-roseGold">
              <Users size={28} />
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-gray-900 leading-none">250+</div>
              <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Alumnae Network</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TracksSection = () => {
  const [activeTab, setActiveTab] = useState(TRACKS[0].id);
  const current = TRACKS.find(t => t.id === activeTab)!;
  const IconComponent = current.icon;

  return (
    <section id="tracks" className="py-40 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 text-center mb-12">Our Engineering Tracks</h2>
        
        <div className="flex flex-wrap justify-center gap-2 bg-blossom/50 p-2 rounded-full w-fit mx-auto mb-20 border border-roseGold/10">
          {TRACKS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-6 sm:px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                activeTab === t.id ? 'bg-roseGold text-white shadow-lg' : 'text-gray-400 hover:text-roseGold'
              }`}
            >
              {t.title.split(' ')[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-[3.5rem] p-8 lg:p-24 shadow-2xl border border-blossom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          >
            <div>
              <div className={`w-20 h-20 bg-gradient-to-br ${current.gradient} rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl`}>
                <IconComponent size={32} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">{current.title}</h3>
              <p className="text-xl text-gray-500 mb-10 italic font-medium">"{current.desc}"</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {current.skills.map((s) => (
                  <div key={s} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                    <Star size={14} className="text-roseGold" />
                    {s}
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-3 text-magenta font-black uppercase text-[10px] tracking-[0.3em] group">
                Explore Track <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <img 
              src={current.image} 
              alt={current.title} 
              className="w-full h-[400px] lg:h-[550px] object-cover rounded-[3rem] border-8 border-white shadow-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ArchitectsSection = () => (
  <section id="architects" className="py-40 bg-blossom scroll-mt-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Lead Project Architects</h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">The visionaries behind BloomTech</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ENGINEERS.map((eng, idx) => (
          <motion.div 
            key={eng.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl mb-10">
              <img src={eng.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={eng.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <h4 className="text-2xl font-serif font-bold text-white">{eng.name}</h4>
                <p className="text-roseGold text-[10px] font-black uppercase tracking-widest">{eng.specialty}</p>
              </div>
            </div>
            <div className="text-center px-4">
              <span className="text-magenta font-black uppercase text-[10px] tracking-[0.25em] mb-4 block">{eng.role}</span>
              <p className="text-gray-500 font-medium italic">"{eng.bio}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#111827] text-gray-400 py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-magenta rounded-2xl flex items-center justify-center text-white">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold text-white">BloomTech</span>
          </div>
          <p className="text-lg leading-relaxed mb-10">The gold standard in technical internships. Redefining professional excellence for the digital era.</p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-roseGold transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Program</h5>
          <div className="flex flex-col gap-6">
            <a href="#about" className="hover:text-roseGold transition-colors font-bold">About Us</a>
            <a href="#tracks" className="hover:text-roseGold transition-colors font-bold">Engineering Tracks</a>
            <a href="#architects" className="hover:text-roseGold transition-colors font-bold">Our Architects</a>
            <a href="#benefits" className="hover:text-roseGold transition-colors font-bold">Intern Benefits</a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Resources</h5>
          <div className="flex flex-col gap-6">
            <a href="#" className="hover:text-roseGold transition-colors font-bold">Program FAQ</a>
            <a href="#" className="hover:text-roseGold transition-colors font-bold">Application Guide</a>
            <a href="#" className="hover:text-roseGold transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="hover:text-roseGold transition-colors font-bold">Selection Terms</a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Contact</h5>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <Mail size={20} className="text-roseGold" />
              <span className="font-bold text-gray-200">admissions@bloomtech.io</span>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin size={20} className="text-roseGold" />
              <span className="font-bold text-gray-200">Douala - Logbessou</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-widest text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 BloomTech. All Rights Reserved.</p>
        <p>Curated by Lead Architects • Douala, Cameroon</p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="font-sans selection:bg-roseGold/20 selection:text-magenta">
    <Navbar />
    <Hero />
    
    <section id="about" className="py-40 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-12">
            "Technical brilliance is mandatory; <span className="text-magenta italic">design elegance</span> is what makes it professional."
          </h2>
          <div className="flex items-center justify-center gap-8 mb-24">
            <div className="w-16 h-0.5 bg-blossom"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">The Bloom Philosophy</p>
            <div className="w-16 h-0.5 bg-blossom"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { icon: CheckCircle2, title: "Rigorous Training", desc: "A curriculum designed to challenge even the most ambitious technical minds." },
              { icon: Layers, title: "Real-world SDLC", desc: "Experience the full lifecycle from conceptualization to global production." },
              { icon: Globe, title: "Global Alumnae", desc: "Join an elite community of leaders across world-class technology firms." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-blossom/30 border border-blossom hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-magenta shadow-sm mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <TracksSection />
    <ArchitectsSection />
    
    <section id="benefits" className="py-40 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-16 leading-[1.1]">
              Experience <br />
              <span className="text-magenta italic">Prestige</span> <br />
              in Every Line.
            </h2>
            <div className="space-y-12">
              {[
                { icon: Award, title: "Architect Mentorship", desc: "Personalized guidance from our lead architects to refine your professional presence." },
                { icon: Globe, title: "Premium Placement", desc: "Exclusive access to a global network of high-tier technical placements." },
                { icon: Layers, title: "System Responsibility", desc: "Real-world SDLC responsibility on high-scale architectural decisions." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-roseGold border border-pink-100">
                    <benefit.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
               className="w-full aspect-[3/4] object-cover rounded-[4rem] shadow-2xl border-[12px] border-white"
               alt="Prestige"
             />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gray-900 rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-magenta/10 -z-10 blur-3xl"></div>
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12">Your Legacy <br /><span className="bg-gradient-to-r from-magenta to-roseGold bg-clip-text text-transparent italic">Starts Here</span>.</h2>
        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-xl mx-auto font-medium">Join our next cohort of architects. Applications for 2025 are now open for evaluation.</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="w-full sm:w-auto px-16 py-6 bg-roseGold text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">Apply for Internship</button>
          <a href="#about" className="flex items-center gap-3 font-black uppercase tracking-widest text-xs border-b border-white/20 pb-2 hover:border-roseGold transition-all">Selection Process <ArrowRight size={18} /></a>
        </div>
      </motion.div>
    </section>

    <Footer />
  </div>
);

export default App;