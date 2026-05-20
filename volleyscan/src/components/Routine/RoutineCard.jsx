function RoutineCard() {
  return (
    <article className="card card--routine">
      <header className="card__header">
        <h2 className="card__title">
          Rutina del día
        </h2>
      </header>

      <div className="routine__body">
        <p className="routine__name">
          Recepción + Pase
        </p>

        <p className="routine__exercises">
          3 ejercicios
        </p>

        <div className="routine__previews">
          <span className="routine__thumb"></span>
          <span className="routine__thumb"></span>
          <span className="routine__thumb"></span>
        </div>

        <button className="btn btn--primary">
          Ver rutina
        </button>
      </div>
    </article>
  );
}

export default RoutineCard;