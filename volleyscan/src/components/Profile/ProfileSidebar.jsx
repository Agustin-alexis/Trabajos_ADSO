const ProfileSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="profile-sidebar">

      <div className="identity-card">
        <div className="avatar-wrap">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=160&q=80"
            alt=""
            className="avatar-img"
          />
        </div>

        <p className="identity-card__name">
          Juan Pérez
        </p>

        <span className="badge badge--level">
          Intermedio
        </span>
      </div>

      <nav className="profile-nav">
        <ul className="profile-nav__list">

          <li className={`profile-nav__item ${activeSection === "personal" ? "profile-nav__item--active" : ""}`}>
            <button
              className="profile-nav__btn"
              onClick={() => setActiveSection("personal")}
            >
              Información personal
            </button>
          </li>

          <li className={`profile-nav__item ${activeSection === "objetivos" ? "profile-nav__item--active" : ""}`}>
            <button
              className="profile-nav__btn"
              onClick={() => setActiveSection("objetivos")}
            >
              Objetivos
            </button>
          </li>

          <li className={`profile-nav__item ${activeSection === "preferencias" ? "profile-nav__item--active" : ""}`}>
            <button
              className="profile-nav__btn"
              onClick={() => setActiveSection("preferencias")}
            >
              Preferencias
            </button>
          </li>

          <li className={`profile-nav__item ${activeSection === "seguridad" ? "profile-nav__item--active" : ""}`}>
            <button
              className="profile-nav__btn"
              onClick={() => setActiveSection("seguridad")}
            >
              Seguridad
            </button>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;