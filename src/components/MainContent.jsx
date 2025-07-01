import { useEffect, useState } from 'react'
import './MainContent.css'

const MainContent = () => {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }))
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="main-content">
      <div className="content-container">
        <section className="hero-section" id="hero" data-animate>
          <div className="hero-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>
          <div className={`hero-content ${isVisible.hero ? 'animate-in' : ''}`}>
            <div className="hero-badge">
              <span className="badge-text">🚗 Líder en transporte premium</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Transporte premium</span>
              <span className="title-line title-accent">a tu medida</span>
            </h1>
            <p className="hero-description">
              Servicios de transporte ejecutivo con choferes profesionales. Viajes programados, 
              servicio exclusivo y soluciones personalizadas para empresas y particulares.
            </p>
            <div className="cta-buttons">
              <button className="primary-button">
                <span>Reservar servicio</span>
                <div className="button-shine"></div>
              </button>
              <button className="secondary-button">
                <span>Ver servicios</span>
                <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-dot"></div>
          </div>
        </section>
        
        <section className="services-section" id="services" data-animate>
          <div className={`section-header ${isVisible.services ? 'animate-in' : ''}`}>
            <div className="section-badge">
              <span>✨ Servicios premium</span>
            </div>
            <h2>Nuestros servicios</h2>
            <p>Soluciones de transporte para cada necesidad</p>
          </div>
          <div className={`services-grid ${isVisible.services ? 'animate-in' : ''}`}>
            <div className="service-card" data-tilt>
              <div className="service-card-glow"></div>
              <div className="service-header">
                <div className="service-icon">📅</div>
                <div className="service-badge">Más popular</div>
              </div>
              <h3>Viajes programados</h3>
              <p>Reserva tu transporte con anticipación. Ideal para citas médicas, aeropuerto, eventos y compromisos importantes.</p>
              <div className="service-features">
                <span className="feature-tag">⚡ Respuesta inmediata</span>
                <span className="feature-tag">🎯 Alta precisión</span>
              </div>
              <button className="service-button">
                <span>Programar viaje</span>
                <div className="button-ripple"></div>
              </button>
            </div>
            <div className="service-card" data-tilt>
              <div className="service-card-glow"></div>
              <div className="service-header">
                <div className="service-icon">👔</div>
                <div className="service-badge premium">Premium</div>
              </div>
              <h3>Chofer exclusivo</h3>
              <p>Servicio premium con chofer dedicado por horas o días. Perfecto para ejecutivos y eventos especiales.</p>
              <div className="service-features">
                <span className="feature-tag">👨‍💼 Profesional</span>
                <span className="feature-tag">🚗 Vehículo de lujo</span>
              </div>
              <button className="service-button">
                <span>Contratar chofer</span>
                <div className="button-ripple"></div>
              </button>
            </div>
            <div className="service-card" data-tilt>
              <div className="service-card-glow"></div>
              <div className="service-header">
                <div className="service-icon">🏢</div>
                <div className="service-badge corporate">Empresarial</div>
              </div>
              <h3>Servicios corporativos</h3>
              <p>Transporte empresarial para reuniones, eventos y traslados de personal. Facturación empresarial disponible.</p>
              <div className="service-features">
                <span className="feature-tag">📊 Reportes</span>
                <span className="feature-tag">💼 Facturación</span>
              </div>
              <button className="service-button">
                <span>Consultar planes</span>
                <div className="button-ripple"></div>
              </button>
            </div>
          </div>
        </section>

        <section className="additional-services-section" id="additional" data-animate>
          <div className={`services-grid-secondary ${isVisible.additional ? 'animate-in' : ''}`}>
            <div className="service-card-small floating-card">
              <div className="service-icon pulse-icon">✈️</div>
              <h4>Traslados aeropuerto</h4>
              <p>Servicio puerta a puerta</p>
              <div className="card-shine"></div>
            </div>
            <div className="service-card-small floating-card">
              <div className="service-icon pulse-icon">🎉</div>
              <h4>Eventos especiales</h4>
              <p>Bodas, graduaciones y más</p>
              <div className="card-shine"></div>
            </div>
            <div className="service-card-small floating-card">
              <div className="service-icon pulse-icon">🚐</div>
              <h4>Grupos grandes</h4>
              <p>Vans y minibuses disponibles</p>
              <div className="card-shine"></div>
            </div>
            <div className="service-card-small floating-card">
              <div className="service-icon pulse-icon">⚡</div>
              <h4>Servicio express</h4>
              <p>Para cuando necesitas llegar rápido</p>
              <div className="card-shine"></div>
            </div>
          </div>
        </section>

        <section className="driver-section" id="driver" data-animate>
          <div className={`driver-content ${isVisible.driver ? 'animate-in' : ''}`}>
            <div className="driver-info">
              <div className="section-badge dark">
                <span>🚗 Únete al equipo</span>
              </div>
              <h2>¿Quieres ser parte de TopDriver?</h2>
              <p>Únete a nuestro equipo de choferes profesionales. Ofrecemos excelentes condiciones laborales, horarios flexibles y ingresos competitivos.</p>
              <ul className="driver-benefits">
                <li className="benefit-item">
                  <span className="benefit-icon">💰</span>
                  <span>Ingresos por encima del promedio</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">⏰</span>
                  <span>Horarios flexibles</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">📚</span>
                  <span>Capacitación continua</span>
                </li>
                <li className="benefit-item">
                  <span className="benefit-icon">🛟</span>
                  <span>Soporte 24/7</span>
                </li>
              </ul>
            </div>
            <div className="driver-cta">
              <button className="primary-button glow-button">
                <span>Registrarse como chofer</span>
                <div className="button-shine"></div>
              </button>
              <p className="driver-note">Requisitos: Licencia vigente, vehículo propio, experiencia mínima 2 años</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MainContent