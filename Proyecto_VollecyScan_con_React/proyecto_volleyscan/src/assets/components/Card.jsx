
export default function Card({title, value, extra}) {
  return (
    <>
    <article className="card">
      <h3>{title}</h3>
      <p className="metric">{value}</p>
      {extra && <p className="trend">{extra}</p>}
    </article>
    </>
  );
}
