import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import "../assets/styles/Dashborad.css";

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="main-content">

        <Header 
          titulo="Bienvenido, Agustín"
          subtitulo="Tu progreso deportivo en tiempo real"
        />

        <section className="cards">
          <Card title="Precisión" value="87%" extra="+4% esta semana" />
          <Card title="Velocidad" value="0.42s" extra="Mejorando" />
          <Card title="Salto" value="62 cm" extra="-1 cm" />
        </section>

        <section className="panel">
          <header>
            <h2>Evolución del Rendimiento</h2>
          </header>

          <article className="chart">
            <p>Últimos entrenamientos</p>
            <ul className="chart-bars">
              <li style={{height: "40%"}}></li>
              <li style={{height: "60%"}}></li>
              <li style={{height: "55%"}}></li>
              <li style={{height: "70%"}}></li>
              <li style={{height: "85%"}}></li>
            </ul>
          </article>
        </section>

        <section className="panel">
          <header>
            <h2>Sesión Actual</h2>
          </header>

          <article>
            <p>Ejercicio: Recepción</p>
            <p>Tiempo activo: 18 min</p>
            <progress value="65" max="100"></progress>
          </article>
        </section>

        <section className="panel">
          <header>
            <h2>Actividad Reciente</h2>
          </header>

          <ul className="activity">
            <li>✔ Sesión completada - Remate</li>
            <li>✔ Mejora en precisión +3%</li>
            <li>✔ Nuevo récord de salto</li>
          </ul>
        </section>

        <section className="panel highlight">
          <header>
            <h2>Análisis Inteligente</h2>
          </header>

          <article>
            <p>
              Tu rendimiento ha mejorado en precisión, pero necesitas trabajar la
              estabilidad en el salto. Se recomienda entrenamiento de fuerza en piernas.
            </p>
          </article>
        </section>

      </main>
    </>
  );
}