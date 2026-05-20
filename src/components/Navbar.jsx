import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Bolsas', href: '#bolsas' },
    { label: 'Cajas', href: '#cajas' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand">
          <img src="/logo.svg" alt="Le Monde Publicidad" className="navbar-logo" />
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              Cotizar
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
