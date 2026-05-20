function AnalysisCard() {
  const score = 85;

  const circumference = 2 * Math.PI * 34;

  const offset =
    circumference -
    (score / 100) * circumference;

  return (
    <article className="card card--analysis">
      <header className="card__header">
        <h2 className="card__title">
          Último análisis
        </h2>
      </header>

      <div className="analysis__body">
        <div className="analysis__info">
          <p className="analysis__name">
            Remate por zona 4
          </p>

          <p className="analysis__time">
            Hace 2 horas
          </p>

          <figure className="analysis__image">
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&q=80"
              alt=""
            />
          </figure>
        </div>

        <div className="analysis__score-wrap">
          <svg
            className="donut"
            viewBox="0 0 80 80"
          >
            <circle
              className="donut__bg"
              cx="40"
              cy="40"
              r="34"
            />

            <circle
              className="donut__fill"
              cx="40"
              cy="40"
              r="34"
              style={{
                strokeDashoffset: offset,
              }}
            />
          </svg>

          <div className="donut__label">
            <span className="donut__value">
              {score}
            </span>

            <span className="donut__max">
              /100
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AnalysisCard;