"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookies from "js-cookie";
import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";
import VisuallyHidden from "../VisuallyHidden";
function DarkLightToggle({ intialTheme, cls }) {
  const [theme, setTheme] = React.useState(intialTheme);
  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    Cookies.set(COLOR_THEME_COOKIE_NAME, nextTheme, {
      expires: 1000,
    });
    const root = document.documentElement;
    root.setAttribute("data-color-theme", nextTheme);
    const COLORS = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
    for (const [key, value] of Object.entries(COLORS)) {
      root.style.setProperty(key, value);
    }
  }

  return (
    <button className={cls} onClick={handleClick}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
