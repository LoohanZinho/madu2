
import React, { useState } from 'react';
import { PROJECTS, SKILLS } from './constants';
import { Project } from './types';

// Components
const Navbar: React.FC<{ isDark: boolean; toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-md border-b transition-all duration-500 ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-serif font-bold tracking-widest text-secondary">MADU SOCIAL</h1>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest transition-colors duration-500">
            <a href="#home" className={`hover:text-secondary transition-colors ${isDark ? 'text-neutral/80' : 'text-black/80'}`}>Início</a>
            <a href="#about" className={`hover:text-secondary transition-colors ${isDark ? 'text-neutral/80' : 'text-black/80'}`}>Sobre</a>
            <a href="#projects" className={`hover:text-secondary transition-colors ${isDark ? 'text-neutral/80' : 'text-black/80'}`}>Projetos</a>
            <a href="#contact" className={`hover:text-secondary transition-colors ${isDark ? 'text-neutral/80' : 'text-black/80'}`}>Contato</a>
          </div>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all duration-300 ${isDark ? 'border-secondary text-secondary hover:bg-secondary hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
            aria-label="Trocar Tema"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
    <div className="absolute inset-0 w-full h-full z-0">
      <img 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
        alt="Strategic Food Service" 
        className={`w-full h-full object-cover transition-all duration-1000 ${isDark ? 'opacity-40 grayscale brightness-50' : 'opacity-10'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/60 via-transparent to-black' : 'from-white/60 via-transparent to-white'}`}></div>
    </div>
    
    <div className="relative z-20 text-center px-4 max-w-5xl">
      <h2 className="text-secondary font-serif italic text-2xl md:text-3xl mb-4 animate-fade-in">Estratégia que alimenta resultados</h2>
      <h1 className={`text-6xl md:text-9xl font-serif font-bold mb-6 tracking-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Madu Social</h1>
      <p className={`text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed transition-colors duration-500 mb-12 ${isDark ? 'text-neutral/80' : 'text-black/70'}`}>
        Social Media & Design focado no setor gastronômico. Unindo estética editorial ao pensamento voltado para vendas.
      </p>
      <div className="flex justify-center">
        <a 
          href="#projects" 
          className={`inline-block border px-12 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 hover:scale-105 active:scale-95 z-30 ${isDark ? 'border-secondary text-secondary hover:bg-secondary hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
        >
          Explorar Portfólio
        </a>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none overflow-hidden">
       <div className={`w-full h-full ${isDark ? 'bg-gradient-to-t from-black to-transparent' : 'bg-gradient-to-t from-white to-transparent'}`}></div>
    </div>
  </section>
);

const Introduction: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section className={`py-32 border-y transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h3 className="text-secondary font-serif text-3xl mb-12">Visão e Propósito</h3>
      <p className={`text-2xl md:text-3xl leading-relaxed font-light italic transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
        "O marketing gastronômico não é sobre fotos bonitas; é sobre criar uma experiência sensorial digital que guie o cliente do desejo à decisão de compra."
      </p>
    </div>
  </section>
);

const About: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center scroll-mt-20">
    <div className="relative group">
      <div className={`absolute -inset-4 border transition-all duration-500 ${isDark ? 'border-secondary/20 group-hover:border-secondary/40' : 'border-black/10 group-hover:border-black/20'}`}></div>
      <img 
        src="https://i.imgur.com/bhAt2Bw.jpeg" 
        alt="Madu Social" 
        className="relative z-10 w-full aspect-[4/5] object-cover transition-all duration-700 shadow-2xl filter saturate-[0.8] group-hover:saturate-100"
      />
    </div>
    <div className="animate-slide-up">
      <h2 className="text-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">A Mente Estratégica</h2>
      <h3 className={`text-4xl md:text-6xl font-serif mb-8 leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Muito além da estética.</h3>
      <div className={`space-y-6 leading-relaxed text-lg transition-colors duration-500 ${isDark ? 'text-neutral/70' : 'text-black/70'}`}>
        <p>
          Sou Madu, uma profissional de Social Media e Design com um foco estratégico e apaixonado pelo setor de alimentação. Minha missão é ir além da estética, criando narrativas visuais que não apenas encantam, mas também geram resultados concretos para restaurantes, confeitarias e todo o universo do food service.
        </p>
        <p>
          Com um olhar que une estratégia de marketing, organização visual e um profundo entendimento do público-alvo, eu ajudo marcas a construírem uma presença digital forte, coerente e, acima de tudo, vendedora.
        </p>
        <p>
          Acredito que cada marca tem uma história única para contar, e meu trabalho é traduzir essa essência em uma identidade visual e um conteúdo que conectem, engajem e convertam.
        </p>
        <div className={`pt-8 grid grid-cols-2 gap-10 border-t transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div>
            <span className="block text-3xl font-serif text-secondary mb-1">Estratégia</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Focada em Vendas</span>
          </div>
          <div>
            <span className="block text-3xl font-serif text-secondary mb-1">Identidade</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Forte & Coerente</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section className={`py-32 transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-[#f4f4f4]'}`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-secondary uppercase tracking-[0.3em] text-sm font-bold mb-4">Expertise</h2>
        <h3 className={`text-5xl font-serif transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Habilidades</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((skill, index) => (
          <div key={index} className={`group overflow-hidden relative border transition-all duration-500 ${isDark ? 'bg-black border-white/5 hover:border-secondary/30' : 'bg-white border-black/5 hover:border-secondary/30'}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={skill.imageUrl} alt={skill.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="p-10">
              <h4 className="text-2xl font-serif mb-4 text-secondary">{skill.title}</h4>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${isDark ? 'text-neutral/60' : 'text-black/60'}`}>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectSection: React.FC<{ project: Project; isDark: boolean }> = ({ project, isDark }) => {
  return (
    <div className={`py-32 border-b last:border-0 transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-black/5'}`}>
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 md:sticky md:top-32">
          <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold block mb-4">{project.category}</span>
          <h3 className={`text-4xl md:text-5xl font-serif mb-8 leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>{project.title}</h3>
          <p className="text-secondary font-serif italic mb-6 text-xl">Cliente: {project.client}</p>
          <p className={`mb-10 leading-relaxed text-lg transition-colors duration-500 ${isDark ? 'text-neutral/70' : 'text-black/70'}`}>{project.description}</p>
          
          {project.results && (
            <div className="mb-10">
              <h4 className={`text-sm uppercase tracking-widest font-bold mb-6 flex items-center transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>
                <span className="w-12 h-[1px] bg-wine mr-4"></span> Resultados Estratégicos
              </h4>
              <ul className="space-y-4">
                {project.results.map((res, i) => (
                  <li key={i} className={`text-sm flex items-start italic transition-colors duration-500 ${isDark ? 'text-neutral/60' : 'text-black/60'}`}>
                    <span className="text-secondary mr-3 text-lg">✓</span> {res}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="md:col-span-7 space-y-16">
          <div className={`p-4 border shadow-2xl transition-all duration-500 ${isDark ? 'bg-wine/10 border-white/5' : 'bg-wine/5 border-black/5'}`}>
             <img src={project.mainImage} alt={project.title} className="w-full transition-all duration-500" />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <img key={i} src={img} alt={`Gallery ${i}`} className={`w-full aspect-square object-cover transition-all duration-500 shadow-xl rounded-sm ${isDark ? 'opacity-90 hover:opacity-100' : 'opacity-100 hover:scale-[1.03]'}`} />
            ))}
          </div>

          {project.beforeAfter && (
            <div className="space-y-8 pt-16">
              <h4 className={`text-center font-serif italic text-2xl transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>A Evolução da Marca</h4>
              <div className="grid grid-cols-2 gap-10">
                <div className="text-center group">
                  <div className={`overflow-hidden border mb-4 aspect-[4/5] transition-colors duration-500 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <img src={project.beforeAfter.before} alt="Antes" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${isDark ? 'opacity-40 text-white' : 'opacity-40 text-black'}`}>Legado Anterior</span>
                </div>
                <div className="text-center group">
                  <div className="overflow-hidden border border-secondary/30 mb-4 aspect-[4/5]">
                    <img src={project.beforeAfter.after} alt="Depois" className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">Novo Posicionamento</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section id="projects" className="py-24 px-6 scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mb-4">Case Studies</h2>
        <h3 className={`text-5xl md:text-7xl font-serif transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Portfólio</h3>
      </div>
      {PROJECTS.map((project) => (
        <ProjectSection key={project.id} project={project} isDark={isDark} />
      ))}
    </div>
  </section>
);

const Contact: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <section id="contact" className={`py-40 relative overflow-hidden transition-colors duration-500 scroll-mt-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
    <div className="absolute inset-0 z-0">
       <img 
        src="https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=80&w=2000" 
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isDark ? 'opacity-30' : 'opacity-15'}`} 
        alt="Background" 
       />
       <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/80 to-transparent' : 'from-white via-white/80 to-transparent'}`}></div>
       <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black via-transparent to-black' : 'from-white via-transparent to-white'}`}></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h3 className="text-secondary font-serif italic text-3xl mb-6">Pronto para transformar sua marca?</h3>
      <h2 className={`text-5xl md:text-8xl font-serif font-bold mb-16 leading-tight transition-colors duration-500 ${isDark ? 'text-white' : 'text-black'}`}>Vamos construir sua estratégia</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a 
          href="https://wa.me/559391478056" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-black px-16 py-5 uppercase tracking-[0.3em] font-bold text-sm hover:bg-white transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
        >
          Solicitar Orçamento
        </a>
        <a 
          href="https://www.instagram.com/madusocial.design" 
          target="_blank"
          rel="noopener noreferrer"
          className={`border-b-2 py-2 px-4 uppercase tracking-[0.3em] font-bold text-sm transition-all duration-300 ${isDark ? 'border-white text-white hover:text-secondary hover:border-secondary' : 'border-black text-black hover:text-secondary hover:border-secondary'}`}
        >
          Instagram
        </a>
      </div>
      <p className={`mt-24 text-xs uppercase tracking-[0.8em] transition-colors duration-500 ${isDark ? 'text-neutral/40' : 'text-black/40'}`}>Brazil • Worldwide Service</p>
    </div>
  </section>
);

const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <footer className={`py-16 border-t transition-colors duration-500 ${isDark ? 'border-white/5 bg-black' : 'border-black/5 bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <h2 className="text-secondary font-serif font-bold tracking-[0.3em]">MADU SOCIAL</h2>
      <div className="flex space-x-6">
         <a href="https://www.instagram.com/madusocial.design" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm uppercase tracking-widest hover:text-wine transition-colors">Instagram</a>
      </div>
      <p className={`text-xs font-light tracking-[0.2em] transition-colors duration-500 ${isDark ? 'text-neutral/30' : 'text-black/30'}`}>
        &copy; {new Date().getFullYear()} MADU SOCIAL. TODOS OS DIREITOS RESERVADOS.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen font-sans selection:bg-secondary selection:text-black transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <Introduction isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1.2s ease-out forwards; }
        
        html { scroll-behavior: smooth; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${isDark ? '#000' : '#fff'}; }
        ::-webkit-scrollbar-thumb { background: #C9A24D; }
      `}</style>
    </div>
  );
};

export default App;
