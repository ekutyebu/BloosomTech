
import React, { useState, useEffect, useRef } from 'react';
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
  Phone, 
  MapPin,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Github,
  Award,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---
const TRACKS = [
  {
    id: 'frontend',
    title: "Frontend Engineering",
    desc: "Master the art of building breathtaking, high-performance interfaces. Our frontend track goes beyond code, focusing on the poetry of the user experience.",
    icon: <Code2 size={24} />,
    color: "from-pink-500 to-rose-600",
    skills: ['React 19 & Next.js', 'TypeScript Mastery', 'Motion Design', 'Tailwind CSS'],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'design',
    title: "UI/UX Architecture",
    desc: "Design with purpose. Learn to weave psychology and visual elegance into products that people fall in love with at first sight.",
    icon: <Palette size={24} />,
    color: "from-rose-500 to-orange-400",
    skills: ['Design Systems', 'User Psych', 'Figma Mastery', 'Prototyping'],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'backend',
    title: "Backend Core",
    desc: "The heartbeat of digital products. Learn to build resilient, scalable systems that power the world's most innovative platforms.",
    icon: <Cpu size={24} />,
    color: "from-purple-600 to-indigo-500",
    skills: ['Node.js & Go', 'PostgreSQL', 'Cloud Infrastructure', 'System Design'],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
  }
];

const ENGINEERS = [
  {
    name: "Ekuty Ebu",
    role: "Founding Engineer & Architect",
    bio: "A visionary polyglot engineer with a passion for building systems that are as beautiful under the hood as they are on the surface.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    tag: "Systems Visionary"
  },
  {
    name: "Mbakwa Blessing",
    role: "Lead Creative Strategist",
    bio: "Pioneering the intersection of technology and human-centric design, ensuring every digital touchpoint is an experience of grace.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
    tag: "Design Pioneer"
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'glass rounded-full shadow-lg max-w-5xl' : ''}`}>
        <div className="flex justify-between items-center h-12">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12">
              <Sparkles size={20} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-gray-900 group-hover:text-pink-700 transition-colors">BloomTech</span>
          </a>

          <div className="hidden md:flex items-center space-x-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
            {['About', 'Programs', 'Engineers', 'Benefits'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all shadow-xl shadow-gray-100"
            >
              Enroll Now
            </motion.button>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-pink-100 overflow-hidden"
          >
            <div className="p-8 flex flex-col space-y-6 text-center font-bold text-gray-800">
              {['About', 'Programs', 'Engineers', 'Benefits'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
              <button className="bg-pink-600 text-white py-4 rounded-2xl">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 bg-[#FFF9FA] overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-50 to-transparent -z-10"></div>
    <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[120px] -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-pink-100 px-5 py-2.5 rounded-full text-pink-600 text-xs font-black tracking-[0.2em] uppercase mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            A Premier Tech Initiative
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-[1] mb-8">
            Nurturing <span className="gradient-text italic">Excellence</span> <br />in Every Line.
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            BloomTech is an elite internship portal designed for those who seek to master the digital landscape with sophistication and precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ y: -5 }}
              className="w-full sm:w-auto px-10 py-5 bg-pink-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-pink-200 hover:bg-pink-700 transition-all flex items-center justify-center gap-3"
            >
              Start Application <ArrowRight size={20} />
            </motion.button>
            <button className="text-gray-900 font-bold border-b-2 border-pink-200 hover:border-pink-600 transition-all py-1">
              Explore Tracks
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-[4rem] overflow-hidden border-[16px] border-white shadow-[0_40px_100px_-20px_rgba(190,24,93,0.2)] aspect-[4/5] lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
              alt="Tech Professional" 
              className="w-full h-full lg:h-[650px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-pink-50 hidden md:block">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600">
                <Users size={30} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Global Alumnae</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState(TRACKS[0].id);
  const current = TRACKS.find(t => t.id === activeTab)!;

  return (
    <section id="programs" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
          >
            Specialized Learning Tracks
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mt-12 bg-gray-50 p-2 rounded-full w-fit mx-auto border border-gray-100">
            {TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === t.id 
                    ? 'bg-white text-pink-600 shadow-sm' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-pink-50/30 rounded-[3.5rem] p-8 lg:p-20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              <div>
                <div className={`w-16 h-16 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl`}>
                  {current.icon}
                </div>
                <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">{current.title}</h3>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                  {current.desc}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {current.skills.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-gray-700 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                      {s}
                    </div>
                  ))}
                </div>
                <button className="group flex items-center gap-3 text-pink-600 font-black uppercase text-sm tracking-widest hover:gap-5 transition-all">
                  Full Curriculum <ArrowRight size={18} />
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-pink-500/10 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <img 
                  src={current.image} 
                  className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" 
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

const EngineersSection = () => (
  <section id="engineers" className="py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">The Founding Architects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium italic">"Building the future, one elegant solution at a time."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
        {ENGINEERS.map((engineer, idx) => (
          <motion.div 
            key={engineer.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-gray-200/50 hover:shadow-pink-100 transition-all group border border-pink-50"
          >
            <div className="relative mb-10 w-48 h-48 mx-auto md:mx-0">
               <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform"></div>
               <img src={engineer.img} className="absolute inset-0 w-full h-full object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all border-4 border-white" alt={engineer.name} />
            </div>
            <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 text-xs font-black uppercase tracking-widest rounded-full mb-4">
              {engineer.tag}
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">{engineer.name}</h3>
            <p className="text-pink-600 font-bold mb-6 text-sm">{engineer.role}</p>
            <p className="text-gray-500 leading-relaxed font-medium mb-8 italic">"{engineer.bio}"</p>
            <div className="flex gap-4">
               <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all shadow-sm">
                 <Linkedin size={22} />
               </a>
               <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all shadow-sm">
                 <Github size={22} />
               </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="benefits" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-12 leading-tight">
            Designed for <br /><span className="text-pink-600 italic">Total Bloom</span>.
          </h2>
          <div className="space-y-12">
            {[
              { title: "Personalized Mentorship", icon: <Award className="text-pink-500" />, desc: "Direct 1-on-1 guidance from architects like Ekuty and Mbakwa." },
              { title: "Industry Recognition", icon: <Sparkles className="text-rose-500" />, desc: "Certification from a portal that prioritizes engineering elegance." },
              { title: "Performance Bonus", icon: <CheckCircle2 className="text-emerald-500" />, desc: "A competitive stipend structure designed to reward your brilliance." }
            ].map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-white shadow-xl rounded-3xl flex items-center justify-center flex-shrink-0 border border-pink-50">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="order-1 lg:order-2 relative">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] h-[650px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Community" 
            />
          </motion.div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-32 pb-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-2 mb-10">
            <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-tight">BloomTech</span>
          </div>
          <p className="mb-10 text-gray-400 font-medium leading-relaxed">
            Leading the charge in digital transformation. We believe that professional growth starts with the right mentorship and a commitment to elegance.
          </p>
          <div className="flex gap-4">
             {[Instagram, Twitter, Linkedin, Github].map((Icon, idx) => (
               <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                 <Icon size={20} />
               </a>
             ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Internship</h5>
          <ul className="space-y-6 font-bold">
            <li><a href="#about" className="hover:text-pink-500">About the Program</a></li>
            <li><a href="#programs" className="hover:text-pink-500">Curriculum</a></li>
            <li><a href="#benefits" className="hover:text-pink-500">Student Benefits</a></li>
            <li><a href="#" className="hover:text-pink-500">Alumnae Portal</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Support</h5>
          <ul className="space-y-6 font-bold">
            <li><a href="#" className="hover:text-pink-500">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-500">Admissions FAQ</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms of Use</a></li>
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Headquarters</h5>
          <div className="space-y-6 font-bold">
             <div className="flex gap-4">
                <Mail size={20} className="text-pink-500" />
                <span className="text-sm">hello@bloomtech.io</span>
             </div>
             <div className="flex gap-4">
                <MapPin size={20} className="text-pink-500" />
                <span className="text-sm">99 Innovation Way, Tech Valley, CA</span>
             </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-widest text-gray-500">
        <p>© {new Date().getFullYear()} BloomTech Internship Program. Engineered by <span className="text-white">Ekuty Ebu</span> & <span className="text-white">Mbakwa Blessing</span>.</p>
        <p className="mt-4 md:mt-0 flex gap-6">
           <a href="#" className="hover:text-pink-500">Privacy</a>
           <a href="#" className="hover:text-pink-500">Cookies</a>
        </p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="bg-white selection:bg-pink-100 selection:text-pink-600">
    <Navbar />
    <Hero />
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-10">
          "The best way to predict the <span className="italic">future</span> is to <span className="text-pink-600">design</span> it."
        </h2>
        <div className="w-24 h-1 bg-pink-100 mx-auto"></div>
      </div>
    </section>
    <ProgramsSection />
    <EngineersSection />
    <BenefitsSection />
    
    <section className="py-40 relative">
      <div className="absolute inset-0 bg-gray-50 -z-10"></div>
      <div className="max-w-6xl mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-[5rem] p-16 md:p-32 text-center text-white shadow-3xl shadow-pink-200 relative overflow-hidden"
         >
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
           <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-tight">Your Journey <br />Starts Here.</h2>
           <p className="text-xl text-pink-100 mb-16 max-w-2xl mx-auto font-medium">
             Join the next cohort of BloomTech interns. Spaces are limited for our Summer 2025 program.
           </p>
           <button className="bg-white text-pink-700 px-16 py-6 rounded-3xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl">
              Launch Application
           </button>
         </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default App;
