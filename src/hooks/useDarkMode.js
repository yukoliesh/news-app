import React from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState('light');
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};