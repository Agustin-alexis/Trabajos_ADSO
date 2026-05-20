import {Link}  from "react-router-dom"


export default function Sidebar() {
  return (
    <>
    <aside className="sidebar">
      <h2 className="logo"> VolleyScan</h2>

      <nav className="menu">
        <Link to="/Dashboard"> Resumen</Link>
        <Link to="/Analisis"> Análisis</Link>
        <Link to="/Estadisticas"> Estadísticas</Link>
        <Link to="/Configuracion"> Configuración</Link>
        <Link to="/Login" className="logout"> Cerrar sesión</Link>
      </nav>
    </aside>
    </>
  );
}
