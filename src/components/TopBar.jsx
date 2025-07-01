import { useState } from 'react'
import './TopBar.css'

const TopBar = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'about', label: 'Acerca de' },
    { id: 'login', label: 'Iniciar sesión' }
  ]

  const handleNavigation = (pageId) => {
    onNavigate(pageId)
    setIsMenuOpen(false)
  }

  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="topbar-logo" onClick={() => handleNavigation('home')}>
          <h1>TopDriver</h1>
        </div>
        
        <nav className={`topbar-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-desktop">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="nav-mobile">
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
            
            {isMenuOpen && (
              <div className="mobile-menu">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    {item.label}
                  </button>
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