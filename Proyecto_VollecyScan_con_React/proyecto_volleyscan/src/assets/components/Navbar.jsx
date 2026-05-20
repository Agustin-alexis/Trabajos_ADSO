import "../styles/dashboard.css";

export default function Navbar() {
    return (
        <header className="topbar">
            <nav className="navigation">
                <a href="#inicio" className="brand">
                    VoleyPro <span>AI</span>
                </a>

                <ul className="menu">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#tech">Tecnología</a></li>
                    <li><a href="#results">Métricas</a></li>
                    <li><a href="#pricing">Planes</a></li>
                </ul>

                <section>
                    <a href="#pricing" className="btn-outline">Ver Planes</a>
                </section>
            </nav>
        </header>
    );
}