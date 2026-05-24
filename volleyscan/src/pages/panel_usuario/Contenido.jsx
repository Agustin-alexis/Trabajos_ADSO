import { useState } from "react";
import {
  FaChevronDown,
  FaPlay,
  FaClock,
  FaCirclePlay,
  FaXmark,
} from "react-icons/fa6";

import '../../styles/contenido.css'

const videosData = [
  {
    id: 1,
    title: "Errores comunes en el saque",
    category: "saque",
    duration: "6:30 min",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
    description: "Aprende los errores más comunes al realizar el saque.",
  },
  {
    id: 2,
    title: "Mejora tu recepción",
    category: "recepcion",
    duration: "7:15 min",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
    description: "Técnicas para mejorar la recepción del balón.",
  },
  {
    id: 3,
    title: "Posición de manos en el pase",
    category: "recepcion",
    duration: "4:10 min",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200",
    description: "Posiciona correctamente tus manos al pasar.",
  },
  {
    id: 4,
    title: "Bloqueo efectivo",
    category: "bloqueo",
    duration: "6:45 min",
    image:
      "https://images.unsplash.com/photo-1561014990-82a765a3e7e5?q=80&w=1200",
    description: "Mejora tu técnica de bloqueo.",
  },
  {
    id: 5,
    title: "Entrenamiento de salto",
    category: "preparacion",
    duration: "5:00 min",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    description: "Aumenta tu potencia de salto.",
  },
  {
    id: 6,
    title: "Postura base del voleibolista",
    category: "pose",
    duration: "3:50 min",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
    description: "Aprende la postura correcta en cancha.",
  },
];

export default function Contenido() {
  const [category, setCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredVideos =
    category === "all"
      ? videosData
      : videosData.filter((video) => video.category === category);

  const getCategoryName = (cat) => {
    switch (cat) {
      case "saque":
        return "Saque";
      case "recepcion":
        return "Recepción";
      case "bloqueo":
        return "Bloqueo";
      case "pose":
        return "Pose";
      case "preparacion":
        return "Preparación física";
      default:
        return "Todos";
    }
  };

  return (
    <main className="main-content" id="contenido">
      <header className="page-header">
        <h1 className="page-header__title">Contenido Educativo</h1>
      </header>

      <section className="content-panel">

        {/* TOPBAR */}
        <div className="content-panel__topbar">
          <h2 className="content-panel__title">
            Contenido educativo
          </h2>

          <div className="filter-wrap">
            <button
              className="filter-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{getCategoryName(category)}</span>
              <FaChevronDown />
            </button>

            {dropdownOpen && (
              <ul className="filter-dropdown">
                {[
                  "all",
                  "saque",
                  "recepcion",
                  "bloqueo",
                  "pose",
                  "preparacion",
                ].map((cat) => (
                  <li
                    key={cat}
                    className={`filter-option ${
                      category === cat
                        ? "filter-option--active"
                        : ""
                    }`}
                    onClick={() => {
                      setCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {getCategoryName(cat)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* TABS */}
        <nav className="category-tabs">
          <ul className="category-tabs__list">
            {[
              "all",
              "saque",
              "recepcion",
              "bloqueo",
              "pose",
              "preparacion",
            ].map((cat) => (
              <li key={cat}>
                <button
                  className={`tab-btn ${
                    category === cat
                      ? "tab-btn--active"
                      : ""
                  }`}
                  onClick={() => setCategory(cat)}
                >
                  {getCategoryName(cat)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* GRID */}
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="video-card"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="video-card__thumb">
                <img src={video.image} alt={video.title} />

                <span
                  className={`video-badge video-badge--${video.category}`}
                >
                  {getCategoryName(video.category)}
                </span>

                <div className="video-play">
                  <FaPlay />
                </div>
              </div>

              <div className="video-card__body">
                <h3>{video.title}</h3>

                <p className="video-meta">
                  <FaClock />
                  {video.duration}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY */}
        {filteredVideos.length === 0 && (
          <div className="empty-state">
            <p>No hay videos para esta categoría.</p>
          </div>
        )}

        {/* BUTTON */}
        <div className="load-more-wrap">
          <button className="btn-load-more">
            <FaCirclePlay />
            Ver más contenido
          </button>
        </div>
      </section>

      {/* MODAL */}
      {selectedVideo && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal__close"
              onClick={() => setSelectedVideo(null)}
            >
              <FaXmark />
            </button>

            <div className="video-modal__screen">
              <img
                src={selectedVideo.image}
                alt={selectedVideo.title}
                className="video-modal__thumb"
              />

              <div className="video-modal__play-icon">
                <FaPlay />
              </div>
            </div>

            <div className="video-modal__info">
              <span className="video-modal__cat">
                {getCategoryName(selectedVideo.category)}
              </span>

              <h3>{selectedVideo.title}</h3>

              <p className="video-modal__meta">
                {selectedVideo.duration}
              </p>

              <p className="video-modal__desc">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}