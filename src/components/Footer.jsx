import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TopDriver</h3>
            <p>Tu destino, nuestro compromiso</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>info@topdriver.com</p>
            <p>+1 (555) 123-4567</p>
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