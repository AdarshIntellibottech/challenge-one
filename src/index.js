import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>List of movies from netflix</h1>
  <p>Hi from index.js</p>
  <ol>
    <li>
      Movie one
    </li>
    <li>
      Movie two
    </li>
    <li>
      Movie three
    </li>
    <li>
      Movie four
    </li>
    <li>
      Movie five
    </li>
  </ol>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
