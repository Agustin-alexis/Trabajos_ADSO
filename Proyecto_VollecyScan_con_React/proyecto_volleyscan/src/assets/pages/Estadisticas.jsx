import Sidebar from "../Components/Sidebar";
import Card from "../Components/Card";
import ProgressBar from "../Components/ProgressBar";
import "../assets/styles/Estadisticas.css";

export default function Estadisticas() {
  return (
    <>
      <Sidebar />

      <main className="dashboard-container">

        <header>
          <h1> Estadísticas de Rendimiento</h1>
          <p>Análisis detallado de tu desempeño en voleibol</p>
        </header>

        <section className="cards">
          <Card title="Velocidad" value="0.42s" extra="Última medición" />
          <Card title="Precisión" value="87%" extra="+4%" />
          <Card title="Salto" value="62 cm" extra="Récord personal" />
        </section>

        <section className="panel">
          <header>
            <h2> Progreso General</h2>
          </header>
          <ProgressBar value={75} />
        </section>

        <section className="panel">
          <header>
            <h2> Evolución Semanal</h2>
          </header>

          <figure className="chart">
            <ul className="bars">
              <li style={{height: "30%"}} title="Lunes"></li>
              <li style={{height: "50%"}} title="Martes"></li>
              <li style={{height: "45%"}} title="Miércoles"></li>
              <li style={{height: "70%"}} title="Jueves"></li>
              <li style={{height: "90%"}} title="Viernes"></li>
            </ul>
            <figcaption>Rendimiento de la semana</figcaption>
          </figure>
        </section>

        <section className="panel">
          <header>
            <h2> Rendimiento por Habilidad</h2>
          </header>

          <article>
            <p>Recepción</p>
            <ProgressBar value={80} />

            <p>Remate</p>
            <ProgressBar value={70} />

            <p>Bloqueo</p>
            <ProgressBar value={65} />
          </article>
        </section>

        <section className="panel">
          <header>
            <h2> Historial de Sesiones</h2>
          </header>

          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Ejercicio</th>
                <th>Resultado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10/03</td>
                <td>Remate</td>
                <td>85%</td>
              </tr>
              <tr>
                <td>12/03</td>
                <td>Recepción</td>
                <td>88%</td>
              </tr>
              <tr>
                <td>15/03</td>
                <td>Bloqueo</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="panel highlight">
          <header>
            <h2> Récords Personales</h2>
          </header>

          <ul>
            <li>Mayor salto: 62 cm</li>
            <li>Mejor precisión: 90%</li>
            <li>Tiempo más rápido: 0.39s</li>
          </ul>
        </section>

      </main>
    </>
  );
}