import "../styles/dashboard.css"
export default function Results() {
    return (
        <>
            <section className="results">

                <article className="results-header">
                    <h1>
                        Resultados que <span>Hablan</span>
                    </h1>

                    <p className="subtitle">
                        Nuestros algoritmos de IA han demostrado mejoras significativas
                        en el rendimiento de los atletas.
                    </p>
                </article>

                <section className="stats">

                    <article className="card gold">
                        <h2>+38%</h2>
                        <p>Mejora Promedio</p>
                    </article>

                    <article className="card cyan">
                        <h2>+120</h2>
                        <p>Atletas Analizados</p>
                    </article>

                    <article className="card gold">
                        <h2>95%</h2>
                        <p>Satisfacción</p>
                    </article>

                    <article className="card cyan">
                        <h2>10.000+</h2>
                        <p>Sesiones Procesadas</p>
                    </article>

                </section>

            </section>
        </>
    )
}
