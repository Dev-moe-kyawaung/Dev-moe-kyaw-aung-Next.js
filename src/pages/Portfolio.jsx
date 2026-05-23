// src/pages/Portfolio.jsx
import React, { useState } from "react";
import "./Portfolio.css";

// App data (16 projects)
const allApps = [
  // Android / PWA / Web
  {
    id: 1,
    title: "Social Dashboard",
    desc: "Multi‑platform social‑media overview app built with Kotlin and Jetpack Compose.",
    tags: ["Android", "Dashboard"],
    link: "https://github.com/moekyawaung-tech/social-dashboard",
    type: "android",
  },
  {
    id: 2,
    title: "PWA App",
    desc: "Progressive Web App demo using React, service workers, and offline‑first patterns.",
    tags: ["PWA", "Web"],
    link: "https://github.com/moekyawaung-tech/pwa-app",
    type: "pwa",
  },
  {
    id: 3,
    title: "Video Player",
    desc: "Custom Android video‑player with advanced controls and smooth UI.",
    tags: ["Android", "Video"],
    link: "https://github.com/moekyawaung-tech/video-player",
    type: "android",
  },
  {
    id: 4,
    title: "Game Collection",
    desc: "Collection of mini‑games and game‑logic experiments in Kotlin and Android.",
    tags: ["Android", "Game"],
    link: "https://github.com/moekyawaung-tech/game-collection",
    type: "game",
  },

  // POS / E‑commerce
  {
    id: 5,
    title: "POS Full Version",
    desc: "Full‑featured Android POS app with inventory, sales, and reporting.",
    tags: ["Android", "POS"],
    link: "https://github.com/moekyawaung-tech/POS-Full-Version",
    type: "android",
  },
  {
    id: 6,
    title: "POS Ultimate Version",
    desc: "Scaled‑up POS system with advanced analytics and cloud sync.",
    tags: ["Android", "POS", "Firebase"],
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Version",
    type: "android",
  },
  {
    id: 7,
    title: "POS Ultimate Pro Max",
    desc: "Enterprise‑grade POS with multi‑store, multi‑user roles, and security.",
    tags: ["Android", "POS", "Enterprise"],
    link: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    type: "android",
  },
  {
    id: 8,
    title: "E‑commerce App",
    desc: "Sample e‑commerce Android app with cart, payments, and Firebase backend.",
    tags: ["Android", "E‑commerce", "Firebase"],
    link: "https://github.com/moekyawaung-tech/ecommerce-app",
    type: "android",
  },

  // PWA, Web, and hybrid
  {
    id: 9,
    title: "Weather App",
    desc: "PWA‑style weather app with geolocation and offline caching.",
    tags: ["PWA", "Weather", "API"],
    link: "https://github.com/moekyawaung-tech/weather-app",
    type: "pwa",
  },
  {
    id: 10,
    title: "Daily Planner",
    desc: "Daily‑planning Android app with reminders and local‑storage sync.",
    tags: ["Android", "Productivity"],
    link: "https://github.com/moekyawaung-tech/daily-planner-app",
    type: "android",
  },
  {
    id: 11,
    title: "Todo App",
    desc: "Modern todo list with priority, deadlines, and local‑storage persistence.",
    tags: ["Android", "Productivity"],
    link: "https://github.com/moekyawaung-tech/javascript-todo",
    type: "android",
  },
  {
    id: 12,
    title: "Chat App",
    desc: "Real‑time Android chat app powered by Firebase Realtime Database.",
    tags: ["Android", "Chat", "Firebase"],
    link: "https://github.com/moekyawaung-tech/chat-app",
    type: "android",
  },

  // Micro / experimental
  {
    id: 13,
    title: "Snake Game",
    desc: "Classic Snake game recreated with modern Android graphics and controls.",
    tags: ["Android", "Game"],
    link: "https://github.com/moekyawaung-tech/snake-game-app",
    type: "game",
  },
  {
    id: 14,
    title: "Thailand Travel",
    desc: "Travel guide app for Thailand with maps, tips, and offline content.",
    tags: ["Android", "Travel"],
    link: "https://github.com/moekyawaung-tech/thailand-travel",
    type: "android",
  },
  {
    id: 15,
    title: "Money Tracker",
    desc: "Expense‑tracking Android app with charts and monthly reports.",
    tags: ["Android", "Finance"],
    link: "https://github.com/moekyawaung-tech/money-tracker",
    type: "android",
  },
  {
    id: 16,
    title: "Job Portal",
    desc: "Job‑search Android app with filtering and saved favorites.",
    tags: ["Android", "Job Portal"],
    link: "https://github.com/moekyawaung-tech/Job-Portal-App",
    type: "android",
  },
];

// Tag list (used for filter buttons)
const tagList = ["All", "Android", "PWA", "Web", "Dashboard", "Game", "POS"];

function Portfolio() {
  const [activeTag, setActiveTag] = useState("All");

  const visibleApps = allApps.filter(
    (app) =>
      activeTag === "All" ||
      app.tags.includes(activeTag) ||
      (activeTag === "PWA" && app.type === "pwa") ||
      (activeTag === "Game" && app.type === "game") ||
      (activeTag === "Dashboard" && app.tags.includes("Dashboard"))
  );

  const handleFilter = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="page-portfolio">
      <section className="section-portfolio-hero">
        <h1 className="section-title">
          My Create App Collection
        </h1>
        <p className="section-text">
          A curated collection of 16 senior‑level Android, PWA, and web‑based projects
          built with Kotlin, Jetpack Compose, Firebase, and REST APIs.
        </p>
      </section>

      {/* Filter tags */}
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

      {/* App grid */}
      <section className="section-grid">
        <div className="apps-grid">
          {visibleApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {visibleApps.length === 0 && (
          <p className="empty-state">
            No apps match "{activeTag}". Try another filter.
          </p>
        )}
      </section>

      {/* Bottom CTA (optional, can reuse in multiple pages) */}
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
    </div>
  );
}

// Individual app card
const AppCard = ({ app }) => {
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
    <div className="app-card">
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
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Portfolio;
