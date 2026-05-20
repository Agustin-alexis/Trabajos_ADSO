import { useState } from "react";
import { FaBell } from "react-icons/fa6";

function DashboardHeader() {
  const [notifications, setNotifications] =
    useState(3);

  return (
    <header className="dashboard__header">
      <div className="welcome">
        <h1 className="welcome__title">
          ¡Hola, Juan! 👋
        </h1>

        <p className="welcome__subtitle">
          Sigue entrenando y mejora cada día.
        </p>
      </div>

      <button
        className="btn-notification"
        onClick={() => setNotifications(0)}
      >
        <FaBell />

        {notifications > 0 && (
          <span className="notification-dot">
            {notifications}
          </span>
        )}
      </button>
    </header>
  );
}

export default DashboardHeader;