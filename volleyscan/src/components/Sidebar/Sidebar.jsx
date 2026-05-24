import {
  FaHouse,
  FaUser,
  FaCalendarDays,
  FaClockRotateLeft,
  FaBookOpen,
  FaChartBar,
  FaCamera,
  FaBell,
  FaGear,
} from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/img/Logo.Vs.jpg";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sb-logo">
        <img className="sb-logo-icon" src={logo} alt="" />

        <div>
          <div className="sb-logo-name">VolleyAI</div>
          <div className="sb-logo-role">
            Deportista/Usuario
          </div>
        </div>
      </div>

      <nav className="sb-nav">

        <div className="sb-group-label">Principal</div>

        <Link
          to="/usuario"
          className={`nav-item ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <FaHouse />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/usuario/perfil"
          className={`nav-item ${
            location.pathname === "/perfil"
              ? "active"
              : ""
          }`}
        >
          <FaUser />
          <span>Perfil</span>
        </Link>

        <div className="sb-group-label">
          Entrenamiento
        </div>

        <Link
          to="/usuario/rutinas"
          className={`nav-item ${
            location.pathname === "/rutinas"
              ? "active"
              : ""
          }`}
        >
          <FaCalendarDays />
          <span>Rutinas</span>
        </Link>

        <Link
          to="/usuario/historial"
          className={`nav-item ${
            location.pathname === "/historial"
              ? "active"
              : ""
          }`}
        >
          <FaClockRotateLeft />
          <span>Historial</span>
        </Link>

        <Link
          to="/usuario/contenido"
          className={`nav-item ${
            location.pathname === "/contenido"
              ? "active"
              : ""
          }`}
        >
          <FaBookOpen />
          <span>Contenido</span>
        </Link>

        <div className="sb-group-label">
          Análisis
        </div>

        <Link
          to="/usuario/progreso"
          className={`nav-item ${
            location.pathname === "/progreso"
              ? "active"
              : ""
          }`}
        >
          <FaChartBar />
          <span>Progreso</span>
        </Link>

        <Link
          to="/usuario/analisis"
          className={`nav-item ${
            location.pathname === "/analisis"
              ? "active"
              : ""
          }`}
        >
          <FaCamera />
          <span>Análisis IA</span>
        </Link>

        <Link
          to="/usuario/notificaciones"
          className={`nav-item ${
            location.pathname === "/notificaciones"
              ? "active"
              : ""
          }`}
        >
          <FaBell />
          <span>Notificaciones</span>
        </Link>

        <div className="sb-group-label">
          Sistema
        </div>

        <Link
          to="/usuario/configuracion"
          className={`nav-item ${
            location.pathname === "/configuracion"
              ? "active"
              : ""
          }`}
        >
          <FaGear />
          <span>Configuración</span>
        </Link>
      </nav>

      <div className="sb-footer">
        <div className="sb-avatar">JP</div>

        <div className="sb-foot-info">
          <div className="sb-foot-name">
            Juan Perez
          </div>

          <div className="sb-foot-role">
            Usuario
          </div>
        </div>

        <span className="sb-online-dot"></span>
      </div>
    </aside>
  );
}

export default Sidebar;