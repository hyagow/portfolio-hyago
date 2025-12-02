import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Home, FolderOpen, User, Send, Code, Zap, Globe, Star, Menu, X, ArrowRight, Rss, Layers, TrendingUp, Cloud, Database, Cpu, Server, GitBranch, Terminal } from 'lucide-react';

// =================================================================
// --- 1. CONFIGURAÇÕES GLOBAIS E DADOS DO USUÁRIO (Preencha Aqui) ---
// =================================================================

const GITHUB_USERNAME = 'hyagow';
// Paleta de cores moderna:
const PRIMARY_COLOR_CLASS = 'text-sky-400'; // Azul céu vibrante
const PRIMARY_GRADIENT_CLASS = 'bg-gradient-to-r from-sky-500 to-cyan-400'; // Gradiente primário
const SECONDARY_GRADIENT_CLASS = 'bg-gradient-to-r from-purple-600 to-indigo-500'; // Gradiente secundário
const BORDER_COLOR_CLASS = 'border-gray-700'; // Cor de borda sutil

const USER_DATA = {
  name: "Hyago Wendel",
  role: "Desenvolvedor Full-Stack | Especialista em Python & React",
  github: "https://github.com/hyagow",
  linkedin: "https://www.linkedin.com/in/hyagow/",
  email: "hyagowtech@gmail.com",
  // A foto de perfil foi inserida aqui conforme sua solicitação
  avatarUrl: "https://github.com/hyagow.png",
  // Bio longa para a seção Sobre
  bioLong: "Desenvolvedor Full-Stack apaixonado por transformar ideias em soluções digitais robustas e escaláveis. Especializado na união do ecossistema Python (FastAPI, Django) com interfaces modernas em React e Next.js. Meu foco é em performance, clean code e arquiteturas que facilitam a manutenção e crescimento do produto. Acredito que a melhor solução é sempre aquela que equilibra inovação técnica com valor real para o negócio. Minha experiência abrange desde a modelagem de dados e otimização de consultas até o deployment em ambientes de alta disponibilidade, utilizando CI/CD e monitoramento avançado.",
  // Experiências principais para a seção de serviços
  services: [
    { icon: Code, title: "Desenvolvimento Full-Stack", description: "Criação de aplicações web completas, do frontend reativo (React) ao backend robusto (Python/Node)." },
    { icon: Layers, title: "Arquitetura de Sistemas", description: "Design e implementação de arquiteturas escaláveis em nuvem (AWS/GCP), focando em microsserviços e performance." },
    { icon: TrendingUp, title: "Otimização e Performance", description: "Refatoração e otimização de código para reduzir latência e custos operacionais, utilizando caching e técnicas de banco de dados avançadas." },
  ],
  // Projetos de exemplo
  projects: [
    { title: "API de Análise de Dados", description: "Backend em FastAPI, com utilização do Sqlite3 para processamento de dados.", tags: ["Python", "FastAPI", "SQLite3", "Streamlit"], github: "https://github.com/hyagow/GerenciadorDeEstoque", link: "#" },
    { title: "Automatizações PY", description: "Automatizações para gerenciar planilhas e gerenciamento bruto de dados a serem catalogados.", tags: ["Python", "PyAutoGUI"], github: "https://github.com/hyagow/AutomacaoPython", link: "#" },
    { title: "Agenda e Envio de Mensagens", description: "Uma ferramenta de linha de comando simples para gerenciar mensagens a serem enviadas para a sua lista de clientes.", tags: ["Python", "Pywhatkit", "SQLite3", "PySimpleGUI"], github: "https://github.com/hyagow/HW-TECH-SYSTEM", link: "#" },
  ],
};

// =================================================================
// --- 2. TRADUÇÕES (i18n) ---
// =================================================================

const translations = {
  pt: {
    // Nav
    navHome: "Início",
    navProjects: "Projetos",
    navServices: "Serviços",
    navAbout: "Sobre Mim",
    navContact: "Contato",
    // Hero
    heroGreeting: "Olá, eu sou",
    heroRole: USER_DATA.role,
    heroBioShort: "Desenvolvedor Full-Stack focado em Python (FastAPI/Django) e React. Construindo soluções digitais performáticas e escaláveis.",
    heroButtonProjects: "Ver Projetos",
    heroButtonContact: "Fale Comigo",
    // Projects
    projectsTitle: "Meus Projetos",
    projectsSubtitle: "Trabalhos Recentes",
    // Services
    servicesTitle: "O Que Eu Ofereço",
    servicesSubtitle: "Soluções de Desenvolvimento",
    // About
    aboutTitle: "Minha Jornada",
    aboutSubtitle: "Um Pouco Sobre Quem Eu Sou",
    aboutBio: USER_DATA.bioLong,
    aboutStackTitle: "Minha Stack Principal",
    // Contact
    contactTitle: "Vamos Trabalhar Juntos?",
    contactSubtitle: "Entre em Contato",
    contactName: "Nome Completo",
    contactEmail: "E-mail",
    contactMessage: "Mensagem",
    contactSubmit: "Enviar Mensagem",
    contactPlaceholderName: "Seu nome...",
    contactPlaceholderEmail: "seu.email@exemplo.com",
    contactPlaceholderMessage: "Detalhe seu projeto ou proposta...",
    // Footer
    footerText: "Todos os direitos reservados.",
    footerBuilt: "Construído com React e Tailwind CSS",
  },
  en: {
    // Nav
    navHome: "Home",
    navProjects: "Projects",
    navServices: "Services",
    navAbout: "About Me",
    navContact: "Contact",
    // Hero
    heroGreeting: "Hello, I'm",
    heroRole: USER_DATA.role,
    heroBioShort: "Full-Stack Developer focused on Python (FastAPI/Django) and React. Building performant and scalable digital solutions.",
    heroButtonProjects: "View Projects",
    heroButtonContact: "Contact Me",
    // Projects
    projectsTitle: "My Projects",
    projectsSubtitle: "Recent Work",
    // Services
    servicesTitle: "What I Offer",
    servicesSubtitle: "Development Solutions",
    // About
    aboutTitle: "My Journey",
    aboutSubtitle: "A Little Bit About Me",
    aboutBio: USER_DATA.bioLong,
    aboutStackTitle: "My Core Stack",
    // Contact
    contactTitle: "Ready to Work Together?",
    contactSubtitle: "Get In Touch",
    contactName: "Full Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSubmit: "Send Message",
    contactPlaceholderName: "Your name...",
    contactPlaceholderEmail: "your.email@example.com",
    contactPlaceholderMessage: "Detail your project or proposal...",
    // Footer
    footerText: "All rights reserved.",
    footerBuilt: "Built with React and Tailwind CSS",
  },
};

// =================================================================
// --- 3. COMPONENTES REUTILIZÁVEIS ---
// =================================================================

// Componente para a barra de título das seções
const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h3 className={`text-sm font-semibold uppercase tracking-widest ${PRIMARY_COLOR_CLASS} mb-2`}>
      {subtitle}
    </h3>
    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
      {title}
    </h2>
  </div>
);

// Componente para o card de projeto
const ProjectCard = ({ project }) => (
  <div className="group bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-xl transition-all duration-500 hover:shadow-sky-500/30 hover:border-sky-700/50 transform hover:scale-[1.02]">
    <h3 className="text-xl font-bold text-white mb-3 flex items-center group-hover:text-sky-400 transition duration-300">
      <FolderOpen className={`w-5 h-5 mr-2 ${PRIMARY_COLOR_CLASS}`} />
      {project.title}
    </h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map(tag => (
        <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-800 text-sky-300 rounded-full group-hover:bg-sky-900/40 transition duration-300">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex space-x-4 mt-auto border-t border-gray-800 pt-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm font-medium text-gray-300 hover:text-sky-400 transition duration-300"
      >
        <Github className="w-4 h-4 mr-1" /> Código
      </a>
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-gray-300 hover:text-sky-400 transition duration-300"
        >
          <ArrowRight className="w-4 h-4 mr-1" /> Demo
        </a>
      )}
    </div>
  </div>
);

// Componente para o card de serviço
const ServiceCard = ({ service }) => (
  <div className="group bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center shadow-xl transition-all duration-500 hover:shadow-purple-500/30 hover:border-purple-700/50 transform hover:scale-[1.02]">
    <div className={`w-16 h-16 mx-auto mb-6 ${SECONDARY_GRADIENT_CLASS} p-3 rounded-2xl text-white flex items-center justify-center transition duration-500 group-hover:rotate-6`}>
      <service.icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition duration-300">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </div>
);

// Componente de link de navegação
const NavigationLink = ({ href, children, icon: Icon, active, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-full font-medium transition duration-300 ${active ? `${PRIMARY_GRADIENT_CLASS} text-white shadow-lg` : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}`}
  >
    <Icon className="w-5 h-5 mr-2" />
    {children}
  </a>
);

// =================================================================
// --- 4. COMPONENTES DE LAYOUT E NAVEGAÇÃO ---
// =================================================================

// Componente de Navegação Fixa
const Navigation = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: "#home", label: t.navHome, icon: Home, id: 'home' },
    { href: "#projects", label: t.navProjects, icon: FolderOpen, id: 'projects' },
    { href: "#services", label: t.navServices, icon: Zap, id: 'services' },
    { href: "#about", label: t.navAbout, icon: User, id: 'about' },
    { href: "#contact", label: t.navContact, icon: Send, id: 'contact' },
  ];

  const handleScroll = () => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(el => el);
    const scrollY = window.scrollY + 100; // Offset para a barra de navegação

    let currentSection = 'home';
    for (const section of sections) {
      if (section.offsetTop <= scrollY) {
        currentSection = section.id;
      }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chama na montagem para definir a seção inicial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-lg border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className={`text-3xl font-extrabold tracking-tight`}>
              <span className={PRIMARY_COLOR_CLASS}>HW</span><span className="text-white">.dev</span>
            </a>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-1 p-1 bg-gray-900 rounded-full border border-gray-800 shadow-lg">
            {navItems.map((item) => (
              <NavigationLink 
                key={item.id} 
                href={item.href} 
                icon={item.icon} 
                active={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </NavigationLink>
            ))}
          </nav>

          {/* Seletor de Idioma e Menu Mobile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} 
                className="flex items-center p-2 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 border border-gray-700"
                title="Mudar Idioma"
              >
                <Globe className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium uppercase">{lang}</span>
              </button>
            </div>
            
            <button 
              className="md:hidden text-gray-300 hover:text-white transition duration-300 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden pb-4 px-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavigationLink 
                key={item.id} 
                href={item.href} 
                icon={item.icon} 
                active={activeSection === item.id}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </NavigationLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


// =================================================================
// --- 5. SEÇÕES PRINCIPAIS ---
// =================================================================

// Seção de Início (Hero)
const HeroSection = ({ t }) => (
  <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-gray-950 relative overflow-hidden">
    {/* Efeito de brilho de fundo (Decoração) */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 relative z-10">
      
      {/* Avatar com Borda Animada (Decoração e Resposta ao Pedido) */}
      <div className="relative w-40 h-40 mx-auto mb-8 rounded-full border-4 border-sky-500 p-1 shadow-2xl shadow-sky-500/30 transition duration-500 hover:shadow-sky-400/50 hover:border-cyan-400 transform hover:scale-105">
        <img
          // SUA FOTO DE PERFIL INSERIDA AQUI
          src={USER_DATA.avatarUrl}
          alt={USER_DATA.name}
          className="w-full h-full object-cover rounded-full"
          // Fallback para caso a imagem não carregue
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/160x160/1e293b/a5f3fc?text=HW"; }}
        />
        <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse" title="Disponível para Projetos"></span>
      </div>
      
      <p className={`text-xl md:text-2xl font-light mb-2 text-gray-400`}>
        {t.heroGreeting}
      </p>
      
      {/* Título com Gradiente (Decoração) */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        <span className={`${PRIMARY_GRADIENT_CLASS} text-transparent bg-clip-text`}>
            {USER_DATA.name}
        </span>
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
        {t.heroRole}
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10">
        {t.heroBioShort}
      </p>

      <div className="flex justify-center space-x-4">
        {/* Botão de Projetos (Decoração: Estilo de botão "brilho de borda") */}
        <a 
          href="#projects" 
          className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group ${PRIMARY_GRADIENT_CLASS} shadow-lg shadow-sky-500/50 transition duration-300 transform hover:scale-105`}
        >
          <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-gray-950 rounded-full group-hover:bg-opacity-0 flex items-center">
            <FolderOpen className="w-5 h-5 mr-2" />
            {t.heroButtonProjects}
          </span>
        </a>

        {/* Botão de Contato (Decoração: Estilo de botão "brilho de borda" secundário) */}
        <a 
          href="#contact" 
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg shadow-purple-500/50 transition duration-300 transform hover:scale-105"
        >
          <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-gray-950 rounded-full group-hover:bg-opacity-0 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            {t.heroButtonContact}
          </span>
          </a>
      </div>
    </div>
  </section>
);

// Seção de Projetos
const ProjectsSection = ({ t }) => (
  <section id="projects" className="py-20 bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title={t.projectsTitle} subtitle={t.projectsSubtitle} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {USER_DATA.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="text-center mt-16">
        <a 
          href={USER_DATA.github} 
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gray-700 hover:bg-gray-600 shadow-md transition duration-300"
        >
          <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0 flex items-center">
            <Github className="w-5 h-5 mr-2" />
            Ver Mais no GitHub
          </span>
        </a>
      </div>
    </div>
  </section>
);

// Seção de Serviços
const ServicesSection = ({ t }) => (
  <section id="services" className="py-20 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title={t.servicesTitle} subtitle={t.servicesSubtitle} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {USER_DATA.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
);

// Seção Sobre Mim
const AboutSection = ({ t }) => {
  // Ícones de stack atualizados para melhor representação visual
  const stack = [
    { name: "React / Next.js", icon: Globe, color: "text-sky-400" },
    { name: "Python / FastAPI", icon: Terminal, color: "text-green-400" },
    { name: "Node.js / Express", icon: GitBranch, color: "text-lime-400" },
    { name: "PostgreSQL / MongoDB", icon: Database, color: "text-indigo-400" },
    { name: "Docker / Kubernetes", icon: Cpu, color: "text-blue-400" },
    { name: "AWS / GCP", icon: Cloud, color: "text-yellow-400" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t.aboutTitle} subtitle={t.aboutSubtitle} />

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Coluna de Texto */}
          <div className="lg:w-7/12">
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed bg-gray-950 p-8 rounded-3xl border border-gray-800 shadow-xl transition duration-500 hover:shadow-gray-700/20">
              {t.aboutBio.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Coluna da Stack */}
          <div className="lg:w-5/12 bg-gray-950 p-8 rounded-3xl border border-gray-800 shadow-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Rss className={`w-6 h-6 mr-2 ${PRIMARY_COLOR_CLASS}`} />
              {t.aboutStackTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {stack.map((item, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-900 rounded-xl transition duration-300 hover:bg-gray-800/50 border border-gray-800 hover:border-sky-700">
                  <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
                  <span className="text-gray-200 font-medium text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Contato
const ContactSection = ({ t }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Simulação de envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simular o envio. Usando mailto para garantir o funcionamento.
    setTimeout(() => {
      const subject = `Nova Proposta de Colaboração de ${formState.name}`;
      const body = `Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`;
      const mailtoLink = `mailto:${USER_DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, '_self');
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);

    }, 1500); 
  };

  const getButtonContent = () => {
    // Estas são as classes essenciais para o span interno que cria o efeito de "borda"
    const innerSpanClasses = "relative px-6 py-3 transition-all ease-in duration-75 bg-gray-950 rounded-full group-hover:bg-opacity-0 w-full flex items-center justify-center";

    if (status === 'sending') {
      return (
        <span className={innerSpanClasses}>
          <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        </span>
      );
    }
    if (status === 'success') {
      return (
        <span className={innerSpanClasses}>
            <Star className="w-5 h-5 mr-2" /> Redirecionando...
        </span>
      );
    }
    return (
      <span className={innerSpanClasses}>
          <Send className="w-5 h-5 inline-block mr-2" />
          {t.contactSubmit}
      </span>
    );
  };
  
  const InputClass = "w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition duration-300 shadow-inner shadow-gray-950/50";
  const LabelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <section id="contact" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Título Atualizado */}
            <SectionTitle title={t.contactTitle} subtitle={t.contactSubtitle} />

            <div className="max-w-3xl mx-auto bg-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className={LabelClass}>{t.contactName}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder={t.contactPlaceholderName}
                            required
                            className={InputClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={LabelClass}>{t.contactEmail}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder={t.contactPlaceholderEmail}
                            required
                            className={InputClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className={LabelClass}>{t.contactMessage}</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder={t.contactPlaceholderMessage}
                            required
                            className={InputClass}
                        ></textarea>
                    </div>
                    
                    {/* Botão de Envio de Mensagem (Decoração: Efeito de borda com gradiente) */}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group ${PRIMARY_GRADIENT_CLASS} shadow-lg shadow-sky-500/50 transition duration-300 transform hover:scale-[1.005] disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {getButtonContent()}
                    </button>
                    {status === 'success' && (
                        <p className="text-center text-green-400 mt-4">
                            Mensagem pronta! Redirecionando para seu cliente de e-mail...
                        </p>
                    )}
                </form>
            </div>
        </div>
    </section>
  );
};

// Componente Footer
const Footer = ({ t }) => (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href={USER_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition duration-300">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href={USER_DATA.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition duration-300">
                    <Github className="w-6 h-6" />
                </a>
                <a href={`mailto:${USER_DATA.email}`} className="text-gray-400 hover:text-sky-400 transition duration-300">
                    <Mail className="w-6 h-6" />
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
    <div className="min-h-screen bg-gray-950 font-sans antialiased text-gray-100 relative">
      {/* Estilos para animação de fundo (Decoração) */}
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
      
      <Navigation lang={lang} setLang={setLang} t={t} />
      <main className='mt-20 relative z-10'>
        <HeroSection t={t} />
        <ProjectsSection t={t} />
        <ServicesSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;