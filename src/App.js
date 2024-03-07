import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleDownloadClick = () => {
    const deferredPrompt = window.deferredPrompt;

    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleDownloadClick}>Download PWA</button>
      </header>
    </div>
  );
}

export default App;

