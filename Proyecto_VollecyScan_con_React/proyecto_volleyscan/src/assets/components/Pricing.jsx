import "../styles/dashboard.css"

export default function Pricing() {
    return (
        <>
            <section className="pricing">

                <header className="pricing-header">
                    <h1>Elige tu <span>Plan</span></h1>
                    <p>
                        Desde atletas individuales hasta clubes completos.
                    </p>
                </header>

                <section className="pricing-grid">

                    <article className="plan">
                        <h3>Novato</h3>
                        <p className="plan-desc">Perfecto para comenzar.</p>
                        <div className="price">$Gratis</div>

                        <button className="btn outline">
                            Comenzar Gratis
                        </button>
                    </article>

                    <article className="plan featured">

                        <h3>Atleta Profesional</h3>
                        <p className="plan-desc">
                            Para atletas serios.
                        </p>

                        <article className="price gold">
                            $$ <small>/ mes</small>
                        </article>

                        <button className="btn gold-btn">
                            Elegir Plan Pro
                        </button>

                    </article>

                    <article className="plan">
                        <h3>Club</h3>
                        <p className="plan-desc">
                            Gestión para equipos.
                        </p>

                        <section className="price">
                            $$ <small>/ mes</small>
                        </section>

                        <button className="btn outline cyan">
                            Contactar Ventas
                        </button>
                    </article>

                </section>

            </section>
        </>
    )
}
