import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/inicio_sesion.css'; 
import googleIcon from '../../../assets/img/google.png';
import appleIcon from '../../../assets/img/Apple.png';

export default function Login() {
  return (
    <div className="login-wrapper">
      <header className="login-header">
        <section className="logo-1">
          <div className="logo-box" aria-label="Logo VoleyPro"><Link to='/'> VS </Link> </div>
           <h2>VolleyScan</h2>
        </section>
      </header>

      <main className="login-container">
        <h1 id="tituloLogin">Bienvenido</h1>
        <p className="subtitle">Ingresa tus credenciales para continuar.</p>

        <form id="loginForm">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="usuario@voleypro.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-container">
              <input type="password" id="password" placeholder="••••••••" required />
              <button type="button" id="togglePassword">👁</button>
            </div>
          </div>

          <div className="options">
            <label className="remember">
              <input type="checkbox" name="remember" /> Recordarme
            </label>
            <Link to="/recuperacion" className="forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>

          <button type="submit" className="btn-login">INGRESAR AHORA →</button>
        </form>

        <div className="divider">
          <span>O CONTINÚA CON</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn google">
            <img src={googleIcon} alt="Google" /> Google
          </button>
          <button type="button" className="social-btn apple">
            <img src={appleIcon} alt="Apple" /> Apple
          </button>
        </div>

        <footer className="register">
          <p>¿Aún no tienes cuenta? <Link to="/registro">Regístrate Gratis</Link></p>
        </footer>
      </main>
    </div>
  );
}

