import './ServicesPage.css'

const ServicesPage = () => {
  return (
    <main className="services-page">
      <div className="services-container">
        <section className="services-hero">
          <div className="hero-content">
            <h1>Nuestros servicios</h1>
            <p>Soluciones de transporte premium diseñadas para satisfacer todas tus necesidades</p>
          </div>
        </section>

        <section className="main-services">
          <div className="section-header">
            <h2>Servicios principales</h2>
            <p>Nuestras opciones más populares</p>
          </div>
          
          <div className="main-services-grid">
            <div className="service-card-large">
              <div className="service-header">
                <div className="service-icon">📅</div>
                <h3>Viajes programados</h3>
                <div className="service-price">Desde $25/viaje</div>
              </div>
              <div className="service-content">
                <p>Reserva tu transporte con anticipación y asegura tu traslado. Perfecto para citas médicas, vuelos, reuniones importantes y eventos especiales.</p>
                <ul className="service-features">
                  <li>✓ Confirmación inmediata</li>
                  <li>✓ Recordatorios automáticos</li>
                  <li>✓ Choferes puntuales</li>
                  <li>✓ Seguimiento en tiempo real</li>
                </ul>
                <button className="service-button">Programar viaje</button>
              </div>
            </div>

            <div className="service-card-large">
              <div className="service-header">
                <div className="service-icon">👔</div>
                <h3>Chofer exclusivo</h3>
                <div className="service-price">Desde $45/hora</div>
              </div>
              <div className="service-content">
                <p>Servicio premium con chofer dedicado disponible por las horas que necesites. Ideal para ejecutivos, eventos VIP y ocasiones especiales.</p>
                <ul className="service-features">
                  <li>✓ Chofer personal dedicado</li>
                  <li>✓ Vehículos de lujo</li>
                  <li>✓ Flexibilidad total de horarios</li>
                  <li>✓ Servicio de conserjería</li>
                </ul>
                <button className="service-button">Contratar chofer</button>
              </div>
            </div>

            <div className="service-card-large">
              <div className="service-header">
                <div className="service-icon">🏢</div>
                <h3>Servicios corporativos</h3>
                <div className="service-price">Planes desde $500/mes</div>
              </div>
              <div className="service-content">
                <p>Soluciones integrales de transporte para empresas. Gestión centralizada, facturación empresarial y reportes detallados.</p>
                <ul className="service-features">
                  <li>✓ Facturación centralizada</li>
                  <li>✓ Reportes mensuales</li>
                  <li>✓ Descuentos por volumen</li>
                  <li>✓ Soporte prioritario</li>
                </ul>
                <button className="service-button">Consultar planes</button>
              </div>
            </div>
          </div>
        </section>

        <section className="additional-services">
          <div className="section-header">
            <h2>Servicios adicionales</h2>
            <p>Opciones especializadas para necesidades específicas</p>
          </div>
          
          <div className="additional-services-grid">
            <div className="service-card-small">
              <div className="service-icon">✈️</div>
              <h4>Traslados aeropuerto</h4>
              <p>Servicio puerta a puerta desde y hacia el aeropuerto. Monitoreo de vuelos incluido.</p>
              <div className="service-price-small">$35 - $50</div>
            </div>
            
            <div className="service-card-small">
              <div className="service-icon">🎉</div>
              <h4>Eventos especiales</h4>
              <p>Transporte para bodas, graduaciones, quinceañeros y celebraciones importantes.</p>
              <div className="service-price-small">$60 - $120</div>
            </div>
            
            <div className="service-card-small">
              <div className="service-icon">🚐</div>
              <h4>Grupos grandes</h4>
              <p>Vans y minibuses para grupos de 6 a 15 personas. Ideal para tours y excursiones.</p>
              <div className="service-price-small">$80 - $150</div>
            </div>
            
            <div className="service-card-small">
              <div className="service-icon">⚡</div>
              <h4>Servicio express</h4>
              <p>Para cuando necesitas llegar rápido. Tiempo de respuesta menor a 15 minutos.</p>
              <div className="service-price-small">$30 - $45</div>
            </div>
            
            <div className="service-card-small">
              <div className="service-icon">🌙</div>
              <h4>Servicio nocturno</h4>
              <p>Disponible 24/7 para traslados nocturnos seguros y confiables.</p>
              <div className="service-price-small">$40 - $60</div>
            </div>
            
            <div className="service-card-small">
              <div className="service-icon">🏥</div>
              <h4>Traslados médicos</h4>
              <p>Transporte especializado para citas médicas y emergencias no críticas.</p>
              <div className="service-price-small">$35 - $55</div>
            </div>
          </div>
        </section>

        <section className="service-areas">
          <div className="areas-content">
            <div className="areas-text">
              <h2>Áreas de servicio</h2>
              <p>Cubrimos las principales zonas metropolitanas y sus alrededores, garantizando cobertura completa para nuestros clientes.</p>
              <ul className="areas-list">
                <li>Centro de la ciudad</li>
                <li>Zona financiera</li>
                <li>Aeropuerto internacional</li>
                <li>Zonas residenciales</li>
                <li>Centros comerciales</li>
                <li>Hoteles principales</li>
                <li>Universidades</li>
                <li>Hospitales y clínicas</li>
              </ul>
            </div>
            <div className="areas-features">
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <h4>Cobertura total</h4>
                <p>Servicio en toda el área metropolitana</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🗺️</div>
                <h4>Rutas optimizadas</h4>
                <p>Utilizamos GPS avanzado para las mejores rutas</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏰</div>
                <h4>Tiempo real</h4>
                <p>Seguimiento en vivo de tu viaje</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-info">
          <div className="pricing-content">
            <h2>Información de precios</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h4>Factores que influyen en el precio</h4>
                <ul>
                  <li>Distancia del recorrido</li>
                  <li>Tiempo del día</li>
                  <li>Tipo de vehículo</li>
                  <li>Tiempo de espera</li>
                  <li>Servicios adicionales</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>Métodos de pago</h4>
                <ul>
                  <li>Tarjetas de crédito/débito</li>
                  <li>Transferencias bancarias</li>
                  <li>Efectivo</li>
                  <li>Facturas empresariales</li>
                  <li>Pagos recurrentes</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>Descuentos disponibles</h4>
                <ul>
                  <li>Clientes frecuentes (10%)</li>
                  <li>Reservas anticipadas (5%)</li>
                  <li>Servicios corporativos (15%)</li>
                  <li>Estudiantes y adultos mayores (8%)</li>
                  <li>Referidos (Primer viaje gratis)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="cta-content">
            <h2>¿Listo para reservar?</h2>
            <p>Contáctanos ahora y experimenta el mejor servicio de transporte premium</p>
            <div className="cta-buttons">
              <button className="primary-button">Reservar ahora</button>
              <button className="secondary-button">Solicitar cotización</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ServicesPage