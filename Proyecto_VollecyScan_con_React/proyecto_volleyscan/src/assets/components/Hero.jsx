import "../styles/dashboard.css"
import heroImg from "../img/imagen1.jpg"

export default function Hero() {

    return (
        <>
            <section className="hero">

                <article className="hero-text">

                    <canvas id="waveCanvas"></canvas>

                    <h1>
                        Transforma tu
                        <span className="gold"> rendimiento </span>
                        en el voleibol con
                        <span className="blue"> IA</span>
                    </h1>

                    <p>
                        Detecta errores técnicos, analiza el movimiento de cada jugador
                        y optimiza el rendimiento deportivo con nuestra plataforma de
                        análisis biomecánico avanzado.
                    </p>

                    <article className="hero-actions">
                        <a href="/registro" className="btn-primary">Crear Cuenta Gratis →</a>
                    </article>

                </article>

                <article className="img-frame img-center">
                   <img src={heroImg} alt="" />
                </article>

            </section>
        </>
    )
}
