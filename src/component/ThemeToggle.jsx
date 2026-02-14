import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
