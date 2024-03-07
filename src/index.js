import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
window.open('https://yandex.ru', '_blank');

const handleInitialRedirect = () => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    window.location.href = 'https://www.google.com';
  }
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

// Call the function to handle the initial redirect
handleInitialRedirect();
reportWebVitals();
