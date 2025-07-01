import './MainContent.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Transporte premium a tu medida</h1>
            <p>Servicios de transporte ejecutivo con choferes profesionales. Viajes programados, servicio exclusivo y soluciones personalizadas para empresas y particulares.</p>
            <div className="cta-buttons">
              <button className="primary-button">Reservar servicio</button>
              <button className="secondary-button">Ver servicios</button>
            </div>
          </div>
        </section>
        
        <section className="services-section">
          <div className="section-header">
            <h2>Nuestros servicios</h2>
            <p>Soluciones de transporte para cada necesidad</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Viajes programados</h3>
              <p>Reserva tu transporte con anticipación. Ideal para citas médicas, aeropuerto, eventos y compromisos importantes.</p>
              <button className="service-button">Programar viaje</button>
            </div>
            <div className="service-card">
              <div className="service-icon">👔</div>
              <h3>Chofer exclusivo</h3>
              <p>Servicio premium con chofer dedicado por horas o días. Perfecto para ejecutivos y eventos especiales.</p>
              <button className="service-button">Contratar chofer</button>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Servicios corporativos</h3>
              <p>Transporte empresarial para reuniones, eventos y traslados de personal. Facturación empresarial disponible.</p>
              <button className="service-button">Consultar planes</button>
            </div>
          </div>
        </section>

        <section className="additional-services-section">
          <div className="services-grid-secondary">
            <div className="service-card-small">
              <div className="service-icon">✈️</div>
              <h4>Traslados aeropuerto</h4>
              <p>Servicio puerta a puerta</p>
            </div>
            <div className="service-card-small">
              <div className="service-icon">🎉</div>
              <h4>Eventos especiales</h4>
              <p>Bodas, graduaciones y más</p>
            </div>
            <div className="service-card-small">
              <div className="service-icon">🚐</div>
              <h4>Grupos grandes</h4>
              <p>Vans y minibuses disponibles</p>
            </div>
            <div className="service-card-small">
              <div className="service-icon">⚡</div>
              <h4>Servicio express</h4>
              <p>Para cuando necesitas llegar rápido</p>
            </div>
          </div>
        </section>

        <section className="driver-section">
          <div className="driver-content">
            <div className="driver-info">
              <h2>¿Quieres ser parte de TopDriver?</h2>
              <p>Únete a nuestro equipo de choferes profesionales. Ofrecemos excelentes condiciones laborales, horarios flexibles y ingresos competitivos.</p>
              <ul className="driver-benefits">
                <li>✓ Ingresos por encima del promedio</li>
                <li>✓ Horarios flexibles</li>
                <li>✓ Capacitación continua</li>
                <li>✓ Soporte 24/7</li>
              </ul>
            </div>
            <div className="driver-cta">
              <button className="primary-button">Registrarse como chofer</button>
              <p className="driver-note">Requisitos: Licencia vigente, vehículo propio, experiencia mínima 2 años</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MainContent