import "../styles/dashboard.css"

export default function Footer() {
    return (
        <>
            <footer className="footer">

                <section className="footer-brand">

                    <div className="brand">
                        <h3>VoleyPro AI</h3>
                    </div>

                    <p>
                        Plataforma de análisis deportivo con IA
                        aplicada al voleibol.
                    </p>

                </section>

                <section className="footer-links">
                    <h4>Producto</h4>
                    <ul>
                        <li><a href="#">A</a></li>
                    </ul>
                </section>

                <section className="footer-links">
                    <h4>Recursos</h4>
                    <ul>
                        <li><a href="#">A</a></li>
                    </ul>
                </section>

                <section className="footer-links">
                    <h4>Compañía</h4>
                    <ul>
                        <li><a href="#">A</a></li>
                    </ul>
                </section>

            </footer>
        </>
    )
}
