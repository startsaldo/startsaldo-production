import { useEffect, useState } from "react";

export function useSiteTheme() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    let light = document.documentElement.dataset["siteTheme"] === "light";
    try {
      light = window.localStorage.getItem("startsaldo-theme") === "light";
    } catch { /* The switch still works if browser storage is unavailable. */ }
    document.documentElement.dataset["siteTheme"] = light ? "light" : "original";
    setLightMode(light);
  }, []);

  const toggleTheme = () => {
    const next = !lightMode;
    document.documentElement.dataset["siteTheme"] = next ? "light" : "original";
    setLightMode(next);
    try {
      window.localStorage.setItem("startsaldo-theme", next ? "light" : "original");
    } catch { /* Browser storage is optional for this display preference. */ }
  };

  return { lightMode, toggleTheme };
}