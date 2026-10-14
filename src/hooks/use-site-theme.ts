import { useEffect, useState } from "react";

const STORAGE_KEY = "startsaldo-theme";

// "light" / "original" are explicit user choices; no stored value
// (or "system") means the site follows the operating system setting.
function systemPrefersLight(): boolean {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches === false &&
    document.documentElement.dataset["siteTheme"] !== undefined;
}

function readSystemLight(): boolean {
  return !window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useSiteTheme() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch { /* The switch still works if browser storage is unavailable. */ }

    const followSystem = stored !== "light" && stored !== "original";
    const light = followSystem ? readSystemLight() : stored === "light";

    document.documentElement.dataset["siteTheme"] = light ? "light" : "original";
    setLightMode(light);

    if (!followSystem) return;

    // While no explicit choice is stored, follow live OS theme changes.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (stored) return;
      const nextLight = !media.matches;
      document.documentElement.dataset["siteTheme"] = nextLight ? "light" : "original";
      setLightMode(nextLight);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    const next = !lightMode;
    document.documentElement.dataset["siteTheme"] = next ? "light" : "original";
    setLightMode(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "light" : "original");
    } catch { /* Browser storage is optional for this display preference. */ }
  };

  return { lightMode, toggleTheme };
}
