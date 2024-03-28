import React, { useState, useEffect } from 'react';
import './NewsApp.css'; // Importing CSS file

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=07467697935b427a8f3f7a756ada459d')
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <ul className="articles-list">
        {articles.map((article, index) => (
          <li key={index} className="article">
            <div>
              <h2><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h2>
              <p className='des'>{article.description}</p>
              <div className="article-details">
                <span className="source-app">{article.source.name}</span>
                <span className="source">{article.author}</span>
                <span className="published-date">{new Date(article.publishedAt).toLocaleString()}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsApp;
