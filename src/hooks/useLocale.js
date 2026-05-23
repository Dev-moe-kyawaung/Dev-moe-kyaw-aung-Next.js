// src/hooks/useLocale.js
import { useState, useEffect } from "react";

export const useLocale = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored && ["en", "my"].includes(stored)) setLang(stored);
  }, []);

  const toggle = () => {
    const next = lang === "en" ? "my" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return { lang, toggle };
};
