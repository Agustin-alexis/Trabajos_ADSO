import Sidebar from "../Components/Sidebar";
import ProgressBar from "../Components/ProgressBar";
import "../assets/styles/Analisis.css";

export default function Analisis() {
  return (
    <>
      <Sidebar />

      <main className="dashboard-content">

        <header>
          <h1>Análisis de Rendimiento</h1>
        </header>

        <section className="card">
          <header>
            <h2>Estado del Análisis</h2>
          </header>
          <ProgressBar value={60} />
        </section>

        <section className="metrics">
          <article className="metric-card">
            <h3>Precisión</h3>
            <p>85%</p>
          </article>

          <article className="metric-card">
            <h3>Velocidad</h3>
            <p>72%</p>
          </article>

          <article className="metric-card">
            <h3>Reacción</h3>
            <p>68%</p>
          </article>
        </section>

        <section className="card">
          <header>
            <h2>Evaluación Técnica</h2>
          </header>

          <article className="analysis-item">
            <p>Posición de manos</p>
            <ProgressBar value={80} />
          </article>

          <article className="analysis-item">
            <p>Postura corporal</p>
            <ProgressBar value={65} />
          </article>

          <article className="analysis-item">
            <p>Coordinación</p>
            <ProgressBar value={70} />
          </article>
        </section>

        <section className="card">
          <header>
            <h2>Recomendaciones</h2>
          </header>

          <ul className="recommendations">
            <li>Mejorar la posición de las manos en el golpe</li>
            <li>Flexionar más las rodillas antes del salto</li>
            <li>Trabajar la coordinación brazo-pierna</li>
          </ul>
        </section>

      </main>
    </>
  );
}