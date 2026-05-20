import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Preferencias = () => {
  const [recordatorio, setRecordatorio] =
    useState(true);

  const [analisis, setAnalisis] =
    useState(true);

  const [contenido, setContenido] =
    useState(false);

  const [idioma, setIdioma] =
    useState("es");

  const [unidades, setUnidades] =
    useState("metric");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "✓ Preferencias guardadas correctamente."
    );
  };

  const handleCancel = () => {
    setRecordatorio(true);
    setAnalisis(true);
    setContenido(false);

    setIdioma("es");
    setUnidades("metric");
  };

  return (
    <section className="profile-section active">
      <h2 className="section-title">
        Preferencias
      </h2>

      <form onSubmit={handleSubmit}>

        {/* NOTIFICACIONES */}
        <fieldset className="pref-fieldset">

          <legend className="pref-legend">
            Notificaciones
          </legend>

          <div className="toggle-list">

            {/* Recordatorio */}
            <div className="toggle-item">
              <div className="toggle-item__info">
                <p className="toggle-item__label">
                  Recordatorio de sesión
                </p>

                <p className="toggle-item__desc">
                  30 min antes del entrenamiento
                </p>
              </div>

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={recordatorio}
                  onChange={() =>
                    setRecordatorio(!recordatorio)
                  }
                />

                <span className="toggle-thumb"></span>
              </label>
            </div>

            {/* Analisis */}
            <div className="toggle-item">
              <div className="toggle-item__info">
                <p className="toggle-item__label">
                  Análisis completado
                </p>

                <p className="toggle-item__desc">
                  Cuando la IA termina un análisis
                </p>
              </div>

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={analisis}
                  onChange={() =>
                    setAnalisis(!analisis)
                  }
                />

                <span className="toggle-thumb"></span>
              </label>
            </div>

            {/* Nuevos contenidos */}
            <div className="toggle-item">
              <div className="toggle-item__info">
                <p className="toggle-item__label">
                  Nuevos contenidos
                </p>

                <p className="toggle-item__desc">
                  Videos y ejercicios nuevos
                </p>
              </div>

              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={contenido}
                  onChange={() =>
                    setContenido(!contenido)
                  }
                />

                <span className="toggle-thumb"></span>
              </label>
            </div>

          </div>
        </fieldset>

        {/* APARIENCIA */}
        <fieldset className="pref-fieldset">

          <legend className="pref-legend">
            Apariencia
          </legend>

          <div className="field-row">

            {/* Idioma */}
            <div className="field-group">
              <label className="field-label">
                Idioma
              </label>

              <div className="select-wrap">
                <select
                  className="field-select"
                  value={idioma}
                  onChange={(e) =>
                    setIdioma(e.target.value)
                  }
                >
                  <option value="es">
                    Español
                  </option>

                  <option value="en">
                    English
                  </option>

                  <option value="pt">
                    Português
                  </option>
                </select>

                <FaChevronDown className="select-icon" />
              </div>
            </div>

            {/* Unidades */}
            <div className="field-group">
              <label className="field-label">
                Unidades
              </label>

              <div className="select-wrap">
                <select
                  className="field-select"
                  value={unidades}
                  onChange={(e) =>
                    setUnidades(e.target.value)
                  }
                >
                  <option value="metric">
                    Métrico (kg, m)
                  </option>

                  <option value="imperial">
                    Imperial (lb, ft)
                  </option>
                </select>

                <FaChevronDown className="select-icon" />
              </div>
            </div>

          </div>
        </fieldset>

        {/* BOTONES */}
        <div className="form-actions">

          <button
            className="btn btn--secondary"
            type="button"
            onClick={handleCancel}
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

export default Preferencias;