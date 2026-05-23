// src/pages/Portfolio.jsx
import React, { useState } from "react";
import Modal from "../components/ui/Modal";
import "./Portfolio.css";

// App data (same 16 apps as before, with extended `descLong`)
const allApps = [
  {
    id: 1,
    title: "Social Dashboard",
    desc: "Multi‑platform social‑media overview app built with Kotlin and Jetpack Compose.",
    descLong: "A full‑featured social‑media dashboard for Android, displaying metrics across multiple platforms with real‑time updates and dark‑mode UI. Built with Kotlin, Jetpack Compose, and MVVM architecture.",
    tags: ["Android", "Dashboard"],
    link: "https://github.com/moekyawaung-tech/social-dashboard",
    type: "android",
  },
  {
    id: 2,
    title: "PWA App",
    desc: "Progressive Web App demo using React, service workers, and offline‑first patterns.",
    descLong: "A PWA‑style web app that works offline and feels like a native app. Uses React, service workers, and caching strategies to deliver fast, reliable experiences on mobile and desktop.",
    tags: ["PWA", "Web"],
    link: "https://github.com/moekyawaung-tech/pwa-app",
    type: "pwa",
  },
  {
    id: 3,
    title: "Video Player",
    desc: "Custom Android video‑player with advanced controls and smooth UI.",
    descLong: "A fully‑custom video player for Android with seek, playback speed, subtitles integration, and gesture‑based controls. Built with ExoPlayer, Compose, and a clean MVVM‑style architecture.",
    tags: ["Android", "Video"],
    link: "https://github.com/moekyawaung-tech/video-player",
    type: "android",
  },
  {
    id: 4,
    title: "Game Collection",
    desc: "Collection of mini‑games and game‑logic experiments in Kotlin and Android.",
    descLong: "A set of lightweight Android games focused on logic, animation, and touch responsiveness. Used to explore game patterns, state management, and performance optimization.",
    tags: ["Android", "Game"],
    link: "https://github.com/moekyawaung-tech/game-collection",
    type: "game",
  },
  {
    id: 5,
    title: "POS Full Version",
    desc: "Full‑featured Android POS app with inventory, sales, and reporting.",
    descLong: "A complete point‑of‑sale system for Android with inventory management, sales tracking, receipt printing, and report generation, ideal for small and medium businesses.",
    tags: ["Android", "POS"],
    link: "https://github.com/moekyawaung-tech/POS-Full-Version",
    type: "android",
  },
  {
    id: 6,
    title: "POS Ultimate Version",
    desc: "Scaled‑up POS system with advanced analytics and cloud sync.",
    descLong: "An upgraded POS system with real‑time analytics, multi‑user roles, and cloud‑based data sync for larger retail operations.",
    tags: ["Android", "POS", "Firebase"],
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Version",
    type: "android",
  },
  {
    id: 7,
    title: "POS Ultimate Pro Max",
    desc: "Enterprise‑grade POS with multi‑store, multi‑user roles, and security.",
    descLong: "Enterprise‑level POS solution with multi‑store support, fine‑grained access control, audit logs, and end‑to‑end encryption for sensitive data.",
    tags: ["Android", "POS", "Enterprise"],
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    type: "android",
  },
  {
    id: 8,
    title: "E‑commerce App",
    desc: "Sample e‑commerce Android app with cart, payments, and Firebase backend.",
    descLong: "A demonstration e‑commerce app for Android with product catalog, cart, checkout flow, and Firebase‑based backend for authentication and data storage.",
    tags: ["Android", "E‑commerce", "Firebase"],
    link: "https://github.com/moekyawaung-tech/ecommerce-app",
    type: "android",
  },
  {
    id: 9,
    title: "Weather App",
    desc: "PWA‑style weather app with geolocation and offline caching.",
    descLong: "Weather forecasting app that uses an external API, geolocation, and offline‑mode caching to show forecasts even when offline.",
    tags: ["PWA", "Weather", "API"],
    link: "https://github.com/moekyawaung-tech/weather-app",
    type: "pwa",
  },
  {
    id: 10,
    title: "Daily Planner",
    desc: "Daily‑planning Android app with reminders and local‑storage sync.",
    descLong: "A planner app for Android that helps users organize tasks, set reminders, and sync data across devices using local‑storage patterns.",
    tags: ["Android", "Productivity"],
    link: "https://github.com/moekyawaung-tech/daily-planner-app",
    type: "android",
  },
  {
    id: 11,
    title: "Todo App",
    desc: "Modern todo list with priority, deadlines, and local‑storage persistence.",
    descLong: "Todo‑management app with priorities, deadlines, categories, and persistent storage using Room‑style patterns.",
    tags: ["Android", "Productivity"],
    link: "https://github.com/moekyawaung-tech/javascript-todo",
    type: "android",
  },
  {
    id: 12,
    title: "Chat App",
    desc: "Real‑time Android chat app powered by Firebase Realtime Database.",
    descLong: "A chat app with real‑time messaging, user presence indicators, and Firebase‑based authentication and data sync.",
    tags: ["Android", "Chat", "Firebase"],
    link: "https://github.com/moekyawaung-tech/chat-app",
    type: "android",
  },
  {
    id: 13,
    title: "Snake Game",
    desc: "Classic Snake game recreated with modern Android graphics and controls.",
    descLong: "Remake of the classic Snake game with smooth graphics, modern controls, and scoring system.",
    tags: ["Android", "Game"],
    link: "https://github.com/moekyawaung-tech/snake-game-app",
    type: "game",
  },
  {
    id: 14,
    title: "Thailand Travel",
    desc: "Travel guide app for Thailand with maps, tips, and offline content.",
    descLong: "Travel app focused on Thailand, offering location‑based information, maps, and offline‑caching for poor connectivity regions.",
    tags: ["Android", "Travel"],
    link: "https://github.com/moekyawaung-tech/thailand-travel",
    type: "android",
  },
  {
    id: 15,
    title: "Money Tracker",
    desc: "Expense‑tracking Android app with charts and monthly reports.",
    descLong: "Finance app that tracks expenses, income, and visualizes spending patterns with charts and monthly reports.",
    tags: ["Android", "Finance"],
    link: "https://github.com/moekyawaung-tech/money-tracker",
    type: "android",
  },
  {
    id: 16,
    title: "Job Portal",
    desc: "Job‑search Android app with filtering and saved favorites.",
    descLong: "A job‑search application for Android with advanced filters, saved jobs, and company information.",
    tags: ["Android", "Job Portal"],
    link: "https://github.com/moekyawaung-tech/Job-Portal-App",
    type: "android",
  },
];

const tagList = ["All", "Android", "PWA", "Web", "Dashboard", "Game", "POS"];

function Portfolio() {
  const [activeTag, setActiveTag] = useState("All");
  const [selectedApp, setSelectedApp] = useState(null);

  const visibleApps = allApps.filter(
    (app) =>
      activeTag === "All" ||
      app.tags.includes(activeTag) ||
      (activeTag === "PWA" && app.type === "pwa") ||
      (activeTag === "Game" && app.type === "game") ||
      (activeTag === "Dashboard" && app.tags.includes("Dashboard"))
  );

  function handleFilter(tag) {
    setActiveTag(tag);
  }

  function openModal(app) {
    setSelectedApp(app);
  }

  function closeModal() {
    setSelectedApp(null);
  }

  return (
    <div className="page-portfolio">
      <section className="section-portfolio-hero">
        <h1 className="section-title">My Create App Collection</h1>
        <p className="section-text">
          A curated collection of 16 senior‑level Android, PWA, and web‑based projects
          built with Kotlin, Jetpack Compose, Firebase, and REST APIs.
        </p>
      </section>

      <section className="section-filters">
        <div className="filters-bar">
          {tagList.map((tag) => (
            <button
              key={tag}
              className={`filter-tag${activeTag === tag ? " active" : ""}`}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div className="apps-grid">
          {visibleApps.map((app) => (
            <AppCard key={app.id} app={app} onClick={() => openModal(app)} />
          ))}
        </div>

        {visibleApps.length === 0 && (
          <p className="empty-state">
            No apps match "{activeTag}". Try another filter.
          </p>
        )}
      </section>

      <section className="section-cta-bottom">
        <p className="cta-text">
          Want to see more? Check my GitHub for the full collection of 120+ repos.
        </p>
        <a
          href="https://github.com/Dev-moe-kyawaung"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View GitHub
        </a>
      </section>

      {/* modal */}
      <Modal
        isOpen={!!selectedApp}
        onClose={closeModal}
        title={selectedApp?.title ?? ""}
      >
        <p>{selectedApp?.descLong}</p>
        <p>
          <strong>Tags:</strong>{" "}
          {selectedApp?.tags.join(", ")}
        </p>
        <p>
          <strong>Type:</strong> {selectedApp?.type}
        </p>
        <p>
          <a
            href={selectedApp?.link}
            target="_blank"
            rel="noreferrer"
            className="link-in-modal"
          >
            View on GitHub
          </a>
        </p>
      </Modal>
    </div>
  );
}

// Card (unchanged)
const AppCard = ({ app, onClick }) => {
  let icon;
  switch (app.type) {
    case "android":
      icon = <span>📱</span>;
      break;
    case "pwa":
      icon = <span>🌐</span>;
      break;
    case "game":
      icon = <span>🎮</span>;
      break;
    case "web":
      icon = <span>🌐</span>;
      break;
    default:
      icon = <span>⚙️</span>;
  }

  return (
    <div className="app-card" onClick={onClick}>
      <div className="app-card-header">
        <span className="app-type">{icon}</span>
        <h3 className="app-title">{app.title}</h3>
      </div>
      <p className="app-desc">{app.desc}</p>
      <div className="app-tags">
        {app.tags.map((tag) => (
          <span key={tag} className="app-tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={app.link}
        target="_blank"
        rel="noreferrer"
        className="app-link"
        onClick={(e) => e.stopPropagation()}
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Portfolio;
