"use client";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Theme"
      className="flex items-center justify-center"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon className="text-3xl" icon={faMoon} />
    </button>
  );
};
