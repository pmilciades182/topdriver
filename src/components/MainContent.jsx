import './MainContent.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="content-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Tu destino, nuestro compromiso</h1>
            <p>Servicio de transporte confiable y seguro para llevarte donde necesites</p>
            <div className="cta-buttons">
              <button className="primary-button">Solicitar viaje</button>
              <button className="secondary-button">Más información</button>
            </div>
          </div>
        </section>
        
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Transporte seguro</h3>
              <p>Conductores verificados y vehículos en perfecto estado</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Fácil de usar</h3>
              <p>Solicita tu viaje en segundos desde tu dispositivo</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Precios justos</h3>
              <p>Tarifas transparentes sin sorpresas</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MainContent