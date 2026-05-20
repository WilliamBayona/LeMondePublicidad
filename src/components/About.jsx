import './About.css';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Entrega en todo el país',
    desc: 'Enviamos a cualquier ciudad de Colombia con tiempos de entrega competitivos.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Materiales sostenibles',
    desc: 'Papel Earth Pact de caña de azúcar y PLA metalizado: un 70% biodegradable.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Impresión a 4 caras',
    desc: 'Personaliza tu empaque en las cuatro caras con acabados mate o brillante.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: 'Desde 600 unidades',
    desc: 'Pedidos accesibles para marcas en crecimiento, sin sacrificar calidad.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container about-inner">
        <div className="about-text">
          <p className="section-label">Quiénes somos</p>
          <h2 className="section-title">
            El empaque que tu café<br /><span>se merece</span>
          </h2>
          <p className="section-subtitle">
            En Le Monde Publicidad diseñamos y fabricamos empaques que combinan funcionalidad,
            sostenibilidad y presentación profesional. Cada producto está pensado para
            proteger la frescura de tu café y fortalecer la identidad de tu marca.
          </p>

          <div className="about-features">
            {features.map(f => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contacto" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Conocer más
          </a>
        </div>

        <div className="about-visual">
          <div className="about-img-stack">
            <img className="img-back" src="/Box55.jpg" alt="Bolsas de café biodegradables" loading="lazy" />
            <img className="img-front" src="/Box43.jpg" alt="Bolsa de café con válvula" loading="lazy" />
            <div className="about-accent" />
          </div>
          <div className="about-quote">
            <p>"Calidad, sostenibilidad y diseño en cada empaque."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
