import Sidebar from "../Components/Sidebar";
import "../assets/styles/Configuracion.css";

export default function Configuracion() {
  return (
    <>
      <Sidebar />

      <main className="dashboard-container">

        <header>
          <h1>⚙ Configuración del Usuario</h1>
          <p>Personaliza tu experiencia de entrenamiento</p>
        </header>

        <section className="card">
          <header>
            <h2> Perfil</h2>
          </header>

          <form>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />

            <label>Email</label>
            <input type="email" placeholder="correo@email.com" />

            <label>Rol</label>
            <select>
              <option>Jugador</option>
              <option>Entrenador</option>
            </select>
          </form>
        </section>

        <section className="card">
          <header>
            <h2> Preferencias de Entrenamiento</h2>
          </header>

          <form>
            <label>Nivel</label>
            <select>
              <option>Principiante</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>

            <label>Tipo de entrenamiento</label>
            <select>
              <option>Recepción</option>
              <option>Remate</option>
              <option>Bloqueo</option>
            </select>

            <label>Duración (minutos)</label>
            <input type="number" placeholder="60" />
          </form>
        </section>

        <section className="card">
          <header>
            <h2> Notificaciones</h2>
          </header>

          <form className="toggle-group">
            <label>
              <input type="checkbox" />
              Recordatorios de entrenamiento
            </label>

            <label>
              <input type="checkbox" />
              Alertas de mejora técnica
            </label>

            <label>
              <input type="checkbox" />
              Reportes semanales
            </label>
          </form>
        </section>

        
        <section>
          <button className="save-btn"> Guardar Configuración</button>
        </section>

      </main>
    </>
  );
}