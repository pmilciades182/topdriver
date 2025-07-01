import './TopBar.css'

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-container">
        <div className="topbar-logo">
          <h1>TopDriver</h1>
        </div>
        <nav className="topbar-nav">
          <button className="nav-button">
            <span className="nav-icon">☰</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default TopBar