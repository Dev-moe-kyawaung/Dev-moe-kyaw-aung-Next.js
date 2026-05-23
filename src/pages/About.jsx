// src/pages/About.jsx
import { useLocale } from "../hooks/useLocale";
import enContent from "../utils/data/content.json";
import myContent from "../utils/data/content-my.json";

function About() {
  const { lang } = useLocale();
  const content = lang === "my" ? myContent.about : enContent.about;

  return (
    <div className="page-about">
      <h1>{content.title}</h1>
      {/* ... */}
    </div>
  );
}
