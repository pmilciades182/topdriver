import './AboutPage.css'

const AboutPage = () => {
  return (
    <main className="about-page">
      <div className="about-container">
        <section className="about-hero">
          <div className="hero-content">
            <h1>Acerca de TopDriver</h1>
            <p>Líderes en transporte premium con más de 10 años de experiencia brindando servicios de calidad</p>
          </div>
        </section>

        <section className="about-mission">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Nuestra misión</h3>
              <p>Brindar servicios de transporte premium, seguros y confiables, superando las expectativas de nuestros clientes con un enfoque personalizado y profesional.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Nuestra visión</h3>
              <p>Ser la empresa líder en transporte ejecutivo, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">⭐</div>
              <h3>Nuestros valores</h3>
              <p>Puntualidad, seguridad, profesionalismo, respeto y compromiso son los pilares que guían cada uno de nuestros servicios.</p>
            </div>
          </div>
        </section>

        <section className="about-story">
          <div className="story-content">
            <div className="story-text">
              <h2>Nuestra historia</h2>
              <p>TopDriver nació en 2014 con la visión de revolutionar el transporte ejecutivo. Comenzamos con una pequeña flota de 5 vehículos y un equipo apasionado por brindar la mejor experiencia de transporte.</p>
              <p>A lo largo de los años, hemos crecido orgánicamente, manteniendo siempre nuestros estándares de calidad y expandiendo nuestros servicios para satisfacer las necesidades cambiantes de nuestros clientes.</p>
              <p>Hoy contamos con más de 50 choferes profesionales, una flota moderna de vehículos de lujo y la confianza de cientos de empresas y particulares que eligen TopDriver para sus necesidades de transporte.</p>
            </div>
            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Choferes profesionales</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Clientes satisfechos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilidad</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="team-header">
            <h2>Nuestro equipo</h2>
            <p>Profesionales comprometidos con la excelencia en el servicio</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Carlos Mendoza</h4>
              <p className="member-role">Director General</p>
              <p className="member-bio">15 años de experiencia en la industria del transporte ejecutivo.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>Ana García</h4>
              <p className="member-role">Directora de Operaciones</p>
              <p className="member-bio">Especialista en logística y gestión de flotas vehiculares.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h4>Miguel Torres</h4>
              <p className="member-role">Jefe de Mantenimiento</p>
              <p className="member-bio">Garantiza que nuestra flota esté siempre en perfecto estado.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h4>Laura Pérez</h4>
              <p className="member-role">Atención al Cliente</p>
              <p className="member-bio">Comprometida con brindar la mejor experiencia a nuestros usuarios.</p>
            </div>
          </div>
        </section>

        <section className="about-commitment">
          <div className="commitment-content">
            <h2>Nuestro compromiso</h2>
            <div className="commitment-grid">
              <div className="commitment-item">
                <div className="commitment-icon">🛡️</div>
                <h4>Seguridad garantizada</h4>
                <p>Vehículos mantenidos, choferes capacitados y seguros completos</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🌱</div>
                <h4>Responsabilidad ambiental</h4>
                <p>Flota eco-friendly y prácticas sustentables</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🤝</div>
                <h4>Compromiso social</h4>
                <p>Apoyamos a la comunidad y generamos empleo de calidad</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">📱</div>
                <h4>Innovación constante</h4>
                <p>Tecnología de punta para mejorar tu experiencia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage