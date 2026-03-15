import './App.css'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import logoWonders from './assets/logo_wonders.png'

const projects = [
  {
    title: "Financify Dashboard",
    description: "Plataforma de gestão financeira robusta com visualização de dados em tempo real.",
    tags: ["React", "D3.js", "Node.js"],
    image: project1
  },
  {
    title: "Aurélien Luxury",
    description: "E-commerce premium para relógios de luxo com experiência de compra imersiva.",
    tags: ["Next.js", "Shopify", "Motion"],
    image: project2
  },
  {
    title: "Flux Digital Landing",
    description: "Página de destino criativa para agências focada em conversão e design arrojado.",
    tags: ["React", "Three.js", "GSAP"],
    image: project3
  }
];

const services = [
  {
    title: "Landing Pages",
    description: "Páginas de alta conversão desenhadas para transformar visitantes em clientes.",
    icon: "🚀"
  },
  {
    title: "Web Apps Customizados",
    description: "Soluções complexas e escaláveis utilizando as tecnologias mais modernas.",
    icon: "💻"
  },
  {
    title: "E-commerce",
    description: "Lojas online completas com foco em performance e experiência do utilizador.",
    icon: "🛍️"
  }
];

function App() {
  return (
    <main>
      <header style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logoWonders} alt="Wonders Logo" style={{ height: '40px' }} />
        <nav>
          <a href="#services" className="btn-primary" style={{ padding: '0.5rem 1.5rem', background: 'transparent', border: '1px solid var(--glass-border)', boxShadow: 'none' }}>Serviços</a>
        </nav>
      </header>

      <section id="hero" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Transformo ideias em experiências digitais</h1>
        <p>Experiência comprovada na construção de websites que atraem novos clientes ao negócio.</p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
          <a href="#projects" className="btn-primary">Ver Projetos</a>
          <a href="#contact" className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', boxShadow: 'none', border: '1px solid var(--glass-border)' }}>Contactar</a>
        </div>
      </section>

      <section id="projects">
        <h2 style={{ textAlign: 'center' }}>Exemplos de projetos</h2>
        <div className="grid">
          {projects.map((project, i) => (
            <div key={i} className="glass-card" style={{ overflow: 'hidden' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.2rem' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services">
        <h2 style={{ textAlign: 'center' }}>Serviços</h2>
        <div className="grid">
          {services.map((service, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="glass-card" style={{ margin: '4rem 0', padding: '4rem', textAlign: 'center', border: '1px solid var(--accent)' }}>
        <h2>Vamos trabalhar juntos?</h2>
        <p style={{ margin: '0 auto 2rem' }}>Estou disponível para novos projetos e colaborações. Entre em contacto para discutirmos a sua ideia.</p>
        <a href="mailto:wondersdev00@gmail.com" className="btn-primary">Enviar Email</a>
      </section>

      <footer style={{ paddingBottom: '4rem', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
        <p style={{ fontSize: '0.9rem' }}>&copy; 2026 Wonders Portfolio.</p>
      </footer>
    </main>
  )
}

export default App
