"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from 'react-icons/fa'; 

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="transition-colors duration-500">
      <span onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        {theme === 'light' ? <FaMoon className="text-2xl"/> : <FaSun className="text-2xl" />}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
