import { useState, useEffect } from 'react';

// Exportamos el componente para que otros archivos puedan usarlo
export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Aplicamos la clase al body para que afecte a toda la web
    document.body.classList.toggle("dark", isDark);
    
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button 
      className="theme-btn toggle-btn"  
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};