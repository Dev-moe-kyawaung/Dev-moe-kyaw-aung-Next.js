// src/pages/Home.jsx
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// reusable components (you can move to `components/` later)
const Button = ({ children, href, onClick }) => (
  <a
    href={href ?? undefined}
    onClick={onClick}
    className="btn"
    style={{ textDecoration: "none" }}
  >
    {children}
  </a>
);

const SocialIcon = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-icon" aria-label={label}>
    {icon}
  </a>
);

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

function Home() {
  const navigate = useNavigate();
  const ref = useRef(null);

  // hero text typing animation
  const bigText = "⭐MOE KYAW AUNG⭐";
  const subText = "ANDROID SENIOR DEVELOPER";
  const [typedBig, setTypedBig] = useState("");
  const [typedSub, setTypedSub] = useState("");

  const phone = "+95 9 889 000 889";

  useEffect(() => {
    const typeBig = async () => {
      for (let i = 0; i <= bigText.length; i++) {
        setTypedBig(bigText.slice(0, i));
        await new Promise((r) => setTimeout(r, 60));
      }
    };
    const typeSub = async () => {
      await new Promise((r) => setTimeout(r, 800));
      for (let i = 0; i <= subText.length; i++) {
        setTypedSub(subText.slice(0, i));
        await new Promise((r) => setTimeout(r, 50));
      }
    };
    typeBig();
    typeSub();
  }, []);

  return (
    <div className="page-home" ref={ref}>
      {/* Hero section */}
      <section className="hero">
        {/* Parallax background layers (you can replace with canvas/particles later) */}
        <div className="hero-bg-layers">
          <div className="hero-bg-1" />
          <div className="hero-bg-2" />
          <div className="hero-bg-3" />
        </div>

        <div className="hero-content">
          <div className="hero-tagline">
            <h1 className="hero-big">{typedBig}</h1>
            <h2 className="hero-sub">{typedSub}</h2>
          </div>

          <p className="hero-desc">
            Android Developer with nearly 12 years of hands‑on experience building secure, scalable,
            and user‑friendly mobile applications. Strong in Kotlin and modern Jetpack development
            (Compose, ViewModel, Room), Firebase integration, and REST API consumption.
          </p>

          {/* Stats (animated counters) */}
          <div className="hero-stats">
            <Counter value="10+" label="Total Years" />
            <Counter value="3K+" label="Apps" />
            <Counter value="122" label="Repos" />
            <Counter value="100%" label="Satisfaction" symbol="%" />
          </div>

          {/* CTA buttons */}
          <div className="hero-cta">
            <Button
              onClick={() => navigate("/portfolio")}
              className="btn-primary"
            >
              View My Apps
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              href="mailto:moekyawaung@programmer.net"
              className="btn-outline"
            >
              Contact Me
            </Button>
          </div>

          {/* Social icons */}
          <div className="hero-social">
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
              href={`mailto:moekyawaung@technologist.com`}
              icon={<span className="icon">email</span>}
              label="Email"
            />
            <SocialIcon
              href={`tel:${phone.replace(/s/g, "")}`}
              icon={<span className="icon">phone</span>}
              label="Phone"
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
            <SocialIcon
              href="https://play.google.com/store/apps?hl=en"
              icon={<span className="icon">playstore</span>}
              label="Play Store"
            />
            <SocialIcon
              href="https://instagram.com/moekyawaung"
              icon={<span className="icon">instagram</span>}
              label="Instagram"
            />
          </div>
        </div>
      </section>

      {/* Simple "About" teaser to show your advanced About section concept */}
      <section className="section-about">
        <h2 className="section-title">Senior Android Developer</h2>
        <p className="section-text">
          Expert in Kotlin, Jetpack Compose, Clean Architecture, Firebase, and CI/CD pipelines.
          Building secure, scalable, and delightful user experiences from UI to release.
        </p>
        <div className="tech-rings">
          <ProgressRing
            skill="Kotlin"
            percent={95}
            color="var(--primary)"
          />
          <ProgressRing
            skill="Compose"
            percent={90}
            color="var(--accent)"
          />
          <ProgressRing
            skill="Firebase"
            percent={85}
            color="var(--primary)"
          />
          <ProgressRing
            skill="CI/CD"
            percent={80}
            color="var(--accent)"
          />
        </div>
      </section>
    </div>
  );
}

// You can move this to `components/ui/ProgressRing.jsx`
const ProgressRing = ({ skill, percent, color }) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - percent / 100);

  return (
    <div className="progress-ring" style={{ "--color": color }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--color)"
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
          style={{
            transition: "stroke-dashoffset 1s ease",
          }}
        />
      </svg>
      <span className="ring-label">{skill}</span>
      <span className="ring-percent">{percent}%</span>
    </div>
  );
};

export default Home;
