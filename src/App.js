import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Article from './components/Article';
import "./App.css"
const App = () => (
  <ThemeProvider>
    <Article />
  </ThemeProvider>
);

export default App;
