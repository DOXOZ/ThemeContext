import React, { createContext, useContext, useState } from 'react';

// Создаём контекст для темы
const ThemeContext = createContext();

// Провайдер, который хранит состояние темы и функцию её переключения
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // light по умолчанию

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Кастомный хук для удобного доступа к контексту темы
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme должен использоваться внутри ThemeProvider");
  }
  return context;
};
