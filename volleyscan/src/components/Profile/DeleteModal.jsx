const DeleteModal = ({ setShowModal }) => {

  const handleDelete = () => {
    alert("Cuenta eliminada (demo).");

    setShowModal(false);
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >

      <div className="modal">

        <h3
          className="modal__title"
          id="modalTitle"
        >
          ¿Eliminar cuenta?
        </h3>

        <p className="modal__body">
          Esta acción es permanente.
          Todos tus datos, análisis y
          rutinas serán eliminados para
          siempre.
        </p>

        <div className="modal__actions">

          <button
            className="btn btn--secondary"
            type="button"
            onClick={() =>
              setShowModal(false)
            }
          >
            Cancelar
          </button>

          <button
            className="btn btn--danger"
            type="button"
            onClick={handleDelete}
          >
            Sí, eliminar
          </button>

        </div>
      </div>
    </div>
  );
};

export default DeleteModal;