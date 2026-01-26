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
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACKS = [
  {
    id: 'frontend',
    title: "Frontend Mastery",
    desc: "Architect seamless digital interfaces using the latest React 19 methodologies. Focus on performance, aesthetics, and user delight.",
    icon: <Code2 size={24} />,
    color: "from-rose-400 to-pink-600",
    skills: ['React 19 Hooks', 'Motion Design', 'Performance Tuning', 'TypeScript Mastery'],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'design',
    title: "Experience Strategy",
    desc: "Bridge the gap between vision and reality. Learn the psychological principles that drive successful product design.",
    icon: <Palette size={24} />,
    color: "from-pink-500 to-fuchsia-600",
    skills: ['User Research', 'Figma Systems', 'Prototyping', 'Accessibility'],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'backend',
    title: "Core Infrastructure",
    desc: "Build the robust systems that power global applications. Learn scalability, data architecture, and cloud security.",
    icon: <Cpu size={24} />,
    color: "from-indigo-400 to-rose-500",
    skills: ['Node.js & Go', 'PostgreSQL', 'Cloud Architecture', 'API Security'],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
  }
];

const ENGINEERS = [
  {
    name: "Ekuty Ebu",
    role: "Lead Software Architect",
    specialty: "Backend & Systems",
    bio: "Passionate about building highly available systems and mentoring the next wave of engineers.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Mbakwa Blessing",
    role: "Lead Design Strategist",
    specialty: "UX & Product Systems",
    bio: "Dedicated to creating digital spaces that are as functional as they are beautiful.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isScrolled ? 'glass rounded-full shadow-2xl max-w-5xl' : ''}`}>
        <div className="flex justify-between items-center h-14">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <Heart size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-gray-900 group-hover:text-pink-600 transition-colors">BloomTech</span>
          </a>

          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Tracks', 'Architects', 'Benefits'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-500 hover:text-pink-600 transition-colors">
                {item}
              </a>
            ))}
            <button className="px-10 py-3.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-pink-600 transition-all shadow-xl shadow-gray-200">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden glass mx-6 mt-4 p-8 rounded-[2.5rem] flex flex-col space-y-8 text-center"
          >
            {['About', 'Tracks', 'Architects', 'Benefits'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-xl">{item}</a>
            ))}
            <button className="bg-pink-600 text-white py-4 rounded-2xl font-bold">Apply Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 lg:pt-64 lg:pb-48 bg-[#FFF1F2]/30 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-100/40 to-transparent -z-10 blur-3xl"></div>
    <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-[150px] -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white border border-pink-100 px-6 py-2.5 rounded-full text-pink-600 text-[10px] font-black tracking-[0.2em] uppercase mb-10 shadow-sm"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            Empowering the Next Generation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[0.95] mb-12"
          >
            Design Your <br /><span className="gradient-text italic">Legacy</span> in Tech.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            BloomTech is an elite internship initiative blending high-performance engineering with sophisticated professional aesthetics.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
          >
            <button className="w-full sm:w-auto px-14 py-5 bg-pink-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-pink-200 hover:bg-pink-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-4">
              Apply to Cohort <ChevronRight size={20} />
            </button>
            <button className="text-gray-900 font-black text-xs uppercase tracking-[0.1em] border-b-2 border-pink-200 hover:border-pink-600 transition-all py-1">
              The Bloom Mission
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-[5rem] overflow-hidden border-[16px] border-white shadow-[0_60px_120px_-20px_rgba(190,24,93,0.2)] aspect-[4/5] lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineers Working" 
              className="w-full h-full lg:h-[720px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -top-10 -right-10 bg-white p-10 rounded-[3.5rem] shadow-2xl z-20 border border-pink-50 hidden xl:block">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
                <Users size={32} />
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-gray-900 leading-none">500+</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Global Alumnae</div>
              </div>
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

  return (
    <section id="tracks" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-10"
          >
            Engineering Tracks
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12 bg-pink-50/50 p-2.5 rounded-full w-fit mx-auto border border-pink-100/50 shadow-sm">
            {TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-12 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeTab === t.id 
                    ? 'bg-pink-600 text-white shadow-xl premium-glow' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {t.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[4rem] p-10 lg:p-28 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.04)] border border-pink-50 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className={`w-20 h-20 bg-gradient-to-br ${current.color} rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-2xl`}>
                  {current.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">{current.title}</h3>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium italic">
                  "{current.desc}"
                </p>
                <div className="grid grid-cols-2 gap-10 mb-16">
                  {current.skills.map((s) => (
                    <div key={s} className="flex items-center gap-4 text-gray-700 font-bold text-sm group">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 group-hover:scale-150 transition-transform duration-500 shadow-sm"></div>
                      {s}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-5 text-pink-600 font-black uppercase text-[10px] tracking-[0.4em] hover:gap-8 transition-all group">
                  View Syllabus <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-pink-100 rounded-[3.5rem] translate-x-8 translate-y-8 -z-10 opacity-30"></div>
                <img 
                  src={current.image} 
                  className="rounded-[3.5rem] shadow-2xl w-full h-[600px] object-cover border-[16px] border-white" 
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
  <section id="architects" className="py-40 bg-[#FFF9FA]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="mb-28">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Program Architects</h2>
        <p className="text-gray-400 text-lg font-medium tracking-widest uppercase">The Minds Behind BloomTech</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {ENGINEERS.map((engineer, idx) => (
          <motion.div 
            key={engineer.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="relative mb-14 aspect-[4/5] overflow-hidden rounded-[4rem] shadow-3xl bg-white border-8 border-white">
               <img src={engineer.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={engineer.name} />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
               <div className="absolute bottom-12 left-12 text-left text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-pink-400">{engineer.specialty}</div>
                  <h4 className="text-4xl font-serif font-bold">{engineer.name}</h4>
               </div>
            </div>
            <div className="text-center px-10">
               <div className="text-[11px] font-black text-pink-600 uppercase tracking-[0.25em] mb-4">{engineer.role}</div>
               <p className="text-gray-600 font-medium leading-relaxed italic text-lg mb-10">"{engineer.bio}"</p>
               <div className="flex justify-center gap-8">
                  <a href="#" className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-gray-400 hover:text-pink-600 transition-all shadow-md hover:-translate-y-1">
                    <Linkedin size={22} />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-gray-400 hover:text-pink-600 transition-all shadow-md hover:-translate-y-1">
                    <Github size={22} />
                  </a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="benefits" className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-16 leading-[1.1]">
            Experience <br /><span className="text-pink-600 italic">Elegance</span> <br />in Learning.
          </h2>
          <div className="space-y-16">
            {[
              { title: "Direct Mentorship", icon: <Award className="text-pink-500" />, desc: "One-on-one sessions with our lead architects to refine your professional presence and technical output." },
              { title: "Career Placement", icon: <Globe className="text-rose-500" />, desc: "Exclusive access to our global partner network for premium internship and full-time role placements." },
              { title: "Project Ownership", icon: <Layers className="text-indigo-500" />, desc: "Work on live systems and take full responsibility for high-scale architectural decisions." }
            ].map((b, i) => (
              <div key={i} className="flex gap-10 items-start group">
                <div className="w-20 h-20 bg-pink-50/50 rounded-[2rem] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 border border-pink-100 shadow-sm">
                  {React.isValidElement(b.icon) ? React.cloneElement(b.icon as React.ReactElement<any>, { size: 32 }) : b.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{b.title}</h4>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[5rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] aspect-[3/4]"
          >
            <img 
              src="https://images.unsplash.com/photo-15222071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover" 
              alt="Teamwork" 
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#111827] text-gray-400 pt-40 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-3xl font-serif font-bold text-white tracking-tight">BloomTech</span>
          </div>
          <p className="mb-12 text-gray-400 text-lg font-medium leading-relaxed">
            The gold standard in technical internships. Redefining what it means to be a professional in the digital age.
          </p>
          <div className="flex gap-6">
             {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
               <a key={idx} href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all border border-white/10 group">
                 <Icon size={22} className="group-hover:rotate-12 transition-transform" />
               </a>
             ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[11px] tracking-[0.4em] mb-12">Program</h5>
          <ul className="space-y-8 text-base font-bold">
            <li><a href="#about" className="hover:text-pink-500 transition-colors">Philosophy</a></li>
            <li><a href="#tracks" className="hover:text-pink-500 transition-colors">Curricula</a></li>
            <li><a href="#architects" className="hover:text-pink-500 transition-colors">Architects</a></li>
            <li><a href="#benefits" className="hover:text-pink-500 transition-colors">Core Benefits</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[11px] tracking-[0.4em] mb-12">Resources</h5>
          <ul className="space-y-8 text-base font-bold">
            <li><a href="#" className="hover:text-pink-500 transition-colors">Help Portal</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors">Legal Docs</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-[11px] tracking-[0.4em] mb-12">Location</h5>
          <div className="space-y-10 text-base font-bold">
             <div className="flex gap-6 items-start">
                <Mail size={24} className="text-pink-500 flex-shrink-0" />
                <span className="leading-tight">admissions@bloomtech.io</span>
             </div>
             <div className="flex gap-6 items-start">
                <MapPin size={24} className="text-pink-500 flex-shrink-0" />
                <span className="leading-relaxed">Tower 9, Innovation Plaza,<br />Silicon Valley, CA</span>
             </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">
        <p className="mb-6 md:mb-0">© {new Date().getFullYear()} BloomTech. Curated by <span className="text-white">Ekuty Ebu</span> & <span className="text-white">Mbakwa Blessing</span>.</p>
        <div className="flex gap-12">
           <a href="#" className="hover:text-white transition-colors">Terms</a>
           <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="bg-white selection:bg-pink-100 selection:text-pink-600">
    <Navbar />
    <Hero />
    
    <section id="about" className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.2] mb-12"
          >
            "Technical brilliance is mandatory; <span className="text-pink-600 italic">design elegance</span> is what makes it timeless."
          </motion.h2>
          <div className="flex items-center justify-center gap-6">
             <div className="w-16 h-0.5 bg-pink-100"></div>
             <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">The Bloom Philosophy</p>
             <div className="w-16 h-0.5 bg-pink-100"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { title: "Rigorous Training", icon: <CheckCircle2 />, desc: "Our curriculum is designed to challenge even the most experienced students." },
             { title: "Real-world SDLC", icon: <Layers />, desc: "Experience the full lifecycle from feature ideation to global deployment." },
             { title: "Global Alumnae", icon: <Globe />, desc: "Join an elite community of tech leaders across the world's top firms." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-12 rounded-[3.5rem] bg-pink-50/30 border border-pink-100 hover:shadow-2xl hover:bg-white transition-all duration-700"
             >
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-pink-600 mb-10 shadow-lg">
                 {React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 }) : item.icon}
               </div>
               <h4 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h4>
               <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>

    <TracksSection />
    <ArchitectsSection />
    <BenefitsSection />
    
    <section className="py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_80px_100px_-20px_rgba(0,0,0,0.2)]"
         >
           <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/10 -z-10 blur-[100px]"></div>
           <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-500/10 rounded-full blur-[80px] -z-10"></div>
           
           <h2 className="text-5xl md:text-8xl font-serif font-bold mb-14 leading-tight">Start Your <br /><span className="gradient-text italic opacity-90">Bloom Story</span>.</h2>
           <p className="text-xl text-gray-400 mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
             Join our next cohort of architects. Applications for Summer 2025 are now being accepted for high-achieving visionaries.
           </p>
           <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
             <button className="px-16 py-7 bg-pink-600 text-white rounded-3xl font-black uppercase tracking-[0.25em] text-[10px] hover:scale-105 transition-transform shadow-2xl shadow-pink-900/50">
                Launch Application
             </button>
             <button className="flex items-center gap-4 font-black uppercase text-[10px] tracking-[0.2em] border-b-2 border-white/20 pb-2 hover:border-pink-500 transition-all">
                The Selection Process <ArrowRight size={18} />
             </button>
           </div>
         </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default App;