import { useState } from 'react';
import './Gallery.css';

const BOXES = Array.from({ length: 21 }, (_, i) => `/Box${i + 1}.jpg`);

const BAG_NUMS = Array.from({ length: 42 }, (_, i) => i + 40); // Box40–Box81
const BAGS = BAG_NUMS.map(n => `/Box${n}.jpg`);

function GalleryGrid({ images, label }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="gallery-block">
      <div className="gallery-grid">
        {images.map((src, i) => (
          <button
            key={src}
            className="gallery-item"
            onClick={() => setLightbox(i)}
            aria-label={`Ver ${label} ${i + 1}`}
          >
            <img src={src} alt={`${label} ${i + 1}`} loading="lazy" />
            <div className="gallery-overlay">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                <path d="M11 8v6M8 11h6"/>
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
          <button
            className="lightbox-nav lightbox-nav--prev"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length); }}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <img
            src={images[lightbox]}
            alt={`${label} ${lightbox + 1}`}
            onClick={e => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-nav--next"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length); }}
            aria-label="Siguiente"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
          <span className="lightbox-counter">{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [tab, setTab] = useState('bolsas');

  return (
    <>
      <section id="bolsas" className="gallery-section gallery-section--boxes">
        <div className="container">
          <div className="gallery-header">
            <p className="section-label">Catálogo</p>
            <h2 className="section-title">Bolsas <span>Biodegradables</span></h2>
            <p className="section-subtitle">
              Bolsas con válvula desgasificadora y sello Peel Still para preservar la frescura
              de tu café, elaboradas en papel Earth Pact de caña de azúcar.
            </p>
          </div>

          <div className="gallery-tabs">
            <button
              className={`tab-btn ${tab === 'bolsas' ? 'active' : ''}`}
              onClick={() => setTab('bolsas')}
            >
              Bolsas ({BAGS.length})
            </button>
            <button
              className={`tab-btn ${tab === 'cajas' ? 'active' : ''}`}
              onClick={() => setTab('cajas')}
            >
              Cajas ({BOXES.length})
            </button>
          </div>

          {tab === 'bolsas' && <GalleryGrid images={BAGS} label="Bolsa" />}
          {tab === 'cajas' && <GalleryGrid images={BOXES} label="Caja" />}
        </div>
      </section>

      <section id="cajas" className="bags-info">
        <div className="container bags-inner">
          <div className="bags-text">
            <p className="section-label">Cajas plegadizas</p>
            <h2 className="section-title">Empaques con <span>presentación</span><br />profesional</h2>
            <p className="section-subtitle">
              Diseñadas y elaboradas para productos comestibles, con impresión personalizada
              o sin impresión. Funcionalidad, calidad y resistencia en cada caja.
            </p>
            <ul className="bags-list">
              {[
                'Impresión personalizada a todo color',
                'Opción sin impresión disponible',
                'Materiales de alta calidad y resistentes',
                'Diseño plegadizo fácil de armar',
                'Acabados plastificados mate o brillante',
                'Soluciones adaptadas a tus requerimientos',
                'Desde 600 unidades con envío nacional',
              ].map(item => (
                <li key={item}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Pedir muestra
            </a>
          </div>
          <div className="bags-preview">
            <img src="/Box50.jpg" alt="Bolsa biodegradable de café" loading="lazy" />
            <img src="/Box60.jpg" alt="Bolsa de café con válvula" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
