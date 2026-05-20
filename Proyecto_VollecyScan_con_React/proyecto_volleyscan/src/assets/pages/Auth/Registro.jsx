import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/register.css'; 
import googleIcon from '../../img/google.png';
import appleIcon from '../../img/Apple.png';


export default function Registro() {
  return (
    <div className="pantalla-dividida" className="registro-page-container" >
      <section className="panel-izquierdo">
        <article className="contenedor-registro" aria-labelledby="tituloLogin">
          
          <header className="encabezado-registro">
            <section className="contenedor-logo">
              <span className="caja-logo" aria-label="Logo VolleyScan">VS</span>
              <h2>VolleyScan</h2>
            </section>
            <h1 id="tituloLogin">Crear ID de atleta</h1>
            <p className="subtitulo">Únete para analizar y mejorar tu técnica</p>
          </header>

          <form id="registroForm" className="formulario-registro">
            <div className="fila-formulario">
              <section className="grupo-input">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Tu nombre" required />
              </section>
              <section className="grupo-input">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" placeholder="Tu apellido" required />
              </section>
            </div>

            <section className="grupo-input">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" placeholder="tuemail@ejemplo.com" required />
            </section>

            <section className="grupo-input">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </section>

            <button type="submit" className="boton-principal">Completar registro</button>
          </form>

          <section className="redireccion-inicio">
            <p>
              ¿Ya tienes cuenta? 
              <Link className="enlace-primario" to="/login"> Inicia sesión aquí</Link>
            </p>
          </section>

          <section className="separador">
            <span>O REGÍSTRATE CON</span>
          </section>

          <section className="botones-sociales">
            <button type="button" className="boton-social google">
              <img src={googleIcon} alt="Google" /> Google
            </button>
            <button type="button" className="boton-social apple">
              <img src={appleIcon} alt="Apple" /> Apple
            </button>
          </section>

        </article>
      </section>

    </div>
  );
}