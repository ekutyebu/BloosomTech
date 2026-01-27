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
    color: "linear-gradient(135deg, #fda4af, #f472b6)",
    skills: ['React 19 & Hooks', 'Motion Design', 'Performance Tuning', 'TypeScript Mastery'],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'design',
    title: "Experience Strategy",
    desc: "Bridge vision and reality. Learn the psychological principles that drive successful product design and elegant user journeys.",
    icon: Palette,
    color: "linear-gradient(135deg, #f472b6, #d946ef)",
    skills: ['User Research', 'Figma Systems', 'Prototyping', 'Accessibility'],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'backend',
    title: "Core Infrastructure",
    desc: "Build the robust systems that power global applications. Learn scalability, data architecture, and secure cloud environments.",
    icon: Cpu,
    color: "linear-gradient(135deg, #a5b4fc, #fb7185)",
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-width navbar-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="font-serif">BloomTech</span>
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#tracks" className="nav-link">Tracks</a>
          <a href="#architects" className="nav-link">Architects</a>
          <a href="#benefits" className="nav-link">Benefits</a>
          <button className="btn-nav">Join Cohort</button>
        </div>

        <button className="mobile-toggle" style={{ display: 'none' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-blob"></div>
    <div className="max-width hero-grid">
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-badge"
        >
          <Sparkles size={16} className="animate-spin-slow" />
          Engineering Professionalism & Grace
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="hero-title font-serif"
        >
          Bloom Into <br /><span className="gradient-text italic">Excellence</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-desc"
        >
          A premier internship initiative blending high-performance engineering with a sophisticated blossom-themed design. Elevate your career with our project architects.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hero-actions"
        >
          <button className="btn-cta">
            Apply Now <ChevronRight size={18} />
          </button>
          <button style={{ background: 'none', border: 'none', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.25em', cursor: 'pointer', borderBottom: '2px solid #FB7185', paddingBottom: '4px', color: '#111827' }}>
            Our Methodology
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-image-wrapper"
      >
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
          alt="Architect Collaboration" 
          className="hero-image"
        />
        <div className="floating-stat animate-float">
          <div style={{ width: '3.5rem', height: '3.5rem', background: '#FFF5F7', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FB7185' }}>
            <Users size={28} />
          </div>
          <div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>250+</div>
            <div style={{ fontSize: '0.55rem', fontWeight: 900, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>Alumnae Network</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TracksSection = () => {
  const [activeTab, setActiveTab] = useState(TRACKS[0].id);
  const current = TRACKS.find(t => t.id === activeTab)!;
  const IconComponent = current.icon;

  return (
    <section id="tracks" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="max-width">
        <h2 className="font-serif" style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '4rem', fontWeight: 800 }}>Our Engineering Tracks</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', background: 'rgba(251, 113, 133, 0.05)', padding: '0.5rem', borderRadius: '9999px', width: 'fit-content', margin: '0 auto 5rem' }}>
          {TRACKS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: '0.85rem 2.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === t.id ? '#FB7185' : 'transparent',
                color: activeTab === t.id ? 'white' : '#6b7280',
                fontSize: '0.65rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: '0.3s ease',
                boxShadow: activeTab === t.id ? '0 10px 20px rgba(251, 113, 133, 0.2)' : 'none'
              }}
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
            className="track-card"
          >
            <div>
              <div className="track-icon-container" style={{ background: current.color }}>
                <IconComponent size={32} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>{current.title}</h3>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '2.5rem', fontWeight: 500 }}>"{current.desc}"</p>
              
              <div className="skill-grid">
                {current.skills.map((s) => (
                  <div key={s} className="skill-item">
                    <Star size={14} style={{ color: '#FB7185' }} />
                    {s}
                  </div>
                ))}
              </div>
              
              <button style={{ color: '#BE185D', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.3em', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                Explore Track <ArrowRight size={16} />
              </button>
            </div>
            
            <img src={current.image} alt={current.title} style={{ width: '100%', height: '550px', objectFit: 'cover', borderRadius: '3rem', border: '8px solid white', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ArchitectsSection = () => (
  <section id="architects" style={{ padding: '10rem 0', background: '#FDF2F8' }}>
    <div className="max-width">
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h2 className="font-serif" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem' }}>Lead Project Architects</h2>
        <p style={{ color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem' }}>The visionaries behind BloomTech</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        {ENGINEERS.map((engineer, idx) => (
          <motion.div 
            key={engineer.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="architect-card"
          >
            <div className="architect-image-container">
               <img src={engineer.img} className="architect-image" alt={engineer.name} />
               <div className="architect-overlay">
                  <h4 className="font-serif" style={{ fontSize: '1.75rem', color: 'white', fontWeight: 700 }}>{engineer.name}</h4>
                  <p style={{ color: '#FDA4AF', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.65rem' }}>{engineer.specialty}</p>
               </div>
            </div>
            <div style={{ padding: '0 1rem' }}>
               <div style={{ color: '#BE185D', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '0.65rem', marginBottom: '1rem' }}>{engineer.role}</div>
               <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.8, fontWeight: 500 }}>"{engineer.bio}"</p>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem' }}>
                  <a href="#" style={{ padding: '1.15rem', background: 'white', borderRadius: '1.25rem', color: '#9ca3af', display: 'flex', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}><Linkedin size={18} /></a>
                  <a href="#" style={{ padding: '1.15rem', background: 'white', borderRadius: '1.25rem', color: '#9ca3af', display: 'flex', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}><Twitter size={18} /></a>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="max-width">
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '3.25rem', height: '3.25rem', background: '#BE185D', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Heart size={22} fill="currentColor" />
            </div>
            <span className="font-serif" style={{ fontSize: '2rem', color: 'white', fontWeight: 700 }}>BloomTech</span>
          </div>
          <p style={{ marginBottom: '3rem', color: '#9ca3af', fontSize: '1.15rem', lineHeight: 1.7 }}>The gold standard in technical internships. Redefining professional excellence for the digital era.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
             {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
               <a key={i} href="#" style={{ width: '3.25rem', height: '3.25rem', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af' }}><Icon size={18} /></a>
             ))}
          </div>
        </div>

        <div>
          <h5 style={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.65rem', marginBottom: '2.5rem' }}>Program</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="#about" className="nav-link" style={{ fontSize: '0.85rem' }}>About Us</a>
            <a href="#tracks" className="nav-link" style={{ fontSize: '0.85rem' }}>Curriculum</a>
            <a href="#architects" className="nav-link" style={{ fontSize: '0.85rem' }}>Architects</a>
            <a href="#benefits" className="nav-link" style={{ fontSize: '0.85rem' }}>Benefits</a>
          </div>
        </div>

        <div>
          <h5 style={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.65rem', marginBottom: '2.5rem' }}>Resources</h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="#" className="nav-link" style={{ fontSize: '0.85rem' }}>Help Portal</a>
            <a href="#" className="nav-link" style={{ fontSize: '0.85rem' }}>FAQ</a>
            <a href="#" className="nav-link" style={{ fontSize: '0.85rem' }}>Privacy</a>
            <a href="#" className="nav-link" style={{ fontSize: '0.85rem' }}>Legal</a>
          </div>
        </div>

        <div>
          <h5 style={{ color: 'white', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.65rem', marginBottom: '2.5rem' }}>Contact</h5>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <Mail size={20} style={{ color: '#FB7185' }} />
            <span style={{ fontWeight: 700, color: '#f3f4f6' }}>admissions@bloomtech.io</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <MapPin size={20} style={{ color: '#FB7185' }} />
            <span style={{ fontWeight: 700, color: '#f3f4f6' }}>Douala - Logbessou</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#6b7280' }}>
        <p>© {new Date().getFullYear()} BloomTech. Curated by Lead Architects.</p>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
           <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms</a>
           <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div style={{ background: '#FDF2F8' }}>
    <Navbar />
    <Hero />
    
    <section id="about" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="max-width" style={{ textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ maxWidth: '950px', margin: '0 auto' }}
        >
          <h2 className="font-serif" style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '3rem', fontWeight: 800 }}>
            "Technical brilliance is mandatory; <span style={{ color: '#BE185D', fontStyle: 'italic' }}>design elegance</span> is what makes it professional."
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '7rem' }}>
             <div style={{ height: '2px', width: '4rem', background: '#FDF2F8' }}></div>
             <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.45em', color: '#9ca3af' }}>The Bloom Philosophy</p>
             <div style={{ height: '2px', width: '4rem', background: '#FDF2F8' }}></div>
          </div>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
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
               style={{ padding: '4rem 3rem', borderRadius: '3.5rem', background: 'rgba(253, 242, 248, 0.25)', border: '1px solid #FDF2F8', transition: '0.4s ease' }}
             >
               <div style={{ width: '4rem', height: '4rem', background: 'white', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BE185D', marginBottom: '2.5rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                 <item.icon size={30} />
               </div>
               <h4 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.25rem' }}>{item.title}</h4>
               <p style={{ color: '#6b7280', fontWeight: 500, lineHeight: 1.8 }}>{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>

    <TracksSection />
    <ArchitectsSection />
    
    <section id="benefits" style={{ padding: '10rem 0', background: 'white' }}>
      <div className="max-width">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '8rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif" style={{ fontSize: '5rem', lineHeight: 1.1, marginBottom: '4rem', fontWeight: 800 }}>
              Experience <br /><span style={{ color: '#BE185D', fontStyle: 'italic' }}>Prestige</span> <br />in Every Line.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              {[
                { title: "Architect Mentorship", icon: Award, desc: "Personalized guidance from our lead architects to refine your professional presence." },
                { title: "Premium Placement", icon: Globe, desc: "Exclusive access to a global network of high-tier technical placements." },
                { title: "System Responsibility", icon: Layers, desc: "Real-world SDLC responsibility on high-scale architectural decisions." }
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '2.5rem' }}>
                  <div style={{ width: '4.5rem', height: '4.5rem', background: '#FFF1F2', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#FB7185', border: '1px solid #FFE4E6' }}>
                    <b.icon size={30} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>{b.title}</h4>
                    <p style={{ color: '#6b7280', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.7 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ borderRadius: '4.5rem', overflow: 'hidden', boxShadow: '0 60px 120px -30px rgba(0,0,0,0.12)', aspectRatio: '3/4', border: '12px solid white' }}
          >
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Engineering Excellence" />
          </motion.div>
        </div>
      </div>
    </section>

    <section style={{ padding: '8rem 0' }}>
      <div className="max-width" style={{ maxWidth: '1100px' }}>
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ 
             background: '#111827', 
             borderRadius: '4.5rem', 
             padding: '8rem 5rem', 
             textAlign: 'center', 
             color: 'white', 
             position: 'relative', 
             overflow: 'hidden', 
             boxShadow: '0 60px 120px -20px rgba(0,0,0,0.25)' 
           }}
         >
           <h2 className="font-serif" style={{ fontSize: '5.5rem', marginBottom: '3rem', lineHeight: 1.1, fontWeight: 800 }}>Your Legacy <br /><span className="gradient-text italic opacity-95">Starts Here</span>.</h2>
           <p style={{ fontSize: '1.35rem', color: '#9ca3af', marginBottom: '5rem', maxWidth: '650px', margin: '0 auto 5rem', fontWeight: 500, lineHeight: 1.8 }}>
             Join our next cohort of architects. Applications for 2025 are now open for evaluation.
           </p>
           <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <button className="btn-cta" style={{ padding: '1.5rem 4rem', fontSize: '0.85rem' }}>Apply for Internship</button>
             <button style={{ background: 'none', border: 'none', color: 'white', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.3em', cursor: 'pointer', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                Selection Process <ArrowRight size={18} />
             </button>
           </div>
         </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default App;