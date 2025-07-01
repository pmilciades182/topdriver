import { useState } from 'react'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage />
      default:
        return <MainContent />
    }
  }

  return (
    <div className="app">
      <TopBar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer />
    </div>
  )
}

export default App
