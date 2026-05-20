import { FaChevronDown, FaCamera } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <section className="profile-section active" id="section-personal">

      <div className="section-split">

        <div className="section-form">

          <h2 className="section-title">
            Información personal
          </h2>

          <form id="personalForm" noValidate>

            <div className="field-group">
              <label className="field-label" htmlFor="nombre">
                Nombre completo
              </label>

              <input
                className="field-input"
                type="text"
                id="nombre"
                defaultValue="Juan Pérez"
                autoComplete="name"
                required
              />

              <span className="field-error" id="err-nombre"></span>
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="email">
                Correo electrónico
              </label>

              <input
                className="field-input"
                type="email"
                id="email"
                defaultValue="juanperez@mail.com"
                autoComplete="email"
                required
              />

              <span className="field-error" id="err-email"></span>
            </div>

            <div className="field-row">

              <div className="field-group">

                <label className="field-label" htmlFor="fechaNac">
                  Fecha de nacimiento
                </label>

                <input
                  className="field-input"
                  type="date"
                  id="fechaNac"
                  defaultValue="2002-05-15"
                />

              </div>

              <div className="field-group">

                <label className="field-label" htmlFor="nivel">
                  Nivel
                </label>

                <div className="select-wrap">

                  <select className="field-select" id="nivel">

                    <option value="principiante">
                      Principiante
                    </option>

                    <option value="intermedio">
                      Intermedio
                    </option>

                    <option value="avanzado">
                      Avanzado
                    </option>

                    <option value="profesional">
                      Profesional
                    </option>

                  </select>

                  <FaChevronDown className="select-icon" />

                </div>

              </div>

            </div>

            <div className="field-row">

              <div className="field-group">

                <label className="field-label" htmlFor="peso">
                  Peso
                </label>

                <div className="input-unit-wrap">

                  <input
                    className="field-input"
                    type="number"
                    id="peso"
                    defaultValue="72"
                    min="30"
                    max="200"
                  />

                  <span className="input-unit">
                    kg
                  </span>

                </div>

              </div>

              <div className="field-group">

                <label className="field-label" htmlFor="estatura">
                  Estatura
                </label>

                <div className="input-unit-wrap">

                  <input
                    className="field-input"
                    type="number"
                    id="estatura"
                    defaultValue="1.80"
                    step="0.01"
                    min="1"
                    max="2.5"
                  />

                  <span className="input-unit">
                    m
                  </span>

                </div>

              </div>

            </div>

            <div className="field-group">

              <label className="field-label" htmlFor="posicion">
                Posición
              </label>

              <div className="select-wrap">

                <select className="field-select" id="posicion">

                  <option value="opuesto">
                    Opuesto
                  </option>

                  <option value="armador">
                    Armador
                  </option>

                  <option value="central">
                    Central
                  </option>

                  <option value="punta">
                    Punta receptor
                  </option>

                  <option value="libero">
                    Líbero
                  </option>

                </select>

                <FaChevronDown className="select-icon" />

              </div>

            </div>

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

        </div>

        <aside className="section-photo">

          <p className="section-photo__label">
            Foto de perfil
          </p>

          <div className="photo-preview">

            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&q=80"
              alt="Foto de perfil"
              className="photo-preview__img"
              id="photoPreview"
            />

          </div>

          <input
            type="file"
            id="photoInput"
            accept="image/*"
            className="visually-hidden"
          />

          <button
            className="btn btn--primary btn--sm"
            type="button"
            id="changePhotoBtn"
          >

            <FaCamera />

            Cambiar foto

          </button>

        </aside>

      </div>

    </section>
  );
};

export default PersonalInfo;