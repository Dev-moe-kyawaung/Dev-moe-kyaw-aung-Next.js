// src/components/layout/DarkModeToggle.jsx
import { useDarkMode } from "../../hooks/useDarkMode";

export default function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "🌕" : "🌙"}
    </button>
  );
}
