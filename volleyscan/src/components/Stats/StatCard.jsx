function StatCard({
  icon,
  title,
  value,
  delta,
  compare,
  color,
}) {
  return (
    <article className="stat-card">
      <div
        className={`stat-card__icon ${color}`}
      >
        {icon}
      </div>

      <div className="stat-card__info">
        <p className="stat-card__label">
          {title}
        </p>

        <p className="stat-card__value">
          {value}

          <span className="stat-card__delta stat-card__delta--up">
            {delta}
          </span>
        </p>

        <p className="stat-card__compare">
          {compare}
        </p>
      </div>
    </article>
  );
}

export default StatCard;