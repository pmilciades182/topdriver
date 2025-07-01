import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/acerca-de" element={<AboutPage />} />
          <Route path="/iniciar-sesion" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
