import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Objetivos = () => {
  const [sesiones, setSesiones] = useState(4);
  const [duracion, setDuracion] = useState(45);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✓ Objetivos guardados correctamente.");
  };

  return (
    <section className="profile-section active">
      <h2 className="section-title">Objetivos</h2>

      <form onSubmit={handleSubmit} noValidate>

        {/* Objetivo principal */}
        <div className="field-group">
          <label className="field-label">
            Objetivo principal
          </label>

          <div className="select-wrap">
            <select className="field-select">
              <option value="tecnica">
                Mejorar técnica de remate
              </option>

              <option value="resistencia">
                Aumentar resistencia
              </option>

              <option value="velocidad">
                Mejorar velocidad de reacción
              </option>

              <option value="consistencia">
                Consistencia en recepción
              </option>
            </select>

            <FaChevronDown className="select-icon" />
          </div>
        </div>

        {/* Sesiones */}
        <div className="field-group">
          <label className="field-label">
            Sesiones por semana
          </label>

          <div className="range-wrap">
            <input
              type="range"
              className="range-input"
              min="1"
              max="7"
              value={sesiones}
              onChange={(e) =>
                setSesiones(e.target.value)
              }
            />

            <span className="range-value">
              {sesiones}{" "}
              {sesiones == 1
                ? "sesión"
                : "sesiones"}
            </span>
          </div>
        </div>

        {/* Duración */}
        <div className="field-group">
          <label className="field-label">
            Duración por sesión
          </label>

          <div className="range-wrap">
            <input
              type="range"
              className="range-input"
              min="15"
              max="120"
              step="15"
              value={duracion}
              onChange={(e) =>
                setDuracion(e.target.value)
              }
            />

            <span className="range-value">
              {duracion} min
            </span>
          </div>
        </div>

        {/* Áreas */}
        <div className="field-group">
          <label className="field-label">
            Áreas de mejora
          </label>

          <div className="checkbox-group">

            <label className="checkbox-item">
              <input type="checkbox" defaultChecked />
              <span>Recepción</span>
            </label>

            <label className="checkbox-item">
              <input type="checkbox" />
              <span>Saque</span>
            </label>

            <label className="checkbox-item">
              <input type="checkbox" />
              <span>Bloqueo</span>
            </label>

          </div>
        </div>

        {/* Botones */}
        <div className="form-actions">

          <button
            className="btn btn--secondary"
            type="button"
          >
            Cancelar
          </button>

          <button
            className="btn btn--primary"
            type="submit"
          >
            Guardar cambios
          </button>

        </div>
      </form>
    </section>
  );
};

export default Objetivos;