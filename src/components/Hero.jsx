import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-stripe hero-stripe--yellow" />
        <div className="hero-stripe hero-stripe--red" />
        <div className="hero-stripe hero-stripe--navy" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="section-label">Bogotá, Colombia</p>
          <h1 className="hero-title">
            Empaques que<br />
            <span>elevan</span> tu marca<br />
            de café
          </h1>
          <p className="hero-desc">
            Fabricamos cajas plegadizas y bolsas biodegradables de alta calidad
            con impresión personalizada a todo color — diseñadas para preservar
            la frescura y potenciar la identidad de tu café.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Solicitar cotización
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#bolsas" className="btn btn-outline">Ver catálogo</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">600+</span>
              <span className="stat-label">unidades mínimo</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">70%</span>
              <span className="stat-label">biodegradable</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">caras a color</span>
            </div>
          </div>
        </div>

        <div className="hero-gallery">
          <div className="hero-card hero-card--main">
            <img src="/Box50.jpg" alt="Bolsa biodegradable de café" loading="eager" />
          </div>
          <div className="hero-card hero-card--sm hero-card--top">
            <img src="/Box45.jpg" alt="Bolsa de café con válvula" loading="eager" />
          </div>
          <div className="hero-card hero-card--sm hero-card--bot">
            <img src="/Box60.jpg" alt="Bolsa de café personalizada" loading="eager" />
          </div>
          <div className="hero-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Envíos a todo<br/>el país</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
