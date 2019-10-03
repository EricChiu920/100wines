import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<App />, root);
});
