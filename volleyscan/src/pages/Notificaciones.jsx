import { useMemo, useState } from "react";
import "../styles/notificaciones.css";

const initialNotifications = [
  {
    id: 1,
    type: "logro",
    title: "Nuevo logro desbloqueado",
    message: "Completaste 5 sesiones seguidas esta semana.",
    time: "Hace 5 min",
    unread: true,
    icon: "fa-trophy",
  },
  {
    id: 2,
    type: "rutina",
    title: "Rutina completada",
    message: "Terminaste correctamente la rutina de recepción.",
    time: "Hace 20 min",
    unread: true,
    icon: "fa-calendar-check",
  },
  {
    id: 3,
    type: "racha",
    title: "Racha activa",
    message: "Llevas 7 días consecutivos entrenando.",
    time: "Hace 1 hora",
    unread: false,
    icon: "fa-fire",
  },
  {
    id: 4,
    type: "recordatorio",
    title: "Recordatorio",
    message: "Tu próximo entrenamiento inicia a las 6:00 PM.",
    time: "Hace 2 horas",
    unread: false,
    icon: "fa-clock",
  },
];

const recommendationsData = [
  {
    id: 1,
    title: "Mejora tu saque",
    desc: "Practica el contacto del balón con el brazo completamente extendido.",
  },
  {
    id: 2,
    title: "Corrige tu postura",
    desc: "Mantén las rodillas flexionadas durante la recepción.",
  },
  {
    id: 3,
    title: "Aumenta tu salto",
    desc: "Incluye ejercicios pliométricos 3 veces por semana.",
  },
];

export default function Notificaciones() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "all") return notifications;

    if (activeFilter === "unread") {
      return notifications.filter((n) => n.unread);
    }

    return notifications.filter((n) => n.type === activeFilter);
  }, [activeFilter, notifications]);

  const markAllRead = () => {
    const updated = notifications.map((item) => ({
      ...item,
      unread: false,
    }));

    setNotifications(updated);
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <main className="main-content" id="notificaciones">
      <header className="page-header">
        <h1 className="page-header__title">
          Notificaciones y Feedback
        </h1>
      </header>

      <div className="notif-layout">
        {/* PANEL IZQUIERDO */}
        <section className="notif-panel">
          <div className="notif-panel__header">
            <h2 className="notif-panel__title">
              Notificaciones
            </h2>

            <div className="notif-panel__actions">
              <button
                className="btn-text"
                onClick={markAllRead}
              >
                <i className="fa-solid fa-check-double"></i>
                Marcar todas como leídas
              </button>

              <button
                className="btn-text btn-text--danger"
                onClick={clearAll}
              >
                <i className="fa-solid fa-trash-can"></i>
                Limpiar
              </button>
            </div>
          </div>

          {/* FILTROS */}
          <div className="notif-filters">
            {[
              { label: "Todas", value: "all" },
              { label: "Sin leer", value: "unread" },
              { label: "Logros", value: "logro" },
              { label: "Rutinas", value: "rutina" },
              { label: "Rachas", value: "racha" },
              { label: "Recordatorios", value: "recordatorio" },
            ].map((filter) => (
              <button
                key={filter.value}
                className={`filter-chip ${
                  activeFilter === filter.value
                    ? "filter-chip--active"
                    : ""
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* LISTA */}
          <ol className="notif-list">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((item) => (
                <li
                  key={item.id}
                  className={`notif-item ${
                    item.unread ? "notif-item--unread" : ""
                  }`}
                >
                  <div className="notif-item__icon">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>

                  <div className="notif-item__content">
                    <div className="notif-item__top">
                      <h3>{item.title}</h3>

                      {item.unread && (
                        <span className="notif-badge">
                          Nuevo
                        </span>
                      )}
                    </div>

                    <p>{item.message}</p>

                    <span className="notif-time">
                      {item.time}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <div className="empty-state">
                <i className="fa-solid fa-bell-slash"></i>
                <p>No hay notificaciones aquí.</p>
              </div>
            )}
          </ol>
        </section>

        {/* PANEL DERECHO */}
        <aside className="recommendations-panel">
          <h2 className="recommendations-panel__title">
            Recomendaciones para ti
          </h2>

          <ul className="rec-list">
            {recommendationsData.map((rec) => (
              <li className="rec-card" key={rec.id}>
                <div className="rec-card__icon">
                  <i className="fa-solid fa-circle-check"></i>
                </div>

                <div>
                  <h3>{rec.title}</h3>
                  <p>{rec.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}