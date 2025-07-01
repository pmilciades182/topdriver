import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/acerca-de', label: 'Acerca de' }
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="topbar">
      <div className="topbar-container">
        <Link to="/" className="topbar-logo" onClick={handleMenuClose}>
          <h1>TopDriver</h1>
        </Link>
        
        <nav className={`topbar-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-desktop">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleMenuClose}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/iniciar-sesion"
              className={`nav-link login-link ${location.pathname === '/iniciar-sesion' ? 'active' : ''}`}
              onClick={handleMenuClose}
            >
              Iniciar sesión
            </Link>
          </div>
          
          <div className="nav-mobile">
            <Link
              to="/iniciar-sesion"
              className={`mobile-login-button ${location.pathname === '/iniciar-sesion' ? 'active' : ''}`}
              onClick={handleMenuClose}
            >
              Iniciar sesión
            </Link>
            
            <button 
              className="menu-toggle"
              onClick={handleMenuToggle}
            >
              <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
            
            {isMenuOpen && (
              <div className="mobile-menu">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default TopBar