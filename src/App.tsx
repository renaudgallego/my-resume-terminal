import React, { useState, useEffect } from "react";
import { Terminal } from "./components/Terminal";

type Theme = "retro" | "dark" | "light";

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("retro");

  useEffect(() => {
    // Set theme on HTML element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="app">
      <Terminal onThemeChange={handleThemeChange} />
    </div>
  );
};
