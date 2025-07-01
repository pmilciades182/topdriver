import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TopDriver</h3>
            <p>Transporte premium a tu medida</p>
          </div>
          <div className="footer-section">
            <h4>Servicios al cliente</h4>
            <p>📧 reservas@topdriver.com</p>
            <p>📞 +1 (555) TOP-DRIVE</p>
            <p>⏰ 24/7 Disponible</p>
          </div>
          <div className="footer-section">
            <h4>Para choferes</h4>
            <p>📧 trabajar@topdriver.com</p>
            <p>📞 +1 (555) JOB-DRIVER</p>
            <p>💼 Oportunidades laborales</p>
          </div>
          <div className="footer-section">
            <h4>Servicios corporativos</h4>
            <p>📧 empresas@topdriver.com</p>
            <p>📞 +1 (555) CORP-DRIVE</p>
            <p>🏢 Soluciones empresariales</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TopDriver. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer