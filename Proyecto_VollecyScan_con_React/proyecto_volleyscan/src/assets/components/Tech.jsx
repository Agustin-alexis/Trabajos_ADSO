import "../styles/dashboard.css"
export default function Tech() {
    return (
        <>
            <section className="tech">

                <header className="tech-header">
                    <h1>
                        Tecnología de <span>Alto Rendimiento</span>
                    </h1>

                    <p>
                        Nuestra plataforma combina visión por computadora,
                        aprendizaje profundo y análisis biomecánico.
                    </p>
                </header>

                <section className="tech-grid">

                    <article className="tech-card">
                        <span className="icon cyan">⌁</span>
                        <h3>Mapeo Esquelético Avanzado</h3>
                        <p>
                            Rastreo en tiempo real de 33 puntos articulares.
                        </p>
                    </article>

                    <article className="tech-card">
                        <span className="icon gold">▮▮</span>
                        <h3>Comparación Profesional</h3>
                        <p>
                            Compara tus métricas con atletas profesionales.
                        </p>
                    </article>

                    <article className="tech-card">
                        <span className="icon cyan">◎</span>
                        <h3>Retroalimentación Estratégica</h3>
                        <p>
                            Consejos personalizados generados por IA.
                        </p>
                    </article>

                    <article className="tech-card">
                        <span className="icon gold">⚡</span>
                        <h3>Análisis en Tiempo Real</h3>
                        <p>
                            Procesamiento instantáneo de video.
                        </p>
                    </article>

                </section>

            </section>
        </>
    )
}
