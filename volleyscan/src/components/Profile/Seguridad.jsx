import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
  FaTrashCan,
} from "react-icons/fa6";

const Seguridad = ({ setShowModal }) => {

  const [showActual, setShowActual] =
    useState(false);

  const [showNueva, setShowNueva] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [passActual, setPassActual] =
    useState("");

  const [passNueva, setPassNueva] =
    useState("");

  const [passConfirm, setPassConfirm] =
    useState("");

  const [error, setError] =
    useState("");

  // Fuerza contraseña
  const calcStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password))
      score++;

    return score;
  };

  const strength = calcStrength(passNueva);

  const strengthText = [
    "",
    "Débil",
    "Regular",
    "Buena",
    "Fuerte",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!passNueva) {
      alert(
        "Introduce la nueva contraseña."
      );

      return;
    }

    if (passNueva.length < 8) {
      alert(
        "La contraseña debe tener mínimo 8 caracteres."
      );

      return;
    }

    if (passNueva !== passConfirm) {
      setError(
        "Las contraseñas no coinciden."
      );

      return;
    }

    alert(
      "✓ Contraseña actualizada correctamente."
    );

    setPassActual("");
    setPassNueva("");
    setPassConfirm("");
  };

  return (
    <section className="profile-section active">

      <h2 className="section-title">
        Cuenta y seguridad
      </h2>

      <form onSubmit={handleSubmit} noValidate>

        {/* CONTRASEÑA ACTUAL */}
        <div className="field-group">

          <label className="field-label">
            Contraseña actual
          </label>

          <div className="input-pass-wrap">

            <input
              className="field-input"
              type={
                showActual
                  ? "text"
                  : "password"
              }
              placeholder="••••••••"
              value={passActual}
              onChange={(e) =>
                setPassActual(
                  e.target.value
                )
              }
            />

            <button
              className="pass-toggle"
              type="button"
              onClick={() =>
                setShowActual(
                  !showActual
                )
              }
            >
              {showActual ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>
        </div>

        {/* NUEVA CONTRASEÑA */}
        <div className="field-group">

          <label className="field-label">
            Nueva contraseña
          </label>

          <div className="input-pass-wrap">

            <input
              className="field-input"
              type={
                showNueva
                  ? "text"
                  : "password"
              }
              placeholder="Mín. 8 caracteres"
              value={passNueva}
              onChange={(e) =>
                setPassNueva(
                  e.target.value
                )
              }
            />

            <button
              className="pass-toggle"
              type="button"
              onClick={() =>
                setShowNueva(
                  !showNueva
                )
              }
            >
              {showNueva ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          {/* FUERZA */}
          <div className="password-strength">

            <div className="strength-bars">

              <span
                className={`strength-bar ${
                  strength >= 1
                    ? "weak"
                    : ""
                }`}
              ></span>

              <span
                className={`strength-bar ${
                  strength >= 2
                    ? "fair"
                    : ""
                }`}
              ></span>

              <span
                className={`strength-bar ${
                  strength >= 3
                    ? "good"
                    : ""
                }`}
              ></span>

              <span
                className={`strength-bar ${
                  strength >= 4
                    ? "strong"
                    : ""
                }`}
              ></span>

            </div>

            <span className="strength-label">
              {
                strengthText[strength]
              }
            </span>

          </div>
        </div>

        {/* CONFIRMAR */}
        <div className="field-group">

          <label className="field-label">
            Confirmar contraseña
          </label>

          <div className="input-pass-wrap">

            <input
              className="field-input"
              type={
                showConfirm
                  ? "text"
                  : "password"
              }
              placeholder="Repite la nueva contraseña"
              value={passConfirm}
              onChange={(e) =>
                setPassConfirm(
                  e.target.value
                )
              }
            />

            <button
              className="pass-toggle"
              type="button"
              onClick={() =>
                setShowConfirm(
                  !showConfirm
                )
              }
            >
              {showConfirm ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          {error && (
            <span className="field-error">
              {error}
            </span>
          )}

        </div>

        {/* BOTONES */}
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
            Actualizar contraseña
          </button>

        </div>

        <hr className="section-divider" />

        {/* ZONA PELIGRO */}
        <div className="danger-zone">

          <p className="danger-zone__title">
            Zona de peligro
          </p>

          <p className="danger-zone__desc">
            Estas acciones son permanentes
            e irreversibles.
          </p>

          <button
            className="btn btn--danger-outline"
            type="button"
            onClick={() =>
              setShowModal(true)
            }
          >
            <FaTrashCan />
            Eliminar cuenta
          </button>

        </div>
      </form>
    </section>
  );
};

export default Seguridad;