import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ── Credenciales EmailJS ──────────────────────────────────────────
// 1. Crea cuenta en https://www.emailjs.com
// 2. Add Service → Gmail → copia el Service ID
// 3. Email Templates → crea plantilla → copia el Template ID
// 4. Account → API Keys → copia la Public Key
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────

const INITIAL = { nombre: '', empresa: '', email: '', telefono: '', mensaje: '' };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <p className="section-label">Contáctanos</p>
          <h2 className="section-title">Hablemos de tu<br /><span>proyecto</span></h2>
          <p className="section-subtitle">
            Cuéntanos qué necesitas y te enviaremos una cotización personalizada.
            Pedidos desde 600 unidades con envío a todo el país.
          </p>

          <div className="info-cards">
            <a href="tel:3214864062" className="info-card">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Teléfono</span>
                <span className="info-value">321 486 4062</span>
              </div>
            </a>

            <a href="mailto:lemondepublicidad@gmail.com" className="info-card">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Correo</span>
                <span className="info-value">lemondepublicidad@gmail.com</span>
              </div>
            </a>

            <div className="info-card">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="info-label">Dirección</span>
                <span className="info-value">Dg 46 Bis Sur # 13M-18<br />Bogotá, Colombia</span>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/lmempaques/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a href="https://web.facebook.com/p/LM-Empaques-para-Caf%C3%A9-100054401624482/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="form-success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
              </svg>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos pondremos en contacto contigo muy pronto.</p>
              <button className="btn btn-outline" onClick={() => setStatus('idle')}>Enviar otro</button>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Solicitar cotización</h3>

              {status === 'error' && (
                <div className="form-error-banner">
                  Hubo un error al enviar. Escríbenos directo a{' '}
                  <a href="mailto:lemondepublicidad@gmail.com">lemondepublicidad@gmail.com</a>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input id="nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" name="empresa" type="text" value={form.empresa} onChange={handleChange} placeholder="Tu empresa" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@correo.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="321 000 0000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea id="mensaje" name="mensaje" rows="5" required value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos qué tipo de empaque necesitas, cantidades, etc." />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
                {status !== 'sending' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
