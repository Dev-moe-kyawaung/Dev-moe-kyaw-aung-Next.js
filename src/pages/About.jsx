// src/pages/About.jsx
import React, { useRef, useEffect, useState } from "react";
import "./About.css";

// Counter component (re‑usable)
const Counter = ({ value, label, symbol }) => {
  const [count, setCount] = useState(0);
  const target = parseFloat(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.max(1, Math.ceil(target / 50));
        return next >= target ? target : next;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-item">
      <div className="counter-number">
        {count.toLocaleString("en-US")}
        {symbol}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

// Social icon (small helper)
const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-icon" aria-label={label}>
    {icon}
  </a>
);

// Timeline entry
const TimelineItem = ({ year, title, subtitle, points }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-subtitle">{subtitle}</p>
        {Array.isArray(points) && points.length > 0 && (
          <ul className="timeline-points">
            {points.map((p, i) => (
              <li key={i} className="timeline-point">
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

function About() {
  const statsRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-about">
      <section className="section-hero">
        <h1 className="about-title">
          ⭐ Moe Kyaw Aung
          <br />
          <span>Android Senior Developer</span>
        </h1>
        <p className="about-sub">
          Android Developer with nearly 12 years of hands‑on experience building secure, scalable,
          and user‑friendly mobile applications. Strong in Kotlin and modern Jetpack development
          (Compose, ViewModel, Room), Firebase integration, and REST API consumption.
        </p>
      </section>

      <section ref={statsRef} className="section-stats">
        <div className="stats-grid">
          <Counter
            value="10+"
            label="Years of Experience"
          />
          <Counter
            value="3K+"
            label="Total Apps"
            symbol="+"
          />
          <Counter
            value="122"
            label="GitHub Repos"
          />
          <Counter
            value="100%"
            label="Client Satisfaction"
            symbol="%"
          />
        </div>
      </section>

      <section className="section-focus">
        <h2 className="section-title">
          Focus &amp; Skills
        </h2>
        <p className="section-text">
          My focus spans modern Android architecture, secure backend integration, AI‑enhanced features, and cybersecurity.
        </p>

        <div className="focus-grid">
          <div className="focus-card">
            <h3 className="focus-title">📱 Mobile</h3>
            <ul className="focus-list">
              <li>Kotlin & Jetpack Compose</li>
              <li>MVVM / Clean Architecture</li>
              <li>Performance & Testing</li>
            </ul>
          </div>

          <div className="focus-card">
            <h3 className="focus-title">☁️ Backend</h3>
            <ul className="focus-list">
              <li>Firebase (Auth, Firestore, RTDB)</li>
              <li>REST APIs + Retrofit</li>
              <li>Python & lightweight services</li>
            </ul>
          </div>

          <div className="focus-card">
            <h3 className="focus-title">🔐 Security</h3>
            <ul className="focus-list">
              <li>Ethical Hacking</li>
              <li>App‑level encryption</li>
              <li>Cybersecurity best practices</li>
            </ul>
          </div>

          <div className="focus-card">
            <h3 className="focus-title">🤖 AI / ML</h3>
            <ul className="focus-list">
              <li>On‑device ML (TFLite)</li>
              <li>Claude API integrations</li>
              <li>AI‑driven UX features</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-timeline">
        <h2 className="section-title">
          Career Timeline
        </h2>

        <div className="timeline">
          <TimelineItem
            year="2015"
            title="Started Android"
            subtitle="Built first commercial Android apps with Java and early Jetpack."
            points={[
              "Mastered Java, SQL, and basic Android SDK.",
              "Learned responsive UI design and lifecycle management."
            ]}
          />

          <TimelineItem
            year="2018"
            title="Kotlin Adoption"
            subtitle="Switched to Kotlin and modern Android architecture patterns."
            points={[
              "Introduced Kotlin, MVVM, and dependency injection.",
              "Started using Dagger/Hilt and LiveData/Flow."
            ]}
          />

          <TimelineItem
            year="2021"
            title="Jetpack Compose Focus"
            subtitle="Pivoted strongly to Jetpack Compose and modern UI standards."
            points={[
              "Built full‑screen apps with Compose and Material 3.",
              "Improved performance and animation quality."
            ]}
          />

          <TimelineItem
            year="2023"
            title="Firebase & CI/CD"
            subtitle="Added Firebase, Cloud Functions, and CI‑style pipelines."
            points={[
              "Integrated Firebase Auth, Firestore, Cloud Messaging.",
              "Wrote GitHub Actions / Fastlane‑style builds."
            ]}
          />

          <TimelineItem
            year="2024"
            title="Security & AI"
            subtitle="Deep dive into cybersecurity and AI‑powered features."
            points={[
              "Studied Ethical Hacking and secure Android patterns.",
              "Experimented with Claude API and on‑device ML."
            ]}
          />

          <TimelineItem
            year="2026"
            title="Senior SaaS & Portfolio"
            subtitle="Now building a Senior‑level SaaS portfolio and multi‑platform apps."
            points={[
              "Creating advanced React + Cyberpunk portfolio sites.",
              "Refining Android architecture, testing, and performance."
            ]}
          />
        </div>
      </section>

      <section className="section-philosophy">
        <h2 className="section-title">
          How I Build
        </h2>
        <p className="section-text">
          I focus on clean architecture, maintainable code, and practical security. I deliver features end‑to‑end, from UI to networking, caching, testing, and release‑ready builds.
        </p>
        <div className="philosophy-card">
          <h3 className="philosophy-title">“Code with culture. Build with purpose.”</h3>
          <p className="philosophy-desc">
            I believe in building apps that are not only performant and secure, but also respectful to users and the ecosystem.
          </p>
        </div>
      </section>

      <section className="section-contact-bar">
        <div className="contact-bar-inner">
          <h3 className="contact-bar-title">Let’s build together</h3>
          <p className="contact-bar-text">
            Ready to hire or collaborate? I’m open to freelance, contract, or full‑time roles.
          </p>
          <div className="contact-bar-actions">
            <SocialIcon
              href="https://github.com/Dev-moe-kyawaung"
              icon={<span className="icon">github</span>}
              label="GitHub"
            />
            <SocialIcon
              href="https://gravatar.com/moekyawaung13721"
              icon={<span className="icon">gravatar</span>}
              label="Gravatar"
            />
            <SocialIcon
              href="mailto:moekyawaung@technologist.com"
              icon={<span className="icon">email</span>}
              label="Email"
            />
            <SocialIcon
              href="https://t.me/moekyawaung"
              icon={<span className="icon">telegram</span>}
              label="Telegram"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1"
              icon={<span className="icon">linkedin</span>}
              label="LinkedIn"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
