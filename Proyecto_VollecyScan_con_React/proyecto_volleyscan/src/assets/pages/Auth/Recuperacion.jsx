import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Recuperacion.css'; 

export default function Recuperacion() {
  return (
    <div className="login-wrapper">
      <header className="login-header">
        <section className="logo-1">
          <div className="logo-box" aria-label="Logo VoleyPro">VS</div>
          <h2>VolleyScan</h2>
        </section>
      </header>

      <main>
        <section className="login-container" aria-labelledby="tituloRecuperar">
          <h1 id="tituloRecuperar">Recuperar contraseña</h1>
          <p className="subtitle">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <form id="recoverForm">
            <div className="form-group">
              <label htmlFor="emailRecover">Correo Electrónico</label>
              <input 
                type="email" 
                id="emailRecover" 
                name="email" 
                placeholder="usuario@voleypro.com" 
                required
                autoComplete="email" 
              />
            </div>

            <button type="submit" className="btn-login">
              ENVIAR ENLACE →
            </button>
          </form>

          <footer className="register">
            <p>
              ¿Recordaste tu contraseña? 
              <Link to="/login"> Volver al inicio de sesión</Link>
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}