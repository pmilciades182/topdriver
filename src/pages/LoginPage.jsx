import './LoginPage.css'

const LoginPage = () => {
  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Iniciar sesión</h1>
            <p>Accede a tu cuenta TopDriver</p>
          </div>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                <span className="checkbox-text">Recordarme</span>
              </label>
              <button type="button" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            
            <button type="submit" className="login-button">
              Iniciar sesión
            </button>
          </form>
          
          <div className="login-footer">
            <p>¿No tienes cuenta? <button className="register-link">Regístrate aquí</button></p>
          </div>
          
          <div className="divider">
            <span>o continúa con</span>
          </div>
          
          <div className="social-login">
            <button className="social-button google">
              <span>🔍</span>
              Google
            </button>
            <button className="social-button facebook">
              <span>📘</span>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LoginPage