import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, Home, FolderOpen, User, Send, Code, Zap, 
  Globe, Star, Menu, X, CheckCircle, Database, Wrench 
} from 'lucide-react';

// =================================================================
// --- 1. CONFIGURAÇÕES GLOBAIS E DADOS DO USUÁRIO (Preencha Aqui) ---
// =================================================================

const GITHUB_USERNAME = 'hyagow';
// Paleta de cores moderna:
const PRIMARY_COLOR_CLASS = 'text-sky-400'; // Azul céu vibrante
const PRIMARY_GRADIENT_CLASS = 'bg-gradient-to-r from-sky-500 to-cyan-400'; // Gradiente primário
const SECONDARY_GRADIENT_CLASS = 'bg-gradient-to-r from-purple-600 to-indigo-500'; // Gradiente secundário
const HOVER_BG_CLASS = 'hover:bg-sky-600'; // Cor de hover para botões
const BORDER_COLOR_CLASS = 'border-sky-700'; // Cor de borda sutil

const USER_DATA = {
  name: "Hyago Wendel",
  role: "Desenvolvedor Full-Stack | Especialista em Python & React",
  github: "https://github.com/hyagow",
  linkedin: "https://www.linkedin.com/in/hyagow/",
  email: "hyagowtech@gmail.com",
  bioShort: "Transformando ideias em soluções digitais robustas com foco em performance e experiência do usuário.",
  bioLong: "Desenvolvedor Full-Stack apaixonado por transformar ideias em soluções digitais robustas e escaláveis. Especializado na união do ecossistema Python (FastAPI, Django) com a modernidade do React e Next.js. Acredito em código limpo, testes automatizados e arquiteturas que resistam ao tempo.",
  profileImageUrl: `https://api.github.com/users/${GITHUB_USERNAME}`, // Será resolvida via API
  skills: [
    { name: 'React/Next.js', icon: Code, color: 'text-cyan-400' },
    { name: 'Python/FastAPI/Django', icon: Code, color: 'text-yellow-400' },
    { name: 'TypeScript/JavaScript', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js/Express', icon: Code, color: 'text-green-500' },
    { name: 'SQL/NoSQL (PostgreSQL, Firestore)', icon: Database, color: 'text-indigo-400' },
    { name: 'AWS/GCP/Docker/Terraform', icon: Zap, color: 'text-orange-400' },
    { name: 'Clean Code & TDD', icon: Wrench, color: 'text-gray-400' }, // Usando Wrench no lugar de Tool
  ]
};

const PROJECTS = [
  {
    title: "Sistema de Gestão Financeira (SGF)",
    description: "Plataforma SaaS para pequenas empresas com controle de fluxo de caixa, relatórios e integração bancária.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
    link: "#",
    icon: Star,
  },
  {
    title: "E-commerce Headless",
    description: "Loja virtual de alta performance usando Next.js para frontend e Django para a API de catálogo e pedidos.",
    tech: ["Next.js", "Django", "TypeScript", "Vercel"],
    link: "#",
    icon: Globe,
  },
  {
    title: "Biblioteca de Componentes UI",
    description: "Conjunto reutilizável de componentes em React com Storybook para documentação e testes unitários.",
    tech: ["React", "Storybook", "Tailwind CSS", "Jest"],
    link: "#",
    icon: Code,
  },
];

// =================================================================
// --- 2. TRADUÇÕES (Ajuste ou Adicione Idiomas) --------------------
// =================================================================

const translations = {
  pt: {
    // Menu
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    skills: "Habilidades",
    
    // Hero Section
    greetings: "Olá, eu sou",
    cta: "Ver Projetos",
    
    // About Section
    aboutTitle: "Sobre Mim",
    aboutSubtitle: "Minha Jornada e Filosofia",
    
    // Projects Section
    projectsTitle: "Meus Projetos",
    projectsSubtitle: "Soluções que construí",
    projectTech: "Tecnologias:",

    // Skills Section
    skillsTitle: "Habilidades Técnicas",
    skillsSubtitle: "Minhas Ferramentas de Trabalho",
    
    // Contact Section
    contactTitle: "Entre em Contato",
    contactSubtitle: "Vamos construir algo juntos.",
    contactName: "Nome Completo",
    contactEmail: "Seu Email",
    contactMessage: "Mensagem",
    contactSend: "Enviar Mensagem",
    
    // Footer
    footerText: "Todos os direitos reservados.",
    footerBuilt: "Construído com React e Tailwind CSS.",
  },
  en: {
    // Menu
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    
    // Hero Section
    greetings: "Hi, I'm",
    cta: "View Projects",
    
    // About Section
    aboutTitle: "About Me",
    aboutSubtitle: "My Journey and Philosophy",
    
    // Projects Section
    projectsTitle: "My Projects",
    projectsSubtitle: "Solutions I have built",
    projectTech: "Technologies:",

    // Skills Section
    skillsTitle: "Technical Skills",
    skillsSubtitle: "My Working Tools",
    
    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's build something great together.",
    contactName: "Full Name",
    contactEmail: "Your Email",
    contactMessage: "Message",
    contactSend: "Send Message",
    
    // Footer
    footerText: "All rights reserved.",
    footerBuilt: "Built with React and Tailwind CSS.",
  }
};

// =================================================================
// --- 3. COMPONENTES DE UI E UTILIDADES ----------------------------
// =================================================================

// Estilos Globais para garantir fonte e fundo escuro
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0F172A; /* slate-900 */
            color: #E2E8F0; /* slate-200 */
        }
        html {
          scroll-behavior: smooth;
        }
    `}</style>
);

// Componente de Botão Primário
const PrimaryButton = ({ children, className = '', ...props }) => (
    <a 
      className={`px-6 py-3 rounded-xl font-semibold text-white ${PRIMARY_GRADIENT_CLASS} shadow-lg shadow-sky-500/50 transition duration-300 transform hover:scale-105 ${className}`} 
      {...props}
    >
        {children}
    </a>
);

// Componente de Navegação (Header)
const Navigation = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: t.home, id: 'hero', icon: Home },
    { name: t.about, id: 'about', icon: User },
    { name: t.skills, id: 'skills', icon: Wrench },
    { name: t.projects, id: 'projects', icon: FolderOpen },
    { name: t.contact, id: 'contact', icon: Send },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-sky-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo/Nome */}
        <div className="text-2xl font-bold tracking-tight">
          <span className={PRIMARY_COLOR_CLASS}>{'<'}</span>
          <span className="text-white">{USER_DATA.name.split(' ')[0]}</span>
          <span className={PRIMARY_COLOR_CLASS}>{'>'}</span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`text-gray-300 hover:${PRIMARY_COLOR_CLASS} transition duration-300 flex items-center group`}
            >
              <item.icon className={`w-4 h-4 mr-1 ${PRIMARY_COLOR_CLASS} transition duration-300 group-hover:scale-110`} />
              {item.name}
            </a>
          ))}
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>

        {/* Menu Mobile Button */}
        <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <button onClick={toggleMenu} className={`p-2 rounded-lg ${HOVER_BG_CLASS} text-white transition duration-300`}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-sky-800/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-700 hover:${PRIMARY_COLOR_CLASS} transition duration-300 flex items-center`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Componente de Troca de Idioma
const LanguageSwitcher = ({ lang, setLang }) => (
    <button
        onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        className={`px-3 py-1 rounded-full text-xs font-medium border ${BORDER_COLOR_CLASS} text-gray-300 hover:bg-slate-700 transition duration-300`}
    >
        {lang.toUpperCase()}
    </button>
);

// =================================================================
// --- 4. SEÇÕES DA PÁGINA -----------------------------------------
// =================================================================

// Componente de Seção Padrão
const Section = ({ id, title, subtitle, children, className = '' }) => (
    <section id={id} className={`py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight text-white`}>
                <span className={PRIMARY_COLOR_CLASS}>// </span>{title}
            </h2>
            <p className="mt-3 text-xl text-gray-400">{subtitle}</p>
        </div>
        {children}
    </section>
);

// Seção 1: Hero (Introdução)
const HeroSection = ({ t }) => {
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  useEffect(() => {
    // Busca a imagem de perfil do GitHub
    fetch(USER_DATA.profileImageUrl)
      .then(res => res.json())
      .then(data => {
        if (data.avatar_url) {
          setProfilePicUrl(data.avatar_url);
        } else {
          // Fallback para uma imagem placeholder, caso a API falhe ou o usuário não exista
          setProfilePicUrl('https://placehold.co/150x150/1e293b/a8a29e?text=HW');
        }
      })
      .catch(() => {
        setProfilePicUrl('https://placehold.co/150x150/1e293b/a8a29e?text=HW');
      });
  }, []);

  return (
    <Section id="hero" title="" subtitle="" className="min-h-[calc(100vh-80px)] pt-32 flex items-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Conteúdo de Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-xl text-gray-400 mb-2">{t.greetings}</p>
          <h1 className={`text-6xl md:text-8xl font-black mb-4 leading-tight`}>
            <span className="text-white">{USER_DATA.name}</span>
          </h1>
          <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${PRIMARY_COLOR_CLASS}`}>
            {USER_DATA.role}
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
            {USER_DATA.bioShort}
          </p>
          <PrimaryButton href="#projects">
            <FolderOpen className="w-5 h-5 inline-block mr-2" />
            {t.cta}
          </PrimaryButton>
        </div>

        {/* Imagem de Perfil */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative p-3 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 shadow-2xl shadow-sky-500/50">
            {profilePicUrl ? (
                <img
                src={profilePicUrl}
                alt={USER_DATA.name}
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-900 transition duration-500 transform hover:scale-105"
                onError={(e) => e.currentTarget.src = 'https://placehold.co/150x150/1e293b/a8a29e?text=HW'}
                />
            ) : (
                // Placeholder de carregamento simples
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-slate-700 animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

// Seção 2: Sobre Mim
const AboutSection = ({ t }) => (
    <Section id="about" title={t.aboutTitle} subtitle={t.aboutSubtitle}>
        <div className="bg-slate-800 p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-900/50">
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                {USER_DATA.bioLong}
            </p>
            <div className={`mt-8 flex justify-center space-x-4 border-t pt-6 ${BORDER_COLOR_CLASS}`}>
                <a href={USER_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Linkedin className="w-8 h-8" />
                </a>
                <a href={USER_DATA.github} target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Github className="w-8 h-8" />
                </a>
                <a href={`mailto:${USER_DATA.email}`} className={`text-gray-300 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Mail className="w-8 h-8" />
                </a>
            </div>
        </div>
    </Section>
);

// Componente do Cartão de Projeto
const ProjectCard = ({ project, t }) => (
    <div className="bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-sky-500/20 transition duration-500 transform hover:scale-[1.02] border border-slate-700">
        <div className="flex items-center mb-4">
            <div className={`p-3 rounded-full ${PRIMARY_GRADIENT_CLASS} text-white shadow-md`}>
                <project.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold ml-4 text-white">{project.title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className={`border-t pt-4 ${BORDER_COLOR_CLASS} mt-auto`}>
            <p className="font-semibold text-gray-300 mb-2">{t.projectTech}</p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                    <span 
                        key={index} 
                        className="px-3 py-1 text-sm rounded-full bg-slate-700 text-sky-300 font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`mt-4 inline-flex items-center text-sm font-semibold ${PRIMARY_COLOR_CLASS} hover:text-sky-300 transition duration-300`}
        >
            Ver Detalhes
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
    </div>
);

// Seção 3: Projetos
const ProjectsSection = ({ t }) => (
    <Section id="projects" title={t.projectsTitle} subtitle={t.projectsSubtitle}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} t={t} />
            ))}
        </div>
    </Section>
);

// Seção 4: Habilidades Técnicas
const SkillsSection = ({ t }) => (
    <Section id="skills" title={t.skillsTitle} subtitle={t.skillsSubtitle}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {USER_DATA.skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-slate-800 rounded-xl shadow-lg border border-slate-700 transition duration-300 hover:bg-slate-700/70">
                    <skill.icon className={`w-10 h-10 mb-3 ${skill.color}`} />
                    <span className="text-lg font-medium text-white text-center">{skill.name}</span>
                </div>
            ))}
        </div>
    </Section>
);

// Seção 5: Contato
const ContactSection = ({ t }) => {
    // Implementação de formulário de contato simples (apenas UI)
    const handleSubmit = (e) => {
        e.preventDefault();
        // Em um app real, você enviaria os dados para um endpoint de API aqui.
        alert("Mensagem de contato simulada enviada! (No aplicativo real, os dados seriam enviados para um backend.)");
        e.target.reset();
    };

    return (
        <Section id="contact" title={t.contactTitle} subtitle={t.contactSubtitle}>
            <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-2xl shadow-slate-900/50 border border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t.contactName}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t.contactEmail}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t.contactMessage}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 resize-none"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <PrimaryButton type="submit" className="w-full md:w-auto">
                            {t.contactSend}
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Section>
    );
};

// Componente de Rodapé
const Footer = ({ t }) => (
    <footer className="bg-slate-900 border-t border-sky-800/50 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href={USER_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href={USER_DATA.github} target="_blank" rel="noopener noreferrer" className={`text-gray-400 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Github className="w-5 h-5" />
                </a>
                <a href={`mailto:${USER_DATA.email}`} className={`text-gray-400 hover:${PRIMARY_COLOR_CLASS} transition duration-300`}>
                    <Mail className="w-5 h-5" />
                </a>
            </div>
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {USER_DATA.name}. {t.footerText}
            </p>
            <p className="text-xs text-gray-600 mt-1">
                {t.footerBuilt}
            </p>
        </div>
    </footer>
);

// Componente Principal
const App = () => {
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  return (
    // O GlobalStyles garante o fundo escuro e a fonte.
    <>
      <GlobalStyles />
      <div className="min-h-screen font-sans antialiased bg-slate-900">
        <Navigation lang={lang} setLang={setLang} t={t} />
        <main className="mt-20"> {/* Adicionado mt-20 para compensar a barra de navegação fixa */}
          <HeroSection t={t} />
          <AboutSection t={t} />
          <SkillsSection t={t} />
          <ProjectsSection t={t} />
          <ContactSection t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  );
};

export default App;