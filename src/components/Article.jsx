import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Article.css';

const Article = () => {
  const { theme, toggleTheme } = useTheme();
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(prevLiked => !prevLiked);
  };

  // Динамически выбираем класс для темы (light-theme или dark-theme)
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div className={`article-page ${themeClass}`}>
      <h1>Заголовок статьи</h1>
      <p>
        Это пример текста статьи. Здесь может быть размещён любой контент.
      </p>
      <button 
        onClick={handleLike} 
        className={`button like-button ${liked ? 'active' : ''}`}
      >
        {liked ? 'Лайк (активен)' : 'Лайк'}
      </button>
      <button onClick={toggleTheme} className="button">
        Переключить тему
      </button>
    </div>
  );
};

export default Article;
