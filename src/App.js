import React from 'react';
import NewsApp from './components/NewsApp/NewsApp';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>React News App</h1>
      <NewsApp />

    </div>
  )
}

export default App;