import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

// Custom Cursor for premium feel
const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{ x: pos.x - 8, y: pos.y - 8 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};

const Navbar = () => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
      {!imgFailed ? (
        // Loads the logo from the public folder. 
        // If it fails (e.g., file not uploaded yet), it falls back to the text layout.
        <img 
          src="/logo.png" 
          alt="AEDC Logo" 
          className="h-10 md:h-14 object-contain" 
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl tracking-[0.3em] font-bold font-sans">AEDC</div>
          <div className="text-[8px] md:text-[10px] tracking-[0.2em] uppercase opacity-70 mt-1">
            Aesthetics · Experience · Design · Craft
          </div>
        </div>
      )}
      <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-70 font-mono">
        AEDC.CC
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 px-6 md:px-10 flex flex-col justify-between pb-10 border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 md:mt-20">
        <div className="md:col-span-4 flex flex-col justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">
            [01] The Vision
          </p>
          <p className="mt-8 md:mt-0 text-sm md:text-base text-white/70 max-w-xs leading-relaxed font-light">
            Operating at the intersection of minimalism and grandeur. We are a top-tier visual studio shaping the aesthetics of tomorrow.
          </p>
        </div>
        <div className="md:col-span-8">
          <h1 className="text-[15vw] md:text-[9vw] leading-[0.85] font-serif uppercase tracking-tighter">
            Visual<br/>
            <span className="italic text-white/80">Excellence</span><br/>
            Studio
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-end mt-20">
        <div className="font-mono text-xs uppercase tracking-widest text-white/50 flex items-center gap-4">
          <ArrowDown size={14} className="animate-bounce" />
          Scroll to explore
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-white/50 text-right">
          Est. 2026
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-6 border-b border-white/10 overflow-hidden flex bg-white text-black">
      <motion.div 
        className="flex whitespace-nowrap gap-10 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 text-xl md:text-3xl font-serif uppercase tracking-widest">
            <span>Aesthetics</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>Experience</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>Design</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>Craft</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Expertise = () => {
  const services = [
    { title: "Art Direction", id: "01" },
    { title: "Brand Identity", id: "02" },
    { title: "Digital Experience", id: "03" },
    { title: "Spatial Design", id: "04" },
  ];

  return (
    <section className="py-32 px-6 md:px-10 border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50 sticky top-32">
            [02] Expertise
          </p>
        </div>
        <div className="md:col-span-8 flex flex-col">
          {services.map((service, i) => (
            <div key={i} className="group border-b border-white/10 py-8 md:py-12 flex justify-between items-center cursor-pointer hover:px-6 transition-all duration-500">
              <h3 className="text-3xl md:text-6xl font-serif italic text-white/70 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <span className="font-mono text-sm text-white/30 group-hover:text-white transition-colors">
                {service.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const projects = [
    {
      id: "01",
      title: "LUMINA",
      category: "Spatial & Identity",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2800&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "AETHER",
      category: "Digital Experience",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2800&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-32 px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">
            [03] Selected Works
          </p>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-xl">
            A curated selection of our recent endeavors. Quality over quantity.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-32 md:gap-48 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number, key?: React.Key }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="group cursor-pointer">
      <div className="overflow-hidden bg-[#111] aspect-[4/5] md:aspect-[16/9] relative mb-6 md:mb-10">
        <motion.img 
          style={{ y, scale: 1.15 }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 ease-out" />
        
        {/* Hover overlay icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
            <ArrowRight size={32} />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start border-t border-white/10 pt-6">
        <div>
          <h3 className="text-4xl md:text-6xl font-serif uppercase tracking-tight mb-2 md:mb-4 group-hover:translate-x-4 transition-transform duration-500 ease-out">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase opacity-50">
            {project.category}
          </p>
        </div>
        <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] opacity-50">
          {project.id}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-10 px-6 md:px-10 border-t border-white/10 bg-white text-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
        <div>
          <h2 className="text-[12vw] md:text-[8vw] leading-none font-serif uppercase tracking-tighter mb-4">
            Let's<br/>Create
          </h2>
          <a href="mailto:hello@aedc.cc" className="text-xl md:text-3xl font-light hover:italic transition-all">
            hello@aedc.cc
          </a>
        </div>
        <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Behance</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-10 border-t border-black/10 font-mono text-[10px] uppercase tracking-widest opacity-50">
        <div>© 2026 AEDC.CC</div>
        <div className="mt-4 md:mt-0">Aesthetics · Experience · Design · Craft</div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black font-sans relative">
      <Cursor />
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Marquee />
      <Expertise />
      <Works />
      <Footer />
    </div>
  );
}
