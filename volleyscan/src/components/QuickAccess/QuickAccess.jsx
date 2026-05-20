import {
  FaCamera,
  FaClockRotateLeft,
  FaCalendarCheck,
  FaDumbbell,
} from "react-icons/fa6";
import '../../pages/Dashboard/Dashboard.css'

function QuickAccess({ showToast }) {

  return (
    <section className="quick-access">

      <h2 className="quick-access__title">
        Accesos rápidos
      </h2>

      <div className="quick-access__grid">

        <button
          className="quick-btn quick-btn--blue"
          onClick={() =>
            showToast("Abriendo análisis")
          }
        >
          <FaCamera />
          <span>Iniciar análisis</span>
        </button>

        <button
          className="quick-btn quick-btn--dark"
          onClick={() =>
            showToast("Abriendo historial")
          }
        >
          <FaClockRotateLeft />
          <span>Ver historial</span>
        </button>

        <button
          className="quick-btn quick-btn--green"
          onClick={() =>
            showToast("Abriendo rutina")
          }
        >
          <FaCalendarCheck />
          <span>Rutina del día</span>
        </button>

        <button
          className="quick-btn quick-btn--purple"
          onClick={() =>
            showToast("Abriendo ejercicios")
          }
        >
          <FaDumbbell />
          <span>Ejercicios</span>
        </button>

      </div>
    </section>
  );
}

export default QuickAccess;