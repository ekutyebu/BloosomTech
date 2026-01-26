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
    color: "from-rose-300 to-pink-500",
    skills: ['React 19 & Hooks', 'Motion Design', 'Performance Tuning', 'TypeScript Mastery'],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'design',
    title: "Experience Strategy",
    desc: "Bridge vision and reality. Learn the psychological principles that drive successful product design and elegant user journeys.",
    icon: Palette,
    color: "from-pink-400 to-fuchsia-500",
    skills: ['User Research', 'Figma Systems', 'Prototyping', 'Accessibility'],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'backend',
    title: "Core Infrastructure",
    desc: "Build the robust systems that power global applications. Learn scalability, data architecture, and secure cloud environments.",
    icon: Cpu,
    color: "from-indigo-300 to-rose-400",
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

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Architects', href: '#architects' },
    { name: 'Benefits', href: '#benefits' }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'glass rounded-full shadow-lg max-w-5xl' : ''}`}>
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-gray-900 group-hover:text-pink-600 transition-colors">BloomTech</span>
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-500 hover:text-pink-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="px-8 py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-pink-600 transition-all shadow-xl transform hover:-translate-y-0.5">
              Join Cohort
            </button>
          </div>

          <button className="md:hidden text-gray-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass mx-6 mt-4 p-8 rounded-[2rem] flex flex-col space-y-6 text-center shadow-2xl"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-gray-900 font-bold text-lg"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-pink-600 text-white py-4 rounded-xl font-bold">Apply Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-60 lg:pb-40 bg-[#FFF5F7] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-100/50 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-rose-200/30 rounded-full blur-[120px] -z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-white border border-pink-100 px-6 py-3 rounded-full text-pink-600 text-[10px] font-black tracking-[0.2em] uppercase mb-12 shadow-sm"
            >
              <Sparkles size={16} className="animate-spin-slow" />
              Engineering Professionalism & Grace
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[0.95] mb-10"
            >
              Bloom Into <br /><span className="gradient-text italic">Excellence</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              A premier internship initiative blending high-performance engineering with a sophisticated blossom-themed design. Elevate your career with our project architects.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto px-12 py-5 bg-pink-600 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-pink-200 hover:bg-pink-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                Apply Now <ChevronRight size={18} />
              </button>
              <button className="text-gray-900 font-black text-xs uppercase tracking-[0.2em] border-b-2 border-pink-200 hover:border-pink-600 transition-all py-1">
                Our Methodology
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl aspect-[4/5] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Architect Collaboration" 
                className="w-full h-full lg:h-[650px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-pink-50 hidden xl:block animate-float">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
                  <Users size={28} />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gray-900 leading-none">250+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Alumnae Network</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TracksSection = () => {
  const [activeTab, setActiveTab] = useState(TRACKS[0].id);
  const current = TRACKS.find(t => t.id === activeTab)!;
  const IconComponent = current.icon;

  return (
    <section id="tracks" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8"
          >
            Our Engineering Tracks
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-12 bg-pink-50/50 p-2 rounded-full w-fit mx-auto border border-pink-100/50">
            {TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeTab === t.id 
                    ? 'bg-pink-600 text-white shadow-xl' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {t.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[3.5rem] p-10 lg:p-24 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.05)] border border-pink-50">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className={`w-20 h-20 bg-gradient-to-br ${current.color} rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">{current.title}</h3>
                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium italic">
                  "{current.desc}"
                </p>
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {current.skills.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                      <Star size={14} className="text-pink-500" />
                      {s}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-4 text-pink-600 font-black uppercase text-[10px] tracking-[0.3em] group">
                  Explore Track <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={current.image} 
                  className="rounded-[3rem] shadow-2xl w-full h-[550px] object-cover border-8 border-white" 
                  alt={current.title} 
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ArchitectsSection = () => (
  <section id="architects" className="py-40 bg-[#FDF2F8]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="mb-24">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Lead Project Architects</h2>
        <p className="text-gray-400 text-lg font-medium tracking-widest uppercase">The visionaries behind BloomTech</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ENGINEERS.map((engineer, idx) => (
          <motion.div 
            key={engineer.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="relative mb-10 aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
               <img src={engineer.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" alt={engineer.name} />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-left">
                  <h4 className="text-2xl font-serif font-bold text-white">{engineer.name}</h4>
                  <p className="text-pink-300 text-xs font-bold uppercase tracking-widest">{engineer.specialty}</p>
               </div>
            </div>
            <div className="text-center px-6">
               <div className="text-[11px] font-black text-pink-600 uppercase tracking-[0.25em] mb-4">{engineer.role}</div>
               <p className="text-gray-600 font-medium leading-relaxed italic mb-8">"{engineer.bio}"</p>
               <div className="flex justify-center gap-6">
                  <a href="#" className="p-4 bg-white rounded-2xl text-gray-400 hover:text-pink-600 transition-all shadow-sm">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="p-4 bg-white rounded-2xl text-gray-400 hover:text-pink-600 transition-all shadow-sm">
                    <Twitter size={20} />
                  </a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#111827] text-gray-400 pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-3xl font-serif font-bold text-white tracking-tight">BloomTech</span>
          </div>
          <p className="mb-10 text-gray-400 text-lg font-medium leading-relaxed">
            The gold standard in technical internships. Redefining professional excellence for the digital era.
          </p>
          <div className="flex gap-5">
             {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
               <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all border border-white/10">
                 <Icon size={20} />
               </a>
             ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Program</h5>
          <ul className="space-y-6 text-sm font-bold">
            <li><a href="#about" className="hover:text-pink-500 transition-colors">About Us</a></li>
            <li><a href="#tracks" className="hover:text-pink-500 transition-colors">Curriculum</a></li>
            <li><a href="#architects" className="hover:text-pink-500 transition-colors">Architects</a></li>
            <li><a href="#benefits" className="hover:text-pink-500 transition-colors">Benefits</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Resources</h5>
          <ul className="space-y-6 text-sm font-bold">
            <li><a href="#" className="hover:text-pink-500 transition-colors">Help Portal</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Legal</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-10">Contact</h5>
          <div className="space-y-8 text-sm font-bold">
             <div className="flex gap-4 items-start">
                <Mail size={20} className="text-pink-500 flex-shrink-0" />
                <span>admissions@bloomtech.io</span>
             </div>
             <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-pink-500 flex-shrink-0" />
                <span className="leading-relaxed">Douala - Logbessou</span>
             </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
        <p>© {new Date().getFullYear()} BloomTech. Curated by Lead Architects.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="bg-[#FDF2F8] selection:bg-pink-100 selection:text-pink-600 min-h-screen">
    <Navbar />
    <Hero />
    
    <section id="about" className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.2] mb-10">
            "Technical brilliance is mandatory; <span className="text-pink-600 italic">design elegance</span> is what makes it professional."
          </h2>
          <div className="flex items-center justify-center gap-6 mb-24">
             <div className="w-12 h-0.5 bg-pink-100"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">The Bloom Philosophy</p>
             <div className="w-12 h-0.5 bg-pink-100"></div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { title: "Rigorous Training", icon: CheckCircle2, desc: "A curriculum designed to challenge even the most ambitious technical minds." },
             { title: "Real-world SDLC", icon: Layers, desc: "Experience the full lifecycle from conceptualization to global production." },
             { title: "Global Alumnae", icon: Globe, desc: "Join an elite community of leaders across world-class technology firms." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-12 rounded-[3rem] bg-pink-50/20 border border-pink-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
             >
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pink-600 mb-8 shadow-sm">
                 <item.icon size={28} />
               </div>
               <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
               <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>

    <TracksSection />
    <ArchitectsSection />
    
    <section id="benefits" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-16 leading-[1.1]">
              Experience <br /><span className="text-pink-600 italic">Prestige</span> <br />in Every Line.
            </h2>
            <div className="space-y-12">
              {[
                { title: "Architect Mentorship", icon: Award, desc: "Personalized guidance from our lead architects to refine your professional presence." },
                { title: "Premium Placement", icon: Globe, desc: "Exclusive access to a global network of high-tier technical placements." },
                { title: "System Responsibility", icon: Layers, desc: "Real-world SDLC responsibility on high-scale architectural decisions." }
              ].map((b, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-pink-500 border border-pink-100">
                    <b.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{b.title}</h4>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden shadow-2xl aspect-[3/4]"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="Engineering Excellence" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-40">
      <div className="max-w-6xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gray-900 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl"
         >
           <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/10 -z-10 blur-3xl"></div>
           <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-tight">Your Legacy <br /><span className="gradient-text italic opacity-90">Starts Here</span>.</h2>
           <p className="text-xl text-gray-400 mb-16 max-w-xl mx-auto font-medium leading-relaxed">
             Join our next cohort of architects. Applications for 2025 are now open for evaluation.
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <button className="px-12 py-6 bg-pink-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-transform shadow-2xl">
                Apply for Internship
             </button>
             <button className="flex items-center gap-3 font-black uppercase text-[10px] tracking-[0.2em] border-b border-white/20 pb-2 hover:border-pink-500 transition-all">
                Selection Process <ArrowRight size={16} />
             </button>
           </div>
         </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default App;