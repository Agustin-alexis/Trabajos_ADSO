import {
  FaArrowTrendUp,
  FaBullseye,
  FaFire,
} from "react-icons/fa6";

import StatCard from "./StatCard";

function StatsGrid() {
  return (
    <section className="stats-grid">
      <StatCard
        icon={<FaArrowTrendUp />}
        title="Progreso general"
        value="78%"
        delta="↑ 12%"
        compare="vs. semana pasada"
        color="stat-icon--blue"
      />

      <StatCard
        icon={<FaBullseye />}
        title="Sesiones completadas"
        value="12"
        delta="↑ 2"
        compare="esta semana"
        color="stat-icon--green"
      />

      <StatCard
        icon={<FaFire />}
        title="Racha actual"
        value="5 días"
        delta=""
        compare="¡Sigue así!"
        color="stat-icon--orange"
      />
    </section>
  );
}

export default StatsGrid;